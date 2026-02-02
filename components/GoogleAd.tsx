import Script from "next/script";
import { useEffect } from "react";

const GoogleAd = () => {
  useEffect(() => {
    // Ensure googletag exists on client
    (window as any).googletag = (window as any).googletag || { cmd: [] };

    (window as any).googletag.cmd.push(function () {
      (window as any).googletag
        .defineSlot(
          "/229445249,23315340101/highR_RS88_PikaShow_552_300x250_16296_020226",
          [300, 250],
          "gpt-passback-16296"
        )
        .addService((window as any).googletag.pubads());

      (window as any).googletag
        .pubads()
        .set("page_url", "https://www.pikashowgames.com/");

      (window as any).googletag.enableServices();
      (window as any).googletag.display("gpt-passback-16296");
    });
  }, []);

  return (
    <>
      {/* Load GPT script */}
      <Script
        src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"
        strategy="afterInteractive"
      />

      {/* Ad container */}
      <div id="gpt-passback-16296" style={{ width: 300, height: 250 }} />
    </>
  );
};

export default GoogleAd;
