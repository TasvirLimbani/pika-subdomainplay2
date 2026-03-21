"use client";

import { useEffect, useState } from "react";

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

export default function InterstitialAd() {
  const [show, setShow] = useState(false);
  const [counter, setCounter] = useState(5);
  const [showClose, setShowClose] = useState(false);

  // 👉 Handle click tracking
  useEffect(() => {
    const handleUserClick = () => {
      let clickCount = Number(localStorage.getItem("click_count") || 0);

      clickCount += 1;
      localStorage.setItem("click_count", clickCount.toString());

      // Show ad on every 2nd click
      if (clickCount % 4 === 0) {
        openAd();
      }
    };

    document.addEventListener("click", handleUserClick);

    return () => {
      document.removeEventListener("click", handleUserClick);
    };
  }, []);

  // 👉 Open Ad Logic
  const openAd = () => {
    setShow(true);
    document.body.style.overflow = "hidden";

    setTimeout(() => {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (err) {
        console.error("Adsense push error:", err);
      }
    }, 200);
  };

  // 👉 Countdown timer
  useEffect(() => {
    if (!show) return;

    setCounter(5);
    setShowClose(false);

    const countdown = setInterval(() => {
      setCounter((prev) => {
        if (prev <= 1) {
          setShowClose(true);
          clearInterval(countdown);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, [show]);

  if (!show) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0,0,0,0.85)",
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
      }}
    >
      <h2 style={{ marginBottom: "20px" }}>Advertisement</h2>

      {/* Adsense */}
      <ins
        className="adsbygoogle"
        style={{ display: "block", width: "300px", height: "250px" }}
        data-ad-client="ca-pub-3990057144186847"
        data-ad-slot="3747311226"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />

      {/* Close Button */}
      {showClose ? (
        <button
          onClick={() => {
            setShow(false);
            document.body.style.overflow = "";
          }}
          style={{
            marginTop: "50px",
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Close Ad
        </button>
      ) : (
        <p style={{ marginTop: "50px" }}>
          Ad Close in {counter} second{counter > 1 ? "s" : ""}
        </p>
      )}
    </div>
  );
}