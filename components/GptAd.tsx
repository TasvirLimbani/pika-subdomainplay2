"use client"

import { useEffect, useId } from "react"

declare global {
  interface Window {
    googletag: any
  }
}

export default function GptAd() {
  const adId = "gpt-ad-" + useId().replace(/:/g, "")

  useEffect(() => {
    if (typeof window === "undefined") return

    window.googletag = window.googletag || { cmd: [] }

    window.googletag.cmd.push(function () {
      const slot = window.googletag.defineSlot(
        "/229445249,23315340101/highR_RS88_PikaShow_552_336x280_16397_140226",
        [336, 280],
        adId
      )

      if (!slot) return

      slot.addService(window.googletag.pubads())

      // ✅ IMPORTANT: display + refresh
      window.googletag.display(adId)

      // 🔥 THIS FIXES SECOND AD NOT SHOWING
      window.googletag.pubads().refresh([slot])
    })
  }, [adId])

  return (
    <div
      id={adId}
      style={{
        width: 336,
        height: 280,
        margin: "0 auto",
      }}
    />
  )
}