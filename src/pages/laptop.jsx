import React, { useContext, useRef, useState } from 'react'
import SideBar from '../component/layout/sideBar'
import BreadCrumbs from '../component/ui/BreadCrumbs.jsx'
import Data from '../features/data/data'
import { ShoppingCart } from '../context/ProductContext.jsx'
import * as Fa from 'react-icons/fa6'
import { motion } from 'framer-motion'
import { FaCartPlus } from 'react-icons/fa'
import { BsHeart, BsHeartFill } from 'react-icons/bs'
import { MyContext } from '../context/AppContexts.jsx'
import { Link } from 'react-router-dom'

const Laptop = () => {
    const { AddCart } = useContext(ShoppingCart)
    const { filterProducts } = useContext(MyContext)
    const [iconChange, setIconChange] = useState(false)
    const [sideShow, setSideShow] = useState(false)

    const handleSidebarShow = () => {
        {!sideShow ? setSideShow(true) : setSideShow(false)}
    }

    return (
        <div className='flex h-full bg-slate-300'>
            {sideShow && (
                <SideBar />
            )}
            <div className="w-full text-center min-h-screen text-white">
            <button onClick={handleSidebarShow} className='text-sky-950 text-3xl w-full'>
                {sideShow ? <Fa.FaAnglesRight /> : <Fa.FaAnglesLeft />}
            </button>
                {/* <img src="/src/assets/Images/joshua-reddekopp-SyYmXSDnJ54-unsplash.jpg" className='w-full h-[35rem]' alt="" /> */}
                <BreadCrumbs />
                {filterProducts.length > 0 ?
                    <ul className="grid grid-cols-3 gap-2 items-center place-items-center">
                        {filterProducts.map((value, index) => (
                            <motion.li
                                whileHover='hover'
                                key={index} className="h-96 w-[17rem] bg-blue-300 relative flex flex-col items-center gap-2  border-[3px] rounded-2xl border-accent shadow-2xl">
                                <img src={value.image} className='w-72 h-52 rounded-t-2xl mix-blend-multiply' alt="" />
                                <p className='text-xl font-sofadiOne'>{value.name}</p>
                                <p className='text-lg font-roboto'>$ {value.price}</p>
                                <p className='text-xs font-roboto'>{`${value.memory}`}</p>
                                <p className='text-xs font-roboto'>{`${value.storage}`}</p>
                                <p className='text-xs font-roboto'>{`${value.processor}`}</p>
                                <motion.div
                                    initial={{
                                        opacity: 0
                                    }}
                                    variants={{
                                        hover: {
                                            opacity: 1
                                        }
                                    }}
                                    className='w-full bg-sky-black'>

                                    {/* add to cart button */}
                                    
                                    <motion.button
                                        whileTap={{
                                            backgroundColor: ' #172554',
                                            fontSize: '12px'
                                        }}
                                        transition={{
                                            duration: 1
                                        }}
                                        onClick={() => AddCart(value, index)} className='flex w-full  absolute bottom-0 items-center justify-center rounded-b-2xl h-14 bg-blue-950 bg-opacity-50 text-white'>Add to Cart <FaCartPlus /></motion.button>
                                    
                                    <div className="bg-sky-950 bg-opacity-45 flex justify-between h-14 items-center p-4 rounded-t-2xl absolute top-0 w-full">
                                        <motion.button
                                            whileTap={{
                                                scale: 0.8
                                            }}
                                            onClick={() => setIconChange(!iconChange)} className='text-red-600 text-2xl'>
                                            {iconChange ? <BsHeart /> : <BsHeartFill />}</motion.button>
                                        <Link to={`product/${index}`} >
                                            <motion.button
                                                whileTap={{
                                                    scale: 0.8
                                                }}
                                                className='text-white text-2xl'><Fa.FaEye /></motion.button>
                                        </Link>
                                    </div>
                                </motion.div>
                            </motion.li>
                        ))}
                    </ul> :
                    <p>No Product Found in this Category</p>
                }
            </div>
        </div>
    )
};

export default Laptop