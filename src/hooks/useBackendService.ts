// hooks/useBackendService.ts
import { useState } from 'react';
import axios from 'axios';

export type ServiceStatus = 'inactive' | 'running' | 'paused';

export function useBackendService() {
    const [status, setStatus] = useState<ServiceStatus>('inactive');
    const [error, setError] = useState<string | null>(null);

    const performAction = async (endpoint: string) => {
        try {
            const response = await axios.post(`/api/backend/${endpoint}`);

            switch(endpoint) {
                case 'start': setStatus('running');break
                case 'pause': setStatus('paused');break
                case 'resume': setStatus('running');break
                case 'kill': setStatus('inactive');break
            }
            return response.data;
        }
        catch (err) {
            setError('Failed to perform action');
            console.error(err);
            throw err;
        }
    };

    return {
        status,
        error,
        start: () => performAction('start'),
        pause: () => performAction('pause'),
        resume: () => performAction('resume'),
        kill: () => performAction('kill')
    }
}