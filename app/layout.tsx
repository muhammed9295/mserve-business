import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	metadataBase: new URL('https://mserve.com.sa'),
	title: 'Mserve Business',
	description: 'Professional Cleaning & Maintenance for Businesses',
	keywords: ['cleaning', 'maintenance', 'business', 'cleaning services', 'maintenance services', 'cleaning company', 'maintenance company', 'cleaning services company', 'maintenance services company', 'cleaning services company in riyadh', 'maintenance services company in riyadh', 'cleaning services company in jeddah', 'maintenance services company in jeddah', 'cleaning services company in dammam', 'maintenance services company in dammam', 'cleaning services company in alula', 'maintenance services company in alula'],
	authors: [{ name: 'Mserve Business', url: 'https://mserve.com.sa' }],
	creator: 'Mserve Business',
	publisher: 'Mserve Business',
	icons: {
		icon: '/favicon.ico',
		shortcut: '/favicon.ico',
		apple: '/favicon.ico',
	},
	openGraph: {
		title: 'Mserve Business',
		description: 'Professional Cleaning & Maintenance for Businesses',
		images: ['/logo/logo.png'],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Mserve Business',
		description: 'Professional Cleaning & Maintenance for Businesses',
		images: ['/logo/logo.png'],
	},
	
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
				suppressHydrationWarning
			>
				{children}
			</body>
		</html>
	)
}
