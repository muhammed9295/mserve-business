export function Footer() {
	return (
		<footer className="bg-white border-t border-gray-200 py-6">
			<div className="container mx-auto px-4">
				<div className="flex flex-col md:flex-row items-center justify-between gap-4">
					{/* Copyright */}
					<div className="text-sm text-gray-600">
						<p>&copy; 2025 Mserve Business. All rights reserved.</p>
					</div>

					{/* Links */}
					<div className="flex items-center gap-6">
						<a
							href="https://mserve.com.sa/privacy-policy/"
							target="_blank"
							rel="noopener noreferrer"
							className="text-sm text-gray-600 hover:text-[#dd781b] transition-colors"
						>
							Privacy Policy
						</a>
						<a
							href="https://mserve.com.sa/terms-conditions/"
							target="_blank"
							rel="noopener noreferrer"
							className="text-sm text-gray-600 hover:text-[#dd781b] transition-colors"
						>
							Terms of Service
						</a>
						<a
							href="#faq"
							className="text-sm text-gray-600 hover:text-[#dd781b] transition-colors"
						>
							FAQ
						</a>
					</div>
				</div>
			</div>
		</footer>
	)
}

