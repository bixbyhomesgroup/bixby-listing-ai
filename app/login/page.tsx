'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className="min-h-screen flex items-center justify-center" style={{background: 'linear-gradient(135deg, #0f2035 0%, #1e3a5f 100%)'}}>
      <div className="bg-white rounded-2xl shadow-2xl p-10 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-full" style={{background: 'linear-gradient(135deg, #1e3a5f, #d4a017)'}}></div>
            <span className="font-bold text-2xl" style={{color: '#1e3a5f'}}>Bixby Listing AI</span>
          </div>
          <h1 className="text-2xl font-bold" style={{color: '#1e3a5f'}}>Welcome back</h1>
          <p className="text-gray-500 mt-1">Sign in to your account</p>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@example.com" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2" style={{'--tw-ring-color': '#1e3a5f'} as React.CSSProperties} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••••" className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none" />
          </div>
          <Link href="/dashboard" className="block w-full text-center text-white font-bold py-3 rounded-lg" style={{background: 'linear-gradient(135deg, #1e3a5f, #162d4a)'}}>Sign In</Link>
        </div>
        <p className="text-center text-sm text-gray-500 mt-6">Don't have an account? <Link href="/signup" className="font-medium" style={{color: '#d4a017'}}>Get started free</Link></p>
      </div>
    </div>
  )
}
