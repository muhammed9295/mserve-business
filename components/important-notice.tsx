import { ReactNode } from 'react'
import { MdInfo } from 'react-icons/md'
import { FaMapMarkerAlt, FaFileAlt, FaClock } from 'react-icons/fa'

interface NoticeFeature {
	icon: ReactNode
	title: string
	description: string
}

interface ImportantNoticeProps {
	title?: string
	mainText?: string
	highlightText?: string
	features?: NoticeFeature[]
	whyImportant?: string
	className?: string
}

export function ImportantNotice({
	title = 'Important Notice Before Quotation',
	mainText = 'To ensure accurate pricing and tailored service solutions, a',
	highlightText = 'site inspection is mandatory',
	features = [
		{
			icon: <FaMapMarkerAlt className="w-6 h-6 text-blue-900" />,
			title: 'Site Visit',
			description: 'Our supervisors visit your location to assess the complete area',
		},
		{
			icon: <FaFileAlt className="w-6 h-6 text-blue-900" />,
			title: 'Detailed Assessment',
			description: 'Evaluate cleaning scope, maintenance needs, and technical requirements',
		},
		{
			icon: <FaClock className="w-6 h-6 text-blue-900" />,
			title: 'Quick Response',
			description: 'Detailed report and customized quotation within 24-48 hours',
		},
	],
	whyImportant = 'Every business has unique requirements. Our on-site inspection ensures we understand your specific needs, facility size, operational hours, and any special considerations — allowing us to provide accurate pricing and the most effective service plan.',
	className = '',
}: ImportantNoticeProps) {
	return (
		<section className={`w-full py-20 md:py-32 ${className}`}>
			<div className="container mx-auto px-4">
				<div className="max-w-5xl mx-auto">
				{/* Notice Card */}
				<div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-[#dd781b]">
					{/* Orange Header */}
					<div className="bg-[#dd781b] px-8 py-6">
							<div className="flex items-center gap-4">
								<div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
									<MdInfo className="w-7 h-7 text-white" />
								</div>
								<h2 className="text-3xl md:text-4xl font-bold text-white">
									{title}
								</h2>
							</div>
						</div>

						{/* Content */}
						<div className="p-8 md:p-12">
							{/* Main Text */}
							<p className="text-lg md:text-xl text-gray-700 mb-10 leading-relaxed">
								{mainText}{' '}
								<span className="font-bold text-blue-900">{highlightText}</span>{' '}
								before providing any quotation.
							</p>

					{/* Features Grid */}
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
						{features.map((feature, index) => (
							<div
								key={index}
								className="flex flex-col items-start gap-3"
							>
								{/* Icon and Title Row */}
								<div className="flex items-center gap-3">
									{/* Icon */}
									<div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
										{feature.icon}
									</div>

									{/* Title */}
									<h3 className="text-lg font-bold text-blue-900">
										{feature.title}
									</h3>
								</div>

								{/* Description */}
								<p className="text-gray-600 text-sm leading-relaxed">
									{feature.description}
								</p>
							</div>
						))}
					</div>

							{/* Why Important Box */}
							<div className="bg-gray-50 border-l-4 border-blue-900 p-6 rounded-r-lg">
								<p className="text-gray-700 leading-relaxed">
									<span className="font-bold text-blue-900">Why is this important?</span>{' '}
									{whyImportant}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

