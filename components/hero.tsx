import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { FaArrowRight } from 'react-icons/fa'

export function Hero() {
	return (
		<section id="home" className="relative w-full min-h-screen flex items-center overflow-hidden">
			{/* Background Image */}
			<div className="absolute inset-0 z-0">
			<Image
				src="/images/hero-image.png"
				alt="Hero Background"
				fill
				className="object-cover"
				priority
				quality={95}
			/>
			</div>

		{/* Content */}
		<div className="relative z-10 container mx-auto px-4 py-20 md:py-32">
			<div className="max-w-2xl bg-white/95 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-2xl">
				{/* Badge */}
				<div className="inline-block mb-6">
					<span className="px-6 py-3 rounded-full border-2 border-[#dd781b] text-[#dd781b] text-sm font-semibold bg-[#dd781b]/10">
						100% Saudi-Owned Company
					</span>
				</div>

				{/* Main Heading */}
				<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 mb-6 leading-tight">
					Professional Cleaning & Maintenance for Businesses
				</h1>

				{/* Subtitle */}
				<p className="text-lg md:text-xl text-blue-800 mb-8 leading-relaxed">
					Trusted by Saudi corporates for reliable facility services across Riyadh, Jeddah, Dammam, and AlUla.
				</p>

				{/* Credentials */}
				<div className="flex flex-wrap items-center gap-6 mb-8">
					<div className="flex items-center gap-2">
						<span className="w-2 h-2 bg-[#dd781b] rounded-full"></span>
						<span className="text-blue-900 font-medium">ISO-Certified</span>
					</div>
					<div className="flex items-center gap-2">
						<span className="w-2 h-2 bg-[#dd781b] rounded-full"></span>
						<span className="text-blue-900 font-medium">10+ Years Experience</span>
					</div>
					<div className="flex items-center gap-2">
						<span className="w-2 h-2 bg-[#dd781b] rounded-full"></span>
						<span className="text-blue-900 font-medium">ISSA Member</span>
					</div>
				</div>

			{/* CTA Button */}
			<Button
				size="lg"
				icon={<FaArrowRight className="w-5 h-5" />}
			>
				Request a Site Inspection
			</Button>

				{/* Stats */}
				<div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-blue-900/10">
					<div>
						<div className="text-3xl md:text-4xl font-bold text-[#dd781b] mb-2">500+</div>
						<div className="text-blue-900 text-xs md:text-sm font-medium">Corporate Clients</div>
					</div>
					<div>
						<div className="text-3xl md:text-4xl font-bold text-[#dd781b] mb-2">10+</div>
						<div className="text-blue-900 text-xs md:text-sm font-medium">Years of Excellence</div>
					</div>
					<div>
						<div className="text-3xl md:text-4xl font-bold text-[#dd781b] mb-2">99%</div>
						<div className="text-blue-900 text-xs md:text-sm font-medium">Client Satisfaction</div>
					</div>
				</div>
			</div>
		</div>
		</section>
	)
}

