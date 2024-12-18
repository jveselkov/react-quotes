import { RouterProvider, createBrowserRouter } from "react-router-dom";

type Router = ReturnType<typeof createBrowserRouter>;

type ProvidersProps = {
  router: Router;
};

export const Providers = ({ router }: ProvidersProps) => {
  return <RouterProvider router={router} />;
};
