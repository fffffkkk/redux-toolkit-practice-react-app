import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IRepo } from '../../models/IRepos'
import { IUser } from '../../models/IUser'
import { ServerResponse } from '../../models/models'

export const githubApi = createApi({
	reducerPath: 'github/api',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://api.github.com/',
	}),
	refetchOnFocus: true,
	endpoints: (build) => ({
		searchUsers: build.query<IUser[], string>({
			query: (search) => ({
				url: 'search/users',
				params: {
					q: search,
					per_page: 10,
				},
			}),
			transformResponse: (response: ServerResponse) => response.items,
		}),
		getUserRepos: build.query<IRepo[], string>({
			query: (user) => ({
				url: `users/${user}/repos`,
			}),
		}),
	}),
})

export const { useSearchUsersQuery, useLazyGetUserReposQuery } = githubApi
