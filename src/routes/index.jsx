import LandingPage from "../components/home";

export const publicRoutes = [
  {
    path: "/",
    element: <LandingPage />,
  },

  {
    path: "/dashboard",
    element: <LandingPage />,
  },

  {
    path: "/home",
    element: <LandingPage />,
  },
  {
    path: "*",
    element: <h1>Not found</h1>,
  },
];
