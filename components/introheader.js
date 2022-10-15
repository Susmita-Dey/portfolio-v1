export default function IntroHeader() {
  return (
    <header className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:bg-slate-800 px-6 py-12">
      <div className="max-w-4xl mx-auto flex gap-10">
        <div>
          <h1 className="text-3xl font-bold mb-6">
            Hi, I am Susmita Dey!
            <br />
            Creative Developer
          </h1>
          <p className="text-lg mb-6">
            I&apos;m a final year undergrad college student pursuing B.Sc. Computer
            Science(Hons.) course. I&apos;m a MERN stack web developer passionate
            about Open Source and hackathons.<br /> Currently I&apos;m an MLH mentor and
            Graphic Designer at Community Classroom.
          </p>
          <a
            href="#"
            className="bg-blue-800 text-white px-6 py-4 rounded text-lg hover:bg-blue-700 mb-12"
          >
            Check my work
          </a>
        </div>
        <span className="m-5 inline-block before:w-full before:aspect-square before:-left-1.5 before:block before:absolute before:bg-pink-400 relative z-0 before:rounded-full">
          {/* <img src="../assets/my-profile-photo.jpg" alt="my-image" /> */}
          <img
            src="https://res.cloudinary.com/practicaldev/image/fetch/s--NY58nWj0--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/801056/1e5db99c-8443-4ab2-b8e0-9accb4150c71.jpeg"
            alt="Image of Susmita"
            className="z-10 relative rounded-full"
            width="540"
            height="540"
          />
        </span>
      </div>
    </header>
  );
}
