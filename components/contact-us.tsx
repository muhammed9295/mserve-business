import { ReactNode } from 'react'
import { ContactCard } from '@/components/contact-card'
import Image from 'next/image'
import { FaBuilding, FaCircle } from 'react-icons/fa'
import { MdLocationOn } from 'react-icons/md'

interface ContactInfo {
	icon: ReactNode
	title: string
	value: string
	subtitle: string
}

interface ContactUsProps {
	contactInfo?: ContactInfo[]
	rightImage?: string
	className?: string
}

export function ContactUs({
	contactInfo = [],
	rightImage = '/images/contact.jpg',
	className = '',
}: ContactUsProps) {
	return (
		<section id="contact-us" className={`w-full py-20 md:py-32 bg-gray-50 ${className}`}>
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
					{/* Left Column - Contact Information */}
					<div>
						{/* Section Header */}
						<div className="mb-12">
							<p className="text-[#dd781b] text-sm font-bold uppercase tracking-wider mb-4">
								CONTACT US
							</p>
							<h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
								Get in Touch
							</h2>
							<p className="text-lg text-gray-600">
								Ready to elevate your facility management? Reach out to discuss your requirements.
							</p>
						</div>

						{/* Contact Cards */}
						<div className="space-y-4 mb-8">
							{contactInfo.map((contact, index) => (
								<ContactCard
									key={index}
									icon={contact.icon}
									title={contact.title}
									value={contact.value}
									subtitle={contact.subtitle}
								/>
							))}
						</div>

						{/* Serving Cities Box */}
						<div className="bg-blue-900 rounded-2xl p-6">
							<div className="flex items-start gap-4">
								<div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
									<MdLocationOn className="w-6 h-6 text-white" />
								</div>
								<div>
									<h3 className="text-xl font-bold text-white mb-3">
										Serving Major Saudi Cities
									</h3>
									<p className="text-gray-200 text-base mb-3">
										Riyadh | Jeddah | Dammam | AlUla
									</p>
									<p className="text-gray-300 text-sm">
										Headquarters: Riyadh, Saudi Arabia
									</p>
								</div>
							</div>
						</div>
					</div>

					{/* Right Column - Image and Company Info */}
					<div className="flex flex-col gap-6">
					{/* Image */}
					<div className="relative w-full h-80 rounded-2xl overflow-hidden shadow-xl">
					<Image
						src={rightImage}
						alt="Contact Mserve Business"
						fill
						className="object-cover"
						quality={95}
					/>
					</div>

						{/* Company Info Box */}
						<div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
							<div className="flex items-center gap-4 mb-6">
								<div className="w-14 h-14 bg-[#dd781b]/10 rounded-xl flex items-center justify-center">
									<FaBuilding className="w-7 h-7 text-[#dd781b]" />
								</div>
								<div>
									<h3 className="text-2xl font-bold text-blue-900">
										Mserve Business
									</h3>
									<p className="text-gray-600">A Division of Mserve</p>
								</div>
							</div>

							{/* Company Credentials */}
							<div className="space-y-3">
								<div className="flex items-center gap-3">
									<FaCircle className="w-2 h-2 text-[#dd781b] flex-shrink-0" />
									<p className="text-gray-700">ISO-Certified Facility Management Company</p>
								</div>
								<div className="flex items-center gap-3">
									<FaCircle className="w-2 h-2 text-[#dd781b] flex-shrink-0" />
									<p className="text-gray-700">ISSA Member Organization</p>
								</div>
								<div className="flex items-center gap-3">
									<FaCircle className="w-2 h-2 text-[#dd781b] flex-shrink-0" />
									<p className="text-gray-700">100% Saudi-Owned and Operated</p>
								</div>
								<div className="flex items-center gap-3">
									<FaCircle className="w-2 h-2 text-[#dd781b] flex-shrink-0" />
									<p className="text-gray-700">Serving Saudi Businesses Since 2014</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

