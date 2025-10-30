import { ReactNode } from 'react'
import { ServiceCard } from '@/components/service-card'
import { ServiceInfo } from '@/components/service-info'

interface Service {
	icon: ReactNode
	title: string
	description: string
}

interface OurServicesProps {
	services: Service[]
	rightColumn?: ReactNode
	showServiceInfo?: boolean
	serviceCategories?: string[]
	className?: string
}

export function OurServices({
	services,
	rightColumn,
	showServiceInfo = true,
	serviceCategories,
	className = '',
}: OurServicesProps) {
	return (
		<section id="services" className={`w-full py-20 md:py-32 bg-gray-50 ${className}`}>
			<div className="container mx-auto px-4">
				{/* Section Header */}
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
						Our Services
					</h2>
					<p className="text-lg text-gray-600 max-w-2xl mx-auto">
						Comprehensive facility management solutions tailored to your business needs
					</p>
				</div>

				{/* Two Column Layout */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
					{/* Left Column - Service Cards and Info */}
					<div>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							{services.map((service, index) => (
								<ServiceCard
									key={index}
									icon={service.icon}
									title={service.title}
									description={service.description}
								/>
							))}
						</div>
						
						{/* Service Info Below Cards */}
						{showServiceInfo && <ServiceInfo categories={serviceCategories} />}
					</div>

					{/* Right Column */}
					<div className="flex items-center justify-center">
						{rightColumn || (
							<div className="text-center text-gray-400">
								{/* Empty space for future content */}
							</div>
						)}
					</div>
				</div>
			</div>
		</section>
	)
}

