import React from "react";
import Nav from "./components/Nav";
import Section from "./components/Section";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      <Preloader />
      <Nav />

      <main>
        <Section />
      </main>

      <Footer />
    </div>
  );
};

export default App;
