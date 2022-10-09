import React, { FC } from 'react'

interface ButtonProps {
	children: React.ReactNode
	click: (e: React.MouseEvent<HTMLButtonElement>) => void
	classes?: string
}

const Button: FC<ButtonProps> = ({ children, click, classes }) => {
	return (
		<button className={classes} onClick={(e) => click(e)}>
			{children}
		</button>
	)
}

export default Button
