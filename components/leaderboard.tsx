"use client"

import { useEffect, useState } from "react"
import { Trophy, Medal } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"

interface LeaderboardUser {
  uid: string
  displayName: string
  coins: number
  totalPlayed: number
}

export function Leaderboard() {
  const [users, setUsers] = useState<LeaderboardUser[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const res = await fetch("/api/leaderboard?limit=10")
        if (res.ok) {
          const data = await res.json()
          setUsers(data.users)
        }
      } catch (error) {
        console.error("Failed to fetch leaderboard:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchLeaderboard()
  }, [])

  if (loading) {
    return (
      <div className="space-y-3">
        {[...Array(5)].map((_, i) => (
          <Skeleton key={i} className="h-12 w-full" />
        ))}
      </div>
    )
  }

  return (
    <div className="bg-slate-800/50 border border-purple-500/20 rounded-lg overflow-hidden">
      <div className="p-6 border-b border-purple-500/20">
        <div className="flex items-center gap-2">
          <Trophy className="w-5 h-5 text-yellow-500" />
          <h2 className="text-xl font-bold text-white">Leaderboard</h2>
        </div>
      </div>

      <div className="divide-y divide-slate-700/50">
        {users.length === 0 ? (
          <div className="p-8 text-center text-slate-400">No players yet</div>
        ) : (
          users.map((user, index) => (
            <div key={user.uid} className="p-4 flex items-center justify-between hover:bg-slate-700/30 transition">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-700">
                  {index === 0 && <Trophy className="w-4 h-4 text-yellow-500" />}
                  {index === 1 && <Medal className="w-4 h-4 text-slate-400" />}
                  {index === 2 && <Medal className="w-4 h-4 text-orange-600" />}
                  {index > 2 && <span className="text-sm font-semibold text-slate-400">#{index + 1}</span>}
                </div>
                <div>
                  <p className="font-medium text-white">{user.displayName}</p>
                  <p className="text-xs text-slate-400">{user.totalPlayed} games played</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-yellow-400">{user.coins.toLocaleString()}</p>
                <p className="text-xs text-slate-400">coins</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
