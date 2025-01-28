import React, { useContext } from 'react'
import { ShoppingCart } from '../../context/ProductContext'
import { MyContext } from '../../context/AppContexts'

function SideBar() {

	const {handleBrandChange,handleFilterChange, handleMemoryChange, selectedRam, selectedPriceRange, selectedCategory, handlePriceChange, setSelectedPriceRange, selectedBrand, handleProcessorChange, selectedProcessor} = useContext(MyContext)

	const price_range = ["All", "below 500", "500-599", "1000-1999", "2000 Above"]
	const brand = ["All", "Hp", "Dell", "Samsung", "Lenovo", "Asus", "Acer", "Apple"]
	const memory= ["All","4 GB DDR5", "8 GB DDR5", "16 GB DDR5", "32 GB DDR5", "4 GB DDR4", "8 GB DDR4"]

	return (
		<div className="w-96 text-white min-h-screen sticky bg-blue-950 bg-opacity-90">
			<h1 className="text-xl text-center font-sofadiOne">Product filter</h1>
			<div id='price-range' className="p-2">
				<h2>Price Range</h2>
				<ul className='p-4 text-xs flex flex-wrap gap-1'>
					{price_range.map((value, index) => (
						<li key={index}> 
							<input id={index} className='peer appearance-none' type="radio" 
								checked={selectedPriceRange === value} 
								onChange={handlePriceChange}  value={value} name="price-range" />   
							<label className='rounded-lg border p-2 block items-center justify-center w-full peer-checked:text-white cursor-pointer peer-checked:bg-blue-600' htmlFor={index}>{value}</label>
						</li>
					))}
				</ul>
			</div>
			<div id="brand" className="p-2">
				<h2>Product Brand</h2>
				<select className='p-2 w-full h-full text-xs gap-2' onChange={handleBrandChange}>
					{brand.map((value, index) => (
						<option key={index} selected={selectedBrand === value} > 
								{value} 
						</option>

					))}
				</select>

			</div>
			<div id="brand" className="p-2">
				<h2>Product Specification</h2>
				<div className="p-2">
					<h2>RAM</h2>
					<select className='p-2 text-xs' onChange={handleMemoryChange}>
						{memory.map((value, index) => (
							<option key={index} selected={selectedRam === value} > 
								{value} 
							</option>
					))}				
					</select>
				</div>
				<div value="" className="p-2">
					<h2>Processors</h2>
					<ul className='p-2 text-xs'>
						<li> <label htmlFor=""> <input className='bg-primary cursor-pointer' type="radio" checked={selectedProcessor === "All"} onChange={handleProcessorChange} value="All" name="specification-processor" id="" /> All </label></li>
						<li> <label htmlFor=""> <input className='bg-primary cursor-pointer' type="radio" checked={selectedProcessor === "intel Pentium"} onChange={handleProcessorChange} value="intel Pentium" name="specification-processor" id="" /> intel Pentium </label></li>
						<li> <label htmlFor=""> <input className='bg-primary cursor-pointer' type="radio" checked={selectedProcessor === "intel Core i3"} onChange={handleProcessorChange} value="intel Core i3" name="specification-processor" id="" /> intel Core <sup>TM</sup>i3 </label></li>
						<li> <label htmlFor=""> <input className='bg-primary cursor-pointer' type="radio" checked={selectedProcessor === "intel Core i5"} onChange={handleProcessorChange} value="intel Core i5" name="specification-processor" id="" /> intel Core <sup>TM</sup>i5 </label></li>
						<li> <label htmlFor=""> <input className='bg-primary cursor-pointer' type="radio" checked={selectedProcessor === "intel Core i7"} onChange={handleProcessorChange} value="intel Core i7" name="specification-processor" id="" /> intel Core <sup>TM</sup>i7 </label></li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default SideBar