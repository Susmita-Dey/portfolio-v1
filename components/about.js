import SectionHeader from "./sectionHeader";

export default function About() {
  return (
    <section className="bg-gradient-to-r from-green-400 to-cyan-400 px-6 py-12">
      <div className="flex max-w-4xl mx-auto py-12 gap-10">
        <div>
          {/* <SectionHeader /> */}
          <h2 className="text-2xl font-bold mb-6">My Skills</h2>
          <p className="text-lg font-normal mb-6">
            I love to explore new technologies and build projects and get used
            to it. Currently I'm exploring Web3 and trying to implement in my
            projects. Beside this I'm also building my side project <span className="text-white underline text-base">API World</span>
          </p>
        </div>
        <div className="m-16 flex flex-col">
          <div className="flex">
            <img
              src="https://img.icons8.com/color/48/000000/html-5.png"
              alt="html5"
            />
            <img
              src="https://img.icons8.com/color/48/000000/css3.png"
              alt="css3"
            />
            <img
              src="https://img.icons8.com/color/48/000000/bootstrap.png"
              alt="bootstrap"
            />
            <img
              src="https://img.icons8.com/fluency/48/000000/tailwind_css.png"
              alt="tailwind"
            />
            <img
              src="https://img.icons8.com/color/48/000000/javascript.png"
              alt="js"
            />
          </div>
          <div className="flex">
            <img
              src="https://img.icons8.com/color/48/000000/git.png"
              alt="git"
            />
            <img
              src="https://img.icons8.com/ios-filled/50/000000/github.png"
              alt="github"
            />
            <img
              src="https://img.icons8.com/plasticine/100/000000/react.png"
              alt="reactjs"
            />
            <img
              src="https://img.icons8.com/color/48/000000/nodejs.png"
              alt="nodejs"
            />
            <img
              src="https://img.icons8.com/color/48/000000/mongodb.png"
              alt="mongodb"
            />
          </div>
          <div className="flex">
            <img
              src="https://img.icons8.com/ios/50/000000/express-js.png"
              alt="express-js"
            />
            <img
              src="https://img.icons8.com/nolan/64/java-coffee-cup-logo.png"
              alt="java"
            />
            <img
              src="https://img.icons8.com/fluency/48/000000/python.png"
              alt="python"
            />
            <img
              src="https://img.icons8.com/color/48/000000/figma.png"
              alt="figma"
            />
            <img
              src="https://img.icons8.com/cute-clipart/64/000000/canva-app.png"
              alt="canva"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
