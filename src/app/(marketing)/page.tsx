// app/(marketing)/page.tsx
import Link from 'next/link';
import { SignUpButton } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';

export default function HomePage() {
    return (
        <div className="min-h-screen flex flex-col">
            <main className="flex-grow container mx-auto px-4 py-16 text-center">
                <h1 className="text-5xl font-bold mb-6">
                    Hide from pring eyes
                </h1>
                <p className="text-xl mb-8 max-w-2xl mx-auto">
                    Seamlessly manage your digital workspace with intelligent tab switching 
                    and automated mouse movements. Stay productive without manual intervention.
                </p>
                <div className="space-x-4">
                    <SignUpButton>
                        <Button size="lg">Get Started</Button>
                    </SignUpButton>
                    <Link href="/service">
                        <Button variant="outline" size="lg">
                            Learn More
                        </Button>
                    </Link>
                </div>
            </main>
        </div>
    )
}