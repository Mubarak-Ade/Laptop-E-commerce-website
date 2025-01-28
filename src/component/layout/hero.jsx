import { motion } from 'framer-motion'
import React from 'react'
import { Link } from 'react-scroll'
import Header from './header'

// hero section 

function Hero() {
	return (
		// parent div

		<div className="h-screen bg-slate-300">

			{/* div for text and image display in flex  */}

			<div id='hero-section' className="flex justify-between h-full pt-6">

				{/* div for information (text) in hero  */}

				<div id='hero-content' className="flex text-center flex-col gap-10 text-blue-950 items-center justify-center h-[34rem] w-[50rem]">
					<h1 className='text-6xl font-serif font-bold'>Welcome to Shina Store</h1>
					<p className='text-xl'>Explore our curated collection of bestsellers, classics, and hidden gems</p>

					{/* explore now button to start surfing items  */}
					
					<motion.button
						whileHover={{
							scale: 1.1,
							backgroundColor: '#172554',
							color: '#cbd5e1'
						}}
						whileTap={{
							scale: 0.9
						}}
						transition={{
							duration: 0.2
						}}
						className='bg-accent px-3 py-2 text-blue-950 rounded-xl border border-blue-950'><Link
							spy={true}
							duration={500}
							offset={50}
							smooth={true}
							to='products'>Explore Now</Link></motion.button>
				</div>

				<img id='hero-img' src="/src/assets/Images/pexels-life-of-pix-7974.jpg" className="size-[34rem] rounded-[15rem_5rem_15rem_5rem] m-2 mix-blend-multiply opacity-80" alt="" />
			</div>
		</div>
	)
}

export default Hero