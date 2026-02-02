"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, User, Share2, Bookmark } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"

// Sample blog data - aligned with blog listing
const blogPosts: { [key: string]: any } = {
    "top-10-games-this-month": {
        title: "Top 10 Games to Play This Month",
        excerpt: "Discover the most exciting games released this month and why you should play them.",
        author: "PikaShowGames Team",
        date: "November 15, 2025",
        category: "Gaming",
        readTime: "7 min read",
        image: "/Blog_1.jpg",
        content: `
      November 2025 brings an amazing lineup of new games across all platforms. Whether you're into action, adventure, puzzle, or strategy games, there's something incredible waiting for you this month.

      **The Best Games Released This Month**

      1. **Epic Action Adventure** - This month's standout title combines breathtaking visuals with intense gameplay. The story-driven campaign offers 20+ hours of entertainment with multiple endings based on your choices.

      2. **Puzzle Masterpiece** - A revolutionary puzzle game that redefines the genre with innovative mechanics and stunning art direction. Perfect for both casual players and puzzle enthusiasts.

      3. **Multiplayer Sensation** - The newest competitive shooter focuses on teamwork and strategy. With cross-platform play, you can team up with friends regardless of their device.

      4. **Story-Rich RPG** - An immersive role-playing game with a captivating narrative, memorable characters, and a living world that reacts to your decisions.

      5. **Casual Favorite** - A relaxing game perfect for winding down after a long day. Beautiful aesthetics combined with soothing gameplay mechanics.

      **Why These Games Stand Out**

      Each of these titles brings something unique to the gaming landscape. They showcase the creativity and innovation of game developers worldwide. Whether you prefer intense competitive play or immersive single-player experiences, November has you covered.

      **Gaming Recommendations**

      We recommend starting with whichever genre appeals most to you. The beauty of having multiple quality releases is that players of all preferences can find something they'll love.

      Don't miss out on these incredible gaming experiences. Grab your favorites and start playing today!
    `,
    },
    "gaming-tips-improve-skills": {
        title: "Gaming Tips: How to Improve Your Skills",
        excerpt: "Learn pro tips and tricks to level up your gaming and master your favorite games.",
        author: "Pro Gamer",
        date: "November 10, 2025",
        category: "Tips",
        readTime: "6 min read",
        image: "/Blog_2.jpg",
        content: `
      Improving at gaming takes practice, but with the right strategies and mindset, you can level up much faster. Here are professional tips to accelerate your gaming journey.

      **Master the Basics First**

      Before attempting advanced techniques, perfect your fundamentals. This includes:
      - Understanding game mechanics
      - Learning keyboard/controller layouts
      - Practicing basic movements and controls
      - Getting comfortable with the game interface

      **Practice Consistently**

      Like any skill, gaming improves with regular practice. Aim for dedicated gaming sessions where you focus on improvement rather than just playing casually.

      **Watch and Learn**

      Professional gamers and streamers often share valuable insights. Watch how they approach challenges, manage resources, and make strategic decisions.

      **Analyze Your Gameplay**

      Review your recordings to identify mistakes and areas for improvement. Understanding where you went wrong is key to not repeating those errors.

      **Play with Purpose**

      Set specific goals for each gaming session. Whether it's improving your aim, learning a new strategy, or completing a difficult level, having clear objectives helps you improve faster.

      **Take Care of Your Setup**

      A comfortable gaming environment makes a huge difference:
      - Proper chair and desk height
      - Good monitor positioning
      - Responsive mouse and keyboard
      - Minimizing distractions

      **Join Communities**

      Connect with other players, participate in discussions, and learn from the gaming community. Sharing experiences and tips accelerates growth.

      Your gaming journey is personal. Keep these tips in mind and adapt them to your playstyle for maximum improvement!
    `,
    },
    "history-of-online-gaming": {
        title: "The History of Online Gaming",
        excerpt: "Explore how online gaming has evolved over the decades and shaped modern entertainment.",
        author: "Gaming Historian",
        date: "November 5, 2025",
        category: "News",
        readTime: "10 min read",
        image: "/Blog_3.jpg",
        content: `
      Online gaming has come an incredibly long way from its humble beginnings. Let's explore the journey that brought us to today's thriving gaming ecosystem.

      **The Early Days: 1990s**

      The first online multiplayer games emerged in the early 1990s. Pioneering titles like Neverwinter Nights and early MUDs (Multi-User Dungeons) introduced the concept of playing with others over the internet.

      **The Turning Point: 2000s**

      The 2000s saw exponential growth with broadband becoming more accessible. Games like World of Warcraft revolutionized MMORPGs, attracting millions of players worldwide.

      **Mobile Gaming Revolution: 2010s**

      Smartphones transformed gaming accessibility. Mobile games became a cultural phenomenon, bringing gaming to billions of people globally.

      **The Current Era: 2020s**

      Today, online gaming is a multi-billion dollar industry with diverse gaming options:
      - Competitive esports
      - Battle royales
      - Social gaming platforms
      - Cloud gaming services
      - Cross-platform play

      **The Impact on Society**

      Online gaming has created communities, provided career opportunities through esports and content creation, and become a mainstream form of entertainment.

      **Future of Online Gaming**

      Virtual reality, augmented reality, and artificial intelligence are shaping the next frontier of gaming. The future promises even more immersive and connected experiences.

      The evolution of online gaming reflects broader technological and cultural changes in society. What started as a niche hobby has become a global phenomenon!
    `,
    },
    "best-gaming-setups-2025": {
        title: "Best Gaming Setups for 2025",
        excerpt: "Check out the latest gaming equipment and setups that will enhance your gaming experience.",
        author: "Tech Reviewer",
        date: "October 28, 2025",
        category: "Equipment",
        readTime: "8 min read",
        image: "/Blog_4.jpg",
        content: `
      Creating the perfect gaming setup is about finding the right balance between comfort, performance, and aesthetics. Here are the best configurations for 2025.

      **The Budget-Friendly Setup**

      For those just starting out, you don't need to break the bank:
      - Mid-range monitor (1440p, 144Hz)
      - Comfortable office chair
      - Mechanical keyboard
      - Decent gaming mouse
      - Total: $500-$800

      **The Mid-Range Setup**

      A solid balance of performance and investment:
      - High-refresh monitor (240Hz)
      - Ergonomic gaming chair
      - Premium mechanical keyboard
      - High-precision mouse
      - Headset with good sound
      - Total: $1,500-$2,500

      **The High-End Setup**

      For serious gamers and content creators:
      - Ultra-wide gaming monitor (240Hz+)
      - Professional gaming chair
      - Mechanical keyboard with custom switches
      - Ultra-responsive gaming mouse
      - Professional headset and microphone
      - Multiple displays
      - Lighting and aesthetics
      - Total: $3,000+

      **Essential Equipment for Any Setup**

      Regardless of budget:
      - Adequate cooling and ventilation
      - Cable management solutions
      - Anti-glare monitor positioning
      - Proper desk height

      **Investing in Quality**

      Quality equipment doesn't just improve performance—it reduces fatigue during long gaming sessions. Your health and comfort should always be priorities.

      Find the setup that works for your budget and gaming goals. Remember, expensive equipment doesn't automatically make you a better gamer!
    `,
    },
    "game-development-concept-to-launch": {
        title: "Game Development: From Concept to Launch",
        excerpt: "Learn about the game development process and what it takes to create amazing games.",
        author: "Dev Team",
        date: "October 20, 2025",
        category: "Development",
        readTime: "9 min read",
        image: "/Blog_5.jpg",
        content: `
      Game development is a complex but rewarding journey. Let's break down the process from initial concept to final launch.

      **Phase 1: Concept and Planning**

      Every game starts with an idea. The team brainstorms, defines the core gameplay loop, and establishes the game's vision and scope.

      **Phase 2: Pre-Production**

      Create prototypes, design documents, and artistic direction. This phase determines feasibility and helps prevent costly changes later.

      **Phase 3: Production**

      The bulk of development happens here:
      - Level design and creation
      - Character and asset creation
      - Programming and coding
      - Animation and visual effects
      - Sound design and music

      **Phase 4: Testing and Polish**

      Quality assurance team tests for bugs, balances gameplay, and optimizes performance. Feedback from testing drives refinements.

      **Phase 5: Beta Testing**

      Release to a limited audience to gather feedback and identify remaining issues before the final launch.

      **Phase 6: Launch**

      The game goes live! But work doesn't stop here. Post-launch support includes patches, updates, and new content.

      **Post-Launch Support**

      Successful games continue evolving:
      - Bug fixes and patches
      - Balance updates
      - New content and features
      - Community engagement

      **The Skills Required**

      Game development requires collaboration between:
      - Designers
      - Programmers
      - Artists
      - Musicians
      - Quality assurance
      - Project managers

      Creating a great game requires passion, teamwork, and perseverance. It's a journey, not a destination!
    `,
    },
    "community-spotlight-amazing-players": {
        title: "Community Spotlight: Amazing Players",
        excerpt: "Meet some of our most talented and dedicated gaming community members.",
        author: "Community Manager",
        date: "October 15, 2025",
        category: "Community",
        readTime: "5 min read",
        image: "/Blog_6.jpg",
        content: `
      Our gaming community is filled with incredible talent and passion. Let's celebrate some of the amazing members who make PikaShowGames special.

      **Featured Player: Alex Martinez**

      A speedrunner who's mastered classics and modern games alike. Known for their incredible reflexes and entertaining streaming sessions. Alex has inspired thousands of new speedrunners.

      **Featured Player: Jordan Chen**

      A content creator who produces high-quality tutorials and guides. Jordan's breakdowns of complex strategies have helped countless players improve their skills.

      **Featured Player: Sam Williams**

      An esports champion in multiple titles. Sam's competitive spirit and respect for the community make them a role model for aspiring professional gamers.

      **Featured Player: Casey Thompson**

      A game developer and community organizer who runs local gaming events. Casey's passion for bringing players together has created meaningful connections.

      **Why Community Matters**

      Our community members are:
      - Supportive and welcoming
      - Creative and innovative
      - Passionate about gaming
      - Helpful and collaborative

      **Join the Community**

      Whether you're a casual player or aspiring professional, there's a place for you in our community. Join us in celebrating gaming and supporting each other.

      Thank you to everyone who contributes to making PikaShowGames an amazing place to game, create, and connect!
    `,
    },
}

