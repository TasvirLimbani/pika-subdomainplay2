"use client"

import type { UserProfile } from "@/lib/types"
import { Coins, Trophy, Gamepad2 } from "lucide-react"

interface ProfileHeaderProps {
  profile: UserProfile
}

export function ProfileHeader({ profile }: ProfileHeaderProps) {
  return (
    <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 border border-purple-500/20 rounded-lg p-8 mb-8">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <h1 className="text-4xl font-bold text-white mb-2">{profile.displayName}</h1>
          <p className="text-slate-400 mb-4">{profile.email}</p>
          <p className="text-sm text-slate-500">Member since {new Date(profile.createdAt).toLocaleDateString()}</p>
        </div>

        <div className="grid grid-cols-3 gap-6">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2 mb-2">
              <Coins className="w-5 h-5 text-yellow-500" />
              <span className="text-3xl font-bold text-white">{profile.coins}</span>
            </div>
            <p className="text-xs text-slate-400">Coins</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2 mb-2">
              <Gamepad2 className="w-5 h-5 text-purple-400" />
              <span className="text-3xl font-bold text-white">{profile.totalPlayed}</span>
            </div>
            <p className="text-xs text-slate-400">Games Played</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2 mb-2">
              <Trophy className="w-5 h-5 text-orange-400" />
              <span className="text-3xl font-bold text-white">{profile.favoriteGames.length}</span>
            </div>
            <p className="text-xs text-slate-400">Favorites</p>
          </div>
        </div>
      </div>
    </div>
  )
}
