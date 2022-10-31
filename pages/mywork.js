import Head from "next/head";
import ParticlesComponent from "../components/particles";
import Work from "../components/work";
import { useEffect } from "react";
import { getAllWork } from "../lib/api";

export async function getStaticProps() {
  const work = getAllWork();
  return {
    props: {
      work,
    },
  };
}

export default function WorkPage({ work }) {
  useEffect(() => {
    filterObjects("all");
    function filterObjects(c) {
      var x, i;
      if (typeof window != undefined) {
        x = document.getElementsByClassName("box");
      }
      if (c == "all") c = "";
      // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
      for (i = 0; i < x.length; i++) {
        removeClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
      }
    }

    // Show filtered elements
    function addClass(element, name) {
      var i, arr1, arr2;
      arr1 = element.className.split(" ");
      arr2 = name.split(" ");
      for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
          element.className += " " + arr2[i];
        }
      }
    }

    // Hide elements that are not selected
    function removeClass(element, name) {
      var i, arr1, arr2;
      arr1 = element.className.split(" ");
      arr2 = name.split(" ");
      for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
          arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
      }
      element.className = arr1.join(" ");
    }

    // Add active class to the current control button (highlight it)
    const btnContainer = document.getElementById("myBtnContainer");
    const btns = btnContainer.getElementsByClassName("btn");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
      });
    }
  }, []);
  return (
    <div>
      <Head>
        <title>Susmita Dey | Projects</title>
        <meta
          name="description"
          content="Projects done by Susmita Dey - The Creative Web Developer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="px-6 text-white">
        <div className="max-w-4xl mx-auto">
          <ParticlesComponent />
          <h1 className="text-3xl text-center font-bold mb-6 p-4 text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-cyan-300 to-pink-300">
            Work
          </h1>
          {/* <!-- Control buttons --> */}
          <div
            id="myBtnContainer"
            className="flex justify-center align-center flex-wrap md:flex-row mb-8"
          >
            <button className="btn active" onClick="filterObjects('all')">
              {" "}
              Show all
            </button>
            <button className="btn" onClick="filterObjects('frontend')">
              {" "}
              Frontend
            </button>
            <button className="btn" onClick="filterObjects('ui-ux')">
              {" "}
              UI/UX
            </button>
            <button className="btn" onClick="filterObjects('backend')">
              {" "}
              Backend
            </button>
            <button className="btn" onClick="filterObjects('web3')">
              {" "}
              Web3
            </button>
            <button className="btn" onClick="filterObjects('full-stack')">
              {" "}
              Full-Stack
            </button>
            <button className="btn" onClick="filterObjects('ai')">
              {" "}
              AI/ML
            </button>
            <button className="btn" onClick="filterObjects('devops')">
              {" "}
              DevOps
            </button>
          </div>
          {work?.map((workItem) => (
            <Work key={workItem?.title} item={workItem} />
          ))}
          {/* <div className="contain text-white">
            <div className="box basic-website">
              <Work
                workTitle="Sukoon"
                imageUrl="/Sukoon.png"
                tagName="HTML, CSS, JS"
                about="This is a stress-relieving website project made in my first hackathon Hackofiesta. This project is under the theme Healthcare. This project provides one step solution to get relief from your stress. Live a stress-free life.🕊️"
                repo="https://github.com/Susmita-Dey/Sukoon"
              />
            </div>
            <div className="box basic-website tailwind">
              <Work
                workTitle="Moody"
                imageUrl="/Moody.png"
                tagName="HTML, Tailwind CSS"
                about="Moody is a Chrome extension that will help you filter your home page of your Chrome Browser according to your mood. It helps you to do your work according to your mood and also get back your mood to normal. 🕊️"
                repo="https://github.com/Susmita-Dey/Moody"
              />
            </div>
            <div className="box web3">
              <Work
                workTitle="dApp"
                imageUrl="/My-First-dApp.png"
                tagName="HTML5, CSS, Solidity"
                about="This is a web3 project. This is my First Decentralized app which will take mood as input and also output mood. It works on Goerli Test Network. Connect your Ethereum wallet and see the magic. ✨"
                repo="https://github.com/Susmita-Dey/dApp"
              />
            </div>
            <div className="box basic-website">
              <Work
                workTitle="All Round Calculator"
                imageUrl="/All-round-calculator.svg"
                tagName="Javascript"
                about="An npm library package to calculate everything you want. It's simple and lightweight.
                It contains many in-built functions and also very easy to use. This is my first npm package based on calculations. This was made for developers to help them in your calculation-based projects."
                repo="https://github.com/Susmita-Dey/all-round-calculator"
              />
            </div>
            <div className="react">
              <Work
                workTitle="TextUtils"
                imageUrl="/TextUtils.png"
                tagName="ReactJS"
                about="TextUtils is a text analyzer, word counter and converter made with React. It can be called as my first React project. It has various features like Convert text to UpperCase and LowerCase, Extract Numbers from text
                Extract Text, Copy to clipboard, Speech to text and vice-versa, etc."
                repo="https://github.com/Susmita-Dey/TextUtils"
              />
            </div>
            <div className="box basic-website tailwind">
              <Work
                workTitle="PetMe"
                imageUrl="/PetMe.png"
                tagName="HTML, Tailwind"
                about="It has been estimated that more than one million adoptable dogs and cats are euthanized in US each year because there are too many pets that are enrolled into shelters. Here comes PetMe into place to help those innocent pets find a home."
                repo="https://github.com/Susmita-Dey/PetMe"
              />
            </div>
            <div className="box basic-website tailwind">
              <Work
                workTitle="JavaScript30"
                imageUrl="/javascript30.jpg"
                tagName="HTML, Tailwind, JS"
                about="This shows my progress of learning javaScript and lists the source code of 30 different mini websites merged into one and showcased together. Basically, you may call it a version of 30 Days of JavaScript Challenge!! #30DaysOfJavaScript"
                repo="https://github.com/Susmita-Dey/JavaScript30"
              />
            </div>
            <div className="box basic-website">
              <Work
                workTitle="Safari"
                imageUrl="/Safari.png"
                tagName="HTML, Tailwind, JS"
                about="Safari is a web-based board game similar to Snakes and Ladders game but it's based on our Indian culture. It's a complete package of fun, thrill, learning and testing your knowledge on Indian heritage and diversity."
                repo="https://github.com/Susmita-Dey/Safari"
              />
            </div>
            <div className="box python">
              <Work
                workTitle="Alexia"
                imageUrl="/alexa.jpg"
                tagName="Python"
                about="Alexia is an Amazon Alexa fact skill. I was exploring Amazon Alexa Developer Website and I just tried to build a fact skill and train and deploy it on Amazon Web Services(AWS).☁️🤖"
                repo="https://github.com/Susmita-Dey/Alexia"
              />
            </div>
            <div className="box react">
              <Work
                workTitle="API World"
                imageUrl="/API.jpg"
                tagName="ReactJS, API, NextJS, Go"
                about="Inpired by ReactPlay, API World is an web application containing all types of API applications. Basically, it's a collection of various web applications where different types of APIs have been used to build each applications."
                repo="https://github.com/Susmita-Dey/API-World"
              />
            </div>
            <div className="box backend">
              <Work
                workTitle="Secrets"
                imageUrl="/secret.jpg"
                tagName="Backend"
                about="This is a full stack MongoDB web application to store your secret. In this application, you can anonysmously store your secret in the database and also view others(anonymous)."
                repo="https://github.com/Susmita-Dey/Secrets"
              />
            </div>
          </div> */}
        </div>
      </section>
    </div>
  );
}