export default function BlogDetailsPage() {
    const [bookmarked, setBookmarked] = useState(false)
    const slugg = useParams();
    const slug = slugg.slug as string

    const post = blogPosts[slug]

    if (!post) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex flex-col">
                <Header />
                <main className="flex-1 flex items-center justify-center px-4">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-white mb-4">Post Not Found</h1>
                        <p className="text-slate-400 mb-8">The blog post you're looking for doesn't exist.</p>
                        <Link href="/blog">
                            <Button>Back to Blog</Button>
                        </Link>
                    </div>
                </main>
                <Footer />
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex flex-col">
            <Header />

            <main className="flex-1 max-w-4xl mx-auto px-4 py-12 w-full">
                {/* Back Button */}
                <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors mb-8"
                >
                    <ArrowLeft size={20} />
                    <span>Back to Blog</span>
                </Link>

                {/* Blog Header */}
                <div className="mb-8">
                    <div className="flex items-center gap-4 mb-4">
                        <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm font-medium rounded-full">
                            {post.category}
                        </span>
                        <span className="text-slate-400 text-sm">{post.readTime}</span>
                    </div>

                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">{post.title}</h1>

                    {/* Author and Date */}
                    <div className="flex flex-col md:flex-row md:items-center gap-6 border-t border-b border-slate-800 py-6">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full flex items-center justify-center">
                                <User size={24} className="text-white" />
                            </div>
                            <div>
                                <p className="text-white font-semibold">{post.author}</p>
                                <p className="text-slate-400 text-sm">Author</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <Calendar size={20} className="text-purple-400" />
                            <div>
                                <p className="text-white font-semibold">{post.date}</p>
                                <p className="text-slate-400 text-sm">Published</p>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center gap-3 ml-auto">
                            <button
                                onClick={() => setBookmarked(!bookmarked)}
                                className={`p-2 rounded-lg transition-colors ${bookmarked ? "bg-purple-500/20 text-purple-300" : "bg-slate-800 text-slate-400 hover:text-white"
                                    }`}
                            >
                                <Bookmark size={20} fill={bookmarked ? "currentColor" : "none"} />
                            </button>
                            <button className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors">
                                <Share2 size={20} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Featured Image */}
                <div className="mb-12 rounded-lg overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-96 object-cover" />
                </div>

                {/* Blog Content */}
                <article className="prose prose-invert max-w-none mb-12">
                    <div className="space-y-6 text-slate-300 leading-relaxed">
                        {post.content.split("\n\n").map((paragraph: string, idx: number) => {
                            const trimmed = paragraph.trim()
                            if (trimmed.startsWith("**") && trimmed.endsWith("**")) {
                                return (
                                    <h2 key={idx} className="text-2xl font-bold text-white mt-8 mb-4">
                                        {trimmed.replace(/\*\*/g, "")}
                                    </h2>
                                )
                            }
                            if (trimmed.startsWith("-") || /^\d+\./.test(trimmed)) {
                                return (
                                    <ul key={idx} className="space-y-3 ml-6">
                                        {trimmed.split("\n").map((item: string, i: number) => {
                                            const cleaned = item
                                                .replace(/^[\d.-]\s*/, "")
                                                .replace(/\*\*/g, "")
                                                .trim()
                                            return cleaned ? (
                                                <li key={i} className="list-disc text-slate-300">
                                                    {cleaned}
                                                </li>
                                            ) : null
                                        })}
                                    </ul>
                                )
                            }
                            return (
                                <p key={idx} className="text-slate-300">
                                    {trimmed}
                                </p>
                            )
                        })}
                    </div>
                </article>

                {/* Related Articles Section */}
                <div className="border-t border-slate-800 pt-12">
                    <h2 className="text-3xl font-bold text-white mb-8">More Articles</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {Object.entries(blogPosts)
                            .filter(([s]) => s !== slug)
                            .slice(0, 2)
                            .map(([postSlug, relatedPost]) => (
                                <Link
                                    key={postSlug}
                                    href={`/blog/${postSlug}`}
                                    className="group p-6 bg-slate-800/50 border border-slate-700 rounded-lg hover:border-purple-500/50 transition-all"
                                >
                                    <h3 className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors mb-2">
                                        {relatedPost.title}
                                    </h3>
                                    <p className="text-slate-400 text-sm mb-4">{relatedPost.readTime}</p>
                                    <span className="inline-flex items-center gap-2 text-purple-400 group-hover:gap-3 transition-all">
                                        Read More <span>→</span>
                                    </span>
                                </Link>
                            ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}




