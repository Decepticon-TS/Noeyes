
// lib/config.ts
export const API_CONFIG = {
    BACKEND_BASE_URL: process.env.NEXT_PUBLIC_BACKEND_API_URL || 'http://localhost:8000',
    STRIPE_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
    CLERK_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
}

export const SUBSCRIPTION_TIERS = [
    {
        id: 'Free',
        name: 'Free Plan',
        price: 0,
        features: [
            'Limited Access to Automated Switching',
            'Basic Support',
            'No Advanced Features'
        ]
    },
    {
        id: 'Basic',
        name: 'Basic Plan',
        price: 9.99,
        features: [
            'Automated Tab Switching',
            'Standard Support',
            'Some Advanced Features'
        ]
    },
    {
        id: 'Pro',
        name: 'Pro Plan',
        price: 19.99,
        features: [
            'Unlimited Access to Automated Switching',
            'Priority Support',
            'Advanced Features'
        ]
    },
]