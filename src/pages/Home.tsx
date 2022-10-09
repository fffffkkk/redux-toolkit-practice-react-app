import React, { useEffect, useState } from 'react'
import { useDebounce } from '../hooks/debounce'
import {
	useLazyGetUserReposQuery,
	useSearchUsersQuery,
} from '../store/github/github.api'
import SearchTerm from '../components/SearchTerm'
import RepoList from '../components/RepoList'

const Home = () => {
	const [search, setSearch] = useState('')
	const [dropdown, setDropdown] = useState(false)
	const debounced = useDebounce(search)
	const {
		data: users,
		isLoading,
		isError,
	} = useSearchUsersQuery(debounced, {
		skip: debounced.length < 3,
		refetchOnFocus: true,
	})
	const [
		fetchRepos,
		{ data: repos, isLoading: reposLoading, isError: reposError },
	] = useLazyGetUserReposQuery()

	useEffect(() => {
		setDropdown(debounced.length > 3 && users?.length !== 0)
	}, [users, debounced])

	const handleClick = (user: string) => {
		fetchRepos(user)
		setDropdown(false)
		setSearch('')
	}

	return (
		<div className='relative mx-auto w-[560px]'>
			<SearchTerm
				search={search}
				setSearch={setSearch}
				users={users}
				dropdown={dropdown}
				loading={isLoading}
				click={handleClick}
			/>
			<RepoList repos={repos} />
		</div>
	)
}

export default Home
