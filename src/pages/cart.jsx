import React, { useContext } from 'react'
import { ShoppingCart } from '../context/ProductContext'
import Data from '../features/data/data'
import { FaX } from 'react-icons/fa6'
import { motion } from 'framer-motion'
import AlertBox from '../component/ui/alertBox.jsx'
import { Link } from 'react-scroll'
import { FaBoxOpen, FaCartArrowDown, FaOpencart } from 'react-icons/fa'
import { RiEmotionUnhappyFill, RiEmotionUnhappyLine } from 'react-icons/ri'
import { FiShoppingCart } from 'react-icons/fi'

function Cart() {

    const { cartSelect, myCart, deleteCart, alertBox, setAlertBox, cancelBtn, selectIndex, quantity, setQuantity, handleQuantity } = useContext(ShoppingCart)
    // function totalPrice(price) {
    //     let num = Number(price.splice(0,-1))
    //     return num * quantity
    // }
    // console.log('100$');
    

  return (
    <div className='bg-slate-300 text-blue-950 min-h-screen p-4 flex items-center flex-col gap-4'>
        <h1 className='text-4xl font-playfairItalic text-center'>My Cart</h1>
        <ul className="m-4 flex flex-col gap-4">
            {myCart.length > 0 ? 
                myCart.map((item, index) => 
                    <li key={item.id} className="relative bg-primary grid grid-cols-4 border border-blue-950 gap-4 place-items-center p-2 rounded-3xl w-full">
                        <h2>Image</h2>
                        <h2>Description</h2>
                        <h2>Quantity</h2>
                        <h2>Price</h2>
                        <img src={item.image} className='size-20 rounded-xl' alt="" />
                        <div className="flex flex-col h-full items-center p-4 gap-2 w-full">
                            <p className='text-white font-sofadiOne text-2xl'>{item.name}</p>
                            <p>{item.brand}</p>
                            <p className='text-white font-playfair text-2xl'>${item.price}</p> 
                        </div>
                        <div className="">
                            <input type="number" name="" id="" onChange={(e) => setQuantity(e.target.value)} value={quantity} className='p-4 text-black w-20 h-10 border-2 bg-white border-black rounded-xl' />
                            <p className='text-xl text-white font-roboto'>Quantity: {quantity}</p>
                        </div>
                        <p className='text-white font-playfair text-2xl'>${item.price * quantity}</p> 
                        <motion.button 
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.9}}
                        onClick={() => setAlertBox((prev) => ({...prev, [index] : true}))}
                        className='bg-black p-1 rounded-full absolute right-0 m-2 top-0 text-xs'><FaX /></motion.button>
                        {
                            alertBox[index] && (
                            <AlertBox index={index} alertBox={alertBox} setAlertBox={setAlertBox} deleteCart={deleteCart} />
                        )}  
                    </li>
                ) : 
                <div className="text-black text-3xl flex items-center justify-center gap-4"> 
                    <RiEmotionUnhappyFill />
                    <h1 className=''>Your Cart is empty</h1>
                    <FiShoppingCart/>
                </div>
            }
            </ul> 
    </div>
  )
}

export default Cart