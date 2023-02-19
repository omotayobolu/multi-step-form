import { useRouteError, Link } from "react-router-dom";
import PrimaryBtn from "./UI/PrimaryBtn";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id="error-page"
      className="w-full flex flex-col items-center justify-center gap-4 h-[100vh]"
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
      <Link to="/">
        <PrimaryBtn className="relative mt-12">Go Back</PrimaryBtn>
      </Link>
    </div>
  );
};

export default ErrorPage;
