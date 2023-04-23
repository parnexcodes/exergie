import { json } from '@sveltejs/kit';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export function GET() {
	return json({
		message: 'Hi'
	});
}

export async function POST(requestEvent) {
	const { request } = requestEvent;
	const { event_id, name, email, college_year, college_name, phone, payment_id } =
		await request.json();
	try {
		const createDetail = await prisma.participants.create({
			data: {
				event_id: event_id,
				name: name,
				email: email,
				college_name: college_name,
				college_year: college_year,
				phone_number: phone,
				payment_id: payment_id
			}
		});
		return json(
			{
				success: createDetail
			},
			{
				status: 200
			}
		);
	} catch (error) {
		return json(
			{
				message: 'Something went wrong!'
			},
			{
				status: 400
			}
		);
	}
}
