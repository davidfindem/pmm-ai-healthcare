import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Home() {
  const [stats, setStats] = useState({ leads: 0, score: 0, emails: 0 })

  useEffect(() => {
    const updateStats = () => {
      setStats({
        leads: Math.floor(Math.random() * 10) + 25,
        score: Math.floor(Math.random() * 5) + 18,
        emails: Math.floor(Math.random() * 20) + 140
      })
    }
    updateStats()
    const interval = setInterval(updateStats, 3000)
    return () => clearInterval(interval)
  }, [])

  const personas = [
    {
      title: 'Rural Nursing Homes',
      description: 'CNAs and LPNs for rural facilities',
      icon: '🏥',
      color: '#ef4444',
