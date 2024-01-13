import LandingPage from "../components/home";

export const publicRoutes = [
  {
    path: "/",
    element: <LandingPage />,
  },

  {
    path: "*",
    element: <h1>Not found</h1>,
  },
];
