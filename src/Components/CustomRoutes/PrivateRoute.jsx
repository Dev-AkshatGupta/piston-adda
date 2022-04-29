import {Navigate} from "react-router-dom";
const PrivateRoute = ({ children, ...props }) => {

  return <Navigate>{children}</Navigate>;
};
export default PrivateRoute;