// "use client"

// import { useEffect, useId } from "react"
// import Script from "next/script"

// declare global {
//   interface Window {
//     googletag: any
//   }
// }

// export default function GptAd() {
//   const adId = "gpt-ad-" + useId().replace(/:/g, "") // unique ID

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       window.googletag = window.googletag || { cmd: [] }

//       window.googletag.cmd.push(function () {
//         const slot = window.googletag.defineSlot(
//           "/229445249,23315340101/highR_RS88_PikaShow_552_336x280_16397_140226",
//           [336, 280],
//           adId
//         )

//         if (slot) {
//           slot.addService(window.googletag.pubads())
//         }

//         window.googletag.pubads().set("page_url", window.location.href)

//         window.googletag.enableServices()
//         window.googletag.display(adId)
//       })
//     }
//   }, [adId])

//   return (
//     <>
//       <Script
//         src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"
//         strategy="afterInteractive"
//       />

//       <div id={adId} style={{ width: 336, height: 280 }} />
//     </>
//   )
// }

"use client"

import { useEffect, useId, useState } from "react"

declare global {
  interface Window {
    googletag: any
  }
}

export default function GptAd() {
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
        "/229445249,23315340101/highR_RS88_PikaShow_552_336x280_16397_140226",
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