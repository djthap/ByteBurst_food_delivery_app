import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import MenuCard from './MenuCard'
import '../css/AllMenuItems.css'
import '../css/MenuList.css'

function MenuList() {
	const [menuItems, setMenuItems] = useState([])
	const [categories, setCategories] = useState([])

	useEffect(() => {
		fetchMenuItems()
		fetchCategories()
	}, [])

	const fetchMenuItems = async () => {
		try {
			const response = await fetch('/api/menuItem')
			if (!response.ok) {
				throw new Error('Failed to fetch menu items')
			}
			const data = await response.json()
			setMenuItems(data)
		} catch (error) {
			console.error('Error fetching menu items:', error)
		}
	}

	const fetchCategories = async () => {
		try {
			const response = await fetch('/api/categories')
			if (!response.ok) {
				throw new Error('Failed to fetch categories')
			}
			const data = await response.json()
			setCategories(data)
		} catch (error) {
			console.error('Error fetching categories:', error)
		}
	}

	return (
		<div>
			<h2>Menu</h2>
			<div className="all-menu-items22">
				<div className="category-list">
					<h2>Categories</h2>
					<ul>
						{categories.map((category) => (
							<li key={category._id}>{category.category_name}</li>
						))}
					</ul>
				</div>
				<div className="menu-item-list22 row gx-0">
					{menuItems.map((menuItem) => (
						<div className="col-md-3">
							<MenuCard key={menuItem._id} menuItem={menuItem} />
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default MenuList
