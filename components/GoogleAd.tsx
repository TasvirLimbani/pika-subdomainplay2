"use client";

import { useEffect } from "react";
import Script from "next/script";

declare global {
  interface Window {
    googletag: any;
    gptBannerDefined?: boolean;
  }
}

export default function GPTBannerAd() {
  useEffect(() => {
    if (!window) return;

    window.googletag = window.googletag || { cmd: [] };

    window.googletag.cmd.push(function () {
      // ✅ Prevent duplicate slot creation
      if (!window.gptBannerDefined) {
        window.googletag
          .defineSlot(
            "/229445249,23315340101/highR_RS88_PikaShow_552_300x250_16596_200326",
            [300, 250],
            "gpt-passback-16596"
          )
          .addService(window.googletag.pubads());

        window.googletag.pubads().set(
          "page_url",
          "https://www.pikashowgames.com/"
        );

        window.googletag.enableServices();

        window.gptBannerDefined = true;
      }

      window.googletag.display("gpt-passback-16596");
    });
  }, []);

  return (
    <>
      {/* Load GPT library once */}
      <Script
        src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"
        strategy="afterInteractive"
      />

      {/* Banner Container */}
      <div
        id="gpt-passback-16596"
        style={{
          width: 300,
          height: 250,
          margin: "0 auto",
        }}
      />
    </>
  );
}