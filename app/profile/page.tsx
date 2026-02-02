"use client"

import { useAuth } from "@/hooks/use-auth"
import { useUserData } from "@/hooks/use-user-data"
import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { ProfileHeader } from "@/components/profile-header"
import { RecentlyPlayed } from "@/components/recently-played"
import { FavoriteGames } from "@/components/favorite-games"
import { Footer } from "@/components/footer"
import { useState } from "react"
import { PlayerStats } from "@/components/player-stats"
import { Leaderboard } from "@/components/leaderboard"
import { Achievements } from "@/components/achievements"

export default function ProfilePage() {
  const { user, loading } = useAuth()
  const { userData, isLoading: isUserLoading } = useUserData(user?.uid || null)
  const router = useRouter()
  const [isEditing, setIsEditing] = useState(false)
  const [displayName, setDisplayName] = useState("")

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex flex-col">
        <Header />
        <Footer />
      </div>
    )
  }

  if (!user) {
    router.push("/login")
    return null
  }

  if (isUserLoading || !userData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex flex-col">
        <Header />
        <main className="max-w-7xl mx-auto px-4 py-12 flex-1 w-full">
          <div className="animate-pulse space-y-4">
            <div className="h-40 bg-slate-800 rounded-lg" />
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex flex-col">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-12 flex-1 w-full">
        {/* Profile Header */}
        <div className="mb-8 flex items-start justify-between">
          <div className="flex-1">
            <ProfileHeader profile={userData} />
          </div>
        </div>

        {/* Player Stats Display */}
        <PlayerStats />

        {/* Achievements Section */}
        <div className="mb-16">
          <Achievements />
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Left Column - Recently Played & Favorites */}
          <div className="lg:col-span-2 space-y-8">
            <RecentlyPlayed games={userData.recentlyPlayed || []} />
            <FavoriteGames favoriteIds={userData.favoriteGames || []} />
          </div>

          {/* Leaderboard in Right Column */}
          <div>
            <Leaderboard />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
