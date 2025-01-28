import React, { useContext } from 'react'
import { FaX } from 'react-icons/fa6'
import { ShoppingCart } from '../../context/ProductContext'
import { motion } from 'framer-motion'
import Data from "./../../features/data/data"
import { MyContext } from '../../context/AppContexts'

function Notification() {

	const { showNotification, setShowNotification } = useContext(MyContext)
	const { cartSelect } = useContext(ShoppingCart)

	return (showNotification && (
		<motion.div
			initial={{
				x: 0
			}}
			whileInView={{
				x:  -50
			}}
			transition={{
				duration: 2,
				type: "spring",
				// delay: 1
				ease: 'easeInOut'
			}}
			className='w-[25rem] flex items-center p-4 gap-4 text-white font-roboto rounded-br-3xl rounded-tl-3xl shadow-2xl m-2 z-[999] fixed top-10 right-0 bg-primary h-16'>
            <img src={Data[cartSelect].image} className='size-10 shadow-xl' alt="" />
			<p className='text-lg font-playfair'> {Data[itemSelect].model} Added to Cart</p>
			<p className='text-xl font-playfairItalic'> {Data[itemSelect].price}$ </p>
			<motion.button
				whileTap={{
					scale: 1.1
				}}
				onClick={() => setShowNotification(false)} className='p-1 text-sm absolute right-0 mr-4 bg-neutral rounded-full '>
				<FaX />
			</motion.button>
		</motion.div>
	)
	)
}

export default Notification