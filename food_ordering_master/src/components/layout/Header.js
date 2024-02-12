'use client'
import { CartContext } from '@/components/AppContext'
import { Search } from '@/components/icons/Search'
import Bars2 from '@/components/icons/Bars2'
import ShoppingCart from '@/components/icons/ShoppingCart'
import { signOut, useSession } from 'next-auth/react'
import { getServerSession } from "next-auth/next"
import Image from 'next/image'
import Link from 'next/link'
import { useContext, useState } from 'react'
import '../../../public/css/Header.css'

function AuthLinks({ status, userName }) {

	if (status === 'authenticated') {
		return (
			<>
				<Link href={'/'} className="whitespace-nowrap">
					Hello, {userName}
				</Link>
				<button
					onClick={() => signOut()}
					className="bg-primary rounded-full text-white px-8 py-2"
				>
					Logout
				</button>
			</>
		)
	}else {
		return (
			<>
				<Link href={'/'} className=" ">
					Search
				</Link>
				<Link href={'/login'}>Login</Link>
			</>
		)
	}
}

export default function Header() {
	const { data: session ,status } = useSession()
	console.log(session)
	
	const userData = session?.user
	let userName = userData?.name || userData?.email
	const { cartProducts } = useContext(CartContext)
	const [mobileNavOpen, setMobileNavOpen] = useState(false)
	if (userName && userName.includes(' ')) {
		userName = userName.split(' ')[0]
	}
	return (
		<header>
			<div className="flex items-center md:hidden justify-between">
				<Link
					className="text-primary font-semibold text-2xl"
					href={'/'}
				>
					<Image
						src={'/bitebrust.png'}
						width={65}
						height={66}
						alt={'logo'}
						className="logo"
					/>
				</Link>
				<div className="flex gap-8 highlight_menu">
					<Link href={'/cart'} className="relative">
						<ShoppingCart />
						{cartProducts?.length > 0 && (
							<span className="absolute -top-2 -right-4 bg-primary text-white text-xs py-1 px-1 rounded-full leading-3">
								{cartProducts.length}
							</span>
						)}
					</Link>
					<button
						className="p-1 border"
						onClick={() => setMobileNavOpen((prev) => !prev)}
					>
						<Bars2 />
					</button>
				</div>
			</div>
			{mobileNavOpen && (
				<div
					onClick={() => setMobileNavOpen(false)}
					className="md:hidden p-4 bg-gray-200 rounded-lg mt-2 flex flex-col gap-2 text-center"
				>
					<Link href={'/'}>Home</Link>
					<Link href={'/menu'}>Menu</Link>
					<Link href={'/about'}>About</Link>
					<Link href={'/#contact'}>Contact</Link>
					<AuthLinks status={status} userName={userName} />
				</div>
			)}
			<div className="hidden md:flex items-center justify-between">
				<nav className="flex items-center gap-8 text-gray-500 font-semibold">
					<Link href={'/'} className="pl-2">
						<Image
							src={'/bitebrust.png'}
							width={50}
							height={50}
							alt={'logo'}
							className=""
						/>
					</Link>
					<Link href={'/'}>Home</Link>
					<Link href={'/menu'}>Menu</Link>
					<Link href={'/about'}>About</Link>
					<Link href={'/#contact'}>Contact</Link>
				</nav>
				<nav className="flex items-center gap-4 text-gray-500 font-semibold highlight_menu">
					<AuthLinks status={status} userName={userName} />
					<Link href={'/cart'} className="relative">
						<ShoppingCart />
						{cartProducts?.length > 0 && (
							<span className="absolute -top-2 -right-4 bg-primary text-white text-xs py-1 px-1 rounded-full leading-3">
								{cartProducts.length}
							</span>
						)}
					</Link>
				</nav>
			</div>
		</header>
	)
}
