import Image from "next/image";
import Link from "next/link";
import Logo from "../assets/logo.png";
import { useState } from "react";

export default function Header() {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className='bg-[#000125] border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900'>
      <div className='justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8'>
        <div>
          <div className='flex items-center justify-between py-3 md:py-2.5 md:block'>
            <a
              href='/'
              class='flex title-font font-medium items-center text-white mb-4 md:mb-0'>
              <Image
                className='px-16 rounded-2xl'
                src={Logo}
                alt='name logo'
                width='100rem'
                height='100rem'
              />
            </a>
            <div className='md:hidden'>
              <button
                className='p-2 text-gray-100 rounded-md outline-none focus:border-gray-400 focus:border'
                onClick={() => setNavbar(!navbar)}>
                {navbar ? (
                  <svg
                    class='w-6 h-6'
                    aria-hidden='true'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                      fill-rule='evenodd'
                      d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                      clip-rule='evenodd'></path>
                  </svg>
                ) : (
                  <svg
                    class='w-6 h-6'
                    aria-hidden='true'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                      fill-rule='evenodd'
                      d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                      clip-rule='evenodd'></path>
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
            }`}>
            <ul className='flex flex-col p-4 mt-4 bg-[#000125] text-white md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0'>
              <li className='hover:text-green-400 focus:underline'>
                <Link href='/#about'>About Me</Link>
              </li>
              <li className='hover:text-green-400 focus:underline'>
                <Link href='/#experience'>Experience</Link>
              </li>
              <li className='hover:text-green-400 focus:underline'>
                <Link href='/mywork'>Projects</Link>
              </li>
              <li className='hover:text-green-400 focus:underline'>
                <Link
                  href='https://susmitadey.hashnode.dev/'
                  // target="_blank"
                  rel='noreferrer'
                  // tabIndex={1}
                >
                  Blog
                </Link>
                {/* <Link href="/blog">Blog</Link> */}
              </li>
              <li className='hover:text-green-400 focus:underline'>
                <Link href='/events'>Events</Link>
              </li>
              <li className='mr-8 hover:text-green-400 focus:underline'>
                <Link href='/#contact'>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
