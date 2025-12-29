import React, { useEffect, useRef } from "react";
import bgVideo from "../videos/nabin.mp4";
import portrait from "../images/nabin.webp";

const Section: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Start playback only after preloader closes. Also set playbackRate then.
  useEffect(() => {
    const startVideo = () => {
      if (videoRef.current) {
        try {
          videoRef.current.playbackRate = 0.65;
        } catch (e) {
          // ignore
        }
        videoRef.current.play().catch(() => {
          /* ignore play errors */
        });
      }
    };

    const onPreloaderClosed = () => startVideo();
    window.addEventListener(
      "app:preloader-closed",
      onPreloaderClosed as EventListener
    );

    // If video element already ready (preloader likely skipped), start immediately
    if (videoRef.current && videoRef.current.readyState >= 3) {
      startVideo();
    }

    return () =>
      window.removeEventListener(
        "app:preloader-closed",
        onPreloaderClosed as EventListener
      );
  }, []);

  return (
    <>
      {/* Hero section with background video */}
      <section
        className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6 text-center"
        aria-labelledby="hero-heading"
      >
        {/* Background video */}
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover opacity-30"
          src={bgVideo}
          loop
          muted
          playsInline
          onLoadedData={() =>
            window.dispatchEvent(new CustomEvent("app:video-ready"))
          }
          onCanPlayThrough={() =>
            window.dispatchEvent(new CustomEvent("app:video-ready"))
          }
        ></video>

        {/* Overlay content */}
        <div className="relative z-10 max-w-3xl space-y-6">
          <h1
            id="hero-heading"
            className="fade-in font-montserrat text-4xl tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            NABIN ACHARYA
          </h1>
          <p className="fade-in fade-in-delay-200 mt-4 font-montserrat text-xs font-thin text-white/60 sm:text-xl md:text-xl">
            {"Licensed Sales Consultant | Harcourts Wigram".toUpperCase()}
          </p>
          <p className="fade-in fade-in-delay-400 mt-4 font-lato text-xs font-thin text-white/90 sm:text-xl md:text-xl">
            Turning listings into lifelong homes — personalised, local, and
            trusted.
          </p>

          <div className="fade-in fade-in-delay-400 mt-8">
            <a
              href="mailto:nabin.acharya@harcourts.co.nz"
              className="inline-block border border-white bg-black/50 px-6 py-3 font-thin text-white shadow-lg transition-colors duration-200 ease-in-out hover:border-primary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
              aria-label="Get a free appraisal"
            >
              Get a free Appraisal
            </a>
          </div>
        </div>
      </section>

      {/* About / Sales pitch section */}
      <section
        id="about"
        className="bg-white/5 py-16"
        aria-labelledby="about-heading"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <h2
                id="about-heading"
                className="font-montserrat text-2xl font-thin text-white"
              >
                Together Better
              </h2>
              <p className="mt-4 font-lato font-thin text-white/85">
                I believe in total clarity from the very first conversation. I
                set realistic expectations up front and keep you informed with
                frequent, honest communication. I follow through on every
                promise and give 100% effort to every job — every time.
              </p>
              <p className="mt-4 font-lato font-thin text-white/85">
                If you’re thinking of selling, I bring award-winning experience
                and a proven record of delivering premium results. My approach
                is personalised and focused on achieving the best possible
                outcome for your property.
              </p>
              <p className="mt-4 font-lato font-thin text-white/85">
                I craft bespoke marketing plans for each client to attract the
                right buyers and drive premium offers in the shortest possible
                timeframe.
              </p>
              <p className="mt-4 font-lato font-thin text-white/90">
                If you’d like to explore your options or know what your
                Christchurch property could be worth, let's talk or request a
                free property appraisal — I’ll put together a personalised plan
                to get the best result, quickly.
              </p>
            </div>

            <div className="flex items-center justify-center">
              {/* Image: place your portrait at src/images/portrait.jpg */}
              <img
                src={portrait}
                alt="Portrait of Nabin Acharya"
                className="h-100 object-cover shadow-xl"
                loading="lazy"
              />
            </div>
          </div>
          <div className="mt-6 flex items-center">
            <a
              href="tel:+64279593979"
              className="inline-flex items-center gap-3 border border-white bg-black/50 px-6 py-3 font-thin text-white shadow-lg transition-colors duration-200 ease-in-out hover:border-primary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
              aria-label="Call to talk"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 3.09 4.18 2 2 0 0 1 5.11 2h3a2 2 0 0 1 2 1.72c.12 1.21.38 2.4.77 3.54a2 2 0 0 1-.45 2L9.91 11.09a16 16 0 0 0 6 6l1.83-1.83a2 2 0 0 1 2-.45c1.15.38 2.33.64 3.54.77A2 2 0 0 1 22 16.92z"
                />
              </svg>
              <span>Let's talk</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section;
