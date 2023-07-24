import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Login from '../pages/Login/Login';
import SignUp from '../pages/SignUp/SignUp';
import Home from '../pages/Home/Home';
import AllColleges from '../pages/AllColleges/AllColleges';
import PrivateRoute from './PrivateRoute';
import CollegeDetails from '../pages/AllColleges/CollegeDetails';
import AboutUs from '../pages/AboutUs/AboutUs';
import Addmission from '../pages/Addmission/Addmission';
import MyCollege from '../pages/MyCollege/MyCollege';

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
        path: "/aboutus",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/addmission",
        element: <Addmission></Addmission>,
      },
      {
        path: "/mycollege",
        element: <MyCollege></MyCollege>,
      },
      {
        path: "/allcolleges/:id",
        element: (
          <PrivateRoute>
            <CollegeDetails></CollegeDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/allcolleges/${params.id}`),
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
