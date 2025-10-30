'use client'

import { FormEvent, useState } from 'react'
import { Button } from '@/components/ui/button'
import { FaPaperPlane, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa'

interface QuickRequestFormProps {
	className?: string
	onSubmit?: (data: FormData) => void
}

interface FormData {
	companyName: string
	contactPerson: string
	phone: string
	email: string
	city: string
	service: string
	additionalDetails: string
}

export function QuickRequestForm({ className = '', onSubmit }: QuickRequestFormProps) {
	const [formData, setFormData] = useState<FormData>({
		companyName: '',
		contactPerson: '',
		phone: '',
		email: '',
		city: '',
		service: '',
		additionalDetails: '',
	})

	const [isSubmitting, setIsSubmitting] = useState(false)
	const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault()
		setIsSubmitting(true)
		setSubmitStatus('idle')

		try {
			const response = await fetch('/api/submit-form', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			})

			if (response.ok) {
				setSubmitStatus('success')
				// Reset form
				setFormData({
					companyName: '',
					contactPerson: '',
					phone: '',
					email: '',
					city: '',
					service: '',
					additionalDetails: '',
				})
				
				// Call optional onSubmit callback
				if (onSubmit) {
					onSubmit(formData)
				}

				// Auto-hide success message after 5 seconds
				setTimeout(() => {
					setSubmitStatus('idle')
				}, 5000)
			} else {
				setSubmitStatus('error')
			}
		} catch (error) {
			setSubmitStatus('error')
		} finally {
			setIsSubmitting(false)
		}
	}

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target
		setFormData((prev) => ({ ...prev, [name]: value }))
	}

	return (
		<div className={`bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-8 shadow-2xl ${className}`}>
			<h2 className="text-3xl font-bold text-white mb-8">Quick Request Form</h2>

			{/* Success Message */}
			{submitStatus === 'success' && (
				<div className="mb-6 p-4 bg-green-500/20 border border-green-500 rounded-lg flex items-center gap-3">
					<FaCheckCircle className="w-5 h-5 text-[#dd781b]" />
					<p className="text-[#dd781b] font-medium">
						Thank you! Your request has been submitted successfully.
					</p>
				</div>
			)}

			{/* Error Message */}
			{submitStatus === 'error' && (
				<div className="mb-6 p-4 bg-red-500/20 border border-red-500 rounded-lg flex items-center gap-3">
					<FaExclamationCircle className="w-5 h-5 text-[#dd781b]" />
					<p className="text-[#dd781b] font-medium">
						Something went wrong. Please try again.
					</p>
				</div>
			)}

			<form onSubmit={handleSubmit} className="space-y-6">
				{/* Company Name */}
				<div>
					<label className="block text-white font-medium mb-2">
						Company Name <span className="text-[#dd781b]">*</span>
					</label>
					<input
						type="text"
						name="companyName"
						value={formData.companyName}
						onChange={handleChange}
						placeholder="Your Company Name"
						required
						className="w-full px-4 py-3 rounded-lg bg-blue-800/50 border border-blue-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#dd781b] transition-all"
					/>
				</div>

				{/* Contact Person */}
				<div>
					<label className="block text-white font-medium mb-2">
						Contact Person <span className="text-[#dd781b]">*</span>
					</label>
					<input
						type="text"
						name="contactPerson"
						value={formData.contactPerson}
						onChange={handleChange}
						placeholder="Full Name"
						required
						className="w-full px-4 py-3 rounded-lg bg-blue-800/50 border border-blue-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#dd781b] transition-all"
					/>
				</div>

				{/* Phone and Email */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<div>
						<label className="block text-white font-medium mb-2">
							Phone <span className="text-[#dd781b]">*</span>
						</label>
						<input
							type="tel"
							name="phone"
							value={formData.phone}
							onChange={handleChange}
							placeholder="+966 5X XXX XXXX"
							required
							className="w-full px-4 py-3 rounded-lg bg-blue-800/50 border border-blue-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#dd781b] transition-all"
						/>
					</div>
					<div>
						<label className="block text-white font-medium mb-2">
							Email <span className="text-[#dd781b]">*</span>
						</label>
						<input
							type="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							placeholder="email@company.com"
							required
							className="w-full px-4 py-3 rounded-lg bg-blue-800/50 border border-blue-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#dd781b] transition-all"
						/>
					</div>
				</div>

				{/* City and Service */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<div>
						<label className="block text-white font-medium mb-2">
							City / Location <span className="text-[#dd781b]">*</span>
						</label>
						<select
							name="city"
							value={formData.city}
							onChange={handleChange}
							required
							className="w-full px-4 py-3 rounded-lg bg-blue-800/50 border border-blue-700 text-white focus:outline-none focus:ring-2 focus:ring-[#dd781b] transition-all appearance-none cursor-pointer"
						>
							<option value="">Select City</option>
							<option value="Riyadh">Riyadh</option>
							<option value="Jeddah">Jeddah</option>
							<option value="Dammam">Dammam</option>
							<option value="Al Khobar">Al Khobar</option>
						</select>
					</div>
					<div>
						<label className="block text-white font-medium mb-2">
							Service Required <span className="text-[#dd781b]">*</span>
						</label>
						<select
							name="service"
							value={formData.service}
							onChange={handleChange}
							required
							className="w-full px-4 py-3 rounded-lg bg-blue-800/50 border border-blue-700 text-white focus:outline-none focus:ring-2 focus:ring-[#dd781b] transition-all appearance-none cursor-pointer"
						>
							<option value="">Select Service</option>
							<option value="Normal Cleaning">Normal Cleaning</option>
							<option value="Deep Cleaning">Deep Cleaning</option>
							<option value="Maintenance">Maintenance</option>
							<option value="Cleaning and Maintenance">Cleaning and Maintenance</option>
						</select>
					</div>
				</div>

				{/* Additional Details */}
				<div>
					<label className="block text-white font-medium mb-2">
						Additional Details
					</label>
					<textarea
						name="additionalDetails"
						value={formData.additionalDetails}
						onChange={handleChange}
						placeholder="Tell us about your facility size, specific requirements, or any special considerations..."
						rows={4}
						className="w-full px-4 py-3 rounded-lg bg-blue-800/50 border border-blue-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#dd781b] transition-all resize-none"
					/>
				</div>

			{/* Submit Button */}
			<Button
				type="submit"
				size="lg"
				className="w-full"
				disabled={isSubmitting}
				icon={<FaPaperPlane className="w-5 h-5" />}
			>
				{isSubmitting ? 'Submitting...' : 'Get Quote Now'}
			</Button>
			</form>
		</div>
	)
}

