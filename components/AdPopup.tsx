"use client";

import { useEffect, useRef } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import "videojs-contrib-ads";
import "videojs-ima";

interface Props {
  onClose: () => void;
}

export default function AdPopup({ onClose }: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (!videoRef.current) return;

    const player = videojs(videoRef.current, {
      autoplay: true,
      controls: false,
      muted: true, // IMPORTANT for autoplay
    }) as any;

    const adTagUrl = `https://pubads.g.doubleclick.net/gampad/ads?iu=/229445249,23315340101/highR_RS88_PikaShow_552_640x480_16396_140226&description_url=https%3A%2F%2Fwww.pikashowgames.com%2F&tfcd=0&npa=0&sz=640x480&gdfp_req=1&output=xml_vast4&unviewed_position_start=1&env=vp&impl=s&vad_type=linear&correlator=${Date.now()}`;

    player.ima({
      adTagUrl,
    });

    player.ready(() => {
      player.ima.initializeAdDisplayContainer();
      player.ima.requestAds();
    });

    player.on("adend", () => {
      onClose();
    });

    player.on("adserror", () => {
      console.log("Ad error");
      onClose();
    });

    return () => {
      player.dispose();
    };
  }, []);

  return (
    <div style={overlay}>
      <div style={modal}>
        <video ref={videoRef} className="video-js vjs-default-skin" />
        <button onClick={onClose} style={closeBtn}>✖</button>
      </div>
    </div>
  );
}

const overlay: React.CSSProperties = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.85)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 9999,
};

const modal: React.CSSProperties = {
  width: "640px",
  maxWidth: "95%",
  background: "#000",
  position: "relative",
};

const closeBtn: React.CSSProperties = {
  position: "absolute",
  top: 10,
  right: 10,
  padding: "6px 10px",
  cursor: "pointer",
};
