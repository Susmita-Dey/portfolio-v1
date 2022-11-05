import { useState, useEffect } from "react";
// import useSound from "use-sound";
import Footer from "./footer";
import Header from "./header";
// import SoundBar from "./SoundBar";

export default function Layout({ children }) {
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

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <button className="back-to-top hidden">
        {/* <svg
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
        </svg> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="30"
          height="30"
          viewBox="0 0 512 512"
          stroke="currentColor"
        >
          <path
            fill="#00efd1"
            d="M312.51,375.64l-2.53,22.94H202.02l-2.53-22.94H136.54V349.4a51.485,51.485,0,0,1,14.16-35.46L192,270.49V270H321.19v.19l40.58,43.86A51.458,51.458,0,0,1,375.46,349v26.64Z"
          ></path>
          <path
            fill="#00acea"
            d="M321.19,130V270H192c0-31.01,0-124-.25-139.97L193,130H321.19Z"
          ></path>
          <path
            fill="#00efd1"
            d="M321.19,127.83V130H193l-1.25.03c-.02-1.15-.04-1.9-.06-2.2,0-33.29,16.04-88.66,64.75-116.19C305.16,39.17,321.19,94.54,321.19,127.83Z"
          ></path>
          <polygon
            fill="#fedb41"
            points="289.26 398.58 289.26 398.9 256 500.36 222.74 398.9 222.74 398.58 289.26 398.58"
          ></polygon>
          <path
            fill="#083863"
            d="M136.54,382h57.575l1.941,17.628A6.026,6.026,0,0,0,202.02,405h16.268L250.3,502.439a6.063,6.063,0,0,0,11.4.052L293.712,405H309.98a6.026,6.026,0,0,0,5.964-5.372L317.885,382H375.46c3.313,0,5.54-3.046,5.54-6.36V349a57.165,57.165,0,0,0-15.151-39.025L327,267.84V127.83c0-30.866-14.184-91.172-67.7-121.413a5.905,5.905,0,0,0-5.856,0c-53.519,30.247-67.774,90.55-67.774,121.413,0,.121.016.266.024.387.017.277.037.929.054,1.907.244,15.605.252,105.528.252,137.97l-39.419,41.714A57.035,57.035,0,0,0,131,349.4v26.24C131,378.954,133.227,382,136.54,382ZM256,481.518,230.916,405h50.168ZM315,264H198c0-31.976-.012-103.5-.189-128H315ZM256.44,18.592C300.68,45.4,314.014,95.453,315.106,124H197.774C198.867,95.455,212.2,45.4,256.44,18.592ZM143,349.4a45.083,45.083,0,0,1,12.279-31.326L195.041,276H318.392l38.744,42.125A45.111,45.111,0,0,1,369,349v21H319.209l2.9-26.522a6,6,0,1,0-11.927-1.241L304.605,393H207.4l-5.582-50.808a6,6,0,1,0-11.927,1.338L192.791,370H143Z"
          ></path>
        </svg>
      </button>
      <script
        data-name="BMC-Widget"
        data-cfasync="false"
        src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
        data-id="susmitadey"
        data-description="Support me on Buy me a coffee!"
        data-message="Thank You For Your Kind Support"
        data-color="#40DCA5"
        data-position="Right"
        data-x_margin="18"
        data-y_margin="18"
        allow="payment"
      ></script>
      {/* <SoundBar /> */}
      {/* <div className="play-sound">
        <button className="btn-sound">
          <img
            className="back-to-top-icon"
            src="https://i.gifer.com/Z23b.gif"
            alt="sound-gif"
          />
        </button>
      </div> */}
    </>
  );
}
