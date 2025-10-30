import { ReactNode } from 'react'

interface WhyChooseUsCard {
	icon: ReactNode
	title: string
	description: string
}

interface WhyChooseUsProps {
	cards?: WhyChooseUsCard[]
	className?: string
}

export function WhyChooseUs({
	cards = [],
	className = '',
}: WhyChooseUsProps) {
	return (
		<section id="why-choose-us" className={`w-full py-20 md:py-32 bg-gradient-to-br from-blue-900 to-blue-950 ${className}`}>
			<div className="container mx-auto px-4">
				{/* Section Header */}
				<div className="text-center mb-16">
					<p className="text-[#dd781b] text-sm font-bold uppercase tracking-wider mb-4">
						WHY CHOOSE US
					</p>
					<h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
						Excellence in Every Service
					</h2>
					<p className="text-lg text-gray-300 max-w-2xl mx-auto">
						Your trusted partner for comprehensive facility management solutions
					</p>
				</div>

				{/* Cards Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
					{cards.map((card, index) => (
						<div
							key={index}
							className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 hover:border-[#dd781b]/50 transition-all duration-300"
						>
						{/* Icon */}
						<div className="w-16 h-16 bg-[#3d3e61] rounded-xl flex items-center justify-center mb-6">
							{card.icon}
						</div>

							{/* Title */}
							<h3 className="text-xl font-bold text-white mb-4 leading-tight">
								{card.title}
							</h3>

							{/* Description */}
							<p className="text-gray-300 text-sm leading-relaxed">
								{card.description}
							</p>
						</div>
					))}
				</div>

				{/* Bottom CTA Text */}
				<div className="bg-blue-800/30 backdrop-blur-sm rounded-2xl p-8 border border-blue-700/30 text-center">
					<p className="text-white text-lg leading-relaxed">
						Join hundreds of satisfied corporate clients who trust Mserve Business for their facility management needs
					</p>
				</div>
			</div>
		</section>
	)
}

