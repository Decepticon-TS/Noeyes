import Link from 'next/link'
import { ArrowRight, Activity, Lock, Zap } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'

import {
  Card,
  CardContent,
  CardHeader, 
  CardTitle
} from '@/components/ui/card'

export default function Home() {
  const features = [
    {
      title: 'Intelligent Simulation',
      description: 'Advanced algorithms simulate natural user behavior across multiple applications.',
      icon: Activity,
    },
    {
      title: 'Privacy First',
      description: 'Robust security measures ensure your workflows remain confidential and protected.',
      icon: Lock,
    },
    {
      title: 'Low Overhead',
      description: 'Minimal system resource consumption with high-performance simulation techniques.',
      icon: Zap,
    }
  ]
  return (
    <div className="container mx-auto px-4 space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16 space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900">
          Deceive your Corporate overloads
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-600">
          ActivitySync intelligently manages your digital presence with subtle, 
          randomized interactions across multiple applications.
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            href="/dashboard"
            className={buttonVariants({
              variant: 'default',
              size: 'lg'
            })}
          >
            Get Started <ArrowRight className="ml-2" />
          </Link>
          <Link
            href="/service"
            className={buttonVariants({
              variant: 'outline',
              size: 'lg'
            })}
          >
            Learn More
          </Link>
        </div>
      </section>
      {/* Features Section */}
      <section className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <feature.icon className="w-10 h-10 text-primary mb-4" />
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </section>
      {/* Call to Action */}
      <section className="bg-gray-50 rounded-xl p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Boost Your Productivity?
        </h2>
        <p className="text-gray-600 mb-6">Start your intelligent workflow automation journey today.</p>
        <Link
          href="/dashboard" 
          className={buttonVariants({ 
            variant: 'default', 
            size: 'lg' 
          })}
        >
          Start Free Trial
        </Link>
      </section>
    </div>
  )
}