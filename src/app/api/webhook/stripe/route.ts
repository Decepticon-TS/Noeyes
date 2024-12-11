// app/api/webhook/stripe/route.ts
import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { headers } from 'next/headers';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2024-11-20.acacia"
});

const stripeWebhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(req: NextRequest) {
    const payload = await req.text();
    const headersList = headers();
    const sig = (await headersList).get('stripe-signature')!;

    let event: Stripe.Event;

    try {
        event = stripe.webhooks.constructEvent(payload, sig, stripeWebhookSecret)
    } catch (error) {
        return NextResponse.json({ error: 'Webhook error' }, { status: 400 });
    }

    switch (event.type) {
        // Handle new subscription
        case 'customer.subscription.created': break;
        // Handle subscription cancellation
        case 'customer.subscription.deleted': break;
        default: console.log(`Unhandled event type ${event.type}`);
    }
    return NextResponse.json({ received: true });
}