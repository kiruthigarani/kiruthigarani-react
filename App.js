import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter,RouterProvider, Outlet } from "react-router";
import HeaderComponent from "./src/component/HeaderComponent";
import BodyComponent from "./src/component/BodyComponent";
import ErrorComponent from "./src/component/ErrorComponent";


const AppComponent = () => {
    return (
        <div className="app-container">
            <HeaderComponent />
            <Outlet />
        </div>
    );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppComponent />,
    children: [
      {
        path: "/",
        element: <BodyComponent />,
      },
      {
        path: "/about",
        element: <div>About Page</div>,
      },
      {
        path: "/contact",
        element: <div>Contact Page</div>,
      },
    ],
    errorElement: <ErrorComponent />,
  }
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppComponent />);

root.render(<RouterProvider router={router} />);