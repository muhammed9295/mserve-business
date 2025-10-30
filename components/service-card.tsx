import { ReactNode } from 'react'

interface ServiceCardProps {
	icon: ReactNode
	title: string
	description: string
	className?: string
}

export function ServiceCard({
	icon,
	title,
	description,
	className = '',
}: ServiceCardProps) {
	return (
		<div
			className={`group bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:scale-105 hover:border-[#dd781b] transition-all duration-300 cursor-pointer ${className}`}
		>
		{/* Icon */}
		<div className="w-14 h-14 bg-[#f4ebe3] group-hover:bg-blue-900 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300 shadow-sm">
			<div className="[&>*]:group-hover:text-white [&>*]:transition-colors [&>*]:duration-300">
				{icon}
			</div>
		</div>

			{/* Title */}
			<h3 className="text-xl font-bold text-blue-900 mb-4">
				{title}
			</h3>

			{/* Description */}
			<p className="text-gray-600 leading-relaxed">
				{description}
			</p>
		</div>
	)
}

