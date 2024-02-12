'use client'
import { signIn } from 'next-auth/react'
import Image from 'next/image'
import { useState } from 'react'
import '../../../public/css/Login.css'
import Link from 'next/link'
import { constants } from 'buffer'

export default function LoginPage() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [loginInProgress, setLoginInProgress] = useState(false)

	async function handleFormSubmit(ev) {
		ev.preventDefault()
		setLoginInProgress(true)

	const data=	await signIn('credentials', { email, password })
console.log(data,"dasdasd")
		setLoginInProgress(false)
		alert("Login Successfull")
	}
	return (
		<section className="mt-8">
			<h1 className="text-center  text-4xl mb-4 heading ">LogIn</h1>
			<form className="max-w-xs mx-auto" onSubmit={handleFormSubmit}>
				<input
					type="email"
					name="email"
					placeholder="Email"
					value={email}
					disabled={loginInProgress}
					onChange={(ev) => setEmail(ev.target.value)}
				/>
				<input
					type="password"
					name="password"
					placeholder="Password"
					value={password}
					disabled={loginInProgress}
					onChange={(ev) => setPassword(ev.target.value)}
				/>
				<button disabled={loginInProgress} type="submit">
					Login
				</button>
				<div className="my-4 text-center text-gray-500">
					If uh are new User
				</div>
				<button className="">
					<Link
						className="flex gap-4 justify-center text-white"
						href={'/register'}
					>
						Register &raquo;
					</Link>
				</button>
			</form>
		</section>
	)
}
