import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../css/admin_login.css'

function AdminLoginPage({ loading, setloading }) {
	const fetch = require('isomorphic-fetch')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [loginInProgress, setLoginInProgress] = useState(false)
	const [error, setError] = useState('')

	async function handleFormSubmit(ev) {
		ev.preventDefault()
		setLoginInProgress(true)
		try {
			const response = await fetch('/api/auth/admin/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ email, password }),
			})

			const data = await response.json()

			console.log(data)
			if (data.user != undefined) {
				sessionStorage.setItem('token', data.token)
				sessionStorage.setItem('user', JSON.stringify(data.user))
				setloading(true)
				alert('Login successful')
			} else {
				alert('Login Credentials Wrong')
			}
		} catch (error) {
			console.error('Login error:', error)
			setError('Login failed')
		}
		setLoginInProgress(false)
	}

	return (
		<section className="mt-8">
			<h1 className="text-center text-4xl mb-4 admin-heading">
				Admin LOGIN
			</h1>
			<form className="admin-form-group" onSubmit={handleFormSubmit}>
				<input
					type="email"
					name="email"
					placeholder="Email"
					className="f mb-20 admin-input"
					value={email}
					disabled={loginInProgress}
					onChange={(ev) => setEmail(ev.target.value)}
				/>
				<input
					type="password"
					name="password"
					placeholder="Password"
					className="f mb-20 admin-input"
					value={password}
					disabled={loginInProgress}
					onChange={(ev) => setPassword(ev.target.value)}
				/>
				<button
					disabled={loginInProgress}
					className="btn highlight-menu f rbutton"
					type="submit"
				>
					Login
				</button>
				{error && (
					<div className="text-red-500 text-sm mt-2">{error}</div>
				)}
			</form>
		</section>
	)
}

export default AdminLoginPage
