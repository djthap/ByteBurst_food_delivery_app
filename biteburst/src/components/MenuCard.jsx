import React from 'react'
import '../css/MenuItemCard.css'
import { Link } from 'react-router-dom'

function MenuCard({ menuItem }) {
	return (
		<div className="menu-item-card">
			<div className="bookmark">
				{menuItem?.category?.category_name || ''}
			</div>

			<img
				src={menuItem?.image || ''}
				alt={menuItem?.name || ''}
				style={{ width: '200px', height: '200px' }}
			/>
			<h3>{menuItem?.name || ''}</h3>
			<p>{menuItem?.description || ''}</p>
			<p>Base Price: ${menuItem?.basePrice ?? ''}</p>

			<Link className="ll">Add To Menu</Link>
		</div>
	)
}

export default MenuCard
