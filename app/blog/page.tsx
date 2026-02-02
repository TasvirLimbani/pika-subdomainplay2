"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Calendar, User } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "Top 10 Games to Play This Month",
    excerpt: "Discover the most exciting games released this month and why you should play them.",
    author: "PikaShowGames Team",
    date: "November 15, 2025",
    category: "Gaming",
    slug: "top-10-games-this-month",
    image: "Blog_1.jpg",
  },
  {
    id: 2,
    title: "Gaming Tips: How to Improve Your Skills",
    excerpt: "Learn pro tips and tricks to level up your gaming and master your favorite games.",
    author: "Pro Gamer",
    date: "November 10, 2025",
    category: "Tips",
    slug: "gaming-tips-improve-skills",
    image: "Blog_2.jpg",
  },
  {
    id: 3,
    title: "The History of Online Gaming",
    excerpt: "Explore how online gaming has evolved over the decades and shaped modern entertainment.",
    author: "Gaming Historian",
    date: "November 5, 2025",
    category: "News",
    slug: "history-of-online-gaming",
    image: "Blog_3.jpg",

  },
  {
    id: 4,
    title: "Best Gaming Setups for 2025",
    excerpt: "Check out the latest gaming equipment and setups that will enhance your gaming experience.",
    author: "Tech Reviewer",
    date: "October 28, 2025",
    category: "Equipment",
    slug: "best-gaming-setups-2025",
    image: "Blog_4.jpg",
  },
  {
    id: 5,
    title: "Game Development: From Concept to Launch",
    excerpt: "Learn about the game development process and what it takes to create amazing games.",
    author: "Dev Team",
    date: "October 20, 2025",
    category: "Development",
    slug: "game-development-concept-to-launch",
    image: "Blog_5.jpg",
  },
  {
    id: 6,
    title: "Community Spotlight: Amazing Players",
    excerpt: "Meet some of our most talented and dedicated gaming community members.",
    author: "Community Manager",
    date: "October 15, 2025",
    category: "Community",
    slug: "community-spotlight-amazing-players",
    image: "Blog_6.jpg",
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />
      <main className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">PikaShowGames Blog</h1>
        <p className="text-slate-400 mb-12">Stay updated with the latest gaming news, tips, and stories</p>

        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-slate-800/50 backdrop-blur border border-purple-500/30 rounded-xl overflow-hidden hover:border-purple-500 transition-colors group"
            >
              <img src={post.image} className="h-48 w-full object-cover relative overflow-hidden">
                {/* <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" /> */}
                {/* <img src={post.image} alt="" /> */}
              </img>

              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-300 text-xs font-semibold rounded-full">
                    {post.category}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                  {post.title}
                </h2>

                <p className="text-slate-400 text-sm mb-4">{post.excerpt}</p>

                <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>
                </div>

                 <Link
                  href={`/blog/${post.slug}`}
                  className="inline-block text-purple-400 hover:text-purple-300 font-semibold text-sm transition-colors"
                >
                  Read More →
                </Link> 
              </div>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
