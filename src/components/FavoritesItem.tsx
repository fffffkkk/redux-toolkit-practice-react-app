import React, { FC } from 'react'

interface FavoritesItemProps {
	favorites: string
}

const FavoritesItem: FC<FavoritesItemProps> = ({ favorites }) => {
	return (
		<li className=''>
			<a target='_blank' href={favorites}>
				{favorites}
			</a>
		</li>
	)
}

export default FavoritesItem
