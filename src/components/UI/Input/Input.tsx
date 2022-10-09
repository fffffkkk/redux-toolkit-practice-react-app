import React, { FC } from 'react'

interface InputProps {
	type: string
	placeholder: string
	value: string
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: FC<InputProps> = ({ type, placeholder, value, onChange }) => {
	return (
		<input
			className='border py-2 px-4 w-full h-[42px] mb-2'
			type={type}
			placeholder={placeholder}
			value={value}
			onChange={onChange}
		/>
	)
}

export default Input
