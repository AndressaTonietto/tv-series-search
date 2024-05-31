import { useRouteError } from "react-router-dom";

const ErrorPage: React.FC = () => {
  const error: unknown = useRouteError();

  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <a href="/">Home page</a>
      <p>
        <i>
          {(error as Error)?.message ||
            (error as { statusText?: string })?.statusText}
        </i>
      </p>
    </div>
  );
};

export default ErrorPage;
