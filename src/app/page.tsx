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
}