import React, { useEffect, useRef } from "react";
import bgVideo from "../videos/nabin.mp4";

const Section: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      try {
        videoRef.current.playbackRate = 0.65;
      } catch (e) {
        // ignore if setting playbackRate is not supported
        // console.warn('Unable to set playbackRate', e);
      }
    }
  }, []);

  return (
    <section
      className="relative z-30 flex min-h-screen items-center justify-center"
      aria-labelledby="hero-heading"
    >
      {/* Background video (local) */}
      <video
        ref={videoRef}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        src={bgVideo}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        // ensure it's visually behind content
        style={{ zIndex: -1 }}
      />

      {/* Dim overlay so text is readable */}
      <div className="absolute inset-0 bg-black/75" />

      <div className="px-6 text-center">
        <h1
          id="hero-heading"
          className="fade-in font-montserrat text-4xl tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          NABIN ACHARYA
        </h1>
        <p className="fade-in fade-in-delay-200 mt-4 font-lato text-lg font-thin text-white/90 sm:text-xl md:text-2xl">
          Turning listings into lifelong homes — personalised, local, and
          trusted.
        </p>

        <div className="fade-in fade-in-delay-400 mt-8">
          <a
            href="#contact"
            className="inline-block border border-white bg-black/50 px-6 py-3 font-thin text-white shadow-lg transition-colors duration-200 ease-in-out hover:border-primary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
            aria-label="Get a free appraisal"
          >
            Get a free Appraisal
          </a>
        </div>
      </div>
    </section>
  );
};

export default Section;
