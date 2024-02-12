'use client'
import { signIn } from 'next-auth/react'
import Image from 'next/image'
import { useState } from 'react'
import '../../../public/css/Login.css'
import Link from 'next/link'
import { constants } from 'buffer'
import '../../../public/css/aboutus.css'
export default function AboutPage() {
	return (
		<section className="mt-8">
			<h1 className="text-center  text-4xl mb-4 heading ">About Us</h1>
			<section className="aboutusPara1">
				<h2 className="heading1">Welcome to Bite Burst,</h2>{' '}
				<br className="space1"></br>
				<h2 className="heading2">
					where your cravings meet convenience!
				</h2>
				<h4 className="heading3">Our Story</h4>
				<h5 className="para">
					At Burst, we believe that great food has the power to bring
					people together and elevate everyday moments. Our journey
					began with a simple idea: to make ordering food not just
					easy but an experience that delight
				</h5>
			</section>
			<div class="paint-stroke"></div>
			<section className="aboutusPara2">
				<div className="row">
					<div className="col-3">
						<div className="picturebox">
							<Image
								src={'/dj.png'}
								width={165}
								height={166}
								alt={'logo'}
								className="logo"
							/>
						</div>
						<h1 className="head">Dhananjay</h1>
					</div>
					<div className="col-3">
						<div className="picturebox">
							<Image
								src={'/vruti.jpg'}
								width={165}
								height={166}
								alt={'logo'}
								className="logo"
							/>
						</div>
						<h1 className="head">Vruti Sardhara</h1>
					</div>
					<div className="col-3">
						<div className="picturebox">
							<Image
								src={'/amitoj.jpeg'}
								width={165}
								height={166}
								alt={'logo'}
								className="logo"
							/>
						</div>
						<h1 className="head">Amitoj Singh</h1>
					</div>
					<div className="col-3">
						<div className="picturebox">
							<Image
								src={'/kk.jpg'}
								width={165}
								height={166}
								alt={'logo'}
								className="logo"
							/>
						</div>
						<h1 className="head">Kirandeep Kaur</h1>
					</div>
				</div>
			</section>
			<div class="paint-stroke"></div>
			<section className="aboutusPara3">
				<div className="row">
					<div className="col-4">
						<div className="picturebox2 logo dd">
							<Image
								src={'/delievery.png'}
								width={165}
								height={166}
								alt={'logo'}
								className="img"
							/>

							<h1 className="head2">
								Free shipping on first order
							</h1>
							<p className="para2">
								Sign up for updates and get free shipping
							</p>
						</div>
					</div>
					<div className="col-4">
						<div className="picturebox2 logo dd">
							<Image
								src={'/timer.png'}
								width={165}
								height={166}
								alt={'logo'}
								className="img"
							/>

							<h1 className="head2">
							30 minutes
delivery
							</h1>
							<p className="para2">
							Everything you order will be
quickly delivered to your
							</p>
						</div>
					</div>
					<div className="col-4">
						<div className="picturebox2 logo dd">
							<Image
								src={'/burger.png'}
								width={165}
								height={166}
								alt={'logo'}
								className="img"
							/>

							<h1 className="head2">
							Best quality
guarantee

							</h1>
							<p className="para2">
							We use only the best
ingredients to cook the tasty
fresh food for you.

							</p>
						</div>
					</div>
					<div className="col-4">
						<div className="picturebox2 logo dd">
							<Image
								src={'/combo.png'}
								width={165}
								height={166}
								alt={'logo'}
								className="img"
							/>

							<h1 className="head2">
							Variety of
dishes
							</h1>
							<p className="para2">
							In our menu you’ll find a wide
variety of dishes, desserts, and
drinks.
							</p>
						</div>
					</div>
				</div>
			</section>
		</section>
	)
}
