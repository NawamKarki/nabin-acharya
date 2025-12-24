import React from "react";
import Nav from "./components/Nav";
import Section from "./components/Section";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      <Nav />

      <main>
        <Section />
      </main>

      <Footer />
    </div>
  );
};

export default App;
