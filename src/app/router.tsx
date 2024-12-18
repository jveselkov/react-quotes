import { createBrowserRouter } from "react-router-dom";

import { QuotesPage } from "@/pages/quotes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <QuotesPage />,
  },
]);
