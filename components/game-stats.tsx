"use client"

import type { Game } from "@/lib/types"
import { Heart, Zap, Flame } from "lucide-react"

interface GameStatsProps {
  game: Game
}

export function GameStats({ game }: GameStatsProps) {
  return (
    <div className="grid grid-cols-3 gap-4 p-6 bg-slate-800/50 rounded-lg border border-purple-500/20">
      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-2 text-pink-500">
          <Heart className="w-5 h-5 fill-current" />
          <span className="text-2xl font-bold">{game.likes.toLocaleString()}</span>
        </div>
        <p className="text-xs text-slate-400">Likes</p>
      </div>

      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-2 text-yellow-500">
          <Zap className="w-5 h-5 fill-current" />
          <span className="text-2xl font-bold">{game.manualRating}/5</span>
        </div>
        <p className="text-xs text-slate-400">Rating</p>
      </div>

      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-2 text-orange-500">
          <Flame className="w-5 h-5 fill-current" />
          <span className="text-2xl font-bold">{(game.totalPlayed / 1000).toFixed(0)}K</span>
        </div>
        <p className="text-xs text-slate-400">Played</p>
      </div>
    </div>
  )
}
