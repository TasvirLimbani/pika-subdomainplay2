"use client"

import { useUserData } from "@/hooks/use-user-data"
import { useAuth } from "@/hooks/use-auth"
import { Star, Zap, Flame, Target } from "lucide-react"

const ACHIEVEMENTS = [
  {
    id: "first-game",
    name: "First Steps",
    description: "Play your first game",
    icon: Target,
    check: (data: any) => data.totalPlayed >= 1,
  },
  {
    id: "game-master",
    name: "Game Master",
    description: "Play 50 games",
    icon: Flame,
    check: (data: any) => data.totalPlayed >= 50,
  },
  {
    id: "coin-collector",
    name: "Coin Collector",
    description: "Earn 1000 coins",
    icon: Star,
    check: (data: any) => data.coins >= 1000,
  },
  {
    id: "speedrun",
    name: "Speed Runner",
    description: "Favorite 10 games",
    icon: Zap,
    check: (data: any) => (data.favoriteGames?.length || 0) >= 10,
  },
]

export function Achievements() {
  const { user } = useAuth()
  const { userData } = useUserData(user?.uid || null)

  if (!userData) return null

  const unlockedAchievements = ACHIEVEMENTS.filter((a) => a.check(userData))

  return (
    <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 border border-purple-500/20 rounded-lg p-6">
      <h2 className="text-xl font-bold text-white mb-6">Achievements</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {ACHIEVEMENTS.map((achievement) => {
          const Icon = achievement.icon
          const isUnlocked = unlockedAchievements.some((a) => a.id === achievement.id)

          return (
            <div
              key={achievement.id}
              className={`p-4 rounded-lg text-center transition ${
                isUnlocked
                  ? "bg-gradient-to-br from-yellow-900/50 to-amber-900/50 border border-yellow-500/50"
                  : "bg-slate-800/50 border border-slate-700 opacity-60"
              }`}
            >
              <Icon className={`w-6 h-6 mx-auto mb-2 ${isUnlocked ? "text-yellow-400" : "text-slate-600"}`} />
              <p className={`text-sm font-semibold ${isUnlocked ? "text-yellow-300" : "text-slate-400"}`}>
                {achievement.name}
              </p>
              <p className="text-xs text-slate-500 mt-1">{achievement.description}</p>
            </div>
          )
        })}
      </div>

      <div className="mt-4 text-center">
        <p className="text-sm text-slate-400">
          {unlockedAchievements.length} of {ACHIEVEMENTS.length} unlocked
        </p>
      </div>
    </div>
  )
}
