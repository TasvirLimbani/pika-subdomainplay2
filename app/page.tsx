

"use client"

import { Suspense, useEffect, useState } from "react"
import { Header } from "@/components/header"
import { CategoryFilter } from "@/components/category-filter"
import { GameGrid } from "@/components/game-grid"
import { Footer } from "@/components/footer"
import { useSearchParams } from "next/navigation"
import { Gamepad2 } from 'lucide-react';
import Script from 'next/script'
import Link from "next/link"
import GptAd from "@/components/GptAd"
import GoogleAd from "@/components/GoogleAd"
import { Game } from "@/lib/types"
import BannerAd from "@/components/BannerAd"
import ThreeAd from "@/components/ThreeAd"

export const dynamic = "force-dynamic"

const mainData = [
  {
    "name": "Cricket Championships",
    "slug": "cricket-championships",
    "image": "6570",
    "likes": 5025,
    "manualRating": 5,
    "totalPlayed": 1784215,
    "ownGame": true,
    "addDate": "2020-11-28T17:52:00.000Z"
  },
  {
    "name": "Super Pon Goal",
    "slug": "super-pon-goal",
    "image": "6565",
    "likes": 776,
    "manualRating": 5,
    "totalPlayed": 297195,
    "ownGame": true,
    "addDate": "2020-11-21T17:40:00.000Z"
  },
  {
    "name": "Stickman Table Tennis",
    "slug": "stickman-table-tennis",
    "image": "6564",
    "likes": 1426,
    "manualRating": 5,
    "totalPlayed": 262095,
    "ownGame": true,
    "addDate": "2020-11-21T17:31:00.000Z"
  },
  {
    "name": "Pops Billiards",
    "slug": "pops-billiards",
    "image": "6552",
    "likes": 1030,
    "manualRating": 5,
    "totalPlayed": 397596,
    "ownGame": true,
    "addDate": "2020-11-21T15:19:00.000Z"
  },
  {
    "name": "Pool 8 Ball",
    "slug": "pool-8-balls",
    "image": "6551",
    "likes": 510,
    "manualRating": 5,
    "totalPlayed": 238284,
    "ownGame": true,
    "addDate": "2020-11-21T15:09:00.000Z"
  },
  {
    "name": "Billiards",
    "slug": "billiards",
    "image": "6515",
    "likes": 1486,
    "manualRating": 0,
    "totalPlayed": 567497,
    "ownGame": true,
    "addDate": "2020-06-08T23:01:00.000Z"
  },
  {
    "name": "Pro Cricket Champion",
    "slug": "pro-cricket-champion",
    "image": "6176",
    "likes": 3565,
    "manualRating": 4,
    "totalPlayed": 1698690,
    "ownGame": false,
    "addDate": "2019-10-15T18:02:00.000Z"
  },
  {
    "name": "8 Ball Pool",
    "slug": "8-ball-pool-multiplayer",
    "image": "6083",
    "likes": 2472,
    "manualRating": 0,
    "totalPlayed": 1404978,
    "ownGame": false,
    "addDate": "2019-07-29T00:06:00.000Z"
  },
  {
    "name": "Stick Golf",
    "slug": "stick-golf",
    "image": "5964",
    "likes": 536,
    "manualRating": 0,
    "totalPlayed": 199173,
    "ownGame": false,
    "addDate": "2019-05-13T21:22:00.000Z"
  },
  {
    "name": "Cricket World Cup",
    "slug": "cricket-world-cup",
    "image": "5897",
    "likes": 10930,
    "manualRating": 5,
    "totalPlayed": 3874358,
    "ownGame": true,
    "addDate": "2019-05-13T21:17:00.000Z"
  },
  {
    "name": "Winter Soccer",
    "slug": "winter-soccer",
    "image": "5700",
    "likes": 45,
    "manualRating": 0,
    "totalPlayed": 21621,
    "ownGame": false,
    "addDate": "2019-05-11T12:49:00.000Z"
  },
  {
    "name": "EG Ball Target",
    "slug": "eg-ball-target",
    "image": "5702",
    "likes": 25,
    "manualRating": 0,
    "totalPlayed": 16243,
    "ownGame": false,
    "addDate": "2019-05-11T12:49:00.000Z"
  },
  {
    "name": "Oddbods Soccer Challenge",
    "slug": "oddbods-soccer-challenge",
    "image": "5705",
    "likes": 360,
    "manualRating": 0,
    "totalPlayed": 106997,
    "ownGame": false,
    "addDate": "2019-05-11T12:49:00.000Z"
  },
  {
    "name": "CPL Cricket Tournament",
    "slug": "cpl-cricket-tournament",
    "image": "5655",
    "likes": 24590,
    "manualRating": 5,
    "totalPlayed": 5580507,
    "ownGame": true,
    "addDate": "2019-04-26T16:51:00.000Z"
  },
  {
    "name": "Goal Keeper",
    "slug": "goal-keeper",
    "image": "5472",
    "likes": 32,
    "manualRating": 0,
    "totalPlayed": 17863,
    "ownGame": false,
    "addDate": "2019-03-13T09:27:00.000Z"
  },
  {
    "name": "Downhill Ski",
    "slug": "downhill-ski",
    "image": "5457",
    "likes": 93,
    "manualRating": 0,
    "totalPlayed": 29524,
    "ownGame": false,
    "addDate": "2019-03-13T09:22:00.000Z"
  },
  {
    "name": "Ski Hero",
    "slug": "ski-hero",
    "image": "5462",
    "likes": 41,
    "manualRating": 0,
    "totalPlayed": 17359,
    "ownGame": false,
    "addDate": "2019-03-13T09:22:00.000Z"
  },
  {
    "name": "Santa Ski",
    "slug": "santa-ski",
    "image": "5463",
    "likes": 28,
    "manualRating": 0,
    "totalPlayed": 12047,
    "ownGame": false,
    "addDate": "2019-03-13T09:22:00.000Z"
  },
  {
    "name": "Ultimate Pong",
    "slug": "ultimate-pong",
    "image": "5423",
    "likes": 13,
    "manualRating": 0,
    "totalPlayed": 10683,
    "ownGame": false,
    "addDate": "2019-03-13T09:21:00.000Z"
  },
  {
    "name": "Crazy Tennis",
    "slug": "crazy-tennis",
    "image": "5426",
    "likes": 54,
    "manualRating": 4,
    "totalPlayed": 22255,
    "ownGame": false,
    "addDate": "2019-03-13T09:21:00.000Z"
  },
  {
    "name": "Jolly Volley",
    "slug": "jolly-volley",
    "image": "5427",
    "likes": 15,
    "manualRating": 0,
    "totalPlayed": 9912,
    "ownGame": false,
    "addDate": "2019-03-13T09:21:00.000Z"
  },
  {
    "name": "Extreme Airhockey",
    "slug": "extreme-airhockey",
    "image": "5432",
    "likes": 11,
    "manualRating": 0,
    "totalPlayed": 11681,
    "ownGame": false,
    "addDate": "2019-03-13T09:21:00.000Z"
  },
  {
    "name": "Space Hoops",
    "slug": "space-hoops",
    "image": "5433",
    "likes": 12,
    "manualRating": 0,
    "totalPlayed": 8394,
    "ownGame": false,
    "addDate": "2019-03-13T09:21:00.000Z"
  }, {
    "name": "Soccer Physics 2",
    "slug": "soccer-physics-2",
    "image": "4110",
    "likes": 44,
    "manualRating": 0,
    "totalPlayed": 16887,
    "ownGame": false,
    "addDate": "2018-11-26T15:34:00.000Z"
  },
  {
    "name": "Summer lake 15",
    "slug": "summer-lake-15",
    "image": "4111",
    "likes": 22,
    "manualRating": 0,
    "totalPlayed": 8841,
    "ownGame": false,
    "addDate": "2018-11-26T15:34:00.000Z"
  },
  {
    "name": "Flying Ball",
    "slug": "flying-ball",
    "image": "4113",
    "likes": 13,
    "manualRating": 0,
    "totalPlayed": 8964,
    "ownGame": false,
    "addDate": "2018-11-26T15:34:00.000Z"
  },
  {
    "name": "9 Ball Pool",
    "slug": "9-ball-pool",
    "image": "4114",
    "likes": 46,
    "manualRating": 0,
    "totalPlayed": 35077,
    "ownGame": false,
    "addDate": "2018-11-26T15:34:00.000Z"
  },
  {
    "name": "Tennis is War",
    "slug": "tennis-is-war",
    "image": "4115",
    "likes": 22,
    "manualRating": 0,
    "totalPlayed": 11202,
    "ownGame": false,
    "addDate": "2018-11-26T15:34:00.000Z"
  },
  {
    "name": "Presidential Golf",
    "slug": "presidential-golf",
    "image": "4116",
    "likes": 14,
    "manualRating": 0,
    "totalPlayed": 8695,
    "ownGame": false,
    "addDate": "2018-11-26T15:34:00.000Z"
  }]

