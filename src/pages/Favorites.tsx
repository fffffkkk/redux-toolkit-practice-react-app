import React from 'react'
import FavoritesItem from '../components/FavoritesItem'
import { useAppSelector } from '../hooks/redux'

const Favorites = () => {
	const { favorites } = useAppSelector((state) => state.github)
	return (
		<ul className='list-none'>
			{favorites.map((f) => (
				<FavoritesItem favorites={f} key={f} />
			))}
		</ul>
	)
}

export default Favorites
