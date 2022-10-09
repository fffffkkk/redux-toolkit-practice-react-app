import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Favorites from '../pages/Favorites'
import Home from '../pages/Home'
import Error from '../pages/Error'

const AppRouter = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />}></Route>
			<Route path='/favorites' element={<Favorites />}></Route>
			<Route path='*' element={<Error />}></Route>
		</Routes>
	)
}

export default AppRouter
