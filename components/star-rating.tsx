import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa'

interface StarRatingProps {
	rating: number
	maxRating?: number
	size?: 'sm' | 'md' | 'lg'
	color?: string
	className?: string
}

export function StarRating({
	rating,
	maxRating = 5,
	size = 'md',
	color = '#dd781b',
	className = '',
}: StarRatingProps) {
	const sizeClasses = {
		sm: 'w-4 h-4',
		md: 'w-5 h-5',
		lg: 'w-6 h-6',
	}

	const stars = []
	
	for (let i = 1; i <= maxRating; i++) {
		if (rating >= i) {
			// Full star
			stars.push(
				<FaStar
					key={i}
					className={sizeClasses[size]}
					style={{ color }}
				/>
			)
		} else if (rating >= i - 0.5) {
			// Half star
			stars.push(
				<FaStarHalfAlt
					key={i}
					className={sizeClasses[size]}
					style={{ color }}
				/>
			)
		} else {
			// Empty star
			stars.push(
				<FaRegStar
					key={i}
					className={sizeClasses[size]}
					style={{ color }}
				/>
			)
		}
	}

	return (
		<div className={`flex items-center gap-1 ${className}`}>
			{stars}
		</div>
	)
}

