"use client"

import { useUserData } from "@/hooks/use-user-data"
import { useAuth } from "@/hooks/use-auth"
import { Coins } from "lucide-react"

export function CoinDisplay() {
  const { user } = useAuth()
  const { userData } = useUserData(user?.uid || null)

  if (!userData) return null

  return (
    <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-900/50 to-amber-900/50 border border-yellow-500/30 rounded-lg">
      <Coins className="w-5 h-5 text-yellow-500" />
      <span className="font-semibold text-yellow-300">{userData.coins}</span>
    </div>
  )
}
