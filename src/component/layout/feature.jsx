import React, { useContext, useEffect, useState } from 'react'
import * as Fa from 'react-icons/fa6'
import Data from '../../features/data/data';
import { motion } from 'framer-motion';
import { ShoppingCart } from '../../context/ProductContext';
import { Link } from 'react-router-dom';

function Feature() {

    const {handleCartSelect, AddCart, cartSelect} = useContext(ShoppingCart)

    // const [photo, setPhoto] = useState(null)
    // const [error, setError] = useState(null);
    // const photoId = "2014422"

    // useEffect(() => {
    //    fetchImg(photoId)
    // }, [photoId])

    // const fetchImg = async (id) => {
    //     const apiKey = "Fy0Kr9MT69WCve90GAztT1j8UfNDeeP08GiE6m0K0C59CWj3fLZlHOrM"
    //     try {
    //         const response = await fetch(`https://api.pexels.com/v1/photos/${id}`, {
    //             headers: {
    //                 'Authorization': apiKey
    //             }
    //         });
    //         const data = await response.json()
    //         setPhoto(data)
    //         console.log(data);
    //     } catch (error) {
    //         setError("fail to fetch image")
    //     }
    // };
    
  return (
    <div className='w-full flex items-center justify-center text-center h-fit bg- p-6'>
        <div className="space-y-4">
            <h1 className='text-xl font-serif'>Latest Product</h1>
            <ul id='feature' className='grid grid-cols-[repeat(3,_1fr)] w-full p-4 gap-10 place-items-center'>
                {
                    Data.map((items, index) => (
                        <motion.li 
                        whileHover={{
                            backgroundColor: 'rgb(100, 116, 139,0.3)',
                            color: 'white'
                        }}
                        onClick={() => handleCartSelect(index)}
                        key={index} className='flex items-center justify-center p-4 w-96 text-start gap-4 rounded-xl cursor-pointer'>
                            <img src={items.image} className='w-20 h-20 row-[1/4]' alt="" />
                            <div className="">
                                <h2 className='text-base'>{items.model}</h2>
                                <h4 className=''>{items.price}</h4>
                                <div className="flex">
                                    <Fa.FaStar />
                                    <Fa.FaStar />
                                    <Fa.FaStar />
                                    <Fa.FaStar />
                                    <Fa.FaStar />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <motion.button 
                                whileHover={{
                                    backgroundColor: 'var(--secondary-color)',
                                    scale: 1.1
                                }}
                                whileTap={{
                                    scale:0.9
                                }}
                                onClick={() => AddCart(cartSelect)}
                                className='bg-accent text-white p-2 w-20 h-10 text-[0.5rem] rounded-xl flex items-center gap-2'>Add To Cart <Fa.FaCartShopping size={30} /></motion.button>
                                <motion.button
                                whileHover={{
                                    scale: 1.1
                                }}
                                whileTap={{
                                    scale:0.9
                                }}
                                >
                                    <Fa.FaHeart size={20} />
                                </motion.button>
                                <Link to='product-detail'><motion.button 
                                whileHover={{
                                    backgroundColor: 'var(--accent-color)',
                                    scale: 1.1
                                }}
                                whileTap={{
                                    scale:0.9
                                }}
                                className='w-32 h-10 rounded-xl text-white bg-default'>Product Details</motion.button></Link>
                            </div>
                        </motion.li>
                    ))
                }
            </ul>
        </div>
    </div>
  )
}

export default Feature