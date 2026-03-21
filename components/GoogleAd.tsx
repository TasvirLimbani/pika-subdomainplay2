"use client"

import { useEffect } from "react"
import Script from "next/script"

declare global {
  interface Window {
    googletag: any
  }
}

export default function GoogleAd() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.googletag) {
      window.googletag.cmd.push(function () {
        window.googletag
          .defineSlot(
            "/229445249,23315340101/highR_RS88_PikaShow_552_300x250_16596_200326",
            [300, 250],
            "gpt-passback-16596"
          )
          .addService(window.googletag.pubads())

        window.googletag.pubads().set("page_url", "https://www.pikashowgames.com/")
        window.googletag.enableServices()
        window.googletag.display("gpt-passback-16397")
      })
    }
  }, [])

  return (
    <>
      {/* Load GPT Script */}
      <Script
        src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"
        strategy="afterInteractive"
      />

      {/* Ad Container */}
      <div
        id="gpt-passback-16397"
        style={{ width: 336, height: 280 }}
      />
    </>
  )
}
