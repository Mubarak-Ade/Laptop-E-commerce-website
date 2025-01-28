import React, { useState } from "react"
import './App.css'
import Home from "./pages/home"
import Header from "./component/layout/header"
import Product from "./component/layout/product/product"
import AllProduct from "./component/layout/product/allProduct"
import HpProduct from "./component/layout/product/hpProduct"
import DellProduct from "./component/layout/product/dellProduct"
import SamsungProduct from "./component/layout/product/samsungProduct"
import ProductDetail from "./pages/ProductDetail"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Cart from "./pages/cart"
import ProductContext from "./context/ProductContext"
import AppContext from "./context/AppContexts"
import Laptop from "./pages/laptop"
import BreadCrumbs from "./component/ui/BreadCrumbs"
import Notification from "./component/ui/notification"
import Search from "./component/layout/search"
import SearchContext from "./context/SearchContext"

function App() {

	const [showSearch, setShowSearch] = useState(false)

	return (
		<div className="relative h-full">
			<AppContext showSearch={showSearch} setShowSearch={setShowSearch}>
				<SearchContext showSearch={showSearch} setShowSearch={setShowSearch}>
					<ProductContext>
						<Router>
							<Header />
							{showSearch && (
								<Search showSearch={showSearch} setShowSearch={setShowSearch} />
							)}
							{/* <Notification /> */}
							<Routes>
								<Route path="/" element={<Home />} />
								<Route path="/product/:id" element={<ProductDetail />} />
								<Route path="cart" element={<Cart />} />
								<Route path="laptops" element={<Laptop />} />
							</Routes>
						</Router>
					</ProductContext>
				</SearchContext>
			</AppContext>
		</div>
	)
}

export default App
