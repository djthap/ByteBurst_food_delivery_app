import '../..//css/Footer.css'

export default function Footer() {
	return (
		<>
			<footer className=" row  no-gutters pt-4">
				<div className="col-md-4 col-12 p-5">
					<img
						src={'/bitebrust.png'}
						width={50}
						height={50}
						alt={'logo'}
						className=""
					/>
					<p>
						ByteBrust: Where flavor meets convenience. Explore,
						order, and indulge with ease on our website.
					</p>
					<div className="flex justify-left items-center">
						<img
							src={'/Visa.png'}
							width={40}
							height={40}
							alt={'visa'}
							className="mx-1"
						/>
						<img
							src={'/Discover.png'}
							width={40}
							height={40}
							alt={'discover'}
							className="mx-1"
						/>
						<img
							src={'/AmericanExpress.png'}
							width={40}
							height={40}
							alt={'american express'}
							className="mx-1"
						/>
					</div>
				</div>
				<div className="col-md-4 col-12">
					<h3 className="text-xl font-semibold mb-4">USEFUL LINKS</h3>
					<div className="row no-gutters pt-4 ">
						<ul className="col-md-6 col-12">
							<li>About</li>
							<li>Menu</li>
							<li>Testimonials</li>
							<li>Contact Us</li>
						</ul>
						<ul className="col-md-6 col-12">
							<li>Wishlist</li>
							<li>Privacy Policy</li>
							<li>Order Tracking</li>
							<li>Warranty and Service</li>
						</ul>
					</div>
				</div>
				<div className="col-md-4 col-12">
					<h3 className="text-xl font-weight-bold mb-4">
						INSTAGRAM FEED
					</h3>
					<div className="row row-cols-3 g-2 mrr">
						<div className="col">
							<img
								src="/burgerss.png"
								width="70"
								height="70"
								alt="logo"
								className="ml-2 ml-md-0"
							/>
						</div>
						<div className="col">
							<img
								src="/burger2.png"
								width="70"
								height="70"
								alt="logo"
								className="ml-2 ml-md-0"
							/>
						</div>
						<div className="col">
							<img
								src="/burger3.png"
								width="70"
								height="70"
								alt="logo"
								className="ml-2 ml-md-0"
							/>
						</div>
						<div className="col">
							<img
								src="/burger4.png"
								width="70"
								height="70"
								alt="logo"
								className="ml-2 ml-md-0"
							/>
						</div>
						<div className="col">
							<img
								src="/burger5.png"
								width="70"
								height="70"
								alt="logo"
								className="ml-2 ml-md-0"
							/>
						</div>
						<div className="col">
							<img
								src="/burger-fries.png"
								width="70"
								height="70"
								alt="logo"
								className="ml-2 ml-md-0"
							/>
						</div>
					</div>
				</div>
			</footer>
			<div className="flex justify-center mt-4">
				<p>&copy; 2023 All rights reserved</p>
			</div>
		</>
	)
}
