import { ReactNode } from 'react'
import { Button } from '@/components/ui/button'
import { FaArrowRight } from 'react-icons/fa'

interface ProcessStep {
	icon: ReactNode
	title: string
	description: string
}

interface HowItWorksProps {
	steps?: ProcessStep[]
	className?: string
}

export function HowItWorks({
	steps = [],
	className = '',
}: HowItWorksProps) {
	return (
		<section className={`w-full py-20 md:py-32 bg-gray-50 ${className}`}>
			<div className="container mx-auto px-4">
				{/* Section Header */}
				<div className="text-center mb-16">
					<p className="text-[#dd781b] text-sm font-bold uppercase tracking-wider mb-4">
						HOW IT WORKS
					</p>
					<h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
						Simple, Transparent Process
					</h2>
					<p className="text-lg text-gray-600 max-w-2xl mx-auto">
						From initial request to service delivery — we make it seamless
					</p>
				</div>

				{/* Process Steps */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
					{steps.map((step, index) => (
						<div key={index} className="relative">
							{/* Card */}
							<div className="group bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-[#dd781b] hover:shadow-xl transition-all duration-300 relative h-full flex flex-col">
								{/* Step Number Badge */}
								<div className="absolute -top-3 -right-3 w-8 h-8 bg-[#dd781b] text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
									{index + 1}
								</div>

								{/* Icon */}
								<div className="w-16 h-16 bg-blue-900 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
									<div className="text-white">
										{step.icon}
									</div>
								</div>

								{/* Title */}
								<h3 className="text-lg font-bold text-blue-900 mb-3 text-center">
									{step.title}
								</h3>

								{/* Description */}
								<p className="text-gray-600 text-sm leading-relaxed text-center flex-grow">
									{step.description}
								</p>
							</div>

							{/* Connecting Arrow (hidden on mobile and last item) */}
							{index < steps.length - 1 && (
								<div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
									<div className="w-6 h-0.5 bg-[#dd781b]"></div>
								</div>
							)}
						</div>
					))}
				</div>

				{/* CTA Section */}
				<div className="text-center">
					<p className="text-gray-700 text-lg mb-6">
						Ready to experience professional facility management?
					</p>
					<Button
						size="lg"
						icon={<FaArrowRight className="w-5 h-5" />}
					>
						Start Your Request Now
					</Button>
				</div>
			</div>
		</section>
	)
}

