import Link from "next/link";

export default function Header() {
  return (
    <header className="text-white bg-indigo-900 container mx-auto flex justify-between h-24 items-center">
      <Link href="/">
        <p>Susmita Dey</p>
      </Link>
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
