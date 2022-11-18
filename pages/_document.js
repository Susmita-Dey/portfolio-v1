import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import loader from "../components/loader";
// import Image from "next/image";

class MyDocument extends Document {
  render() {
    if (typeof window !== "undefined") {
      var preloader = document.querySelector(".loading-wrapper");

      function myFunction() {
        preloader.style.display = "none";
        document.body.style.overflow = "auto";
      }
    }
    return (
      <Html lang="en">
        <Head />
        <head>
          {/* <style>{loader}</style> */}
          <style>{loader}</style>
        </head>
        <body>
          <div onLoad="myFunction()" id={"globalLoader"}>
            <div className="loading-wrapper">
              <img
                src="/loader.gif"
                id="loading"
                // width={540}
                // height={540}
                // loading="lazy"
                // layout="fill"
              />
            </div>
          </div>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
