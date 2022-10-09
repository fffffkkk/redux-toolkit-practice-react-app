import React, { FC, useEffect } from 'react'
import { IUser } from '../models/IUser'
import Input from './UI/Input/Input'

interface SearchTermProps {
	search: string
	setSearch: React.Dispatch<React.SetStateAction<string>>
	dropdown: boolean
	users: IUser[] | undefined
	loading: boolean
	click: (user: string) => void
}

const SearchTerm: FC<SearchTermProps> = ({
	search,
	setSearch,
	dropdown,
	users,
	loading,
	click,
}) => {
	return (
		<div>
			<Input
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				placeholder='enter'
				type='text'
			/>
			{dropdown && (
				<ul className='list-none absolute top-[42px] left-0 ring-0 max-h-[200px] overflow-y-scroll shadow-md bg-white w-full'>
					{loading && <p className='text-center'>Loading...</p>}
					{users?.map((user) => (
						<li
							className='py-2 px-4 hover:bg-gray-500 hover:text-white transition-colors cursor-pointer'
							key={user.id}
							onClick={() => click(user.login)}
						>
							{user.login}
						</li>
					))}
				</ul>
			)}
		</div>
	)
}

export default SearchTerm
