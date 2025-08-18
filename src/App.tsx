import Footer from "./components/footer/footer";
import HeaderSection from "./sections/header";
import Navbar from "./components/navbar";

import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    // @ts-ignore
    AOS.init();
  }, []);

  return (
    <>
      <Navbar />
      <HeaderSection />
      <Footer />
    </>
  );
}

export default App;
