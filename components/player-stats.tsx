"use client"

import { useUserData } from "@/hooks/use-user-data"
import { useAuth } from "@/hooks/use-auth"
import { BarChart3, TrendingUp, Clock, Award } from "lucide-react"

export function PlayerStats() {
  const { user } = useAuth()
  const { userData } = useUserData(user?.uid || null)

  if (!userData) return null

  const averagePlaytime =
    userData.totalPlayed > 0 ? Math.round((userData.totalTimeSpent || 0) / userData.totalPlayed) : 0

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      {/* Total Coins */}
      <div className="bg-gradient-to-br from-yellow-900/30 to-amber-900/30 border border-yellow-500/30 rounded-lg p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-medium text-slate-400">Total Coins</h3>
          <Award className="w-4 h-4 text-yellow-500" />
        </div>
        <p className="text-3xl font-bold text-yellow-400">{userData.coins.toLocaleString()}</p>
        <p className="text-xs text-slate-500 mt-2">Lifetime earnings</p>
      </div>

      {/* Games Played */}
      <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/30 rounded-lg p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-medium text-slate-400">Games Played</h3>
          <BarChart3 className="w-4 h-4 text-purple-400" />
        </div>
        <p className="text-3xl font-bold text-purple-400">{userData.totalPlayed.toLocaleString()}</p>
        <p className="text-xs text-slate-500 mt-2">All time sessions</p>
      </div>

      {/* Time Spent */}
      <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border border-blue-500/30 rounded-lg p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-medium text-slate-400">Time Spent</h3>
          <Clock className="w-4 h-4 text-blue-400" />
        </div>
        <p className="text-3xl font-bold text-blue-400">{(userData.totalTimeSpent || 0).toLocaleString()}m</p>
        <p className="text-xs text-slate-500 mt-2">Total minutes</p>
      </div>

      {/* Average Session */}
      <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 border border-green-500/30 rounded-lg p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-medium text-slate-400">Avg. Session</h3>
          <TrendingUp className="w-4 h-4 text-green-400" />
        </div>
        <p className="text-3xl font-bold text-green-400">{averagePlaytime}m</p>
        <p className="text-xs text-slate-500 mt-2">Per game</p>
      </div>
    </div>
  )
}
