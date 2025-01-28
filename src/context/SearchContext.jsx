import React, { createContext, useContext, useState } from 'react'
import Data from '../features/data/data'
import { MyContext } from './AppContexts'

export const SearchCon = createContext()

function SearchContext({children, showSearch, setShowSearch}) {
	const [value, setValue] = useState('')
	const [getSearch, setGetSearch] = useState(false)
	// const [searchList, setSearchList] = useState([])

	const handleSearchInput = (e) => {
		if(value !== '') {
			setGetSearch(false)
		}
		setValue(e.target.value)
	}

	const searchList = Data.filter((search) => search.brand.toLowerCase().includes(value.toLowerCase()) || search.name.toLowerCase().includes(value.toLowerCase()))

	console.log(searchList);
	

	const handleSearch = () => {
		if (value.trim() !== '') {
			setShowSearch(false)
		} else {
			setShowSearch(true)
		}	
	}

	const handleSearchClose= () => {
		setShowSearch(false)
		setValue('')
		setGetSearch(false)
	}

	const props = {value, searchList, handleSearch, setValue, getSearch, setGetSearch, handleSearchInput, handleSearchClose}

	return (
		<SearchCon.Provider value={props}>
			{children}
		</SearchCon.Provider>
	)
}

export default SearchContext