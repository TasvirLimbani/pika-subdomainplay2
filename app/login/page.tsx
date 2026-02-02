"use client"

import type React from "react"

import { useState } from "react"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "@/lib/firebase"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useAuth } from "@/hooks/use-auth"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const { user } = useAuth()

  if (user) {
    router.push("/")
    return null
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    try {
      await signInWithEmailAndPassword(auth, email, password)
      router.push("/")
      window.location.replace("/")

    } catch (err: any) {
      setError(err.message || "Failed to login")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex flex-col">
      <Header />

      <main className="flex items-center justify-center flex-1 px-4 my-12">
        <div className="w-full max-w-md">
          <div className="bg-slate-800/50 backdrop-blur-md border border-purple-500/20 rounded-2xl p-8">
            <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
            <p className="text-slate-400 mb-8">Login to your PikaShowGames account</p>

            {error && (
              <div className="bg-red-500/20 border border-red-500/50 text-red-300 p-3 rounded-lg mb-6 text-sm">
                {error}
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="••••••••"
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:opacity-50"
              >
                {isLoading ? "Logging in..." : "Login"}
              </Button>
            </form>

            <p className="text-center text-slate-400 mt-6">
              Don't have an account?{" "}
              <Link href="/signup" className="text-purple-400 hover:text-purple-300 transition-colors">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
