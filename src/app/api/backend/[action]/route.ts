// app/api/backend/[action]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(
    request: NextRequest,
    { params }: { params: { action: string } }
) {
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL || 'http://localhost:8000';
    const action = params.action;

    try {
        const response = await axios.post(`${backendUrl}/${action}`);
        return NextResponse.json(response.data);
    } catch (error) {
        console.error('Backend proxy error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}