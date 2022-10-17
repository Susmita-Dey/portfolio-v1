export default function Custom404() {
  return (
    <div className="flex flex-col mx-auto my-12 justify-center items-center">
      <img
        className="mb-6"
        src="404 error.gif"
        alt="error"
        width="250rem"
        height="250rem"
      />
      <h1>404 - Page Not Found</h1>
      <a href="/">
        <button className="bg-blue-900 text-white p-4 my-6 rounded-lg">
          Go back Home
        </button>
      </a>
    </div>
  );
}
