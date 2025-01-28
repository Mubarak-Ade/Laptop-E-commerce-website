import React, { useContext, useEffect, useState } from 'react'
import * as Fa from 'react-icons/fa6'
import Data from '../../../features/data/data'
import { ShoppingCart } from '../../../context/ProductContext.jsx'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { BsHeart, BsHeartFill } from 'react-icons/bs'

function AllProduct() {

    const { handleCartSelect, AddCart } = useContext(ShoppingCart)
    const [iconChange, setIconChange] = useState(false)

    const handleShuffle = (array) => {
        array.filter((element, index) => {
            const random = Math.floor(Math.random() * (index + 1))
            const data = [array[index], array[random]] = [array[random], array[index]]
            return data
        })
    }

    handleShuffle(Data)



    return (
        <div className=''>
            <div id='product' className="grid place-items-center items-center gap-10 grid-cols-[repeat(4,_1fr)]">
                {Data.map((value, index) =>
                    <motion.div
                        whileHover={'hover'}
                        key={index} className="h-fit w-[17rem] relative flex flex-col items-center gap-2  border-[3px] rounded-2xl border-accent shadow-2xl">
                        <img className='w-full h-64 rounded-t-2xl' src={value.image} alt="" />
                        <p>{value.name}</p>
                        <div className="w-full flex justify-center text-lg text-yellow-300 gap-2">
                            <Fa.FaStar />
                            <Fa.FaStar />
                            <Fa.FaStar />
                            <Fa.FaStar />
                            <Fa.FaStar />
                        </div>
                        <p>$ {value.price}</p>
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
                            <motion.button
                                whileTap={{
                                    scale: 0.8
                                }}
                                onClick={() => AddCart(value)} className='flex w-full items-center justify-center rounded-b-xl h-14 bg-white bg-opacity-45'>Add to Cart <Fa.FaCartPlus className=''/></motion.button>
                            <div className="bg-sky-950 bg-opacity-45 flex justify-between h-14 items-center p-4 rounded-t-2xl absolute top-0 w-full">
                                <motion.button
                                    whileTap={{
                                        scale: 0.8
                                    }}
                                    onClick={() => setIconChange(true)} className='text-red-600 text-2xl'>
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

export default AllProduct