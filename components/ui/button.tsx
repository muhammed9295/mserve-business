import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'primary' | 'secondary' | 'outline'
	size?: 'sm' | 'md' | 'lg'
	children: ReactNode
	icon?: ReactNode
	className?: string
}

export function Button({
	variant = 'primary',
	size = 'md',
	children,
	icon,
	className = '',
	...props
}: ButtonProps) {
	const baseStyles = 'font-semibold rounded-lg transition-colors inline-flex items-center justify-center gap-2'
	
	const variantStyles = {
		primary: 'bg-[#dd781b] text-white hover:bg-[#c96a18] shadow-lg',
		secondary: 'bg-white text-foreground hover:bg-gray-50 shadow-lg',
		outline: 'border-2 border-[#dd781b] text-[#dd781b] hover:bg-[#dd781b]/10',
	}
	
	const sizeStyles = {
		sm: 'px-4 py-2 text-sm',
		md: 'px-6 py-3 text-base',
		lg: 'px-8 py-4 text-lg',
	}
	
	return (
		<button
			className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
			{...props}
		>
			{children}
			{icon}
		</button>
	)
}

