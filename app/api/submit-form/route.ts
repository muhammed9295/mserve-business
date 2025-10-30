import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
	try {
		const formData = await request.json()

		// Map form fields to Airtable field names
		const airtableData = {
			records: [
				{
					fields: {
						Company: formData.companyName,
						Name: formData.contactPerson,
						Phone: formData.phone,
						Email: formData.email,
						City: formData.city,
						Service: formData.service,
						Notes: formData.additionalDetails,
					},
				},
			],
		}

		const response = await fetch(
			`https://api.airtable.com/v0/${process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID}/${process.env.NEXT_PUBLIC_AIRTABLE_TABLE_NAME}`,
			{
				method: 'POST',
				headers: {
					Authorization: `Bearer ${process.env.NEXT_PUBLIC_AIRTABLE_API_KEY}`,
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(airtableData),
			}
		)

		if (!response.ok) {
			const errorData = await response.json()
			throw new Error('Failed to submit to Airtable')
		}

		const result = await response.json()
		return NextResponse.json({ success: true, data: result })
	} catch (error) {
		return NextResponse.json(
			{ success: false, error: 'Failed to submit form' },
			{ status: 500 }
		)
	}
}

