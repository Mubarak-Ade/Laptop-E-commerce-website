import React, { createContext, useContext, useEffect, useState } from 'react'
import Data from '../features/data/data'
import useLocalStorage from '../features/hooks/useLocalStorage'

export const ShoppingCart = createContext()

function ProductContext({ children }) {
	const [quantity, setQuantity] = useState(1)
	const [cartSelect, setCartSelect] = useState(null)
	const [myCart, setMyCart] = useState([])
	const [selectIndex, setSelectIndex] = useState(null)
	const [alertBox, setAlertBox] = useState({})
	const [itemSelect, setItemSelect] = useState(null)

	const AddCart = (product, i) => {
		setMyCart([...myCart, product])
	}

	const deleteCart = (_, i) => {
		setMyCart(myCart.filter((cart, index) => index !== i))
	}

	const handleCartSelect = (id) => {
		setItemSelect(id)
	}

	const handleQuantity = (value, id) => {
		setMyCart((items, i) => 
			items.map((item) =>( 
				id === i ? {...item, value} : item
			))
		)
		setQuantity(value)
	}
	
		console.log(myCart);
	
	
		const cartProps = { AddCart, quantity, setQuantity, myCart,alertBox, setAlertBox,
			deleteCart, selectIndex, itemSelect, handleCartSelect, handleQuantity}
	// const mainProps = {input,handleGetText,handleInput,showSearch,setShowSearch}
	// const contextProps = {cartProps}

	return (
		<ShoppingCart.Provider value={cartProps}>
			{children}
		</ShoppingCart.Provider>
	)
}

export default ProductContext