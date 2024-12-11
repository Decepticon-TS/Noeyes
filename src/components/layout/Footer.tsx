import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-50 border-t border-gray-100">
            <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">ActivitySync</h3>
                    <p className="text-gray-600 text-sm">
                        Intelligent workflow management through automated digital interactions.
                    </p>
                </div>
                <div>
                    <h4 className="font-medium text-gray-700 mb-3">Product</h4>
                    <ul className="space-y-2">
                        <li><Link href="/features" className="text-gray-600 hover:text-gray-900 text-sm">Features</Link></li>
                        <li><Link href="/pricing" className="text-gray-600 hover:text-gray-900 text-sm">Pricing</Link></li>
                        <li><Link href="/dashboard" className="text-gray-600 hover:text-gray-900 text-sm">Dashboard</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-medium text-gray-700 mb-3">Company</h4>
                    <ul className="space-y-2">
                        <li><Link href="/about" className="text-gray-600 hover:text-gray-900 text-sm">About</Link></li>
                        <li><Link href="/contact" className="text-gray-600 hover:text-gray-900 text-sm">Contact</Link></li>
                        <li><Link href="/privacy" className="text-gray-600 hover:text-gray-900 text-sm">Privacy</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-medium text-gray-700 mb-3">Legal</h4>
                    <ul className="space-y-2">
                        <li><Link href="/terms" className="text-gray-600 hover:text-gray-900 text-sm">Terms</Link></li>
                        <li><Link href="/compliance" className="text-gray-600 hover:text-gray-900 text-sm">Compliance</Link></li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-gray-200 py-6 text-center">
                <p className="text-sm text-gray-600">
                    © {new Date().getFullYear()} ActivitySync. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer;