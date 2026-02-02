import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />
      <main className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-slate-800/50 backdrop-blur border border-purple-500/30 rounded-xl p-8 md:p-12">
          <div className="mb-12 text-center">
            <h1 className="sm:text-6xl text-4xl font-bold text-white mb-4 ">Terms and Conditions</h1>
            <p className="text-slate-300 text-lg">Please read these terms carefully</p>
            <p className="text-slate-400 text-sm">Last updated: November 2024</p>
          </div>

          {/* Content Sections */}
          <div className="space-y-8">
            {/* Acceptance of Terms */}
            <section className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl sm:p-8 p-4 hover:border-white/30 transition-all duration-300">
              <div className="flex items-start sm:gap-2 gap-4">
                <div className="text-2xl font-bold text-purple-400 min-w-fit">1.</div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-white mb-4">Acceptance of Terms</h2>
                  <p className="text-slate-200 leading-relaxed">
                    By accessing and using PikaShowGames, you accept and agree to be bound by the terms and provision of this
                    agreement. If you do not agree to abide by the above, please do not use this service.
                  </p>
                </div>
              </div>
            </section>

            {/* Use License */}
            <section className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl  sm:p-8 p-4 hover:border-white/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="text-2xl font-bold text-purple-400 min-w-fit">2.</div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-white mb-4">Use License</h2>
                  <p className="text-slate-200 leading-relaxed mb-6">
                    Permission is granted to temporarily download one copy of the materials (information or software) on
                    PikaShowGames for personal, non-commercial transitory viewing only. This is the grant of a license, not a
                    transfer of title, and under this license you may not:
                  </p>
                  <ul className="text-slate-200 leading-relaxed space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-pink-400 mt-1">⚠️</span>
                      <span>Modify or copy the materials</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-pink-400 mt-1">⚠️</span>
                      <span>Use the materials for any commercial purpose or for any public display</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-pink-400 mt-1">⚠️</span>
                      <span>Attempt to decompile or reverse engineer any software on the site</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-pink-400 mt-1">⚠️</span>
                      <span>Remove any copyright or other proprietary notations from the materials</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-pink-400 mt-1">⚠️</span>
                      <span>Transfer the materials to another person or mirror the materials on any other server</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Disclaimer */}
            <section className="backdrop-blur-md bg-gradient-to-br from-red-500/10 to-pink-500/10 border border-red-300/30 rounded-2xl  sm:p-8 p-4 hover:border-red-300/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="text-2xl font-bold text-red-400 min-w-fit">3.</div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-2">
                    <span className="text-red-400">⚡</span>
                    Disclaimer
                  </h2>
                  <p className="text-slate-200 leading-relaxed">
                    The materials on PikaShowGames are provided on an 'as is' basis. PikaShowGames makes no warranties, expressed or
                    implied, and hereby disclaims and negates all other warranties including, without limitation, implied
                    warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of
                    intellectual property or other violation of rights.
                  </p>
                </div>
              </div>
            </section>

            {/* Limitations */}
            <section className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl  sm:p-8 p-4 hover:border-white/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="text-2xl font-bold text-purple-400 min-w-fit">4.</div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-white mb-4">Limitations of Liability</h2>
                  <p className="text-slate-200 leading-relaxed">
                    In no event shall PikaShowGames or its suppliers be liable for any damages (including, without limitation,
                    damages for loss of data or profit, or due to business interruption) arising out of the use or
                    inability to use the materials on PikaShowGames.
                  </p>
                </div>
              </div>
            </section>

            {/* Accuracy of Materials */}
            <section className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl  sm:p-8 p-4 hover:border-white/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="text-2xl font-bold text-purple-400 min-w-fit">5.</div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-white mb-4">Accuracy of Materials</h2>
                  <p className="text-slate-200 leading-relaxed">
                    The materials appearing on PikaShowGames could include technical, typographical, or photographic errors.
                    PikaShowGames does not warrant that any of the materials on the site are accurate, complete, or current.
                    PikaShowGames may make changes to the materials contained on the site at any time without notice.
                  </p>
                </div>
              </div>
            </section>

            {/* Links */}
            <section className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl  sm:p-8 p-4 hover:border-white/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="text-2xl font-bold text-purple-400 min-w-fit">6.</div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-white mb-4">External Links</h2>
                  <p className="text-slate-200 leading-relaxed">
                    PikaShowGames has not reviewed all of the sites linked to its website and is not responsible for the
                    contents of any such linked site. The inclusion of any link does not imply endorsement by PikaShowGames of
                    the site. Use of any such linked website is at the user's own risk.
                  </p>
                </div>
              </div>
            </section>

            {/* Modifications */}
            <section className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl  sm:p-8 p-4 hover:border-white/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="text-2xl font-bold text-purple-400 min-w-fit">7.</div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-white mb-4">Modifications</h2>
                  <p className="text-slate-200 leading-relaxed">
                    PikaShowGames may revise these terms of service for the site at any time without notice. By using this
                    site, you are agreeing to be bound by the then current version of these terms of service.
                  </p>
                </div>
              </div>
            </section>

            {/* Governing Law */}
            <section className="backdrop-blur-md bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-white/20 rounded-2xl  sm:p-8 p-4">
              <div className="flex items-start gap-4">
                <div className="text-2xl font-bold text-purple-400 min-w-fit">8.</div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-2">
                    <span className="text-purple-400">⚖️</span>
                    Governing Law
                  </h2>
                  <p className="text-slate-200 leading-relaxed">
                    These terms and conditions are governed by and construed in accordance with the laws of the
                    jurisdiction in which PikaShowGames operates, and you irrevocably submit to the exclusive jurisdiction of
                    the courts in that location.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
