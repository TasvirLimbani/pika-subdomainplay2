import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />
      <main className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-slate-800/50 backdrop-blur border border-purple-500/30 rounded-xl p-8 md:p-12">
          {/* Page Header */}
          <div className="mb-12">
            <h1 className="text-5xl font-bold text-white mb-4">Disclaimer</h1>
            <p className="text-slate-400 text-lg">Last updated: November 202</p>
          </div>

          {/* Alert Box */}
          <div className="mb-12 p-6 bg-amber-500/10 border border-amber-500/30 rounded-lg">
            <p className="text-amber-200 font-semibold">
              ⚠ Important: Please read this disclaimer carefully before using PikaShowGames.
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-10">
            {/* General Disclaimer */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">General Disclaimer</h2>
              <p className="text-slate-300 leading-relaxed">
                The information provided on PikaShowGames is on an "as-is" and "as-available" basis. PikaShowGames makes no
                representations or warranties of any kind, express or implied, regarding the operation of the site or the
                information, content, or materials provided. To the fullest extent permissible by applicable law, PikaShowGames
                disclaims all warranties, express or implied, including but not limited to implied warranties of
                merchantability and fitness for a particular purpose.
              </p>
            </section>

            {/* External Links */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">External Links Disclaimer</h2>
              <p className="text-slate-300 leading-relaxed">
                PikaShowGames may contain links to external websites. We are not responsible for the content, accuracy, or
                practices of external sites. Your use of external websites is at your own risk and subject to their terms
                of service and privacy policies. We do not endorse or make any representations about third-party websites.
              </p>
            </section>

            {/* User Conduct */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">User Conduct Disclaimer</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                Users are solely responsible for their conduct while using PikaShowGames. Prohibited activities include:
              </p>
              <ul className="text-slate-300 leading-relaxed space-y-2 ml-4">
                <li>• Violating any applicable laws or regulations</li>
                <li>• Infringing on intellectual property rights</li>
                <li>• Transmitting malware or harmful code</li>
                <li>• Harassing, threatening, or abusing other users</li>
                <li>• Attempting to gain unauthorized access to the site</li>
              </ul>
            </section>

            {/* Limitation of Liability */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Limitation of Liability</h2>
              <p className="text-slate-300 leading-relaxed">
                In no event shall PikaShowGames, its owners, operators, or employees be liable for any indirect, incidental,
                special, consequential, or punitive damages arising out of or related to your use of PikaShowGames, even if
                advised of the possibility of such damages. This includes loss of data, revenue, or business.
              </p>
            </section>

            {/* Health and Safety */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Health and Safety</h2>
              <p className="text-slate-300 leading-relaxed">
                PikaShowGames is not responsible for any health issues arising from extended gaming sessions. We recommend
                taking regular breaks, maintaining good posture, and following general computer safety guidelines. If you
                experience discomfort or health concerns, please consult a healthcare professional.
              </p>
            </section>

            {/* No Professional Advice */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">No Professional Advice</h2>
              <p className="text-slate-300 leading-relaxed">
                PikaShowGames does not provide medical, legal, financial, or other professional advice. Any information
                provided is for general informational purposes only. Please consult with appropriate professionals for
                specific advice related to your situation.
              </p>
            </section>

            {/* Changes to Disclaimer */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Changes to This Disclaimer</h2>
              <p className="text-slate-300 leading-relaxed">
                PikaShowGames reserves the right to modify this disclaimer at any time without prior notice. Your continued use
                of the site following any changes constitutes your acceptance of the updated disclaimer.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
