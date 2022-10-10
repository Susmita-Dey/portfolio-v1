export default function Layout({ children }) {
  return (
    <>
      <header>Header</header>
      <main>{children}</main>
      <footer>&copy; - My portfolio</footer>
    </>
  );
}
