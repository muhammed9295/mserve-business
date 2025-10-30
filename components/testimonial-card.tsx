import { StarRating } from '@/components/star-rating'
import { FaBuilding } from 'react-icons/fa'

interface TestimonialCardProps {
	rating: number
	quote: string
	clientName: string
	clientTitle: string
	clientLocation?: string
	className?: string
}

export function TestimonialCard({
	rating,
	quote,
	clientName,
	clientTitle,
	clientLocation,
	className = '',
}: TestimonialCardProps) {
	return (
		<div className={`bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300 h-full flex flex-col ${className}`}>
			{/* Star Rating */}
			<StarRating rating={rating} size="md" className="mb-6" />

			{/* Quote */}
			<blockquote className="text-gray-700 italic leading-relaxed mb-6 flex-grow">
				&ldquo;{quote}&rdquo;
			</blockquote>

			{/* Client Info */}
			<div className="flex items-center gap-4">
				{/* Icon Badge */}
				<div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
					<FaBuilding className="w-5 h-5 text-white" />
				</div>

				{/* Client Details */}
				<div>
					<p className="font-bold text-blue-900 text-base">
						{clientName}
					</p>
					<p className="text-gray-600 text-sm">
						{clientTitle}
						{clientLocation && `, ${clientLocation}`}
					</p>
				</div>
			</div>
		</div>
	)
}

