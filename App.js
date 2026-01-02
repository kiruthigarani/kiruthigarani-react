import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter,RouterProvider, Outlet } from "react-router";
import HeaderComponent from "./src/component/HeaderComponent";
import BodyComponent from "./src/component/BodyComponent";
import ErrorComponent from "./src/component/ErrorComponent";
import MenuComponent from "./src/component/MenuComponent";

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
        /* nested routes which allows us the rendering of multiple components based 
        on the url path,where Outlet is used to render the child component 
        inside the parent component (header component here)

        All components will have header component as common
        */
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
      {
        path: "/restaurant/:resId",
        element: <MenuComponent />,
      }
    ],
    errorElement: <ErrorComponent />,
  }
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppComponent />);

root.render(<RouterProvider router={router} />);