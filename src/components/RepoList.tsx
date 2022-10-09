import React, { FC } from 'react'
import { IRepo } from '../models/IRepos'
import RepoItem from './RepoItem'

interface RepoListProps {
	repos: IRepo[] | undefined
}

const RepoList: FC<RepoListProps> = ({ repos }) => {
	return (
		<div className='cursor-pointer'>
			{repos?.map((repo) => (
				<RepoItem repo={repo} key={repo.id} />
			))}
		</div>
	)
}

export default RepoList
