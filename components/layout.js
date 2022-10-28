import { useState, useEffect } from "react";
import useSound from "use-sound";
// import boopSfx from "../../sounds/boop.mp3";
// import Imagination from "../assets/guitar-loop.mp3";
import Footer from "./footer";
import Header from "./header";

export default function Layout({ children }) {
  const [audio, setAudio] = useState(null);
  useEffect(() => {
    const showOnPx = 300;
    const backToTopButton = document.querySelector(".back-to-top");

    const scrollContainer = () => {
      return document.documentElement || document.body;
    };

    document.addEventListener("scroll", () => {
      if (scrollContainer().scrollTop > showOnPx) {
        backToTopButton.classList.remove("hidden");
      } else {
        backToTopButton.classList.add("hidden");
      }
    });

    const goToTop = () => {
      document.body.scrollIntoView({
        behavior: "smooth",
      });
    };

    backToTopButton.addEventListener("click", goToTop);
  });

  // const soundUrl = "../assets/guitar-loop.mp3";
  // const [play] = useSound(soundUrl);
  // const audio = new Audio("../assets/guitar-loop.mp3");


  useEffect(() => {
    setAudio(new Audio("../assets/guitar-loop.mp3")); // only call client
  });
  if (typeof document !== "undefined") {
    const buttons = document.querySelectorAll(".btn-sound");

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        audio.play();
      });
    });
  }

  // const [play, { stop, isPlaying }] = useSound(soundUrl);

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <button className="back-to-top hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="back-to-top-icon"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M7 11l5-5m0 0l5 5m-5-5v12"
          />
        </svg>
      </button>
      <div className="play-sound">
        <button className="btn-sound">
          <img
            className="back-to-top-icon"
            src="https://i.gifer.com/Z23b.gif"
            alt="sound-gif"
          />
        </button>
      </div>
    </>
  );
}
