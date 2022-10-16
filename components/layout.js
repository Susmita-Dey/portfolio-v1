// import { Scrollbar } from "react-scrollbars-custom";
import Footer from "./footer";
import Header from "./header";

export default function Layout({ children }) {
  return (
    <>
      {/* <Scrollbar> */}
        <Header />
        <main>{children}</main>
        <Footer />
      {/* </Scrollbar> */}
    </>
  );
}
