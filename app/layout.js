// "use client"

// import { useEffect } from "react";
// import { Analytics } from "@vercel/analytics/react";
// import Image from "next/image";
import Head from "next/head";
import Layout from "../components/Layout";
// import loader from "../components/loader";
import "../styles/globals.css"

export const metadata = {
    title: 'Home',
    description: 'Welcome to Next.js',
}

export default function RootLayout({
    // Layouts must accept a children prop.
    // This will be populated with nested layouts or pages
    children,
}) {
    // useEffect(() => {
    //     if (typeof window !== "undefined") {
    //         const loader = document.getElementById("globalLoader");
    //         if (loader) loader.style.display = "none";
    //     }
    // }, []);
    return (
        <>
            <html lang="en">
                <Head>
                    {/* <style>{loader}</style> */}
                    {/* <style>{loader}</style> */}
                </Head>
                <body>
                    {/* <div id={"globalLoader"}>
                        <div className="loading-wrapper">
                            <Image
                                src="/loader.gif"
                                id="loading"
                                className="w-80 h-80"
                                width={540}
                                height={540}
                                loading="lazy"
                                alt="loader"
                            />
                        </div>
                    </div> */}
                    <Layout>
                        {children}
                    </Layout>
                </body>
            </html>
            {/* <Analytics /> */}
        </>
    )
}