"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

declare global {
  interface Window {
    googletag: any;
    gptSlotDefined?: boolean;
  }
}

export default function InterstitialAd() {
  const [show, setShow] = useState(false);
  const [counter, setCounter] = useState(5);
  const [showClose, setShowClose] = useState(false);

  /* ---------------- CLICK COUNTER ---------------- */
  useEffect(() => {
    const handleUserClick = () => {
      let clickCount = Number(localStorage.getItem("click_count") || 0);

      clickCount += 1;
      localStorage.setItem("click_count", clickCount.toString());

      // show ad every 4th click
      if (clickCount % 3 === 0) {
        openAd();
      }
    };

    document.addEventListener("click", handleUserClick);
    return () => document.removeEventListener("click", handleUserClick);
  }, []);

  /* ---------------- OPEN GPT AD ---------------- */
  const openAd = () => {
    setShow(true);
    document.body.style.overflow = "hidden";

    window.googletag = window.googletag || { cmd: [] };

    window.googletag.cmd.push(function () {
      const pubads = window.googletag.pubads();

      // ✅ attach listener BEFORE refresh
      pubads.addEventListener("slotRenderEnded", function (event: any) {
        if (event.slot.getSlotElementId() !== "gpt-passback-16595") return;

        // ❌ No fill → close popup automatically
        if (event.isEmpty) {
          console.log("Empty ad returned");
          closeAd();
        }
      });

      // Define slot once
      if (!window.gptSlotDefined) {
        window.gptSlot = window.googletag
          .defineSlot(
            "/229445249,23315340101/highR_RS88_PikaShow_552_640x480_16595_200326",
            [640, 480],
            "gpt-passback-16595"
          )
          .addService(pubads);

        pubads.set(
          "page_url",
          "https://www.pikashowgames.com/"
        );

        window.googletag.enableServices();
        window.gptSlotDefined = true;
      }

      // ⭐ ALWAYS refresh (important)
      pubads.refresh([window.gptSlot]);
    });
  };

  const closeAd = () => {
    setShow(false);
    document.body.style.overflow = "";
  };

  /* ---------------- COUNTDOWN ---------------- */
  useEffect(() => {
    if (!show) return;

    setCounter(5);
    setShowClose(false);

    const countdown = setInterval(() => {
      setCounter((prev) => {
        if (prev <= 1) {
          clearInterval(countdown);
          setShowClose(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, [show]);

  if (!show) return null;

  return (
    <>
      {/* Load GPT Script Once */}
      <Script
        src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"
        strategy="afterInteractive"
      />

      {/* Overlay */}
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

        {/* GPT AD CONTAINER */}
        <div
          id="gpt-passback-16595"
          style={{ width: 640, height: 480 }}
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
    </>
  );
}