import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { ThemeProvider as MUIThemeProvider, createTheme } from '@mui/material'
import { ThemeProvider as NextThemeProvider } from 'next-themes'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import './globals.css'
import { Toaster } from '@/components/ui/toaster'

const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2'
        }
    }
});

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter'
})

export const metadata: Metadata = {
    title: {
        default: 'No Eyes',
        template: '%s | No Eyes'
    },
    description: 'Automate your digital workflow with intelligent, subtle user activity simulation',
    keywords: ['productivity', 'automation', 'workflow', 'user simulation'],
    openGraph:{
        title: 'No Eyes - Intelligent Workflow Automation',
        description: 'Automate your digital workflow with intelligent, subtle user activity simulation',
        type: 'website',
        url: 'https://activeDeceiver.com',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'No Eyes - Intelligent Workflow Automation',
        description: 'Automate your digital workflow with intelligent, subtle user activity simulation',
    },
    metadataBase: new URL('https://activeDeceiver.com')
}

export default function RootLayout(
    {children,}: {children: React.ReactNode}
) {
    return (
        <ClerkProvider>
            <html lang="en" className={`${inter.variable} antialiased`}>
                <body className="min-h-screen flex flex-col bg-white text-gray-900 font-sans">
                    <MUIThemeProvider theme={theme}>
                        <NextThemeProvider
                            attribute="class"
                            defaultTheme="light"
                            enableSystem
                            disableTransitionOnChange
                        >
                            <Header />
                            <main className="flex-grow pt-16 pb-16">
                                {children}
                            </main>
                            <Footer />
                            <Toaster />
                        </NextThemeProvider>
                    </MUIThemeProvider>
                </body>
            </html>
        </ClerkProvider>
    )
}