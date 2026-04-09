'use client'
import { useState } from 'react'
import Link from 'next/link'

const sections = [
  {id: 'strategy', title: 'Strategy Brief', content: 'This appointment is best approached with a consultative, confidence-building tone. The sellers are motivated by a job relocation and need to close within 60 days, so emphasize speed and certainty. Focus on our proven marketing process, recent comparable sales, and how our team handles the entire process professionally. Address pricing concerns early by showing the data-backed CMA and highlighting that overpricing will cost them more time and money than pricing it right from day one.'},
  {id: 'presentation', title: 'Presentation Outline', content: '**1. Introduction & Rapport Building**\n- Thank them for their time\n- Share relevant experience in the area\n- Ask about their goals and timeline\n\n**2. Market Overview**\n- Current market conditions in Roswell\n- Buyer demand trends\n- Average days on market\n\n**3. Property Positioning**\n- Highlight key features and upgrades\n- Target buyer profile\n- Competitive advantages\n\n**4. Pricing Strategy & CMA**\n- Comparable sales analysis\n- Recommended list price: $725,000\n- Pricing rationale\n\n**5. Marketing Plan**\n- Professional photography\n- Digital marketing strategy\n- Open house schedule\n- MLS and syndication reach\n\n**6. Our Process & Timeline**\n- Pre-listing preparation\n- Launch strategy\n- Communication cadence\n- Closing support\n\n**7. Next Steps**\n- Answer questions\n- Review listing agreement\n- Schedule professional photos'},
  {id: 'cma', title: 'CMA Narrative', content: 'Based on recent comparable sales in the Roswell Manor area, the recommended list price for 142 Roswell Manor Drive is **$725,000**. This pricing is supported by three recent sales of similar homes: 456 Oak Lane sold for $698,000 after 12 days on market, 789 Maple Street sold for $715,000 after 18 days, and 321 Birch Court sold for $740,000 after 22 days. Your home\'s recent kitchen renovation, updated HVAC system, and prime cul-de-sac location position it at the higher end of this range. The current market shows strong buyer demand for move-up family homes in top school districts, with well-priced listings averaging 15-20 days on market. Pricing at $725,000 positions the property competitively while leaving room for negotiation and ensures maximum exposure during the critical first two weeks.'},
  {id: 'talking', title: 'Talking Points', content: '- "The Roswell Manor market is currently very active for homes in your price range"\n- "Recent upgrades like your kitchen renovation add significant buyer appeal"\n- "Our marketing reaches over 50,000 qualified buyers in the first 48 hours"\n- "I\'ve successfully sold 12 homes in this neighborhood in the past 18 months"\n- "Pricing right from day one is critical — overpriced homes sit longer and sell for less"\n- "Our average sale-to-list price ratio is 98.5%, above the market average"\n- "We handle every detail so you can focus on your move"\n- "I\'ll personally be your primary contact throughout the entire process"'},
  {id: 'objections', title: 'Objection Handlers', content: '**"Your commission seems high"**\n"I understand. The commission directly funds the marketing that gets your home in front of the most qualified buyers. My average homes sell in 17 days at 98.5% of asking price. Discount brokers in this area average 45+ days and 94% of asking. The difference in net proceeds far exceeds any commission savings."\n\n**"We want to try selling it ourselves first"**\n"I respect that. Most FSBOs I work with come to me after 60-90 days of frustration. The challenge isn\'t finding buyers — it\'s finding *qualified* buyers who can close. May I suggest we list it now while buyer demand is high, and if you change your mind, you have the option to cancel within the first 30 days?"\n\n**"We think it should be priced higher"**\n"I want you to net the most money possible. Here\'s what the data shows: homes priced 5% over market value sit an average of 42 days longer and ultimately sell for 3-4% less than if they\'d been priced correctly from day one. Would you rather start at $725K and have multiple offers in two weeks, or start at $775K and negotiate down after it sits for a month?"'},
  {id: 'texts', title: 'Follow-Up Texts', content: '**Text 1 (Same evening)**\n"John Mark here - thank you again for your time this evening. It was great learning about your goals for the move. I\'ll have the listing agreement and marketing timeline ready for you to review tomorrow morning. Let me know if any questions come up tonight."\n\n**Text 2 (Next day)**\n"Good morning! I\'ve sent over the listing paperwork and our full marketing plan via email. Everything we discussed is outlined clearly. I\'m available by phone anytime today if you\'d like to walk through any of it together."\n\n**Text 3 (2 days later, if no response)**\n"Hi - wanted to check in and see if you had a chance to review everything. I know you mentioned needing to move quickly, and we\'re coming into a strong buyer weekend. Happy to answer any questions or concerns that came up."'},
  {id: 'email', title: 'Follow-Up Email', content: 'Subject: Next Steps for 142 Roswell Manor Drive\n\nHi [Seller Names],\n\nThank you for the opportunity to present our marketing plan for your home this evening. I enjoyed learning about your timeline and goals for the move.\n\nAs we discussed, the current market conditions are very favorable for a well-positioned listing in Roswell Manor. Based on the comparable sales analysis and your home\'s features, I\'m confident that a list price of $725,000 will generate strong buyer interest and competitive offers within the first two weeks.\n\n**Next Steps:**\n- Review the attached listing agreement and marketing timeline\n- Let me know if you have any questions or concerns\n- Once signed, I\'ll coordinate professional photography for next week\n- We can be live on the MLS within 7-10 days\n\nGiven your 60-day timeline, I recommend we move forward this week to maximize your exposure during the upcoming buyer-heavy weekend. I\'m available by phone or text anytime if you\'d like to discuss further.\n\nLooking forward to working together,\n\nJohn Mark Woodard\nBixby Homes Group\n678-555-0100\njohn@bixbyhomes.com'}
]

