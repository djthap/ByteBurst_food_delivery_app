'use client'
import { signIn } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import '../../../public/css/Login.css'

export default function RegisterPage() {
	const [email, setEmail] = useState('')
	const [name, setname] = useState('')
	const [password, setPassword] = useState('')
	const [ConfirmPassword, setConfirmPassword] = useState('')
	const [creatingUser, setCreatingUser] = useState(false)
	const [userCreated, setUserCreated] = useState(false)
	const [error, setError] = useState(false)
	async function handleFormSubmit(ev) {
		ev.preventDefault()
		setCreatingUser(true)
		if (password === ConfirmPassword) {
			setError(false)
			setUserCreated(false)
			const response = await fetch('/api/register', {
				method: 'POST',
				body: JSON.stringify({ email, password ,name}),
				headers: { 'Content-Type': 'application/json' },
			})
			if (response.ok) {
				setUserCreated(true)
			} else {
				setError(true)
			}
		} else {
			alert('Password Not Matched')
		}
		setCreatingUser(false)
	}
	return (
		<section className="mt-8">
			<h1 className="text-center heading text-4xl mb-4">Register</h1>
			{userCreated && (
				<div className="my-4 text-center">
					User created.
					<br />
					Now you can{' '}
					<Link className="underline" href={'/login'}>
						Login &raquo;
					</Link>
				</div>
			)}
			{error && (
				<div className="my-4 text-center">
					An error has occurred.
					<br />
					Please try again later
				</div>
			)}
			<form
				className="block max-w-xs mx-auto"
				onSubmit={handleFormSubmit}
			>
				<input
					type="name"
					placeholder="Name"
					className="cc"
					value={name}
					disabled={creatingUser}
					onChange={(ev) => setname(ev.target.value)}
					required
				/>

				<input
					type="email"
					placeholder="Email"
					value={email}
					disabled={creatingUser}
					onChange={(ev) => setEmail(ev.target.value)}
				/>
				<input
					type="password"
					placeholder="Password"
					value={password}
					disabled={creatingUser}
					onChange={(ev) => setPassword(ev.target.value)}
				/>
				<input
					type="password"
					placeholder="ConfirmPassword"
					className="cc"
					value={ConfirmPassword}
					disabled={creatingUser}
					onChange={(ev) => setConfirmPassword(ev.target.value)}
					required
				/>
				<button type="submit" disabled={creatingUser}>
					Register
				</button>

				<div className="text-center my-4 text-gray-500 border-t pt-4">
					Existing account?{' '}
					<Link className="underline" href={'/login'}>
						Login here &raquo;
					</Link>
				</div>
			</form>
		</section>
	)
}
