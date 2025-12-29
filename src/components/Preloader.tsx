import React, { useEffect, useState } from "react";

const Preloader: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);
  const [minDone, setMinDone] = useState(false);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    // If a video element already exists and is ready, skip the preloader
    const existingVideo = document.querySelector("video");
    if (existingVideo && (existingVideo as HTMLVideoElement).readyState >= 3) {
      window.dispatchEvent(new CustomEvent("app:preloader-closed"));
      setVisible(false);
      return;
    }

    // Minimum 3s illusion
    const t = setTimeout(() => setMinDone(true), 3000);
    // Safety fallback: force hide after 15s
    const fallback = setTimeout(() => {
      setVideoReady(true);
      setMinDone(true);
    }, 15000);

    const onVideoReady = () => setVideoReady(true);
    window.addEventListener("app:video-ready", onVideoReady as EventListener);

    return () => {
      clearTimeout(t);
      clearTimeout(fallback);
      window.removeEventListener(
        "app:video-ready",
        onVideoReady as EventListener
      );
    };
  }, []);

  // When both minimum time and video readiness are satisfied, start fade
  useEffect(() => {
    if (minDone && videoReady) {
      setFading(true);
      const t2 = setTimeout(() => {
        setVisible(false);
        // notify that preloader closed so other components can act (e.g., start video)
        window.dispatchEvent(new CustomEvent("app:preloader-closed"));
      }, 1000);
      return () => clearTimeout(t2);
    }
  }, [minDone, videoReady]);

  // prevent body scroll while preloader visible
  useEffect(() => {
    if (!visible) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev || "";
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex h-screen w-screen items-center justify-center bg-black transition-opacity duration-1000 ${
        fading ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <div className="inline-block text-center">
        <a
          href="/"
          className="font-lato text-lg text-white"
          aria-label="Nabin Acharya - Home"
        >
          NABIN
        </a>
        <div className="mt-2 h-0.5 w-full bg-transparent">
          <div className="grow-line h-0.5 w-0 bg-white" />
        </div>
      </div>
    </div>
  );
};

export default Preloader;
