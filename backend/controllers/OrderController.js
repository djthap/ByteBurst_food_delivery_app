const Order = require('../models/Order.js')
const fs = require('fs')
const jwt = require('jsonwebtoken')
const stripe = require('stripe')("sk_test_51P0TTMFCUOELksMndyC2FFYVYgXZZ9FtmmxPOT8ZufGkLUaOaC0cW4QWRD9edfy4ajupduwJ2sMD2Y8VSTH6nX4A00MM31KWKH")

exports.createOrder = async (req, res) => {
	try {
		const {
			phoneNumber,
			address,
			cardHolderName,
			cardNumber,
			cvv,
			expiryDate,
			items,
			totalPrice,
		} = req.body

		if (!Array.isArray(items) || items.length === 0) {
			return res
				.status(400)
				.json({
					message: 'Items array is empty or not properly formatted',
				})
		}
		const token = req.header('Authorization')
		const decoded = jwt.verify(token, 'this-is-our-web-app')
		const createdBy = decoded.user.id
		const order = new Order({
			phoneNumber,
			address,
			cardHolderName,
			cardNumber,
			cvv,
			expiryDate,
			totalPrice,
			items,
			createdBy,
			status: 'pending',
		})

		await order.save()
		res.status(201).json(order)
	} catch (error) {
		console.error(error)
		res.status(500).json({ message: 'Server Error' })
	}
}

exports.updateOrderStatus = async (req, res) => {
	try {
		const { id } = req.params
		const { status } = req.body
		const token = req.header('Authorization')
		const decoded = jwt.verify(token, 'this-is-our-web-app')
		const updatedBy = decoded.user.id
		const order = await Order.findByIdAndUpdate(
			id,
			{ status, updatedBy },
			{ new: true }
		)
		res.json(order)
	} catch (error) {
		console.error(error)
		res.status(500).json({ message: 'Server Error' })
	}
}

exports.getAllOrders = async (req, res) => {
	try {
		const orders = await Order.find()
			.populate('items')
			.populate('createdBy updatedBy', 'name')
		res.json(orders)
	} catch (error) {
		console.error(error)
		res.status(500).json({ message: 'Server Error' })
	}
}
exports.getOrdersByUser = async (req, res) => {
    try {
        const userId = req.params.userId;
        const orders = await Order.find({ createdBy: userId })
            .populate('items')
            .populate('createdBy updatedBy', 'name');
        res.json(orders);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};
exports.StripePayment =async(req,res)=>{
	try {
		const {
			products
		} = req.body
		
		const lineItems = products.map((product)=>{
			return {
				price_data: {
					currency: 'usd',
					product_data: {
						name: product.product.name,
						images: [product.product.image]

					},
					unit_amount: Math.round(product.product.basePrice * 100),
				},
				quantity: product.quantity,
			}
		})
const session = await stripe.checkout.sessions.create({
	payment_method_types: ['card'],
	line_items: lineItems,
	mode: 'payment',
	success_url: `http://localhost:3000/orders/success`,
	cancel_url: `http://localhost:3000/orders/cancel`,
})
res.json({id:session.id})
	}
	catch(error){
		console.error(error)
		res.status(500).json({ message: 'Server Error' })
	}
}
exports.deleteOrder = async (req, res) => {
	try {
		const { id } = req.params
		await Order.findByIdAndDelete(id)
		res.json({ message: 'Order deleted successfully' })
	} catch (error) {
		console.error(error)
		res.status(500).json({ message: 'Server Error' })
	}
}
