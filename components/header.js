export default function Header() {
  return (
    <header className="container mx-auto flex justify-between h-24 items-center">
      <a href="/">
        <svg
          aria-label="Daily Dev Tips logo"
          xmlns="http://www.w3.org/2000/svg"
          width="250"
          height="80"
        >
          <text x="120" y="45" fill="red">
            Susmita Dey
          </text>
        </svg>
      </a>
      <nav>
        <ul className="flex gap-5">
          <li>
            <a href="#">About Me</a>
          </li>
          <li>
            <a href="#">Experience</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="https://susmitadey.hashnode.dev/" target="_blank">
              Blog
            </a>
          </li>
          <li className="mr-8">
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
