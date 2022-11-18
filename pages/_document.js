import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import loader from "../components/loader";

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
          {/* <div id={"globalLoader"}> */}
          <div onLoad="myFunction()" id={"globalLoader"}>
            <div className="loading-wrapper">
              {/* <div />
              <div /> */}
              <img src="./loader.gif" id="loading" />
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
