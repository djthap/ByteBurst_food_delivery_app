import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../css/ProductPopup.css';

function ProductPopup({ productId, onClose }) {
    const [product, setProduct] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedToppings, setSelectedToppings] = useState([]);

    useEffect(() => {
        fetch(`/api/menuItem/${productId}`)
            .then((response) => response.json())
            .then((data) => setProduct(data))
            .catch((error) => console.error('Error fetching product:', error));
    }, [productId]);

    const handleAddToCart = () => {
        if (!selectedSize) {
            toast.error('Please select a size.');
            return;
        }

        let totalPrice = selectedSize.price;
        selectedToppings.forEach((topping) => {
            totalPrice += topping.price;
        });

        toast.success(
            `Added ${product.name} to cart. Total price: $${totalPrice.toFixed(
                2
            )}`
        );
    };

    const handleSizeSelection = (size) => {
        setSelectedSize(size);
    };

    const handleToppingToggle = (topping) => {
        const isSelected = selectedToppings.some((t) => t.name === topping.name);
        if (isSelected) {
            setSelectedToppings(
                selectedToppings.filter((t) => t.name !== topping.name)
            );
        } else {
            setSelectedToppings([...selectedToppings, topping]);
        }
    };

    return (
        <div className="product-popup-container">
            {product && (
                <div className="product-popup-content">
                    <div className="product-popup-image-container">
                        <img
                            src={product.image}
                            alt={product.name}
                            height={220}
                            width={220}
                            className="product-popup-image"
                        />
                    </div>
                    <div className="product-details">
                        <h2 className="product-popup-name">{product.name}</h2>
                        <p className="product-popup-price">
                            ${product.basePrice.toFixed(2)}
                        </p>
                        <p className="product-popup-description">
                            {product.description}
                        </p>
                        <hr></hr>
                        <p className="product-popup-category">
                            Category: {product.category?.category_name}
                        </p>

                        <div className="product-popup-sizes">
                            {product.sizes && product.sizes.length > 0 && (
                                <div>
                                    <h5>Select Size:</h5>
                                    <ul className="product-popup-size-list">
                                        {product.sizes.map((size, index) => (
                                            <li
                                                key={index}
                                                className="product-popup-size-item"
                                            >
                                                <label htmlFor={`size-${index}`} className="product-popup-size-label">
                                                    {size.name}

                                                    <input
                                                        type="radio"
                                                        id={`size-${index}`}
                                                        name="size"
                                                        value={size.name}
                                                        onChange={() => handleSizeSelection(size)}
                                                        checked={selectedSize && selectedSize.name === size.name}
                                                    />

                                                </label>
                                                <span className="size-price">+${size.price.toFixed(2)}</span>
                                                <hr />
                                            </li>

                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                        <div className="product-popup-toppings">
                            {product.extraIngredientPrices &&
                                product.extraIngredientPrices.length > 0 && (
                                    <div>
                                        <h5>Select Extra Ingredients:</h5>
                                        <ul className="product-popup-toppings-list">
                                            {product.extraIngredientPrices.map(
                                                (ingredient, index) => (
                                                    <li
                                                        key={index}
                                                        className={
                                                            selectedToppings.some(
                                                                (t) =>
                                                                    t.name ===
                                                                    ingredient.name
                                                            )
                                                                ? 'selected'
                                                                : ''
                                                        }
                                                    >
                                                        <label htmlFor={`ingredient-${index}`} className="product-popup-size-label">
                                                            {ingredient.name}

                                                            <input
                                                                type="checkbox"
                                                                id={`ingredient-${index}`}
                                                                value={ingredient.name}
                                                                onChange={() =>
                                                                    handleToppingToggle(
                                                                        ingredient
                                                                    )
                                                                }
                                                                checked={
                                                                    selectedToppings.some(
                                                                        (t) =>
                                                                            t.name ===
                                                                            ingredient.name
                                                                    )
                                                                }
                                                            />

                                                        </label>
                                                        <span className="size-price">+${ingredient.price.toFixed(2)}</span>
                                                        <hr />
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                )}
                        </div>

                        <div className="product-actions">
                            <button
                                className="custom-button"
                                onClick={handleAddToCart}
                            >
                                Add to Cart
                            </button>
                            <button className="custom-button" onClick={onClose}>
                                X
                            </button>
                        </div>
                    </div>
                </div>
            )}
            <ToastContainer />
        </div>
    );
}

export default ProductPopup;
