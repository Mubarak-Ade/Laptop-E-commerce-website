import React from 'react'

function Navbar({setActiveTab, activeTab}) {
  return (
    <>
        <ul id='product-nav' className='flex w-full gap-6 text-center text-xl justify-center'>
            <li onClick={() => setActiveTab('All')} className={activeTab === 'All'? 
            ' border-b-2 border-secondary text-center cursor-pointer p-2' : 
            'active:border-b-2 active:border-blue-800 text-center cursor-pointer p-2 transition-colors'}>All</li>
            <li onClick={() => setActiveTab('Hp')} className={activeTab === 'Hp'? 
            ' border-b-2 border-secondary text-center cursor-pointer p-2' : 
            'active:border-b-2 active:border-blue-800 text-center cursor-pointer p-2'}>Hp</li>
            <li onClick={() => setActiveTab('Dell')} className={activeTab === 'Dell'? 
            ' border-b-2 border-secondary text-center cursor-pointer p-2' : 
            'active:border-b-2 active:border-blue-800 text-center cursor-pointer p-2'}>Dell</li>
            <li onClick={() => setActiveTab('Samsung')} className={activeTab === 'Samsung'? 
            ' border-b-2 border-secondary text-center cursor-pointer p-2' : 
            'active:border-b-2 active:border-blue-800 text-center cursor-pointer p-2'}>Samsung</li>
        </ul>
    </>
  )
}

export default Navbar