import React from "react";

const Footer: React.FC = () => {
  return (
    <footer
      id="contact"
      className="relative z-30 w-full border-t border-white/10 bg-transparent font-lato font-thin"
    >
      {/* Top footer row: brand + contact CTAs */}
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid min-h-[20rem] w-full grid-cols-1 gap-8 py-20 md:grid-cols-2 md:items-center md:gap-6">
          {/* Left: brand/logo */}
          <div className="flex items-start">
            <a
              href="/"
              className="font-lato text-lg text-white no-underline"
              aria-label="Nabin Acharya - Home"
            >
              NABIN
            </a>
          </div>

          {/* Right: contact links (phone, email, appraisal) */}
          <div className="flex flex-col items-start justify-center gap-6 md:items-end">
            <a
              href="tel:+64225603752"
              className="inline-flex items-center gap-3 font-lato font-thin text-white no-underline hover:text-primary"
              aria-label="Call Nabin"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 3.09 4.18 2 2 0 0 1 5.11 2h3a2 2 0 0 1 2 1.72c.12 1.21.38 2.4.77 3.54a2 2 0 0 1-.45 2L9.91 11.09a16 16 0 0 0 6 6l1.83-1.83a2 2 0 0 1 2-.45c1.15.38 2.33.64 3.54.77A2 2 0 0 1 22 16.92z"
                />
              </svg>
              <span className="text-sm">022 560 3752</span>
            </a>

            <a
              href="mailto:nabin.acharya@harcourts.co.nz"
              className="inline-flex items-center gap-3 font-lato font-thin text-white no-underline hover:text-primary"
              aria-label="Email Nabin"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z"
                />
              </svg>
              <span className="text-sm">nabin.acharya@harcourts.co.nz</span>
            </a>

            <a
              href="mailto:nabin.acharya@harcourts.co.nz?subject=Free%20Appraisal%20Request"
              className="inline-flex items-center gap-3 font-lato font-thin text-white no-underline hover:text-primary"
              aria-label="Request a free appraisal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 flex-shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6M9 16h6M13 8h-2V6h2v2zM21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 8V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"
                />
              </svg>
              <span className="text-sm">Get a free Appraisal</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom footer row: copyright and credit */}
      <div className="mx-auto max-w-7xl px-6 py-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="text-sm text-white/70">
            © {new Date().getFullYear()} Nabin Acharya — Real Estate Agent
          </div>

          <div className="text-sm text-white/70">
            Web by{" "}
            <a
              className="text-white underline"
              href="https://nawamkarki.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Nawam
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