function HomeInner() {
  const searchParams = useSearchParams()
  const categoryFromURL = searchParams.get("category") || "all"
  const [selectedCategory, setSelectedCategory] = useState(categoryFromURL)

  useEffect(() => {
    setSelectedCategory(categoryFromURL)
  }, [categoryFromURL])

  useEffect(() => {
    async function fetchTrendingGames() {
      try {
        const res = await fetch(`/api/games?limit=20&page=0&category=${selectedCategory}`)
        const data = await res.json()
        // Sort by likes and totalPlayed to get trending games
        const trending = data.games.sort((a: Game, b: Game) => b.likes + b.totalPlayed - (a.likes + a.totalPlayed))
        console.log(trending);
        console.log('::::::::::data', data);


        // setGames(trending.slice(0, 50))
      } catch (error) {
        console.log("[v0] Failed to fetch trending games:", error)
      } finally {
        // setIsLoading(false)
      }
    }

    fetchTrendingGames()
  }, [])

  useEffect(() => {
    try {
      // @ts-ignore
      ; (window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (e) {
      console.error(e)
    }
  }, [])

  return (
    <>
      <CategoryFilter selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />
      <main className="max-w-7xl mx-auto px-4 py-12 flex-1 w-full">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            Play{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Amazing Games
            </span>
          </h1>
          <p className="text-slate-400 text-lg">Discover thousands of free online games</p>
        </div>
        <GameGrid category={selectedCategory} />
      </main>
    </>
  )
}

export default function Home() {
  return (
    <>

      <div className="h-screen w-screen bg-black flex justify-center overflow-hidden">
        <div className="w-full max-w-[420px] h-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-y-auto scrollbar-hide">

          <div className="sticky top-0  z-10 bg-slate-900/10 backdrop-blur-md p-4 flex justify-between items-center">
            <div className="text-white font-semibold flex gap-2 mx-auto">
              <img className="h-10 w-10" src="/hLogo.png" alt="Logo" />
              <span className=" m-auto text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent hidden sm:inline">
                PikaShowGames
              </span>

            </div>

          </div>


          <div className="mb-8 flex justify-center">
            <GptAd />
          </div>


          {/* CATEGORY LIST */}
          <div className="px-4 grid grid-cols-2 mt-10 text-white">
            <div className="flex gap-5 p-2 rounded-lg">
              <div><Gamepad2 className="text-blue-500" /></div>
              <div>
                <span className="flex gap-2">Crazy</span>
                <span className="text-slate-400">14 games</span>
              </div>
            </div>

            <div className="flex gap-5 p-2 rounded-lg">
              <div><Gamepad2 className="text-blue-500" /></div>
              <div>
                <span className="flex gap-2">Diana</span>
                <span className="text-slate-400">9 games</span>
              </div>
            </div>

            <div className="flex gap-5 p-2 rounded-lg">
              <div><Gamepad2 className="text-blue-500" /></div>
              <div>
                <span className="flex gap-2">Top 100</span>
                <span className="text-slate-400">16 games</span>
              </div>
            </div>

            <div className="flex gap-5 p-2 rounded-lg">
              <div><Gamepad2 className="text-blue-500" /></div>
              <div>
                <span className="flex gap-2">Trending</span>
                <span className="text-slate-400">21 games</span>
              </div>
            </div>

            <div className="flex gap-5 p-2 rounded-lg">
              <div><Gamepad2 className="text-blue-500" /></div>
              <div>
                <span className="flex gap-2">Poki</span>
                <span className="text-slate-400">9 games</span>
              </div>
            </div>

            <div className="flex gap-5 p-2 rounded-lg">
              <div><Gamepad2 className="text-blue-500" /></div>
              <div>
                <span className="flex gap-2">New</span>
                <span className="text-slate-400">19 games</span>
              </div>
            </div>
          </div>


          {/* <div className="h-[600px]" /> */}
          <div>
            <h1 className="mt-5 ml-3 text-2xl">Trending</h1>
            <div className="overflow-x-auto overflow-y-hidden mt-5 scrollbar-hide">
              <div className="flex gap-3 w-max px-4">
                {mainData.slice(0, 7).map((data) => (
                  <Link href={`/game/${data.slug}`}>
                    <div className="h-20 w-20 rounded-full overflow-hidden shrink-0">
                      <img className="h-20 w-20 object-cover" src={`https://slides.atmegame.com/slide/${data.image}_slide.jpg`} alt="" />
                    </div>
                  </Link>
                )
                )}
              </div>
            </div>
          </div>

          <div className="ml-3">
            <h1 className="mt-10 text-2xl">New Games</h1>
            <div className="flex gap-5 flex-wrap mt-5">
              {mainData.slice(8, 16).map((data) => (
                <Link href={`/game/${data.slug}`}>
                  <div className="h-20 w-20 overflow-hidden rounded-2xl ">
                    <img className="h-20 w-20 object-cover" src={`https://slides.atmegame.com/slide/${data.image}_slide.jpg`}></img>
                  </div>
                </Link>
              )
              )}
            </div>
          </div>
          <div className="mb-8 flex justify-center">
            <BannerAd />
          </div>
          <div className="ml-3">
            <h1 className="mt-10 text-2xl">Popular Games</h1>
            <div className="flex gap-5 flex-wrap mt-5">

              {mainData.slice(17, 29).map((data) => (
                <Link href={`/game/${data.slug}`}>
                  <div className="h-20 w-20 overflow-hidden rounded-2xl ">
                    <img className="h-20 w-20 object-cover" src={`https://slides.atmegame.com/slide/${data.image}_slide.jpg`}></img>
                  </div>
                </Link>
              )
              )}


            </div>
          </div>
          <div className="mb-8 flex justify-center">
            <ThreeAd />
          </div>
          <hr className="mt-10" />

          <div className="ml-3 mt-10">
            <h1 className="text-5xl">Play Quality HTML5 Games Online | ETM HTML5 Games</h1>
            <p className="text-gray-500 mt-5">Enjoy a wide range of browser-based games—action, puzzles, strategy, sports, and more. Most titles run directly in modern browsers, so you can start playing quickly without extra setup.</p>
            <h1 className="text-2xl mt-7">Introduction</h1>
            <p className="text-gray-500 mt-3">Welcome to ETM HTML5 Games, where you can explore a curated collection of free-to-play experiences for every kind of player. From energetic action games to story-driven RPG games, discover options that work smoothly on desktop, tablet, and mobile devices.</p>
            <h1 className="text-2xl mt-7">Why Choose HTML5 Games?</h1>
            <p className="text-gray-500 mt-3">Reliable Access: Many games launch directly in your browser—no separate installation required for most players.
              <br />
              Cross-Device Support: Play on phones, tablets, and computers with consistent performance.
              <br />
              Engaging Experiences: Modern graphics and responsive controls provide an enjoyable experience.
              <br />
              Wide Selection: Whether you like casual, strategy, sports, or racing, you’ll find categories to explore.</p>
            <h1 className="text-2xl mt-7">Top Game Genres to Try</h1>
            <p className="text-gray-500 mt-3">Action Games: Quick reflex challenges and fast-paced levels.
              <br />
              Puzzle Games: Logic, numbers, and pattern-solving fun.
              <br />
              Sports Games: Football, basketball, racing, and more.
              <br />
              Multiplayer Games: Play with friends or match with other players online.</p>

            <h1 className="text-2xl mt-7">Benefits of Playing HTML5 Games</h1>
            <p className="text-gray-500 mt-3">Skill Building: Practice memory, focus, and problem-solving.
              Relaxation: Take a short break with light, engaging gameplay.
              Social Options: Co-op and competitive modes help you connect with others.
              Convenience: Access titles from most modern browsers, almost anywhere.</p>
            <h1 className="text-2xl mt-7">How to Get Started</h1>
            <p className="text-gray-500 mt-3">Visit ETM HTML5 Games and browse the categories that interest you.
              Choose a title from your preferred genre—no account is required for most games.
              Select “Play” to start; follow on-screen instructions if a game needs permissions (e.g., audio).</p>
            <h1 className="text-2xl mt-7">Featured Game Categories
              What Are the Best Free HTML5 Games?</h1>
            <p className="text-gray-500 mt-3">Action & Adventure:
              Arcade-style stages with clear goals and progressive difficulty.
              Levels designed for short play sessions and quick restarts.
              Puzzle & Logic:
              Number, word, and tile-matching challenges.
              Timed modes and relaxed modes to suit your pace.
              Sports & Racing:
              Penalty shootouts, hoops practice, time trials, and circuits.
              Single-player and head-to-head options in many titles.
              Multiplayer:
              Turn-based strategy, board-style games, and quick duels.
              Private lobbies or quick matchmaking when available.</p>
            <h1 className="text-2xl mt-7">Explore More Categories</h1>
            <p className="text-gray-500 mt-3">Want more options? Browse these popular sections:

              Crazy Games
              Dress Up Games
              Girls Games
              Playhop Games
              Poki Games
              Thop Games
              Top 100 Games
              Trending Games
              Adventure Games
              Simulation Games</p>
            <h1 className="text-2xl mt-7">Why Are These Games Popular?</h1>
            <p className="text-gray-500 mt-3">HTML5 technology enables accessible, responsive, and visually clear gameplay. Many titles are lightweight and optimized for quick startup, while intuitive controls help new and returning players enjoy short or extended sessions.</p>
            <div className="mb-8 flex justify-center">
              <ThreeAd />
            </div>
            <h1 className="text-2xl mt-7">FAQs</h1>
            <p className="mt-3">Q: Do I need to download software to play?
              A: Most games run in your browser. If a title needs anything additional, you’ll see a clear prompt.
              Q: Can I play on a phone or tablet?
              A: Yes, many games are optimized for touch and smaller screens.
              Q: Are these games free to play?
              A: A large selection is free. Some titles may include optional in-game purchases or ads.
              Q: I’m new to gaming—where should I start?
              A: Try beginner-friendly options in Casual or classic arcade categories and move up as you get comfortable.</p>
            <h1 className="text-2xl">Conclusion</h1>
            <p>Explore hundreds of titles and find your favorites. Whether you prefer fast action or relaxed puzzles, ETM HTML5 Games offers categories to match your interests. Start browsing and enjoy your next play session.</p>
          </div>
        </div>
      </div>
    </>
  )
}

