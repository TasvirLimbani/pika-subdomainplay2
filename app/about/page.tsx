"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />
      <main className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-slate-800/50 backdrop-blur border border-purple-500/30 rounded-xl p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">About PikaShowGames</h1>

          <main className="flex-1 max-w-5xl mx-auto px-4 py-16 w-full relative z-10">
            {/* Page Header */}
            <div className="mb-16 text-center">
              <p className="text-slate-300 text-xl">Where Gaming Dreams Come to Life</p>
            </div>

            {/* Hero Section */}
            <section className="mb-16 backdrop-blur-md bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-white/20 rounded-3xl p-12">
              <p className="text-slate-200 leading-relaxed text-lg text-center mb-6">
                PikaShowGames is a premier gaming platform dedicated to delivering cutting-edge entertainment experiences to
                millions of players worldwide. Since our founding, we've been committed to pushing the boundaries of
                interactive entertainment and building a thriving community of gamers.
              </p>
              <p className="text-slate-200 leading-relaxed text-lg text-center">
                Our mission is simple: to create extraordinary gaming experiences that inspire, challenge, and connect
                players across the globe.
              </p>
            </section>

            {/* Three Columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Our Mission */}
              <section className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 hover:border-white/30 transition-all duration-300">
                <div className="text-5xl mb-4">🎮</div>
                <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
                <p className="text-slate-200 leading-relaxed">
                  To revolutionize gaming by delivering innovative, immersive, and entertaining experiences that bring joy
                  to players of all skill levels.
                </p>
              </section>

              {/* Our Vision */}
              <section className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 hover:border-white/30 transition-all duration-300">
                <div className="text-5xl mb-4">🚀</div>
                <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
                <p className="text-slate-200 leading-relaxed">
                  To become the most trusted and beloved gaming platform globally, known for innovation, community
                  engagement, and player satisfaction.
                </p>
              </section>

              {/* Our Values */}
              <section className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 hover:border-white/30 transition-all duration-300">
                <div className="text-5xl mb-4">⭐</div>
                <h2 className="text-2xl font-bold text-white mb-4">Our Values</h2>
                <p className="text-slate-200 leading-relaxed">
                  Excellence, integrity, community, innovation, and player-first mindset guide every decision we make.
                </p>
              </section>
            </div>

            {/* Story Section */}
            <section className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 mb-16 hover:border-white/30 transition-all duration-300">
              <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
              <div className="space-y-4 text-slate-200 leading-relaxed">
                <p>
                  PikaShowGames was founded with a singular passion: to create the ultimate gaming destination. Starting as a
                  small team of gaming enthusiasts, we've grown into a global platform serving millions of players daily.
                </p>
                <p>
                  Over the years, we've evolved from a simple gaming hub to a comprehensive ecosystem featuring the latest
                  titles, exclusive content, community features, and groundbreaking technology that sets new industry
                  standards.
                </p>
                <p>
                  Today, PikaShowGames stands as a testament to what's possible when passion meets innovation, and community
                  spirit guides every decision.
                </p>
              </div>
            </section>

            {/* Key Achievements */}
            <section className="backdrop-blur-md bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-white/20 rounded-2xl p-8 mb-16">
              <h2 className="text-3xl font-bold text-white mb-8">Key Achievements</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { icon: "👥", title: "10M+ Players", desc: "Active gaming community" },
                  { icon: "🎯", title: "500+ Titles", desc: "Available on our platform" },
                  { icon: "🌍", title: "150+ Countries", desc: "Worldwide presence" },
                  { icon: "🏆", title: "50+ Awards", desc: "Industry recognition" },
                ].map((achievement, idx) => (
                  <div
                    key={idx}
                    className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-6 hover:border-purple-300/50 transition-all duration-300"
                  >
                    <div className="text-4xl mb-3">{achievement.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{achievement.title}</h3>
                    <p className="text-slate-300">{achievement.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Team Section */}
            <section className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 mb-16">
              <h2 className="text-3xl font-bold text-white mb-8">Our Team</h2>
              <p className="text-slate-200 leading-relaxed mb-8">
                Behind PikaShowGames is a diverse team of passionate professionals united by a love for gaming and technology.
                From developers and designers to community managers and support specialists, every team member is dedicated
                to delivering exceptional experiences.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { role: "Development", count: "150+" },
                  { role: "Design & UX", count: "80+" },
                  { role: "Community & Support", count: "120+" },
                ].map((dept, idx) => (
                  <div
                    key={idx}
                    className="backdrop-blur-sm bg-purple-500/10 border border-purple-300/20 rounded-xl p-6 text-center"
                  >
                    <div className="text-3xl font-bold text-purple-300 mb-2">{dept.count}</div>
                    <p className="text-slate-200 font-semibold">{dept.role}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Call to Action */}
            <section className="backdrop-blur-md bg-gradient-to-r from-purple-500/30 to-pink-500/30 border border-white/20 rounded-2xl p-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Join the PikaShowGames Community</h2>
              <p className="text-slate-200 mb-8">
                Be part of the gaming revolution. Explore thousands of titles, connect with fellow gamers, and experience
                entertainment like never before.
              </p>
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Start Your Adventure
              </button>
            </section>
          </main>
        </div>
      </main>
      <Footer />
    </div>
  )
}
