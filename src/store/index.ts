import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'

import { githubApi } from './github/github.api'
import { githubReducer } from './github/github.slice'

export const store = configureStore({
	reducer: {
		github: githubReducer,
		[githubApi.reducerPath]: githubApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(githubApi.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
