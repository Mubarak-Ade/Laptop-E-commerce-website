import React, { useEffect, useState } from 'react'
import * as Fa from 'react-icons/fa6'
import Data from '../../../features/data/data'
import AllProduct from './allProduct'
import HpProduct from './hpProduct'
import Navbar from './navbar'
import DellProduct from './dellProduct'
import SamsungProduct from './samsungProduct'

function Product() {

    const [activeTab, setActiveTab] = useState('All')
    
  return (
        <div className="flex flex-col items-center justify-center text-center h-fit p-4 space-y-6 bg-sky-950 text-white">
            <h1 className="text-5xl">Products</h1>
            <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
            {activeTab === 'All' && <AllProduct />}
            {activeTab === 'Hp' && <HpProduct />}
            {activeTab === 'Dell' && <DellProduct />}
            {activeTab === 'Samsung' && <SamsungProduct />}
        </div>
  );
}

export default Product