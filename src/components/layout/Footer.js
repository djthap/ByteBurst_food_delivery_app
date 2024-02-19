'use client'
import Image from 'next/image'
import '../../../public/css/Footer.css'

export default function Footer() {
	return (
		<>
		<footer className="border-t p-8 text-left text-gray-500 mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
			<div>
				<Image
					src={'/bitebrust.png'}
					width={50}
					height={50}
					alt={'logo'}
					className=""
				/>
				<p>ByteBrust: Where flavor meets convenience. Explore, order, and indulge with ease on our website.</p>
				<div className="flex justify-left items-center">
				<Image
					src={'/Visa.png'}
					width={40}
					height={40}
					alt={'visa'}
					className="mx-1"
				/>
				<Image
					src={'/Discover.png'}
					width={40}
					height={40}
					alt={'discover'}
					className="mx-1"
				/>
				<Image
					src={'/AmericanExpress.png'}
					width={40}
					height={40}
					alt={'american express'}
					className="mx-1"
				/>	
				</div>
			</div>
			<div>
				<h3 class="text-xl font-semibold mb-4">USEFUL LINKS</h3>
				<div class="grid grid-cols-2 gap-2">
					<ul>
						<li>About</li>
						<li>Menu</li>
						<li>Testimonials</li>
						<li>Contact Us</li>
					</ul>
					<ul>
						<li>Wishlist</li>
						<li>Privacy Policy</li>
						<li>Order Tracking</li>
						<li>Warranty and Service</li>
					</ul>
				</div>
			</div>
			<div>
				<h3 class="text-xl font-semibold mb-4">INSTAGRAM FEED</h3>
				<div class="grid grid-cols-3 gap-2 md:gap-2">
					<Image
						src={'/burgerss.png'}
						width={70}
						height={70}
						alt={'logo'}
						className="ml-2 md:ml-0"
					/>
					<Image
						src={'/burger2.png'}
						width={70}
						height={70}
						alt={'logo'}
						className="ml-2 md:ml-0"
					/>
					<Image
						src={'/burger3.png'}
						width={70}
						height={70}
						alt={'logo'}
						className="ml-2 md:ml-0"
					/>
					<Image
						src={'/burger4.png'}
						width={70}
						height={70}
						alt={'logo'}
						className="ml-2 md:ml-0"
					/>
					<Image
						src={'/burger5.png'}
						width={70}
						height={70}
						alt={'logo'}
						className="ml-2 md:ml-0"
					/>
					<Image
						src={'/burger-fries.png'}
						width={70}
						height={70}
						alt={'logo'}
						className="ml-2 md:ml-0"
					/>
				</div>
			</div>
			
		</footer>
		<div className="flex justify-center mt-4">
				<p>&copy; 2023 All rights reserved</p>
			</div>
		</>


	)
}
