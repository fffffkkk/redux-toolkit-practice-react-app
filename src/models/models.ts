import { IUser } from './IUser'

export interface ServerResponse {
	total_count: number
	incomplete_results: boolean
	items: IUser[]
}
