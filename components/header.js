import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import Logo from "../assets/logo.png";
import { useState } from "react";

export default function Header() {
  const [navbar, setNavbar] = useState(false);
  const router = useRouter();

  return (
    <nav className="bg-[#000125] border-gray-200 px-2 sm:px-4 py-2.5 rounded">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-2.5 md:block">
            <a href="/" className="flex items-center text-white mb-4 md:mb-0">
              <Image
                className="px-16 rounded-2xl"
                src={Logo}
                alt="name logo"
                width="100rem"
                height="100rem"
              />
            </a>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-100 rounded-md outline-none focus:border-gray-400 focus:border"
                role="button"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <img
                    className="w-6 h-6"
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
            <ul className="flex flex-col p-4 mt-4 bg-[#000125] text-white font-bold text-lg md:flex-row md:space-x-6 md:mt-0 md:text-lg md:font-bold md:border-0 font-Poppins">
              <li className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-cyan-300 to-pink-300 hover:from-green-500 hover:via-cyan-500 hover:to-pink-500 hover:underline">
                <button onClick={() => router.push("./#about")}>About</button>
              </li>
              <li className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-cyan-300 to-pink-300 hover:from-green-500 hover:via-cyan-500 hover:to-pink-500 nav-item">
                <button onClick={() => router.push("./#skills")}>Skills</button>
              </li>
              <li className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-cyan-300 to-pink-300 hover:from-green-500 hover:via-cyan-500 hover:to-pink-500 nav-item">
                <button onClick={() => router.push("./#experience")}>
                  Experience
                </button>
              </li>
              <li className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-cyan-300 to-pink-300 hover:from-green-500 hover:via-cyan-500 hover:to-pink-500 nav-item">
                <Link href="./mywork">Projects</Link>
                {/* <button onClick={() => router.push("./mywork")}>
                  Projects
                </button> */}
              </li>
              <li className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-cyan-300 to-pink-300 hover:from-green-500 hover:via-cyan-500 hover:to-pink-500 nav-item">
                <button onClick={() => router.push("./blog")}>Blogs</button>
              </li>
              <li className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-cyan-300 to-pink-300 hover:from-green-500 hover:via-cyan-500 hover:to-pink-500 nav-item">
                <button onClick={() => router.push("./events")}>Events</button>
              </li>
              <li className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-cyan-300 to-pink-300 hover:from-green-500 hover:via-cyan-500 hover:to-pink-500 nav-item">
                <Link href="./#contact">Contact</Link>
                {/* <button onClick={() => router.push("./#contact")}>
                  Contact
                </button> */}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
