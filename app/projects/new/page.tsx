'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const steps = ['Property Basics', 'Positioning', 'Seller Context', 'Comps', 'Appointment Prep', 'Branding']

export default function NewProject() {
  const router = useRouter()
  const [step, setStep] = useState(0)
  const [form, setForm] = useState({
    address: '', city: '', state: 'GA', zip: '', propertyType: 'Single Family', beds: '', baths: '', sqft: '', yearBuilt: '',
    listPrice: '', neighborhoodNotes: '', upgrades: '', standoutFeatures: '', buyerAppeal: '',
    motivation: '', timing: '', concerns: '', goals: '', commStyle: 'Warm and conversational',
    comp1Address: '', comp1Price: '', comp1DOM: '', comp1Notes: '',
    comp2Address: '', comp2Price: '', comp2DOM: '', comp2Notes: '',
    comp3Address: '', comp3Price: '', comp3DOM: '', comp3Notes: '',
    objections: '', positioningAngle: '', tone: 'Confident and warm',
    agentName: 'John Mark Woodard', teamName: 'Bixby Homes Group', brokerage: 'Keller Williams', contactInfo: ''
  })
  const [generating, setGenerating] = useState(false)

  const update = (field: string, value: string) => setForm(f => ({...f, [field]: value}))

  const handleGenerate = async () => {
    setGenerating(true)
    setTimeout(() => {
      router.push('/projects/demo')
    }, 3000)
  }

  const field = (label: string, key: string, placeholder = '', type = 'text') => (
    <div key={key}>
      <label className="block text-sm font-semibold text-gray-700 mb-1">{label}</label>
      <input type={type} value={(form as Record<string, string>)[key]} onChange={e => update(key, e.target.value)} placeholder={placeholder}
        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-800 bg-white focus:outline-none focus:border-blue-400" />
    </div>
  )

  const textarea = (label: string, key: string, placeholder = '') => (
    <div key={key}>
      <label className="block text-sm font-semibold text-gray-700 mb-1">{label}</label>
      <textarea value={(form as Record<string, string>)[key]} onChange={e => update(key, e.target.value)} placeholder={placeholder} rows={3}
        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-800 bg-white focus:outline-none focus:border-blue-400 resize-none" />
    </div>
  )

  const sections = [
    <div className="space-y-5" key="0">
      <h2 className="text-xl font-bold" style={{color:'#1e3a5f'}}>Property Basics</h2>
      {field('Property Address', 'address', '123 Main Street')}
      <div className="grid grid-cols-3 gap-4">
        {field('City', 'city', 'Roswell')}
        {field('State', 'state', 'GA')}
        {field('ZIP', 'zip', '30075')}
      </div>
      <div className="grid grid-cols-2 gap-4">
        {field('Beds', 'beds', '4')}
        {field('Baths', 'baths', '3')}
      </div>
      <div className="grid grid-cols-2 gap-4">
        {field('Square Feet', 'sqft', '2,800')}
        {field('Year Built', 'yearBuilt', '2005')}
      </div>
    </div>,
    <div className="space-y-5" key="1">
      <h2 className="text-xl font-bold" style={{color:'#1e3a5f'}}>Property Positioning</h2>
      {field('Target List Price', 'listPrice', '$725,000')}
      {textarea('Neighborhood Notes', 'neighborhoodNotes', 'Great schools, quiet cul-de-sac, walking distance to parks...')}
      {textarea('Top Upgrades', 'upgrades', 'New kitchen 2022, HVAC replaced 2021, fresh paint throughout...')}
      {textarea('Standout Features', 'standoutFeatures', 'Open floor plan, large backyard, 3-car garage...')}
      {textarea('Buyer Appeal', 'buyerAppeal', 'Perfect for move-up families, great school district...')}
    </div>,
    <div className="space-y-5" key="2">
      <h2 className="text-xl font-bold" style={{color:'#1e3a5f'}}>Seller Context</h2>
      {textarea('Seller Motivation', 'motivation', 'Job relocation, needs to close within 60 days...')}
      {field('Timing', 'timing', 'Needs to be under contract within 45 days')}
      {textarea('Seller Concerns', 'concerns', 'Worried about pricing too low, nervous about disruption during showings...')}
      {textarea('Seller Goals', 'goals', 'Maximum net proceeds, smooth transaction, minimal disruption...')}
      {field('Communication Style', 'commStyle', 'Warm and conversational')}
    </div>,
    <div className="space-y-5" key="3">
      <h2 className="text-xl font-bold" style={{color:'#1e3a5f'}}>Comparable Sales (Comps)</h2>
      {['1','2','3'].map(n => (
        <div key={n} className="p-5 bg-gray-50 rounded-xl space-y-3">
          <h3 className="font-semibold text-gray-700">Comp {n}</h3>
          {field('Address', `comp${n}Address`, '456 Oak Lane')}
          <div className="grid grid-cols-2 gap-4">
            {field('Sale Price', `comp${n}Price`, '$698,000')}
            {field('Days on Market', `comp${n}DOM`, '12')}
          </div>
          {field('Notes', `comp${n}Notes`, 'Similar sq ft, slightly smaller lot...')}
        </div>
      ))}
    </div>,
    <div className="space-y-5" key="4">
      <h2 className="text-xl font-bold" style={{color:'#1e3a5f'}}>Appointment Prep</h2>
      {textarea('Likely Objections', 'objections', 'Commission too high, want to try FSBO first, think price should be higher...')}
      {textarea('Recommended Positioning Angle', 'positioningAngle', 'Lead with market timing and our proven process...')}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">Tone</label>
        <select value={form.tone} onChange={e => update('tone', e.target.value)} className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-800 bg-white focus:outline-none">
          <option>Confident and warm</option>
          <option>Professional and direct</option>
          <option>Consultative and educational</option>
          <option>High-energy and motivating</option>
        </select>
      </div>
    </div>,
    <div className="space-y-5" key="5">
      <h2 className="text-xl font-bold" style={{color:'#1e3a5f'}}>Agent Branding</h2>
      {field('Agent Name', 'agentName', 'John Mark Woodard')}
      {field('Team Name', 'teamName', 'Bixby Homes Group')}
      {field('Brokerage', 'brokerage', 'Keller Williams')}
      {field('Contact Info', 'contactInfo', 'john@bixbyhomes.com | 678-555-0100')}
    </div>
  ]

  return (
    <div className="min-h-screen" style={{background: '#f8fafc'}}>
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link href="/dashboard" className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full" style={{background: 'linear-gradient(135deg, #1e3a5f, #d4a017)'}}></div>
            <span className="font-bold text-lg" style={{color:'#1e3a5f'}}>Bixby Listing AI</span>
          </Link>
          <Link href="/dashboard" className="text-sm text-gray-400 hover:text-gray-600">← Dashboard</Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-10">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2" style={{color:'#1e3a5f'}}>New Listing Project</h1>
          <p className="text-gray-500">Fill in the details below and we’ll generate your complete listing appointment package.</p>
        </div>

        {/* Progress */}
        <div className="flex gap-2 mb-8">
          {steps.map((s, i) => (
            <button key={i} onClick={() => setStep(i)}
              className={`flex-1 py-2 px-1 rounded-lg text-xs font-semibold transition-all ${
                i === step ? 'text-white' : i < step ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-400'
              }`}
              style={i === step ? {background: '#1e3a5f'} : {}}>
              {i < step ? '✓ ' : `${i+1}. `}{s}
            </button>
          ))}
        </div>

        {/* Form section */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-6">
          {sections[step]}
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <button onClick={() => setStep(s => Math.max(0, s-1))} disabled={step === 0}
            className="px-6 py-3 rounded-lg font-semibold text-gray-500 bg-white border border-gray-200 disabled:opacity-30">
            Previous
          </button>
          {step < steps.length - 1 ? (
            <button onClick={() => setStep(s => s+1)}
              className="px-8 py-3 rounded-lg font-bold text-white" style={{background: '#1e3a5f'}}>
              Next Step
            </button>
          ) : (
            <button onClick={handleGenerate} disabled={generating}
              className="px-10 py-3 rounded-lg font-bold text-white flex items-center gap-2" style={{background: 'linear-gradient(135deg, #d4a017, #b8860b)'}}>
              {generating ? (
                <><span className="animate-spin inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full"></span> Generating Package...</>
              ) : 'Generate Listing Package'}
            </button>
          )}
        </div>
      </main>
    </div>
  )
}
