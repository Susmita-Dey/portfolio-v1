"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="bg-[#000125] border-gray-200 px-2 sm:px-4 py-2.5 rounded">
      {/* <h3 className="text-xl text-center text-yellow-400">
        Site is under construction. Please visit after some time.
      </h3> */}
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-2.5 md:block">
            <Link
              href="/"
              className="flex items-center text-white mb-4 md:mb-0 cursor-pointer"
              legacyBehavior
            >
              <Image
                className="px-16 rounded-2xl w-full h-full"
                src="/assets/logo.png"
                alt="name logo"
                width={50}
                height={50}
              />
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-100 rounded-md outline-none focus:border-gray-400 focus:border"
                role="button"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <Image
                    className="w-6 h-6"
                    width={10}
                    height={10}
                    alt="hamburger"
                    src="https://img.icons8.com/ios-glyphs/30/FFFFFF/multiply.png"
                  />
                ) : (
                  <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul
              role="list"
              className="flex flex-col p-4 mt-4 bg-[#000125] text-white font-bold text-lg md:flex-row md:space-x-6 md:mt-0 md:text-lg md:font-bold md:border-0 font-Poppins"
            >
              <li className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-cyan-300 to-pink-300 hover:from-green-500 hover:via-cyan-500 hover:to-pink-500 hover:underline">
                <Link href="/#about">About</Link>
              </li>
              <li className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-cyan-300 to-pink-300 hover:from-green-500 hover:via-cyan-500 hover:to-pink-500 nav-item">
                <Link href="/#skills">Skills</Link>
              </li>
              <li className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-cyan-300 to-pink-300 hover:from-green-500 hover:via-cyan-500 hover:to-pink-500 nav-item">
                <Link href="/#experience">Experience</Link>
              </li>
              <li className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-cyan-300 to-pink-300 hover:from-green-500 hover:via-cyan-500 hover:to-pink-500 nav-item">
                <Link href="/project">Projects</Link>
                {/* <Link href="./mywork">
                  Projects
                </Link> */}
              </li>
              <li className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-cyan-300 to-pink-300 hover:from-green-500 hover:via-cyan-500 hover:to-pink-500 nav-item">
                <Link href="/blogs">Blogs</Link>
              </li>
              <li className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-cyan-300 to-pink-300 hover:from-green-500 hover:via-cyan-500 hover:to-pink-500 nav-item">
                <Link href="/talks">Talks</Link>
              </li>
              <li className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-cyan-300 to-pink-300 hover:from-green-500 hover:via-cyan-500 hover:to-pink-500 nav-item">
                <Link href="/#contact">Contact</Link>
                {/* <Link href="./#contact">
                  Contact
                </Link> */}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
