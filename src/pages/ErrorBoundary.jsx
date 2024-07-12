import { useRouteError } from "react-router-dom";

function ErrorBoundary() {
    const error = useRouteError();
    console.error(error);

    return (
        <div>
            <h1>Unexpected Application Error!</h1>
            <p>{error.message}</p>
            <Link to="/">Go back to the homepage</Link>
        </div>
    );
}

export default ErrorBoundary;
