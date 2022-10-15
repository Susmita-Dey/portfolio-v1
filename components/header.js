import Link from "next/link";

export default function Header() {
  return (
    <header className="text-white bg-indigo-900 container mx-auto flex justify-between h-24 items-center">
      <a href="/">
        <svg
          aria-label="My Name logo"
          xmlns="http://www.w3.org/2000/svg"
          width="250"
          height="80"
        >
          <text x="120" y="45" fill="white">
            Susmita Dey
          </text>
        </svg>
      </a>
      <nav>
        <ul className="flex gap-5">
          <li className="hover:text-green-400 focus:underline">
            <Link href="#">About Me</Link>
          </li>
          <li className="hover:text-green-400 focus:underline">
            <Link href="#">Experience</Link>
          </li>
          <li className="hover:text-green-400 focus:underline">
            <Link href="#">Projects</Link>
          </li>
          <li className="hover:text-green-400 focus:underline">
            <Link
              href="https://susmitadey.hashnode.dev/"
              target="_blank"
              rel="noreferrer"
            >
              Blog
            </Link>
          </li>
          <li className="mr-8 hover:text-green-400 focus:underline">
            <Link href="#">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
