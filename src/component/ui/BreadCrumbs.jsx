import React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

function BreadCrumbs() {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    return (
        <div>
            <nav aria-label='breadcrumb' className='font-roboto text-base font-bold'>
                <ol className="text-black flex">
                    <li className='before:p-[0_5px] before:content-["/"]'>
                        <NavLink to="/" className={({isActive}) => (isActive ? 'text-danger text-3xl' : '')}>Home</NavLink>
                    </li>
                    {pathnames.map((value, index) => {
                        const to = `${pathnames.slice(0, index + 1).join('/')}`;
                        const isLast = index === pathnames.length - 1;
                        return isLast ? (
                            <li className="before:p-[0_5px] before:content-['/']" arial-current="page">{value}</li>) : (
                            <li key={to} className='before:p-[0_5px] before:content-["/"]'><NavLink to={to} className={({isActive}) => (isActive ? 'text-danger bg-blue-600' : '')}>{value}</NavLink></li>
                        )
                    })}
                </ol>
            </nav>
        </div>
    )
}

export default BreadCrumbs