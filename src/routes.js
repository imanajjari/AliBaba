import Home from "./pages/Home/Home";
import Visa from "./pages/Visa/Visa";
import Login from "./pages/Login/Login";
import HelpCenter from "./pages/HelpCenter/HelpCenter";
import Profile from "./pages/Profile/Profile";
import NotFound from "./pages/404/NotFound";

let routes = [
  { path: "/", element: <Home /> },
  { path: "/visa", element: <Visa /> },
  { path: "/login", element: <Login /> },
  { path: "/help-center", element: <HelpCenter /> },
  { path: "/profile", element: <Profile /> },
  { path: "/help-center", element: <HelpCenter /> },
  { path: "*", element: <NotFound /> },
];

export default routes;
