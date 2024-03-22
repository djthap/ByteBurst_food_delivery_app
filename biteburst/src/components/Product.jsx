import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../css/Product.css';

function Product() {
    const [product, setProduct] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedToppings, setSelectedToppings] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [showIngredients, setShowIngredients] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        fetch(`/api/menuItem/${id}`)
            .then(response => response.json())
            .then(data => setProduct(data))
            .catch(error => console.error('Error fetching product:', error));
    }, [id]);

    useEffect(() => {
        if (product && product.sizes && product.sizes.length > 0) {
            setSelectedSize(product.sizes[0]);
        }
    }, [product]);

    useEffect(() => {
        let totalPrice = 0;
        if (selectedSize) {
            totalPrice += selectedSize.price;
        }
        selectedToppings.forEach(topping => {
            totalPrice += topping.price;
        });
        setTotalPrice(totalPrice);
    }, [selectedSize, selectedToppings]);

    const handleSizeToggle = (size) => {
        setSelectedSize(size);
    };

    const handleToppingToggle = (topping) => {
        const isSelected = selectedToppings.some(t => t.name === topping.name);
        if (isSelected) {
            setSelectedToppings(selectedToppings.filter(t => t.name !== topping.name));
        } else {
            setSelectedToppings([...selectedToppings, topping]);
        }
    };

    const toggleIngredients = () => {
        setShowIngredients(!showIngredients);
    };

    const handleAddToCart = () => {
        if (!selectedSize) {
            alert('Please select a size.');
            return;
        }
        const cartItem = {
            product: product,
            selectedSize: selectedSize,
            selectedToppings: selectedToppings,
            totalPrice: totalPrice
        };
        const existingCart = JSON.parse(sessionStorage.getItem('cart')) || [];
        existingCart.push(cartItem);
        sessionStorage.setItem('cart', JSON.stringify(existingCart));
        alert(`Added ${product.name} to cart. Total price: $${totalPrice.toFixed(2)}`);
        window.location.href = '/cart'; // Redirect to the cart page
    };

    return (
        <div className="product-container">
            {product ? (
                <div className="product-content">
                    <div className="product-image-container">
                        <img src={product.image} alt={product.name} className="product-image" />
                    </div>
                    <div className="product-details">
                        <h2 className="product-name">{product.name}</h2>
                        <p className="product-description">{product.description}</p>
                        <div className="sizes-container">
                            <p className="sizes-title">Sizes:</p>
                            <div className="size-options">
                                {product.sizes.map(size => (
                                    <label key={size._id} className={`size-option ${selectedSize === size ? 'selected' : ''}`}>
                                        <input
                                            type="radio"
                                            name="size"
                                            checked={selectedSize === size}
                                            onChange={() => handleSizeToggle(size)}
                                        />
                                        {size.name} - ${size.price}
                                    </label>
                                ))}
                            </div>
                        </div>
                        <div className="toggle-ingredients" onClick={toggleIngredients}>
                            <span className="toggle-text">{showIngredients ? 'Hide Ingredients' : 'Show Ingredients'}</span>
                            <span className={`arrow ${showIngredients ? 'up' : 'down'}`}></span>
                        </div>
                        {showIngredients && (
                            <div className="ingredients-container">
                                <p className="ingredients-title">Ingredients:</p>
                                <ul className="ingredient-list">
                                    {product.extraIngredientPrices.map(ingredient => (
                                        <li key={ingredient._id} className="ingredient-item">
                                            {ingredient.name} - ${ingredient.price}
                                            <input
                                                type="checkbox"
                                                checked={selectedToppings.some(t => t.name === ingredient.name)}
                                                onChange={() => handleToppingToggle(ingredient)}
                                            />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        <div className="product-actions">
                            <button onClick={handleAddToCart}>Add to Cart</button>
                        </div>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default Product;
