import { db } from "@/lib/firebase"
import { collection, query, orderBy, limit, getDocs } from "firebase/firestore"
import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const limitParam = Number.parseInt(searchParams.get("limit") || "10")

    const usersRef = collection(db, "users")
    const q = query(usersRef, orderBy("coins", "desc"), limit(limitParam))

    const snapshot = await getDocs(q)
    const users = snapshot.docs.map((doc) => ({
      uid: doc.id,
      displayName: doc.data().displayName || "Anonymous",
      coins: doc.data().coins || 0,
      totalPlayed: doc.data().totalPlayed || 0,
    }))

    return NextResponse.json({ users })
  } catch (error) {
    console.error("Leaderboard error:", error)
    return NextResponse.json({ error: "Failed to fetch leaderboard" }, { status: 500 })
  }
}
