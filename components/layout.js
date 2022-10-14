import About from "./about";
import Footer from "./footer";
import Header from "./header";
import IntroHeader from "./introheader";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <IntroHeader />
      <main>
        <About />
        {children}
        </main>
      <Footer />
    </>
  );
}
