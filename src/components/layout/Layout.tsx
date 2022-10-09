import React, { FC } from 'react'

import Navbar from '../Navbar'

interface LayoutProps {
	children: React.ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
	return (
		<>
			<Navbar />
			<div className='mx-auto my-0 max-w-[1200px]'>{children}</div>
		</>
	)
}

export default Layout
