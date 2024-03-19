import React from 'react'
import '../css/productLayout.css'

export default function ProductLayout({ product }) {
	if (!product) {
		return null
	}

	const { image, name, description, basePrice } = product

	return (
		<div className="product-item">
			<h3>{name}</h3>
			{image && (
				<div className="image-container">
					<img src={image} alt={name} className="img" />
				</div>
			)}
			<div className="info"> 
				{description && <p>{description}</p>}
				<div className="price-and-button">
					<button className='view-button'>View Product</button>
					{basePrice && <p>${basePrice.toFixed(2)}</p>}
				</div>
			</div>
		</div>
	)
}
