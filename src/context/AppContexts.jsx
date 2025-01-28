import Data from '../features/data/data'
import React, { createContext, useState } from 'react'

export const MyContext = createContext()

function AppContext({ children, showSearch, setShowSearch }) {

	const [getText, setGetText] = useState("");
	const [input, setInput] = useState("");
	const [showNotification, setShowNotification] = useState(false)
	const [selectedBrand, setSelectedBrand] = useState("All")
	const [selectedPriceRange, setSelectedPriceRange] = useState("All")
	const [selectedRam, setSelectedRam] = useState("All")
	const [selectedProcessor, setSelectedProcessor] = useState("All")

	const handleInput = (e) => {
		setInput(e.target.value)
	}

	const handleGetText = () => {
		setShowSearch("")
		setGetText(input)
	}

	const handleBrandChange = (event) => {
		setSelectedBrand(event.target.value)
	}

	const handlePriceChange = (event) => {
		setSelectedPriceRange(event.target.value)
	}

	const handleMemoryChange = (event) => {
		setSelectedRam(event.target.value)
	}
	
	const handleProcessorChange = (event) => {
		setSelectedProcessor(event.target.value)
	}

	const filterByBrand = (product) => 
		selectedBrand === "All" || product.brand === selectedBrand;

	const filterByRam = (product) => 
		selectedRam === "All" || product.memory === selectedRam

	const filterByProcessor = (product) => 
		selectedProcessor === "All" || product.processor === selectedProcessor

	const filterByStorage = (product) => 
		selectedProcessor === "All" || product.storage === selectedProcessor


		const priceFilterRange = (product) => {
			switch (selectedPriceRange) {
				case "below 500":
					return product.price < 500;
	
				case "500-599":
					return product.price < 1000 && product.price >= 500;
	
				case "1000-1999":
					return product.price < 2000 && product.price >= 1000;
	
				case "2000 Above":
					return product.price >= 2000
	
				default:
					return true
			}
		}	

	// const filterByBrand

	const filterProducts = Data.filter(filterByBrand).filter(priceFilterRange).filter(filterByRam).filter(filterByProcessor)


	const contextProps = {input, handleGetText, handleInput, showSearch, setShowSearch,handleBrandChange,selectedBrand,setSelectedBrand,filterProducts,selectedPriceRange,
		showNotification,setShowNotification,handlePriceChange,handleMemoryChange,selectedRam,handleProcessorChange,selectedProcessor}
	return (
		<MyContext.Provider value={contextProps}>
			{children}
		</MyContext.Provider>
	)
}

export default AppContext