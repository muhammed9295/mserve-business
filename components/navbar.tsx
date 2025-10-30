'use client'

import { ReactNode, useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'

interface NavbarMenuItem {
	label: string
	href: string
}

interface NavbarProps {
	logo?: ReactNode
	menuItems?: NavbarMenuItem[]
	actions?: ReactNode
	className?: string
}

export function Navbar({
	logo,
	menuItems = [],
	actions,
	className = '',
}: NavbarProps) {
	const [isScrolled, setIsScrolled] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 10) {
				setIsScrolled(true)
			} else {
				setIsScrolled(false)
			}
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	return (
		<nav
			className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				isScrolled
					? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-border'
					: 'bg-transparent'
			} ${className}`}
		>
			<div className="container mx-auto px-4 py-5">
				<div className="flex items-center justify-between">
					{/* Logo Section - Left */}
					<div className="flex items-center scale-110">
						{logo || (
							<div className="text-2xl font-semibold">
								Logo
							</div>
						)}
					</div>

					{/* Menu Section - Center */}
					<div className="hidden md:flex items-center justify-center flex-1">
						<div className="flex items-center gap-8">
							{menuItems.map((item, index) => (
								<a
									key={index}
									href={item.href}
									className="text-base font-medium hover:text-[#dd781b] transition-colors duration-200"
								>
									{item.label}
								</a>
							))}
						</div>
					</div>

					{/* Actions Section - Right */}
					<div className="flex items-center">
						{actions || (
							<Button size="md">
								Request Quote
							</Button>
						)}
					</div>
				</div>
			</div>
		</nav>
	)
}