export default function ProjectDemo() {
  const [activeTab, setActiveTab] = useState('strategy')
  const [copied, setCopied] = useState(false)
  const active = sections.find(s => s.id === activeTab)

  const copy = () => {
    if(active) {
      navigator.clipboard.writeText(active.content)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <div className="min-h-screen" style={{background: '#f8fafc'}}>
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/dashboard" className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full" style={{background: 'linear-gradient(135deg, #1e3a5f, #d4a017)'}}></div>
            <span className="font-bold text-lg" style={{color:'#1e3a5f'}}>Bixby Listing AI</span>
          </Link>
          <div className="flex gap-3">
            <Link href="/dashboard" className="text-sm text-gray-400 hover:text-gray-600">← Dashboard</Link>
            <button className="text-white font-semibold px-5 py-2 rounded-lg text-sm" style={{background: '#1e3a5f'}}>Export PDF</button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-10">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-3">
            <h1 className="text-3xl font-bold" style={{color:'#1e3a5f'}}>142 Roswell Manor Drive</h1>
            <span className="px-4 py-2 rounded-full text-sm font-semibold bg-green-100 text-green-700">Generated</span>
          </div>
          <p className="text-gray-500">Roswell, GA 30075 • 4 bed / 3 bath • $725,000</p>
        </div>

        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {sections.map(s => (
            <button key={s.id} onClick={() => setActiveTab(s.id)}
              className={`px-5 py-2 rounded-lg font-semibold text-sm whitespace-nowrap transition-all ${
                activeTab === s.id ? 'text-white shadow-md' : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
              style={activeTab === s.id ? {background: '#1e3a5f'} : {}}>
              {s.title}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold" style={{color: '#1e3a5f'}}>{active?.title}</h2>
            <div className="flex gap-3">
              <button onClick={copy} className="px-4 py-2 rounded-lg font-semibold text-sm" style={{background: copied ? '#10b981' : '#d4a017', color: 'white'}}>
                {copied ? '✓ Copied!' : 'Copy'}
              </button>
              <button className="px-4 py-2 rounded-lg font-semibold text-sm bg-gray-100 text-gray-600">Regenerate</button>
            </div>
          </div>
          <div className="prose prose-lg max-w-none" style={{whiteSpace: 'pre-wrap', lineHeight: '1.8', color: '#374151'}}>
            {active?.content}
          </div>
        </div>
      </main>
    </div>
  )
}
