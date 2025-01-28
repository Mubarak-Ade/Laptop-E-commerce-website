import { motion } from 'framer-motion';
import React, { useContext } from 'react'
import { FaSearch } from 'react-icons/fa';
import Data from '../../features/data/data';
import { FaX } from 'react-icons/fa6';
import { MyContext } from '../../context/AppContexts';
import { SearchCon } from '../../context/SearchContext';
import { Link } from 'react-router-dom';

function Search({showSearch, setShowSearch}) {
	const {value, searchList, setValue, getSearch, setGetSearch, handleSearchInput, handleSearchClose} = useContext(SearchCon)
	return (
		<motion.div 
			initial={{
				height: 0
			}}
			animate={{
				height: '100%'
			}}
			transition={{
				duration: 1,
			}}
		className='p-10 w-full flex flex-col z-50 items-center bg-opacity-80 bg-blue-800 bg-blend-multiply fixed h-screen overflow-y-scroll top-0'>
			<div className="flex justify-center p-4 w-[30rem] rounded-full m-2 gap-4 border border-white">
				<input onChange={handleSearchInput} value={value} type="text" className='w-96 h-10 rounded-3xl px-6 ' />
				<motion.button 
				whileTap={{
					scale: 0.9
				}}
				onClick={() => setGetSearch(true)}
				className='text-2xl text-white' >
					<FaSearch />
				</motion.button>
			</div>

			<ul className='w-[40rem]'>
				{ searchList.length > 0 ? 
					searchList.map((value, index) => (getSearch &&
						<Link key={index} to={`product/${index}`} onClick={() => setShowSearch(false)}>
							<motion.li 
							whileHover={{
								backgroundColor: '#1e40af'
							}}
							whileTap={{
								scale: 0.8
							}}
							className='border p-2 m-2 text-white cursor-pointer flex items-center justify-between rounded-xl'>
								<img src={value.image} className='size-10' alt="" />
								<p>{value.name}</p>
								<p>${value.price}</p>
							</motion.li>
						</Link>
					)) :
					<p>No Laptops</p>
				}
			</ul>
			<motion.button 
			whileHover={{
				backgroundColor: 'rgb(256, 256, 256, 0.2)'
			}}
			whileTap={{
				scale: 0.8
			}}
			className='absolute top-0 right-0 m-8 text-2xl rounded-xl shadow-2xl text-slate-300 p-2' onClick={handleSearchClose}>
				<FaX />
			</motion.button>
		</motion.div>
	)
}

export default Search;