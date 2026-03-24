"use client"

import { useEffect, useId, useState } from "react"

declare global {
  interface Window {
    googletag: any
  }
}

export default function ThreeAd() {
  const adId = "gpt-ad-" + useId().replace(/:/g, "")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted || typeof window === "undefined") return

    window.googletag = window.googletag || { cmd: [] }

    window.googletag.cmd.push(function () {
      const slot = window.googletag.defineSlot(
        "/229445249,23315340101/highR_RS88_PikaShow_552_300x250_16619_240326",
        [[300, 250], [336, 280]], // ✅ responsive sizes (IMPORTANT)
        adId
      )

      if (!slot) return

      slot.addService(window.googletag.pubads())

      // ✅ Display + force load
      window.googletag.display(adId)
      window.googletag.pubads().refresh([slot])
    })
  }, [mounted, adId])

  if (!mounted) return null

  return (
    <div
      id={adId}
      style={{
        width: "100%",
        minHeight: 250,
        display: "flex",
        justifyContent: "center",
      }}
    />
  )
}