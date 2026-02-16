// "use client";

// import { useEffect, useState } from "react";
// import AdPopup from "@/components/AdPopup";

// export default function GlobalAdTrigger() {
//     const [showAd, setShowAd] = useState(false);
//     const [pendingUrl, setPendingUrl] = useState<string | null>(null);

//     useEffect(() => {
//         const handleClick = (e: any) => {
//             const anchor = (e.target as HTMLElement).closest("a");

//             if (anchor && anchor.getAttribute("href")) {
//                 e.preventDefault(); // stop navigation

//                 setPendingUrl(anchor.getAttribute("href"));
//                 setShowAd(true);
//             }
//         };

//         document.addEventListener("click", handleClick);

//         return () => {
//             document.removeEventListener("click", handleClick);
//         };
//     }, []);

//     const handleAdClose = () => {
//         setShowAd(false);

//         if (pendingUrl) {
//             window.location.href = pendingUrl; // continue after ad
//         }
//     };

//     return showAd ? <AdPopup onClose={handleAdClose} /> : null;
// }
