// make a page as site under construction. head over to https://susmitadey.hashnode.dev/
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Blogs() {
  return (
    <div className="text-white flex flex-col mx-auto my-10 justify-center items-center">
      <Image
        className="mb-6 lg:w-1/6 lg:h-1/6 w-1/2 h-1/2 bg-transparent"
        src="https://cdn.pixabay.com/photo/2014/10/17/11/53/blog-492184_1280.jpg"
        alt="error"
        width={800}
        height={800}
      />
      <h2>Blogs</h2>
      <p className="text-center py-4">
        This page is currently under construction. For now, you can check out my
        blogs on Hashnode.
        <br /> Happy Blogging! 🎃
      </p>
      <Link
        href="https://susmitadey.hashnode.dev/"
        className="bg-blue-900 text-white p-4 rounded-lg"
      >
        My Hashnode Page
      </Link>
    </div>
  );
}
