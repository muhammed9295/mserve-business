interface ServiceInfoProps {
	categories?: string[]
	className?: string
}

export function ServiceInfo({
	categories = [
		'Offices & Corporate',
		'Schools & Education',
		'Retail & Commercial',
		'Medical Facilities',
	],
	className = '',
}: ServiceInfoProps) {
	return (
		<div className={`mt-8 ${className}`}>
			{/* Description Text */}
			<div className="space-y-4 mb-6">
				<p className="text-gray-700 text-base leading-relaxed">
					Mserve provides integrated{' '}
					<span className="font-bold text-gray-900">Cleaning and Maintenance services</span>{' '}
					tailored for offices, schools, retail, and corporate spaces.
				</p>
				<p className="text-gray-700 text-base leading-relaxed">
					We ensure spotless, safe, and efficient workplaces — supported by over{' '}
					<span className="font-bold text-gray-900">10 years of experience</span> in Saudi
					Arabia&apos;s commercial sector.
				</p>
			</div>

			{/* Category Badges */}
			<div className="flex flex-wrap gap-3">
				{categories.map((category, index) => (
					<span
						key={index}
						className="px-5 py-2.5 bg-gray-100 text-gray-800 rounded-full text-sm font-medium hover:bg-blue-50 hover:text-blue-900 transition-colors cursor-pointer"
					>
						{category}
					</span>
				))}
			</div>
		</div>
	)
}

