import React, { useState } from "react";

const Nav: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="absolute left-0 right-0 top-0 z-40 border-b border-solid border-white/50"
      aria-label="Primary navigation"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Brand: make it a real link for SEO */}
        <a
          href="/"
          className="font-lato text-lg text-white"
          aria-label="Nabin Acharya - Home"
        >
          NABIN
        </a>

        {/* Desktop links */}
        <ul
          className="hidden items-center gap-6 font-lato font-thin md:flex"
          role="menubar"
        >
          <li role="none">
            <a
              role="menuitem"
              href="#about"
              className="fade-in fade-in-delay-300 text-white/90 transition hover:text-white"
              title="About Nabin Acharya"
            >
              ABOUT
            </a>
          </li>
          <li role="none">
            <a
              role="menuitem"
              href="#contact"
              className="fade-in fade-in-delay-400 text-white/90 transition hover:text-white"
              title="Contact Nabin Acharya"
            >
              CONTACT
            </a>
          </li>
        </ul>

        {/* Mobile hamburger button */}
        <div className="md:hidden">
          <button
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((s) => !s)}
            className="inline-flex items-center justify-center rounded-md p-2 text-white/90 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu (collapsible) */}
      <div className={`${menuOpen ? "block" : "hidden"} bg-black/60 md:hidden`}>
        <ul
          className="space-y-1 px-6 pb-4 pt-2 font-lato font-thin"
          role="menu"
        >
          <li>
            <a
              onClick={() => setMenuOpen(false)}
              href="#about"
              className="block py-2 text-white/90 hover:text-white"
              role="menuitem"
            >
              ABOUT
            </a>
          </li>
          <li>
            <a
              onClick={() => setMenuOpen(false)}
              href="#contact"
              className="block py-2 text-white/90 hover:text-white"
              role="menuitem"
            >
              CONTACT
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
