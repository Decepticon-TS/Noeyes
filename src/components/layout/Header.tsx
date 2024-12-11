import React from 'react';
import Link from 'next/link';
import { User } from 'lucide-react';

const Header: React.FC = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold text-gray-800 hover:text-gray-600 transition-colors">
                    ActivitySync
                </Link>
                <nav className="flex items-center space-x-6">
                    <Link href="/features" className="text-gray-600 hover:text-gray-900 transition-colors">
                        Features
                    </Link>
                    <Link href="/pricing" className="text-gray-600 hover:text-gray-900 transition-colors">
                        Pricing
                    </Link>
                    <Link href="/dashboard" className="text-gray-600 hover:text-gray-900 transition-colors">
                        Dashboard
                    </Link>
                    <Link href="/login" className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors">
                        <User size={20} />
                        <span>Login</span>
                    </Link>
                </nav>
            </div>
        </header>
    )
}

export default Header;