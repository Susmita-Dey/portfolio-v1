// 'use client'
// import { createContext } from 'react'

// const Context = createContext()
import Image from "next/image";
import ParticlesComponent from "../components/particles";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="text-white flex flex-col mx-auto my-10 justify-center items-center">
            <ParticlesComponent />
            <Image
                className="mb-6 lg:w-1/6 lg:h-1/6 w-1/2 h-1/2"
                src="/404 error.gif"
                alt="error"
                width={0}
                height={0}
            />
            <h1>404 - Page Not Found</h1>
            <p className="text-center py-4">
                Seems like you have lost your way. If you are looking for something,
                kindly go back home first and then choose that path.
                <br /> Happy Routing! 🎃
            </p>
            <Link href="/" className="bg-blue-900 text-white p-4 rounded-lg">
                Go back Home
            </Link>
        </div>
    );
}
