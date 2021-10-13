import { Redirect } from "react-router";

const NotFound = () => (
    <Redirect
        to={{
            pathname: "/",
        }}
    />
);

export default NotFound;