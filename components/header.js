import Image from "next/image";
import Link from "next/link";
import Logo from "../assets/logo.svg";

export default function Header() {
  return (
    <header className="bg-[#000125] text-white container mx-auto flex justify-between items-center px-6 md:px-0">
      <div className="flex flex-wrap ml-3 flex-col md:flex-row items-center">
        <Link
          href="/"
          className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
        >
          <Image
            className="px-16 rounded-2xl"
            src={Logo}
            alt="name logo"
            width="100rem"
            height="100rem"
          />
        </Link>
      </div>
      <nav>
        <ul className="flex gap-6 font-medium">
          <li className="hover:text-green-400 focus:underline">
            <Link href="#about">About Me</Link>
          </li>
          <li className="hover:text-green-400 focus:underline">
            <Link href="#experience">Experience</Link>
          </li>
          <li className="hover:text-green-400 focus:underline">
            <Link href="/mywork">Projects</Link>
          </li>
          <li className="hover:text-green-400 focus:underline">
            <Link
              href="https://susmitadey.hashnode.dev/"
              // target="_blank"
              rel="noreferrer"
              // tabIndex={1}
            >
              Blog
            </Link>
            {/* <Link href="/blog">Blog</Link> */}
          </li>
          <li className="mr-8 hover:text-green-400 focus:underline">
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
