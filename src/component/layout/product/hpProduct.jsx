import React, { useContext, useState } from 'react'
import Data from '../../../features/data/data'
import * as Fa from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ShoppingCart } from '../../../context/ProductContext.jsx'
import { BsHeart, BsHeartFill } from 'react-icons/bs'


function HpProduct() {
    const data = Data.filter(value => value.brand === "Hp")
    const { handleCartSelect, AddCart } = useContext(ShoppingCart)
    const [iconChange, setIconChange] = useState(false)

    return (
        <div className=''>
            <div id='product' className="grid place-items-center items-center gap-10 grid-cols-[repeat(4,_1fr)]">
                {data.map((value, index) =>
                    <motion.div
                        whileHover={'hover'}
                        key={index} className="h-fit w-[17rem] relative flex flex-col items-center gap-2  border-[3px] rounded-2xl border-accent">
                        <img className='w-full h-64 rounded-t-2xl mix-blend-multiply' src={value.image} alt="" />
                        <p>{value.name}</p>
                        <div className="w-full flex justify-center text-lg text-yellow-300 gap-2">
                            <Fa.FaStar />
                            <Fa.FaStar />
                            <Fa.FaStar />
                            <Fa.FaStar />
                            <Fa.FaStar />
                        </div>
                        <p>{`${value.price}`}</p>
                        <motion.div
                            initial={{
                                opacity: 0
                            }}
                            variants={{
                                hover: {
                                    opacity: 1
                                }
                            }}
                            className='w-full'>
                            <motion.button
                                whileTap={{
                                    scale: 0.8
                                }}
                                onClick={() => AddCart(index)} className='flex w-full items-center justify-center rounded-b-xl h-14 bg-default text-white'>Add to Cart <Fa.FaCartPlus /></motion.button>
                            <motion.button
                                whileTap={{
                                    scale: 0.8
                                }}
                                onClick={() => setIconChange(true)} className='absolute top-0 right-0 p-2 text-white text-2xl'>
                                {iconChange ? <BsHeart /> : <BsHeartFill />}</motion.button>
                            <Link to='product-detail' onClick={() => handleCartSelect(index)} >
                                <motion.button
                                    whileTap={{
                                        scale: 0.8
                                    }}
                                    onClick={() => AddCart(index)} className='absolute top-0 left-0 p-2 text-white text-2xl'><Fa.FaEye /></motion.button>
                            </Link>
                        </motion.div>
                        {/* <Link to='product' className=''>
                <motion.button 
                whileHover={{
                    scale: 0.9
                }}
                whileTap={{
                    scale: 1.1
                }}
                onClick={() => handleCartSelect(index)} className="px-3 py-1.5 bg-black text-white rounded-2xl flex items-center gap-2">View Item <Fa.FaEye /></motion.button>                    
            </Link> */}
                    </motion.div>
                )}
            </div>
        </div>
    )
}

export default HpProduct