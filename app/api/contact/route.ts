import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, phone, service, message } = body;

        // Validation Basic Check
        if (!name || !phone || !service) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        // Rate Limiting (Mock)
        // In a real app, use Redis or similar.

        // Log for now as requested
        console.log("Contact Form Submission:", { name, phone, service, message, date: new Date().toISOString() });

        // Mock Email Sending Delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        return NextResponse.json({ success: true }, { status: 200 });
    } catch (error) {
        console.error("API Error:", error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
