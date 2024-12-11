// app/(protected)/dashboard/page.tsx
'use client';

import { useBackendService, ServiceStatus } from '@/hooks/useBackendService';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { SignedIn, SignedOut, SignInButton } from '@clerk/nextjs';

export default function DashboardPage() {
    const { status, start, pause, resume, kill, error } = useBackendService();
    const renderStatusBadge = (currentStatus: ServiceStatus) => {
        const statusColors = {
            'inactive': 'bg-red-500',
            'running': 'bg-green-500',
            'paused': 'bg-yellow-500'
        };

        return (
            <div className={`px-3 py-1 rounded ${statusColors[currentStatus]} text-white`}>
                {currentStatus.toUpperCase()}
            </div>
        );
    };
    return (
        <div className="container mx-auto p-6">
            <SignedOut>
                <div className="text-center">
                    <p>Please sign in to access the dashboard</p>
                    <SignInButton />
                </div>
            </SignedOut>
            <SignedIn>
                <Card className="p-6 max-w-md mx-auto">
                    <h1 className="text-2xl font-bold mb-4">Service Control</h1>
                    <div className="mb-4 flex items-center justify-between">
                        <span>Current Status:</span>
                        {renderStatusBadge(status)}
                    </div>
                    <div className="space-y-3">
                        <Button
                            onClick={start} 
                            disabled={status === 'running'}
                            className="w-full"
                        >
                            Start
                        </Button>
                        <Button
                            onClick={pause} 
                            disabled={status !== 'running'}
                            className="w-full"
                        >
                            Pause
                        </Button>
                        <Button
                            onClick={resume} 
                            disabled={status !== 'paused'}
                            className="w-full"
                        >
                            Resume
                        </Button>
                        <Button
                            onClick={kill} 
                            disabled={status === 'inactive'}
                            className="w-full"
                        >
                            Kill
                        </Button>
                    </div>
                    {error && (
                        <div className="mt-4 text-red-500">{error}</div>
                    )}
                </Card>
            </SignedIn>
        </div>
    )
}