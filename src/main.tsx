import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { useEffect } from "react";
import { register } from "swiper/element/bundle";

// Register Swiper custom elements
register();

// Define global styles for fonts
const GlobalStyles = () => {
  useEffect(() => {
    document.documentElement.style.setProperty("--font-montserrat", "'Montserrat', sans-serif");
    document.documentElement.style.setProperty("--font-inter", "'Inter', sans-serif");
  }, []);
  return null;
};

createRoot(document.getElementById("root")!).render(
  <>
    <GlobalStyles />
    <App />
  </>
);
