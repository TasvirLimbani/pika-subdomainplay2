"use client"

import { useEffect, useId } from "react"
import Script from "next/script"

declare global {
  interface Window {
    googletag: any
  }
}

export default function BannerAd() {
  const adId = "gpt-ad-" + useId().replace(/:/g, "") // unique ID

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.googletag = window.googletag || { cmd: [] }

      window.googletag.cmd.push(function () {
        const slot = window.googletag.defineSlot(
          "/229445249,23315340101/highR_RS88_PikaShow_552_640x480_16595_200326",
          [336, 280],
          adId
        )

        if (slot) {
          slot.addService(window.googletag.pubads())
        }

        window.googletag.pubads().set("page_url", window.location.href)

        window.googletag.enableServices()
        window.googletag.display(adId)
      })
    }
  }, [adId])

  return (
    <>
      <Script
        src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"
        strategy="afterInteractive"
      />

      <div id={adId} style={{ width: 336, height: 280 }} />
    </>
  )
}