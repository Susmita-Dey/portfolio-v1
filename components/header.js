export default function Header() {
  return (
    <header className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 container mx-auto flex justify-between h-24 items-center">
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
          <li className="hover:text-blue-800 focus:underline">
            <a href="#">About Me</a>
          </li>
          <li className="hover:text-blue-800 focus:underline">
            <a href="#">Experience</a>
          </li>
          <li className="hover:text-blue-800 focus:underline">
            <a href="#">Projects</a>
          </li>
          <li className="hover:text-blue-800 focus:underline">
            <a href="https://susmitadey.hashnode.dev/" target="_blank">
              Blog
            </a>
          </li>
          <li className="mr-8 hover:text-blue-800 focus:underline">
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
