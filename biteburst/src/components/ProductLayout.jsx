import React from 'react'
import '../css/productLayout.css'

export default function ProductLayout() {
    return (
        <div className='product-item'>
            <img
                src={'/pasta.png'}
                alt={'pasta'}
                className="img"
            />
            <div className="info">
                <h3>Penne Pasta</h3>
                <p>Penne Pasta topped with rich homemade tomato and cream sauce.</p>
                <div class="price-and-button">
                    <button>Add to cart</button>
                    <p>$13.99</p>
                </div>
            </div>
        </div>
    )
}
