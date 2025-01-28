import React, { useContext } from 'react'
import { ShoppingCart } from '../../context/ProductContext'
import { motion } from 'framer-motion'

function AlertBox({ deleteCart, alertBox, setAlertBox, index }) {

	const { cartSelect, myCart } = useContext(ShoppingCart)

	// const handleDelete = () => {
	// 	deleteCart(index)
	// 	setAlertBox(false)
	// }

	return (
		<motion.div
			initial={{
				scale: 0
			}}
			animate={{
				scale: 1
			}}
			transition={{
				duration: 2,
				type: 'spring'
			}}
			className='bg-slate-500 w-full h-screen fixed top-0 bg-opacity-45 flex items-center justify-center'>
			<div className="bg-white p-4 flex items-center flex-col justify-center space-y-8 rounded-2xl shadow-2xl w-96 h-60">
				<h1 className='text-xl text-black font-playfair'>Are you Sure you want to delete Cart</h1>
				<div className="flex justify-center items-center gap-4">
					<motion.button
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
						onClick={deleteCart(index)}
						aria-label='Confirm delete action'
						className='bg-black px-6 rounded-3xl text-base py-2'>Delete</motion.button>
					<motion.button
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
						onClick={() => setAlertBox((prev) => ({...prev, [index]: true}))}
						aria-label='Cancel delete action'
						className='bg-black px-6 rounded-3xl text-base py-2'>Cancel</motion.button>
				</div>
			</div>
		</motion.div>
	)
}

export default AlertBox