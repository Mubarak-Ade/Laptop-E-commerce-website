import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import * as Fa from 'react-icons/fa6'
import Image1 from '../../assets/Images/laptop-images/t_4869_1.jpg'
import Image2 from '../../assets/Images/laptop-images/t_4899_1.jpg'
import Image3 from '../../assets/Images/laptop-images/t_5136_1.jpg'
import Image4 from '../../assets/Images/laptop-images/asus.png'

// Trending Laptops Section

function Trending() {

	const [ImageIndex, setImageIndex] = useState(0)		//index of the image in the array

	const nextSlide = () => { 		//next button function
		setImageIndex((prev) => (prev + 1) % slides.length)
	}

	const prevSlide = () => { 			//prev button function 
		setImageIndex((prev) => prev === 0 ? slides.length - 1 : prev - 1)
	}

	// automatic slide show

	useEffect(() => {
		const intervalId = setInterval(() => {
			nextSlide()
		}, 10000);

		return () => {
			clearInterval(intervalId)
		}
	}, [ImageIndex])

	// image arrays

	const slides = [
		{
			"id": 1,
			"brand": "Dell",
			'model': 'inspiron 16.0 plus',
			"storage": "512GB SSD",
			"image": Image1,
			"price": 700,
			"memory": '16 GB DDR5',
			"processor": 'INTEL Ultra 9 185H'
		},

		{
			"id": 2,
			"brand": "Dell",
			'model': 'Inspiron 14.0 ',
			"storage": "512 GB SSD",
			"image": Image2,
			"price": 110,
			"memory": '16 GB DDR5',
			"processor": 'ARM-based Snapdragon X Plus X1p-42-100'
		},

		{
			"id": 3,
			"brand": "Hp",
			'model': '',
			"storage": "",
			"image": Image3,
			"price": 440,
			"memory": '4GB',
			"processor": 'intel Core i5'
		},

		{
			"id": 3,
			"brand": "Hp",
			'model': '',
			"storage": "",
			"image": Image4,
			"price": 440,
			"memory": '4GB',
			"processor": 'intel Core i5'
		},
	]
	return (
		<div id='slides' className='h-fit bg-gradient-to-tr from-blue-950 via-sky-960 to-sky-300 text-white flex flex-col items-center p-8 justify-evenly w-full gap-4 relative'>
					<AnimatePresence>
						<motion.img 
						initial={{
							x: 0,
							opacity: 0
						}}								
						animate={{
							x: 1,
							opacity: 1,
						}}
						transition={{
							duration: 3
						}}
						src={slides[ImageIndex].image}  className='w-[30rem] h-[25rem] mix-blend-multiply' alt="" />
					</AnimatePresence>
	
					{/* product info */}
	
					<h1 className='text-2xl'>{slides[ImageIndex].brand} {slides[ImageIndex].model}</h1>
					<p className='text-2xl'>{slides[ImageIndex].price}.00$</p>

{/* next button  */ }

<motion.button
	whileHover={{
		backgroundColor: 'var(--neutral-color)',
		color: 'var(--accent-color)'
	}}
	whileTap={{
		scale: 0.9
	}}
	onClick={nextSlide}
	className="bg-accent rounded-2xl top-[40%] shadow-2xl left-5 cursor-pointer absolute p-4 text-2xl"><Fa.FaAngleLeft /></motion.button>

{/* prev button  */ }

<motion.button
	whileHover={{
		backgroundColor: 'var(--neutral-color)',
		color: 'var(--accent-color)'
	}}
	whileTap={{
		scale: 0.9
	}}
	onClick={prevSlide}
	className="bg-accent rounded-2xl top-[40%] right-5 cursor-pointer absolute p-4 text-2xl"><Fa.FaAngleRight /></motion.button>
		</div >
	)
}

export default Trending;