"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function SitemapPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-slate-800/50 backdrop-blur border border-purple-500/30 rounded-xl p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-12">Sitemap</h1>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Main Pages */}
            <div>
              <h2 className="text-xl font-bold text-purple-300 mb-4">Main Pages</h2>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-slate-300 hover:text-purple-400 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/categories" className="text-slate-300 hover:text-purple-400 transition-colors">
                    Categories
                  </Link>
                </li>
                <li>
                  <Link href="/trending" className="text-slate-300 hover:text-purple-400 transition-colors">
                    Trending
                  </Link>
                </li>
                <li>
                  <Link href="/profile" className="text-slate-300 hover:text-purple-400 transition-colors">
                    Profile
                  </Link>
                </li>
              </ul>
            </div>

            {/* Info Pages */}
            <div>
              <h2 className="text-xl font-bold text-purple-300 mb-4">Information</h2>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-slate-300 hover:text-purple-400 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-slate-300 hover:text-purple-400 transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-slate-300 hover:text-purple-400 transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-slate-300 hover:text-purple-400 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-slate-300 hover:text-purple-400 transition-colors">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>

            {/* Game Categories */}
            <div>
              <h2 className="text-xl font-bold text-purple-300 mb-4">Game Categories</h2>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/?category=bowling"
                    className="text-slate-300 hover:text-purple-400 transition-colors"
                  >
                    Bowling Games
                  </Link>
                </li>
                <li>
                  <Link
                    href="/?category=puzzle"
                    className="text-slate-300 hover:text-purple-400 transition-colors"
                  >
                    Puzzle Games
                  </Link>
                </li>
                <li>
                  <Link
                    href="/?category=sports"
                    className="text-slate-300 hover:text-purple-400 transition-colors"
                  >
                    Sports Games
                  </Link>
                </li>
                <li>
                  <Link
                    href="/?category=hockey"
                    className="text-slate-300 hover:text-purple-400 transition-colors"
                  >
                    Hockey Games
                  </Link>
                </li>
                <li>
                  <Link
                    href="/?category=basketball"
                    className="text-slate-300 hover:text-purple-400 transition-colors"
                  >
                    Basketball Games
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-purple-500/30">
            <p className="text-slate-400 text-sm">
              Last updated: November 2025. This sitemap contains all the main pages and categories available on
              PikaShowGames.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
