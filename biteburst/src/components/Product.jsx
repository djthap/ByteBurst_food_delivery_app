
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../css/Product.css';

function Product() {
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [showIngredients, setShowIngredients] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    fetch(`/api/menuItem/${id}`)
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch(error => console.error('Error fetching product:', error));
  }, [id]);

  const handleSizeToggle = (size) => {
    setSelectedSize(size);
  };

  const toggleIngredients = () => {
    setShowIngredients(!showIngredients);
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
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Product;
