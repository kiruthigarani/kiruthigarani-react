import React, {lazy, Suspense, useEffect,useState, useContext} from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter,RouterProvider, Outlet } from "react-router";
import HeaderComponent from "./src/component/HeaderComponent";
import BodyComponent from "./src/component/BodyComponent";
import ErrorComponent from "./src/component/ErrorComponent";
import MenuComponent from "./src/component/MenuComponent";

import userInformation from "./src/utils/userInformation";
import { Provider } from "react-redux";
import appStore from "./src/reduxStore/appStore";

import CartComponent from "./src/component/CartComponent";
//import AboutUsComponent from "./src/component/AboutUsComponent"; make it as dynamic loadin or on-demand loading
const AboutComponent = lazy (()=> import ("./src/component/AboutUsComponent"));


const AppComponent = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    getUserInfo();
  }, []);
  const getUserInfo = async () => {
    //API call to get user info
    const data = await fetch ("https://jsonplaceholder.typicode.com/users/1"); //dummy API
    const json = await data.json();
    setUserName (json.name);
  }
    return (
      <>
        {/*userInformation provider is  used to pass data to all the child components and it updates the username which is in userinformation file (default user) with new name from auth api
        This new value will be shown in restaurant component and header component where we are using the context
        
        */}
        <Provider store={appStore}>
        <userInformation.Provider value={{username: userName}}>
          <div className="app-container">           
            <HeaderComponent />          
            <Outlet />
          </div>
        </userInformation.Provider>
        </Provider>
      </>
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
        element: <Suspense fallback={<div>Loading...</div>}><AboutComponent /></Suspense>,
      },
      {
        path: "/contact",
        element: <div>Contact Page</div>,
      },
      {
        path: "/restaurant/:resId",
        element: <MenuComponent />,
      },
      {
        path: "/cart",
        element:<CartComponent/>
      }
    ],
    errorElement: <ErrorComponent />,
  }
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppComponent />);

root.render(<RouterProvider router={router} />);