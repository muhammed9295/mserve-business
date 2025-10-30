/**
 * Navbar Component Usage Examples
 * 
 * This file demonstrates different ways to use the reusable Navbar component
 */

import { Navbar } from '@/components/navbar'
import Image from 'next/image'

// Example 1: Minimal Navbar (uses defaults)
export function MinimalNavbar() {
	return <Navbar />
}

// Example 2: Navbar with custom text logo
export function TextLogoNavbar() {
	const menuItems = [
		{ label: 'Home', href: '/' },
		{ label: 'About', href: '/about' },
		{ label: 'Services', href: '/services' },
	]

	return (
		<Navbar
			logo={<span className="text-2xl font-bold text-primary">MyBrand</span>}
			menuItems={menuItems}
		/>
	)
}

// Example 3: Navbar with image logo
export function ImageLogoNavbar() {
	const menuItems = [
		{ label: 'Products', href: '/products' },
		{ label: 'Pricing', href: '/pricing' },
		{ label: 'Resources', href: '/resources' },
	]

	return (
		<Navbar
			logo={
				<Image
					src="/logo.svg"
					alt="Company Logo"
					width={120}
					height={40}
				/>
			}
			menuItems={menuItems}
		/>
	)
}

// Example 4: Navbar with multiple action buttons
export function MultiActionNavbar() {
	const menuItems = [
		{ label: 'Features', href: '#features' },
		{ label: 'Pricing', href: '#pricing' },
		{ label: 'Docs', href: '#docs' },
		{ label: 'Blog', href: '#blog' },
	]

	const actions = (
		<div className="flex items-center gap-3">
			<button className="px-4 py-2 text-sm font-medium hover:text-primary transition-colors">
				Login
			</button>
			<button className="px-5 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:bg-primary/90 transition-colors">
				Sign Up
			</button>
			<button className="px-4 py-2 border border-border rounded-md text-sm font-medium hover:bg-accent transition-colors">
				Contact
			</button>
		</div>
	)

	return (
		<Navbar
			menuItems={menuItems}
			actions={actions}
		/>
	)
}

// Example 5: Navbar with icon + text logo
export function IconTextNavbar() {
	const menuItems = [
		{ label: 'Dashboard', href: '/dashboard' },
		{ label: 'Analytics', href: '/analytics' },
		{ label: 'Reports', href: '/reports' },
	]

	const logo = (
		<div className="flex items-center gap-2">
			<div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
				<span className="text-primary-foreground font-bold">M</span>
			</div>
			<span className="text-xl font-semibold">MServe</span>
		</div>
	)

	return (
		<Navbar
			logo={logo}
			menuItems={menuItems}
		/>
	)
}

// Example 6: Navbar with custom styling
export function StyledNavbar() {
	const menuItems = [
		{ label: 'Home', href: '/' },
		{ label: 'Shop', href: '/shop' },
		{ label: 'About', href: '/about' },
	]

	return (
		<Navbar
			menuItems={menuItems}
			className="bg-accent/50 backdrop-blur-sm sticky top-0 z-50"
		/>
	)
}

// Example 7: Navbar with search and profile
export function SearchProfileNavbar() {
	const menuItems = [
		{ label: 'Explore', href: '/explore' },
		{ label: 'Categories', href: '/categories' },
		{ label: 'Trending', href: '/trending' },
	]

	const actions = (
		<div className="flex items-center gap-4">
			<div className="relative">
				<input
					type="search"
					placeholder="Search..."
					className="px-4 py-2 pr-10 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
				/>
			</div>
			<div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center cursor-pointer">
				<span className="text-primary-foreground font-medium">U</span>
			</div>
		</div>
	)

	return (
		<Navbar
			menuItems={menuItems}
			actions={actions}
		/>
	)
}

