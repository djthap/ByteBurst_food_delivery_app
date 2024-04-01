import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import '../css/CheckoutPage.css'

function CheckoutPage() {
	const [shippingInfo, setShippingInfo] = useState({
		phoneNumber: '',
		address: '',
		cardHolderName: '',
		cardNumber: '',
		cvv: '',
		expiryDate: '',
	})
	const [cartItems, setCartItems] = useState([])
	const [paymentMethod, setPaymentMethod] = useState('card') // Default to card payment

	useEffect(() => {
		const storedCart = JSON.parse(sessionStorage.getItem('cart')) || []
		setCartItems(storedCart)
	}, [])

	const handleRemoveFromCart = (index) => {
		const updatedCart = [...cartItems]
		updatedCart.splice(index, 1)
		setCartItems(updatedCart)
		sessionStorage.setItem('cart', JSON.stringify(updatedCart))
	}

	const handleQuantityChange = (index, quantity) => {
		const updatedCart = [...cartItems]
		updatedCart[index].quantity = quantity
		updatedCart[index].totalPrice =
			updatedCart[index].product.basePrice * quantity
		setCartItems(updatedCart)
		sessionStorage.setItem('cart', JSON.stringify(updatedCart))
	}

	const totalPrice = cartItems.reduce((acc, item) => acc + item.totalPrice, 0)

	const location = useLocation()

	const handleChange = (e) => {
		const { name, value } = e.target
        if (name === 'phoneNumber') {
           
            if (!/^\d{10}$/.test(value)) {
               
                toast.error('Please enter a valid phone number (10 digits)');
                return;
            }
        }
    
        if (name === 'address') {
            
            if (value.trim().length === 0) {
              
                toast.error('Please enter your address');
                return;
            }
        }
		setShippingInfo({ ...shippingInfo, [name]: value })
	}

	const handlePaymentMethodChange = (e) => {
		setPaymentMethod(e.target.value)
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		console.log(cartItems.map((item) => item.product._id))
		try {
			const response = await fetch('/api/orderRoutes/', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					phoneNumber: shippingInfo.phoneNumber,
					address: shippingInfo.address,
					cardHolderName: shippingInfo.cardHolderName,
					cardNumber: shippingInfo.cardNumber,
					cvv: shippingInfo.cvv,
					expiryDate: shippingInfo.expiryDate,
					items: cartItems.map((item) => item.product._id),
					totalPrice: totalPrice,
				}),
			})

			if (!response.ok) {
				throw new Error('Failed to place order')
			}
			console.log('order placed successfully')
			setCartItems([])
			sessionStorage.removeItem('cart')
			toast.success('Order placed successfully')
		} catch (error) {
			console.error('Error placing order:', error)
			toast.error('Failed to place order')
		}
	}
	return (
		<div>
			<div className="checkout-container">
				<ToastContainer />
				<h1 className="checkout-heading">Checkout</h1>
				<div className="checkout-content">
					<div className="checkout-cart">
						<h2 className="checkout-sub-heading">Your Cart</h2>
						<table>
							<thead>
								<tr>
									<th>Product</th>
									<th>Quantity</th>
									<th>Action</th>
									<th>Total Price</th>
								</tr>
							</thead>
							<tbody>
								{cartItems.map((item, index) => (
									<tr key={index}>
										<td>
											<div className="cart-item-info">
												<img
													src={item.product.image}
													alt={item.product.name}
													className="cart-item-image"
												/>
												<div className="cart-item-details">
													<h3>{item.product.name}</h3>
													<p>
														Size:{' '}
														{item.selectedSize.name}
													</p>
												</div>
											</div>
										</td>
										<td>
											<div className="quantity-control">
												<button
													onClick={() =>
														handleQuantityChange(
															index,
															item.quantity - 1
														)
													}
													className="mr"
												>
													-
												</button>
												<span>{item.quantity}</span>
												<button
													onClick={() =>
														handleQuantityChange(
															index,
															item.quantity + 1
														)
													}
													className="mr"
												>
													+
												</button>
											</div>
										</td>
										<td>
											<button
												className="cart-remove-button"
												onClick={() =>
													handleRemoveFromCart(index)
												}
											>
												Remove
											</button>
										</td>
										<td>${item.totalPrice.toFixed(2)}</td>
									</tr>
								))}
								<tr>
									<td colSpan="3" className="text-right">
										Total Price :{' '}
									</td>
									<td>${totalPrice.toFixed(2)}</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div className="checkout-shipping">
						<form onSubmit={handleSubmit}>
							<h2 className="checkout-sub-heading">Shipping Address</h2>
							<input
								type="text"
								name="phoneNumber"
								placeholder="Phone Number"
								value={shippingInfo.phoneNumber}
								onChange={handleChange}
								required
							/>
							<input
								type="text"
								name="address"
								placeholder="Address"
								value={shippingInfo.address}
								onChange={handleChange}
								required
							/>
							<h2 className="checkout-sub-heading">Card Details</h2>
							<input
								type="text"
								name="cardHolderName"
								placeholder="Card Holder Name"
								value={shippingInfo.cardHolderName}
								onChange={handleChange}
								required
							/>
							<input
								type="text"
								name="cardNumber"
								placeholder="Card Number"
								value={shippingInfo.cardNumber}
								onChange={handleChange}
								required
							/>
							<input
								type="text"
								name="cvv"
								placeholder="CVV"
								value={shippingInfo.cvv}
								onChange={handleChange}
								required
							/>
							<input
								type="text"
								name="expiryDate"
								placeholder="Expiry Date"
								value={shippingInfo.expiryDate}
								onChange={handleChange}
								required
							/>

							<div className="dsd">
								<input
									type="radio"
									id="cod"
									name="paymentMethod"
									value="cod"
									checked={paymentMethod === 'cod'}
									onChange={handlePaymentMethodChange}
									required
								/>
								<label htmlFor="cod">Cash on Delivery</label>
							</div>
							<button
								type="submit"
								className="place-order-button"
							>
								Place Order
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CheckoutPage
