import { Link, useRouteError } from "react-router-dom";

const ErrorPage: React.FC = () => {
  const error: unknown = useRouteError();

  return (
    <div className="p-2 flex flex-col gap-2">
      <span className="text-3xl">Oops!</span>
      <span className="text-xl">
        {(error as Error)?.message ||
          (error as { statusText?: string })?.statusText ||
          "Sorry, an unexpected error has occurred"}
        .
      </span>
      <span>
        Go to our{" "}
        <Link className="link" to="/">
          home page
        </Link>
        .
      </span>
    </div>
  );
};

export default ErrorPage;
