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
            <button className="btn" onClick="filterObjects('freelance')">
              {" "}
              Freelance
            </button>
          </div>
          {work?.map((workItem) => (
            <Work key={workItem?.title} item={workItem} />
          ))}
        </div>
      </section>
    </div>
  );
}
