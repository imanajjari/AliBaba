import Home from "./pages/Home/Home";
import Visa from "./pages/Visa/Visa";
import Login from "./pages/Login/Login";
import HelpCenter from "./pages/HelpCenter/HelpCenter";

let routes = [
  { path: "/", element: <Home /> },
  { path: "/visa", element: <Visa /> },
  { path: "/login", element: <Login /> },
  { path: "/help-center", element: <HelpCenter /> },
];

export default routes;
