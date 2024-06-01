import { Link } from "react-router-dom";

interface ErrorMessageProps {
  error: string;
}

const ErrorMessage = ({ error }: ErrorMessageProps) => {
  return (
    <div className="toast toast-center min-w-full">
      <div className="alert alert-error text-wrap">
        <span>
          {error}. Please try again or go to our{" "}
          <Link className="link" to="/">
            home page
          </Link>
          .
        </span>
      </div>
    </div>
  );
};

export default ErrorMessage;
