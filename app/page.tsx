import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { OurServices } from '@/components/our-services'
import { QuickRequestForm } from '@/components/quick-request-form'
import { ImportantNotice } from '@/components/important-notice'
import { WhyChooseUs } from '@/components/why-choose-us'
import { HowItWorks } from '@/components/how-it-works'
import { Testimonials } from '@/components/testimonials'
import { ContactUs } from '@/components/contact-us'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { FaBroom, FaWind, FaTools, FaClipboardCheck, FaAward, FaClock, FaUserGraduate, FaCheckCircle, FaBuilding, FaFileAlt, FaPhone, FaMapMarkerAlt, FaClipboardList, FaThumbsUp, FaWhatsapp, FaEnvelope, FaGlobe } from 'react-icons/fa'

export default function Page() {
	const menuItems = [
		{ label: 'Our Services', href: '#our-services' },
		{ label: 'Why choose us', href: '#why-choose-us' },
		{ label: 'How it works', href: '#how-it-works' },
		{ label: 'Contacts', href: '#contact-us' },
	]

	const logo = (
		<Image
			src="/logo/logo.png"
			alt="MServe Business Logo"
			width={150}
			height={50}
			priority
			style={{ width: 'auto', height: 'auto' }}
		/>
	)

	const actions = (
		<a href="#quick-request-form">
			<Button size="md">
				Request Quote
			</Button>
		</a>
	)

	const services = [
		{
			icon: <FaBroom className="w-7 h-7 text-[#dd781b]" />,
			title: 'Regular & Deep Cleaning',
			description: 'Daily, weekly, and monthly cleaning schedules tailored to your business needs',
		},
		{
			icon: <FaWind className="w-7 h-7 text-[#dd781b]" />,
			title: 'AC Maintenance & HVAC',
			description: 'Complete air conditioning servicing, repair, and preventive maintenance',
		},
		{
			icon: <FaTools className="w-7 h-7 text-[#dd781b]" />,
			title: 'Electrical & Plumbing',
			description: 'Expert technical support for all electrical and plumbing requirements',
		},
		{
			icon: <FaClipboardCheck className="w-7 h-7 text-[#dd781b]" />,
			title: 'Preventive Maintenance',
			description: 'Scheduled inspections and maintenance to prevent costly breakdowns',
		},
	]

	const whyChooseUsCards = [
		{
			icon: <FaAward className="w-8 h-8 text-[#dd781b]" />,
			title: 'ISO-Certified & ISSA-Member Company',
			description: 'Internationally recognized standards and best practices in facility management',
		},
		{
			icon: <FaClock className="w-8 h-8 text-[#dd781b]" />,
			title: '10+ Years of Expertise in Saudi Market',
			description: 'Deep understanding of local requirements and corporate expectations',
		},
		{
			icon: <FaUserGraduate className="w-8 h-8 text-[#dd781b]" />,
			title: 'Certified and Trained Technicians',
			description: 'Professional team with ongoing training and development programs',
		},
		{
			icon: <FaCheckCircle className="w-8 h-8 text-[#dd781b]" />,
			title: 'Reliable, On-Time Service Delivery',
			description: 'Consistent quality and punctual service execution every time',
		},
		{
			icon: <FaBuilding className="w-8 h-8 text-[#dd781b]" />,
			title: 'Trusted by Top Corporate Brands',
			description: 'Proven track record with leading Saudi businesses and organizations',
		},
	]

	const howItWorksSteps = [
		{
			icon: <FaFileAlt className="w-8 h-8" />,
			title: 'Submit Your Request',
			description: 'Fill out the inspection form with your business details and service requirements',
		},
		{
			icon: <FaPhone className="w-8 h-8" />,
			title: 'Mserve Contacts You',
			description: 'Our team reaches out to confirm details and schedule a convenient inspection time',
		},
		{
			icon: <FaMapMarkerAlt className="w-8 h-8" />,
			title: 'Site Inspection',
			description: 'Supervisor conducts thorough on-site assessment of your facility and requirements',
		},
		{
			icon: <FaClipboardList className="w-8 h-8" />,
			title: 'Receive Report & Quotation',
			description: 'Get detailed inspection report with customized quotation within 24-48 hours',
		},
		{
			icon: <FaThumbsUp className="w-8 h-8" />,
			title: 'Approve & Start Service',
			description: 'Review proposal, approve terms, and begin professional facility management services',
		},
	]

	const testimonials = [
		{
			rating: 5,
			quote: 'Mserve has been maintaining our corporate offices for over 3 years. Their professionalism and attention to detail is exceptional. Highly recommended for any business.',
			clientName: 'Corporate Client',
			clientTitle: 'Facility Manager',
			clientLocation: 'Riyadh',
		},
		{
			rating: 4,
			quote: 'From initial inspection to ongoing service, the Mserve team has been outstanding. They understand our needs and deliver consistently excellent results.',
			clientName: 'Facility Manager',
			clientTitle: 'Operations Head',
			clientLocation: 'Jeddah',
		},
		{
			rating: 5,
			quote: 'Reliable, professional, and always on time. Their maintenance services have significantly reduced our operational issues. A trusted partner for our business.',
			clientName: 'Operations Director',
			clientTitle: 'Facility Supervisor',
			clientLocation: 'Dammam',
		},
	]

	const contactInfo = [
		{
			icon: <FaWhatsapp className="w-6 h-6" />,
			title: 'WhatsApp / Phone',
			value: '+966 55 740 5137',
			subtitle: 'Available 24/7',
		},
		{
			icon: <FaEnvelope className="w-6 h-6" />,
			title: 'Email',
			value: 'info@mserve.com.sa',
			subtitle: 'Response within 24 hours',
		},
		{
			icon: <FaGlobe className="w-6 h-6" />,
			title: 'Website',
			value: 'mserve.com.sa',
			subtitle: 'Learn more about our services',
		},
	]

	return (
		<>
			<Navbar
				logo={logo}
				menuItems={menuItems}
				actions={actions}
			/>
		<main>
			<Hero />
			<OurServices 
				services={services}
				rightColumn={<div id="quick-request-form"><QuickRequestForm /></div>}
			/>
			<WhyChooseUs cards={whyChooseUsCards} />
			<HowItWorks steps={howItWorksSteps} />
			<Testimonials testimonials={testimonials} />
			<ImportantNotice />
			<ContactUs contactInfo={contactInfo} />
			<Footer />
		</main>
		</>
	)
}
