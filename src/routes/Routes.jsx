import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Login from '../pages/Login/Login';
import SignUp from '../pages/SignUp/SignUp';
import Home from '../pages/Home/Home';
import AllColleges from '../pages/AllColleges/AllColleges';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/colleges",
        element: <AllColleges></AllColleges>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);
