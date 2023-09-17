import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className=" flex flex-col text-center   justify-center items-center h-[calc(100vh)]">
      <div id="error-page">
        <p className="mx-32 text-8xl font-extrabold mb-5 text-yellow-400">
          <i>{error.status || 404}</i>
        </p>
      </div>
      <Link to="/" className="btn btn-primary">
        Back to homepage
      </Link>
    </div>
  );
};

export default ErrorPage;
