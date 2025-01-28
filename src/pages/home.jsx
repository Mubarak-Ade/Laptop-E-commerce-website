import React, { useContext, useEffect, useState } from 'react'
import Header from '../component/layout/header.jsx';
import Hero from '../component/layout/hero.jsx'
import Product from '../component/layout/product/product.jsx'
import HpProduct from '../component/layout/product/hpProduct.jsx';
import { Link, Outlet } from 'react-router-dom'
import Trending from '../component/layout/trending.jsx';
import Feature from '../component/layout/feature.jsx';
import ComingSoon from '../component/layout/comingSoon.jsx';
import Footer from '../component/layout/footer.jsx';
import { FaArrowUp } from 'react-icons/fa6';
import { animateScroll as scroll } from 'react-scroll';
import Notification from '../component/ui/notification.jsx';
import Search from '../component/layout/search.jsx';
import { MyContext } from '../context/AppContexts.jsx';

function Home() {

	const [showArrow, setShowArrow] = useState(false)
	const {showSearch, setShowSearch} = useContext(MyContext)

	useEffect(() => {
		document.addEventListener('scroll', () => {
			window.scrollY > 50 ? setShowArrow(true) : setShowArrow(false)
		})
	}, [])


	return (
		<div className='relative bg-blue-500 h-screen'>
			<Hero />
			<Product />
			<Trending />
			<ComingSoon />
			<Feature />
			<Footer />
			{showArrow &&
				<button onClick={() => scroll.scrollToTop()} className='fixed bg-primary rounded-md bottom-10 right-10 p-4 text-white'><FaArrowUp /></button>
			}
		</div>
	)
}

export default Home