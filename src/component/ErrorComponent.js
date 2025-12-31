import { useRouteError } from "react-router";
const ErrorComponent = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div>
            <h1>{error.statusText}</h1>
            <p>{error.data}</p>
        </div>
    );
}
export default ErrorComponent;