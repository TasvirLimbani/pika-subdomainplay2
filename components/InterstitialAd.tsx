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
