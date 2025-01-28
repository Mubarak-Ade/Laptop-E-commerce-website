import { AnimatePresence, motion } from 'framer-motion';
import React, { useContext, useEffect, useState } from 'react'
import * as Bs from 'react-icons/bs';
import * as Fa from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { ShoppingCart } from '../../context/ProductContext';
import Notification from '../ui/notification.jsx';
import '../../responsive.css'
import { FaX } from 'react-icons/fa6';
import { MyContext } from '../../context/AppContexts';
import Navbar from '../ui/navbar';
import Search from './search.jsx';

function Header() {

	const { input, handleGetText, handleInput, showSearch, setShowSearch } = useContext(MyContext)
	const { myCart } = useContext(ShoppingCart)
	const [visible, setVisible] = useState(false)

	return (
		// header
		<div className='flex h-20 w-full pr-5 items-center bg-blue-950 justify-between'>
			{/* title with link that navigate back to home */}
			<Link to='/' className="rounded-[0_3rem_3rem_0] h-full md:w-[30rem] justify-center text-slate-300 items-center bg-primary flex font-ubuntu">
				<motion.h1
					initial={{
						scale: 1
					}}
					whileTap={{
						scale: 0.8
					}}
					className='lg:text-5xl md:text-5xl text-4xl p-4'>Shina Store</motion.h1>
			</Link>

			{/* navbar components with state props that toggle menu in mobile devices */}
			<Navbar visible={visible} setVisible={setVisible} />

			{/* the toggle button */}
			<motion.button
				initial={{
					scale: 1
				}}
				whileTap={{
					scale: 0.8
				}}
				whileHover={{
					backgroundColor: 'var(--primary-color)',
					borderRadius: '10px'
				}}
				onClick={() => setVisible(true)}
				className='text-black fa-bars hidden text-2xl mt-2 p-4'>
				<Fa.FaBars />
			</motion.button>
		</div>
	)
}

export default Header