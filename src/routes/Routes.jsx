import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import ErrorPage from '../pages/ErrorPage/ErrorPage';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      // {
      //   path: "/",
      //   element: <Home />,
      // },
      // {
      //   path: "/instructors",
      //   element: <Instructors></Instructors>,
      // },
      // {
      //   path: "/allClasses",
      //   element: <AllClasses></AllClasses>,
      // },
      // {
      //   path: "/login",
      //   element: <Login></Login>,
      // },
      // {
      //   path: "/signup",
      //   element: <SignUp></SignUp>,
      // },
    ],
  },
]);
