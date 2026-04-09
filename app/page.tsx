import Link from 'next/link'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full" style={{background: 'linear-gradient(135deg, #1e3a5f, #d4a017)'}}></div>
          <span className="font-bold text-xl" style={{color: '#1e3a5f'}}>Bixby Listing AI</span>
        </div>
        <div className="flex gap-4">
          <Link href="/login" className="text-gray-600 hover:text-gray-900 font-medium px-4 py-2">Sign In</Link>
          <Link href="/signup" className="text-white font-semibold px-6 py-2 rounded-lg" style={{background: '#d4a017'}}>Get Started</Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="gradient-navy text-white px-6 py-24 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-6" style={{background: 'rgba(212,160,23,0.2)', color: '#f0c84a'}}>Built for Atlanta real estate agents</div>
          <h1 className="text-5xl font-bold mb-6 leading-tight">Win More Listing Appointments With Faster Prep</h1>
          <p className="text-xl mb-10" style={{color: '#cbd5e1'}}>Turn one property intake into a polished presentation, seller talking points, objection handlers, and a full follow-up plan — in minutes, not hours.</p>
          <Link href="/signup" className="inline-block text-white font-bold px-10 py-4 rounded-xl text-lg" style={{background: 'linear-gradient(135deg, #d4a017, #b8860b)', boxShadow: '0 8px 25px rgba(212,160,23,0.4)'}}>Start Your First Listing Package</Link>
          <p className="mt-4 text-sm" style={{color: '#94a3b8'}}>No credit card required. Set up in 2 minutes.</p>
        </div>
      </section>

      {/* Problem/Solution */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{color: '#1e3a5f'}}>Generic prep costs you listings</h2>
              <p className="text-gray-600 text-lg mb-4">Most agents walk into listing appointments with the same boilerplate presentation every other agent uses. Sellers can tell.</p>
              <p className="text-gray-600 text-lg">Bixby Listing AI generates a fully customized package — tailored to the specific property, seller situation, and likely objections — so you walk in sounding like you've been studying their home for weeks.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="font-bold text-lg mb-4" style={{color: '#1e3a5f'}}>What you get in every package</h3>
              <ul className="space-y-3">
                {['Listing Presentation Outline','Seller Talking Points','Objection Handlers','Pre-Appointment Strategy Brief','Follow-Up Text Sequence (3-5 messages)','Professional Follow-Up Email','CMA Narrative Summary'].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{background: '#d4a017'}}>
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4" style={{color: '#1e3a5f'}}>Three steps to appointment-ready</h2>
          <p className="text-gray-500 mb-12 text-lg">From intake to full package in under 5 minutes</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {step:'01', title:'Enter Property Details', desc:'Add the property info, seller context, comps, and likely objections. Takes about 3 minutes.'},
              {step:'02', title:'Generate Your Package', desc:'Click Generate and Bixby AI creates your full customized listing prep package instantly.'},
              {step:'03', title:'Review, Edit & Export', desc:'Review each section, make any tweaks, then copy or export a clean PDF to use in your appointment.'}
            ].map((item) => (
              <div key={item.step} className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 text-left card-hover">
                <div className="text-4xl font-black mb-4" style={{color: '#d4a017'}}>{item.step}</div>
                <h3 className="font-bold text-xl mb-3" style={{color: '#1e3a5f'}}>{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 px-6" style={{background: '#f8fafc'}}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12" style={{color: '#1e3a5f'}}>Built for agents who want to win</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {quote: '"I used to spend 2 hours preparing for every listing appointment. Now I do it in 10 minutes and I sound more prepared than ever."', name: 'Sarah M.', title: 'Solo Agent, Atlanta'},
              {quote: '"The objection handlers alone are worth it. I closed a listing last week that I would have lost before using Bixby."', name: 'David K.', title: 'Team Leader'},
              {quote: '"As a newer agent, this gave me the confidence to compete with experienced agents. The presentation outline is incredibly professional."', name: 'Jessica T.', title: 'Agent, 2 years experience'}
            ].map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-8 shadow-md border border-gray-100">
                <p className="text-gray-600 italic mb-6">{t.quote}</p>
                <div>
                  <div className="font-bold" style={{color: '#1e3a5f'}}>{t.name}</div>
                  <div className="text-sm text-gray-400">{t.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-navy text-white py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Ready to prepare faster and win more listings?</h2>
          <p className="text-xl mb-10" style={{color: '#cbd5e1'}}>Join agents who use Bixby Listing AI to prep smarter and follow up stronger.</p>
          <Link href="/signup" className="inline-block text-white font-bold px-12 py-4 rounded-xl text-lg" style={{background: 'linear-gradient(135deg, #d4a017, #b8860b)', boxShadow: '0 8px 25px rgba(212,160,23,0.4)'}}>Start Your First Listing Package</Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 text-center text-gray-400 text-sm border-t border-gray-100">
        <p>© 2026 Bixby Listing AI · Bixby Homes Group · Atlanta, GA · Built by John Mark Woodard</p>
      </footer>
    </div>
  )
}
