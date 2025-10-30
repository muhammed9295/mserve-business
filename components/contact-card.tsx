import { ReactNode } from 'react'

interface ContactCardProps {
	icon: ReactNode
	title: string
	value: string
	subtitle: string
	className?: string
}

export function ContactCard({
	icon,
	title,
	value,
	subtitle,
	className = '',
}: ContactCardProps) {
	return (
		<div className={`bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300 ${className}`}>
			<div className="flex items-start gap-4">
				{/* Icon */}
				<div className="w-12 h-12 bg-[#dd781b]/10 rounded-xl flex items-center justify-center flex-shrink-0">
					<div className="text-[#dd781b]">
						{icon}
					</div>
				</div>

				{/* Content */}
				<div className="flex-1">
					<h3 className="text-lg font-bold text-blue-900 mb-1">
						{title}
					</h3>
					<p className="text-blue-900 text-base mb-2">
						{value}
					</p>
					<p className="text-[#dd781b] text-sm font-medium">
						{subtitle}
					</p>
				</div>
			</div>
		</div>
	)
}

