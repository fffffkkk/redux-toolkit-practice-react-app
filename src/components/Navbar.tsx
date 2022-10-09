import React, { FC } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
	return (
		<div className='flex justify-between items-center h-[50px] px-5 shadow-md bg-gray-500 text-white'>
			<h2 className='font-bold'>Github API</h2>
			<nav>
				<Link to='/' className='mr-2'>
					Home
				</Link>
				<Link to='/favorites'>Favorites</Link>
			</nav>
		</div>
	)
}

export default Navbar
