import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id="error-page"
      className="flex flex-col items-center justify-center h-[100vh]"
    >
      <h1
        className="text-3xl font-bold
      "
      >
        Oops!
      </h1>
      <p>Sorry, An error has occurred</p>
      <p>
        <i>{error.message || error.statusText}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
