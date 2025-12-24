import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="relative z-30 w-full border-t border-white/10 bg-transparent">
      <div className="mx-auto max-w-7xl px-6 py-6 text-center text-sm text-white/70">
        © {new Date().getFullYear()} Nabin Acharya — Real Estate Agent
      </div>
    </footer>
  );
};

export default Footer;
