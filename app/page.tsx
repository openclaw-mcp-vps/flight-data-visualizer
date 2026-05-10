export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <div className="inline-block bg-[#58a6ff]/10 border border-[#58a6ff]/30 text-[#58a6ff] text-sm px-4 py-1 rounded-full mb-6">
          For Frequent Travelers & Digital Nomads
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Turn Your Travel Data Into{" "}
          <span className="text-[#58a6ff]">Interactive Maps</span>
        </h1>
        <p className="text-lg md:text-xl text-[#8b949e] max-w-2xl mx-auto mb-10">
          Upload your flight and travel data (CSV or JSON) and instantly generate beautiful interactive maps, route visualizations, and analytics dashboards.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-lg px-10 py-4 rounded-lg transition-colors duration-200"
        >
          Start Visualizing – $12/mo
        </a>
        <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg mx-auto text-center">
          <div>
            <div className="text-2xl font-bold text-white">CSV &amp; JSON</div>
            <div className="text-sm text-[#8b949e] mt-1">File formats</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white">Interactive</div>
            <div className="text-sm text-[#8b949e] mt-1">Maps &amp; charts</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white">Instant</div>
            <div className="text-sm text-[#8b949e] mt-1">Processing</div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$12</div>
          <div className="text-[#8b949e] mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited flight uploads",
              "Interactive Leaflet/MapBox maps",
              "Route &amp; distance analytics",
              "Export maps as PNG or PDF",
              "PostgreSQL-backed data storage",
              "Priority support"
            ].map((f, i) => (
              <li key={i} className="flex items-center gap-3 text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span dangerouslySetInnerHTML={{ __html: f }} />
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors duration-200"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">What file formats are supported?</h3>
            <p className="text-[#8b949e]">We support CSV and JSON files exported from popular travel tracking apps like TripIt, Flighty, AwardWallet, or any custom format with flight coordinates and dates.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How is my travel data stored?</h3>
            <p className="text-[#8b949e]">Your data is securely stored in a PostgreSQL database with encryption at rest. You own your data and can export or delete it at any time.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Can I cancel my subscription anytime?</h3>
            <p className="text-[#8b949e]">Yes, you can cancel anytime with no questions asked. Your maps and data remain accessible until the end of your billing period.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-8 text-[#8b949e] text-sm">
        © {new Date().getFullYear()} Flight Data Visualizer. All rights reserved.
      </footer>
    </main>
  );
}
