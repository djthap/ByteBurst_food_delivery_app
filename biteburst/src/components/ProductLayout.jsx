import React from 'react'
import '../css/productLayout.css'
import { Link } from 'react-router-dom'

export default function ProductLayout({ product }) {
	if (!product) {
		return null
	}

	const { image, name, description, basePrice,_id } = product

	return (
		<div className="product-item">
			<div className='product-name-container'>
				<h3>{name}</h3>
			</div>
			
			{image && (
				<div className="image-container">
					<img src={image} alt={name} className="img" />
				</div>
			)}
			<div className="info"> 
				<div className='description-container'>
					{description && <p>{description}</p>}
				</div>
				<div className="price-and-button">
					<Link className='view-button' to={`/viewitem/${_id}`}>View Product</Link>
					{basePrice && <p>${basePrice.toFixed(2)}</p>}
				</div>
			</div>
		</div>
	)
}
