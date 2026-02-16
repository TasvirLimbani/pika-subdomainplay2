// "use client";

// import { useEffect, useState } from "react";

// declare global {
//     interface Window {
//         adsbygoogle: any[];
//     }
// }

// export default function InterstitialAd() {
//     const [show, setShow] = useState(false);
//     const [counter, setCounter] = useState(5); // 5-second countdown
//     const [showClose, setShowClose] = useState(false);

//     useEffect(() => {
//         // Show interstitial on page load
//         setShow(true);

//         // Lock background scroll
//         document.body.style.overflow = "hidden";

//         // Push AdSense ad
//         try {
//             (window.adsbygoogle = window.adsbygoogle || []).push({});
//         } catch (err) {
//             console.error("Adsense push error:", err);
//         }

//         // Countdown timer for close button
//         const countdown = setInterval(() => {
//             setCounter((prev) => {
//                 if (prev <= 1) {
//                     setShowClose(true);
//                     clearInterval(countdown);
//                     return 0;
//                 }
//                 return prev - 1;
//             });
//         }, 1000);

//         // Cleanup on unmount
//         return () => {
//             clearInterval(countdown);
//             document.body.style.overflow = "";
//         };
//     }, []);

//     if (!show) return null;

//     return (
//         <div
//             style={{
//                 position: "fixed",
//                 top: 0,
//                 left: 0,
//                 width: "100vw",
//                 height: "100vh",
//                 backgroundColor: "rgba(0,0,0,0.85)",
//                 zIndex: 9999,
//                 display: "flex",
//                 alignContent: "center",
//                 flexDirection: "column",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 color: "#fff",
//             }}
//         >
//             <h2 style={{ marginBottom: "20px" }}>Advertisement</h2>

//             {/* AdSense block */}
//             <ins
//                 className="adsbygoogle"
//                 style={{ display: "block", width: "300px", height: "250px" }}
//                 data-ad-client="ca-pub-3990057144186847"
//                 data-ad-slot="3747311226"
//                 data-ad-format="auto"
//                 data-full-width-responsive="true"
//             ></ins>

//             {/* Countdown / Close button */}
//             {showClose ? (
//                 <button
//                     onClick={() => {
//                         setShow(false);
//                         document.body.style.overflow = ""; // Unlock scroll
//                     }}
//                     style={{
//                         marginTop: "50px",
//                         padding: "10px 20px",
//                         fontSize: "16px",
//                         cursor: "pointer",
//                     }}
//                 >
//                     Close Ad
//                 </button>
//             ) : (
//                 <p style={{ marginTop: "50px", fontSize: "16px" }}>
//                     Ad Close in {counter} second{counter > 1 ? "s" : ""}
//                 </p>
//             )}
//         </div>
//     );
// }


"use client"

import { useEffect, useState } from "react"

export default function GlobalInterstitialProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [showAd, setShowAd] = useState(false)
  const [canClose, setCanClose] = useState(false)
  const [countdown, setCountdown] = useState(5)
  const [pendingClick, setPendingClick] = useState<null | (() => void)>(null)

  const vastUrl =
    "https://pubads.g.doubleclick.net/gampad/ads?iu=/229445249,23315340101/highR_RS88_PikaShow_552_640x480_16396_140226&description_url=https%3A%2F%2Fwww.pikashowgames.com%2F&tfcd=0&npa=0&sz=640x480&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&vad_type=linear"

  // 5 sec countdown
  useEffect(() => {
    if (!showAd) return

    setCountdown(5)
    setCanClose(false)

    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval)
          setCanClose(true)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [showAd])

  // Global click interceptor
  useEffect(() => {
    const handleClick = (e: any) => {
      const target = e.target.closest("button, a")

      if (!target) return
      if (showAd) return
      if (target.dataset.noad === "true") return

      e.preventDefault()

      setPendingClick(() => () => {
        if (target.tagName === "A") {
          window.location.href = target.href
        } else {
          target.click()
        }
      })

      setShowAd(true)
    }

    document.addEventListener("click", handleClick)

    return () => document.removeEventListener("click", handleClick)
  }, [showAd])

  const handleClose = () => {
    if (!canClose) return

    setShowAd(false)

    if (pendingClick) {
      setTimeout(() => {
        pendingClick()
      }, 300)
    }
  }

  return (
    <>
      {children}

      {showAd && (
        <div className="fixed inset-0 z-[99999] bg-black/95 flex items-center justify-center">
          <div className="relative w-[90%] max-w-[640px] bg-black rounded-xl overflow-hidden">

            {!canClose && (
              <div className="absolute top-3 right-3 bg-black/70 text-white px-3 py-1 rounded">
                Skip in {countdown}s
              </div>
            )}

            {canClose && (
              <button
                onClick={handleClose}
                className="absolute top-3 right-3 bg-red-600 text-white px-3 py-1 rounded"
              >
                Skip Ad
              </button>
            )}

            <video
              autoPlay
              controls
              className="w-full h-auto"
              src={vastUrl}
            />
          </div>
        </div>
      )}
    </>
  )
}
