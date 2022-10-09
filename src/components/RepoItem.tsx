import React, { FC, useState } from 'react'
import { useActions } from '../hooks/actions'
import { useAppSelector } from '../hooks/redux'
import { IRepo } from '../models/IRepos'
import Button from './UI/button/Button'

interface RepoItemProps {
	repo: IRepo
}

const RepoItem: FC<RepoItemProps> = ({ repo }) => {
	const { addFavorites, removeFavorites } = useActions()
	const { favorites } = useAppSelector((state) => state.github)
	const [isFavorites, setIsFavorites] = useState(
		favorites.includes(repo.html_url)
	)

	const addToFavorites = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		addFavorites(repo.html_url)
		setIsFavorites(true)
	}

	const removeFromFavorites = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		removeFavorites(repo.html_url)
		setIsFavorites(false)
	}

	return (
		<a href={repo.html_url} target='_blank'>
			<div className='border py-2 px-4 rounded mb-2 hover:shadow-md hover:bg-gray-100 transition-all flex items-center'>
				<img
					className='w-10 h-10 rounded-full mr-2'
					src={repo.owner.avatar_url}
					alt='avatar'
				/>
				<div>
					<h2 className='text-lg font-bold'>{repo.full_name}</h2>
					<p className='text-sm'>
						Forks: <span className='font-bold mr-2'>{repo.forks}</span>
						Watchers: <span className='font-bold'>{repo.watchers}</span>
					</p>
					{isFavorites ? (
						<Button
							classes='py-1 px-3 mr-2 bg-red-400 rounded hover:shadow-md transition-all'
							click={removeFromFavorites}
						>
							Remove
						</Button>
					) : (
						<Button
							classes='py-1 px-3 mr-2 bg-yellow-400 rounded hover:shadow-md transition-all'
							click={addToFavorites}
						>
							ADD
						</Button>
					)}
				</div>
			</div>
		</a>
	)
}

export default RepoItem
