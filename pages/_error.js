function Error({ statusCode }) {
  return (
    <div className="flex flex-col mx-auto my-12 justify-center items-center">
      <img
        className="mb-6"
        src="404 error.gif"
        alt="error"
        width="250rem"
        height="250rem"
      />
      <h3>
        {statusCode
          ? `An error ${statusCode} occurred on server`
          : "An error occurred on client"}
      </h3>
      <a href="/">
        <button className="bg-blue-900 text-white p-4 my-6 rounded-lg">
          Go back Home
        </button>
      </a>
    </div>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
