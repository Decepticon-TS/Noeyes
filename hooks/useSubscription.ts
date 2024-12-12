// hooks/useSubscription.ts
import { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import { API_CONFIG } from '@/lib/config';

export interface Subscription {
    id: string;
    status: 'active' | 'canceled' | 'past_due';
    current_period_end: number;
    plan: 'basic' | 'pro';
}

export function useSubscription() {
    const [subscription, setSubscription] = useState<Subscription | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchSubscription()
    }, []);

    const fetchSubscription = async () => {
        try {
            setLoading(true);
            const response = await axios.get('/api/subscription');
            setSubscription(response.data);
        } catch (error) {
            setError('Failed to fetch subscription');
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    const createCheckoutSession = async (planId: string) => {
        try {
            const stripe = await loadStripe(API_CONFIG.STRIPE_PUBLISHABLE_KEY!);

            const response = await axios.post('/api/checkout', { planId });

            if (stripe && response.data.sessionId) {
                const result = await stripe.redirectToCheckout({
                    sessionId: response.data.sessionId
                });
                if (result.error) {
                    throw new Error(result.error.message);
                }
            }
        } catch (error) {
            setError('Failed to create checkout session');
            console.error(error);
        }
    }

    const cancelSubscription = async () => {
        try {
            await axios.post('/api/subscription/cancel');
            await fetchSubscription();
        } catch (error) {
            setError('Failed to cancel subscription');
            console.error(error);
        }
    };

    return { subscription, loading, error, createCheckoutSession, cancelSubscription, refetch: fetchSubscription };
}