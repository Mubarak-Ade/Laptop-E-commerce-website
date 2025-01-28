import { motion } from 'framer-motion'
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import * as Bs from 'react-icons/bs'
import '../../index.css'
import { FaCartShopping, FaX } from 'react-icons/fa6'
import { ShoppingCart } from '../../context/ProductContext'
import { FaHeart, FaSearch, FaUser } from 'react-icons/fa'
import { MyContext } from '../../context/AppContexts'

function Navbar({visible, setVisible}) {
    // const [visible, setVisible] = useState(false)
    const { myCart } = useContext(ShoppingCart)
	const {showSearch, setShowSearch} = useContext(MyContext)

    return (
		// responsive navbar
        <div className={visible ? 'navbar  flex gap-4 text-slate-300 p-2 items-center rounded-3xl text-base font-serif' : 'navbar hide flex gap-4 text-slate-300 p-2 items-center rounded-3xl text-base font-serif justify-around w-full'}>
			{/* responsive navlist with animation  */}
            <ul className='navlist flex justify-center'>

				{/* cancel button for nav menu in mobile devices */}
				<motion.button
					initial={{
						scale: 1
					}}
					whileTap={{
						scale: 0.8
					}}
					whileHover={{
						backgroundColor: '#cbd5e1',
                        color: '#172554',
						borderRadius: '10px',
					}}
					onClick={() => setVisible(false)}
					className='fa-x hidden text-#cbd5e1 text-xl mt-2 p-4'>
					<FaX />
				</motion.button>
				
				{/* navlist start */}

				<Link to="/">
					<motion.li
						initial={{
							scale: 1
						}}
						whileTap={{
							scale: 0.8
						}}
						whileHover={{
							backgroundColor: '#cbd5e1',
                            color: '#172554',
							borderRadius: '10px'
						}}
						className='py-2 px-3'>Home</motion.li>
				</Link>
				<Link to="laptops">
					<motion.li
						initial={{
							scale: 1
						}}
						whileTap={{
							scale: 0.8
						}}
						whileHover={{
							backgroundColor: '#cbd5e1',
                            color: '#172554',
							borderRadius: '10px'
						}}
						className='py-2 px-3'>Laptops</motion.li>
				</Link>
				<Link to="cart">
					<motion.li
						initial={{
							scale: 1
						}}
						whileTap={{
							scale: 0.8
						}}
						whileHover={{
							backgroundColor: '#cbd5e1',
                            color: '#172554',
							borderRadius: '10px'
						}}
						className='py-2 px-3'>Accessories</motion.li>
				</Link>
			</ul>

			{/* navlist end */}

			{/* search button */}

			<motion.button
			whileHover={{
				backgroundColor: '#cbd5e1',
				color: '#172554'
			}}
			whileTap={{
				fontSize: '12px'
			}}
			className='text-2xl border p-2 rounded-xl' onClick={() => setShowSearch(!showSearch)}>
				<FaSearch />
			</motion.button>

			{/* icons for cart, wishlist, and user  */}

            <div id='icons' className="flex items-center text-center gap-6 h-full text-slate-300">
                <Link to='cart'>
                    <motion.button
                        initial={{
                            scale: 1
                        }}
                        whileTap={{
                            scale: 0.8
                        }}
                        whileHover={{
                            backgroundColor: '#cbd5e1',
                            color: '#172554',
                            borderRadius: '10px'
                        }}
                        className='relative p-2 text-3xl '
                    >
                        <span className='absolute top-0 text-white font-mono text-center rounded-full h-4 w-4 flex justify-center items-center text-sm bg-red-600 right-0 '>{myCart.length}</span>
                        <FaCartShopping />
                    </motion.button>
                </Link>
                <motion.button
                    initial={{
                        scale: 1
                    }}
                    whileTap={{
                        scale: 0.8
                    }}
                    whileHover={{
                        backgroundColor: '#cbd5e1',
                        color: '#172554',
                        borderRadius: '10px'
                    }}
                    className='p-2 text-2xl'
                >
                    <FaHeart />
                </motion.button>
                <motion.button
                    initial={{
                        scale: 1
                    }}
                    whileTap={{
                        scale: 0.8
                    }}
                    whileHover={{
                        backgroundColor: '#cbd5e1',
                        color: '#172554',
                        borderRadius: '10px'
                    }}
                    className='p-2 text-2xl'
                >
                    <FaUser />
                </motion.button>
            </div>
			{/* the end */}
        </div>
    )
}

export default Navbar