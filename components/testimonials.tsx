'use client'

import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { TestimonialCard } from '@/components/testimonial-card'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

interface Testimonial {
	rating: number
	quote: string
	clientName: string
	clientTitle: string
	clientLocation?: string
}

interface TestimonialsProps {
	testimonials: Testimonial[]
	autoplay?: boolean
	autoplayDelay?: number
	className?: string
}

export function Testimonials({
	testimonials,
	autoplay = true,
	autoplayDelay = 5000,
	className = '',
}: TestimonialsProps) {
	const [emblaRef, emblaApi] = useEmblaCarousel({
		loop: true,
		align: 'start',
		slidesToScroll: 1,
	})

	const [canScrollPrev, setCanScrollPrev] = useState(false)
	const [canScrollNext, setCanScrollNext] = useState(false)

	const scrollPrev = useCallback(() => {
		if (emblaApi) emblaApi.scrollPrev()
	}, [emblaApi])

	const scrollNext = useCallback(() => {
		if (emblaApi) emblaApi.scrollNext()
	}, [emblaApi])

	const onSelect = useCallback(() => {
		if (!emblaApi) return
		setCanScrollPrev(emblaApi.canScrollPrev())
		setCanScrollNext(emblaApi.canScrollNext())
	}, [emblaApi])

	useEffect(() => {
		if (!emblaApi) return
		onSelect()
		emblaApi.on('select', onSelect)
		emblaApi.on('reInit', onSelect)
	}, [emblaApi, onSelect])

	// Autoplay functionality
	useEffect(() => {
		if (!emblaApi || !autoplay) return

		const interval = setInterval(() => {
			emblaApi.scrollNext()
		}, autoplayDelay)

		return () => clearInterval(interval)
	}, [emblaApi, autoplay, autoplayDelay])

	// Show static grid if 3 or fewer testimonials
	if (testimonials.length <= 3) {
		return (
			<section className={`w-full py-20 md:py-32 bg-gray-50 ${className}`}>
				<div className="container mx-auto px-4">
					{/* Section Header */}
					<div className="text-center mb-16">
						<p className="text-[#dd781b] text-sm font-bold uppercase tracking-wider mb-4">
							CLIENT TRUST
						</p>
						<h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
							Trusted by Leading Saudi Businesses
						</h2>
						<p className="text-lg text-gray-600 max-w-3xl mx-auto">
							Mserve Business is the preferred facility management partner for commercial and corporate sectors across the Kingdom
						</p>
					</div>

					{/* Testimonials Grid */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
						{testimonials.map((testimonial, index) => (
							<TestimonialCard
								key={index}
								rating={testimonial.rating}
								quote={testimonial.quote}
								clientName={testimonial.clientName}
								clientTitle={testimonial.clientTitle}
								clientLocation={testimonial.clientLocation}
							/>
						))}
					</div>

			{/* Bottom CTA Box */}
			<div className="bg-blue-900 rounded-2xl p-8 md:p-12">
				<div className="max-w-3xl mx-auto">
					<h3 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
						Join Our Growing List of Satisfied Corporate Clients
					</h3>
					<p className="text-gray-200 text-lg mb-8 text-center">
						Experience the difference of working with Saudi Arabia&apos;s trusted facility management company
					</p>

					{/* Stats */}
					<div className="flex items-center justify-center gap-8 md:gap-12">
						<div className="text-center">
							<div className="text-4xl md:text-5xl font-bold text-[#dd781b] mb-2">500+</div>
							<div className="text-gray-200 text-sm">Active Clients</div>
						</div>
						
						<div className="h-16 w-px bg-gray-600"></div>
						
						<div className="text-center">
							<div className="text-4xl md:text-5xl font-bold text-[#dd781b] mb-2">99%</div>
							<div className="text-gray-200 text-sm">Satisfaction Rate</div>
						</div>
						
						<div className="h-16 w-px bg-gray-600"></div>
						
						<div className="text-center">
							<div className="text-4xl md:text-5xl font-bold text-[#dd781b] mb-2">10+</div>
							<div className="text-gray-200 text-sm">Years Experience</div>
						</div>
					</div>
				</div>
			</div>
				</div>
			</section>
		)
	}

	// Show carousel if more than 3 testimonials
	return (
		<section className={`w-full py-20 md:py-32 bg-gray-50 ${className}`}>
			<div className="container mx-auto px-4">
				{/* Section Header */}
				<div className="text-center mb-16">
					<p className="text-[#dd781b] text-sm font-bold uppercase tracking-wider mb-4">
						CLIENT TRUST
					</p>
					<h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
						Trusted by Leading Saudi Businesses
					</h2>
					<p className="text-lg text-gray-600 max-w-3xl mx-auto">
						Mserve Business is the preferred facility management partner for commercial and corporate sectors across the Kingdom
					</p>
				</div>

				{/* Carousel */}
				<div className="relative mb-16">
					<div className="overflow-hidden" ref={emblaRef}>
						<div className="flex gap-6">
							{testimonials.map((testimonial, index) => (
								<div
									key={index}
									className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0"
								>
									<TestimonialCard
										rating={testimonial.rating}
										quote={testimonial.quote}
										clientName={testimonial.clientName}
										clientTitle={testimonial.clientTitle}
										clientLocation={testimonial.clientLocation}
									/>
								</div>
							))}
						</div>
					</div>

					{/* Navigation Buttons */}
					<button
						onClick={scrollPrev}
						disabled={!canScrollPrev}
						className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-blue-900 hover:bg-[#dd781b] hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
						aria-label="Previous testimonial"
					>
						<FaChevronLeft className="w-5 h-5" />
					</button>
					<button
						onClick={scrollNext}
						disabled={!canScrollNext}
						className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-blue-900 hover:bg-[#dd781b] hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
						aria-label="Next testimonial"
					>
						<FaChevronRight className="w-5 h-5" />
					</button>
				</div>

				{/* Bottom CTA Box */}
				<div className="bg-blue-900 rounded-2xl p-8 md:p-12">
					<div className="max-w-3xl mx-auto">
						<h3 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
							Join Our Growing List of Satisfied Corporate Clients
						</h3>
						<p className="text-gray-200 text-lg mb-8 text-center">
							Experience the difference of working with Saudi Arabia&apos;s trusted facility management company
						</p>

						{/* Stats */}
						<div className="flex items-center justify-center gap-8 md:gap-12">
							<div className="text-center">
								<div className="text-4xl md:text-5xl font-bold text-[#dd781b] mb-2">500+</div>
								<div className="text-gray-200 text-sm">Active Clients</div>
							</div>
							
							<div className="h-16 w-px bg-gray-600"></div>
							
							<div className="text-center">
								<div className="text-4xl md:text-5xl font-bold text-[#dd781b] mb-2">99%</div>
								<div className="text-gray-200 text-sm">Satisfaction Rate</div>
							</div>
							
							<div className="h-16 w-px bg-gray-600"></div>
							
							<div className="text-center">
								<div className="text-4xl md:text-5xl font-bold text-[#dd781b] mb-2">10+</div>
								<div className="text-gray-200 text-sm">Years Experience</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

