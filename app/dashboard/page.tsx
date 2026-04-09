'use client'
import Link from 'next/link'
import { useState } from 'react'

const sampleProjects = [
  { id: '1', title: '142 Roswell Manor Drive', address: '142 Roswell Manor Drive, Roswell, GA 30075', status: 'Generated', updated: '2 hours ago', beds: 4, baths: 3, price: '$725,000' },
  { id: '2', title: '87 Peachtree Hills Ave', address: '87 Peachtree Hills Ave, Atlanta, GA 30305', status: 'Draft', updated: '1 day ago', beds: 3, baths: 2, price: '$485,000' },
  { id: '3', title: '305 Canton Street', address: '305 Canton Street, Alpharetta, GA 30009', status: 'Generated', updated: '3 days ago', beds: 5, baths: 4, price: '$1,150,000' },
]

export default function Dashboard() {
  const [search, setSearch] = useState('')
  const filtered = sampleProjects.filter(p => p.title.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="min-h-screen" style={{background: '#f8fafc'}}>
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full" style={{background: 'linear-gradient(135deg, #1e3a5f, #d4a017)'}}></div>
            <span className="font-bold text-xl" style={{color: '#1e3a5f'}}>Bixby Listing AI</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-500 text-sm">John Mark Woodard</span>
            <Link href="/" className="text-sm text-gray-400 hover:text-gray-600">Sign out</Link>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-10">
        {/* Top bar */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold" style={{color: '#1e3a5f'}}>Your Listing Projects</h1>
            <p className="text-gray-500 mt-1">Prepare faster. Follow up stronger. Win more listings.</p>
          </div>
          <Link href="/projects/new" className="text-white font-bold px-6 py-3 rounded-xl text-sm" style={{background: 'linear-gradient(135deg, #d4a017, #b8860b)', boxShadow: '0 4px 15px rgba(212,160,23,0.3)'}}>+ New Listing Project</Link>
        </div>

        {/* Search */}
        <div className="mb-6">
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search projects..." className="w-full max-w-sm border border-gray-200 rounded-lg px-4 py-2 text-gray-700 bg-white focus:outline-none focus:ring-2" style={{'--tw-ring-color': '#1e3a5f'} as React.CSSProperties} />
        </div>

        {/* Project cards */}
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🏠</div>
            <h2 className="text-xl font-bold mb-2" style={{color: '#1e3a5f'}}>No projects yet</h2>
            <p className="text-gray-500 mb-6">Create your first listing package to prepare faster and follow up stronger</p>
            <Link href="/projects/new" className="text-white font-bold px-8 py-3 rounded-xl" style={{background: 'linear-gradient(135deg, #d4a017, #b8860b)'}}>Create First Project</Link>
          </div>
        ) : (
          <div className="grid gap-4">
            {filtered.map(project => (
              <div key={project.id} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex items-center justify-between hover:shadow-md transition-shadow">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-bold text-lg" style={{color: '#1e3a5f'}}>{project.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${project.status === 'Generated' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>{project.status}</span>
                  </div>
                  <p className="text-gray-500 text-sm">{project.address}</p>
                  <div className="flex gap-4 mt-2 text-sm text-gray-400">
                    <span>{project.beds} bed / {project.baths} bath</span>
                    <span>{project.price}</span>
                    <span>Updated {project.updated}</span>
                  </div>
                </div>
                <div className="flex gap-3 ml-6">
                  <Link href={`/projects/${project.id}`} className="text-white font-semibold px-5 py-2 rounded-lg text-sm" style={{background: '#1e3a5f'}}>Open</Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
