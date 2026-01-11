# kiruthigarani-react

# parcel
- create a dev build
- create local server
- HMR = Hot Module Replacement -  Parcel provides Hot Module Replacement (HMR) automatically with zero configuration for development, which allows you to update code in the browser without a full page reload. 
- How it Works
When you run Parcel's development server (usually with a command like parcel src/index.html or npm start), it:
Watches files for changes.
Rebuilds only the changed modules.
Communicates the update to the browser via WebSockets.
Replaces the old code with the new code in the running application, preserving the application's state (e.g., form input, scroll position). 
- Parcel use file watching algorithm written in c++
- Parcel use caching so it gives faster development build
- image optimization
- minification
- bundling
- tree shaking - remove unused code
- consistent hashing, browserlist package, babel - read abt it
- code splitting
- differential bundling - support for old browsers
- error handling
- error diagnostic
- will give https
- read more about parcel from official doc


import React from "react"; 
import ReactDOM from "react-dom/client";
 
// this is not an html tag, its JS object, here the 3rd argumant is children of the parent element
// React.createElement => react element (JS object) => HTML element (rendered on the browser)
 const heading = React.createElement("h1", {id: "title", class: "heading"}, "Hello World from React!"); 

 // this is how we can create nested elements
//  const parent = React.createElement("div", {id: "parent"},
//     React.createElement("div", {id: "child1"}, 
//         React.createElement("h1", {}, "I am h1 tag inside child1 div"))); 

//JSX transpiled before it reaches the JS => who is doing this transpilation? Babel which is installed from Parcel bundler
// JSX => Babel transpiles into React CreateElement = > JS Object => HTML (rendered on the browser)
const heading2 = <h1 id="title" className="heading">Hello World from React using JSX!</h1>;

    const root= ReactDOM.createRoot(document.getElementById("root"));
    root.render(heading2); // render() job is to take the createelement (JS object) and convert it into HTML element and show it on the browser

------------------------------------------------------------------------

    // component name should be in captital letter Heading2 Heading1
const Heading2 = () =>  (
    <div className="container" id ="main-container">
    <Heading1 /> // this is called component composition, a component inside another component
<h1 id="title" className="heading">
    Hello World from React using functional component!
    </h1> 
    </div>
    );



### Dont use index as key for a component
-  a key should be coming from your data, such as a database ID. React uses your keys to know what happened if you later insert, delete, or reorder the items..
Why key shouldn't be the array index : https://robinpokorny.com/blog/index-as-a-key-is-an-anti-pattern/

perfect example : https://jsbin.com/wohima/edit?output
Read more :https://stackoverflow.com/questions/42773892/wrong-components-rendered-by-preact

## Config-driven UI - Read abt it

## 2 types of exports
1. Named export - when we want to export more than one variable use named export
        eg: export const variablenmae= value; 
            import {variablename} from file_path; //difference is {} curly braces
2. default export -  when we want to export a component use defaault export
    eg: export default <module_name>;
      import <variable or module_name> from file_path;
        eg: import Headercomponent from file_path; //default import doesnt have {} curly braces

## React-Fiber Architecture - Read about it

##useEffect will mounted once the component is rendered

-------------------   ---------------------------    -----------------------------   ----------------------------
Loads the web page  -> Render the component first ->  API call will happen inside ->  Re-render the component with
-------------------   ----------------------------   useEffect()                      API response
                                                    ------------------------------   -----------------------------



swiggy's API - https://www.swiggy.com/api/seo/getListing?lat=9.9435367&lng=78.0537813&apiV2=true


Home work:
Implement load more restaraunt details while scrolling


By-pass cors issue:
1. install chrome extension: Allow CORS
2. got to https://corsproxy.io/, copy the cors url and paste it before the api url in code


useEffect :
1. if no dependency array in useEffect => useEffect will call  everytime the component rendered
2. if dependency array is empty => useEffect will call on initial render (only once)
3. If dependency array is not empty => useEffect will call, whenever the value in dependcy array updated or changed

Types of routing:

with server-side routing you download an entire new webpage whenever you click on a link,
with client-side routing the webapp downloads, processes and displays new data for you.
Imagine the user clicking on a simple link: <a href="/hello">Hello!</a>

On a webapp that uses server side routing:

The browser detects that the user has clicked on an anchor element.
It makes an HTTP GET request to the URL found in the href tag
The server processes the request, and sends a new document (usually HTML) as a response.
The browser discards the old webpage altogether, and displays the newly downloaded one.

If the webapp uses client side routing:

The browser detects that the user has clicked on an anchor element, just like before.
A client side code (usually the routing library) catches this event, detects that the URL is not an external link, and then prevents the browser from making the HTTP GET request.
The routing library then manually changes the URL displayed in the browser (using the HTML5 history API, or maybe URL hashbangs on older browsers)
The routing library then changes the state of the client app. 


Router : 
1. Install router >> npm i react-router-dom
2. import {createBrowserRouter, RouteProvider} from "react-router"
3. create path using:

const AppComponent = () => {
    return (
        <div className="app-container">
            <HeaderComponent />
            <Bodycomponent />
        </div>
    );
}
    const routerPath = createBrowserRouter = ([
        {
            path : "/",
            element: <Bodycomponent />
        },
         {
            path : "/",
            element: <Aboutcomponent />
        },
         {
            path : "/",
            element: <Contactcomponent />
        },
    ])

    In above example, we won't get the header as common for all other components
 -------------------------------------------------------------------------------------------
   import { createBrowserRouter,RouterProvider, Outlet } from "react-router";

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
    ],
    errorElement: <ErrorComponent />,
  }
]);


4. useRouterError:  
    >> This hook allows you to access the current error state of the router.
    >> import from react-router



5. power of useEffect
useEffect(() => {
    getResponse();

    const interval = setInterval(() => {
       console.log("useEffect called");
      
    }, 1000);
      
  }, []);

  if you write a setInterval inside useEffect, this will be called on all the component in background ,that makes your app not scalable.
  Below is to cleanup the interval. Once we cleaned the event, it will call only on the require component.


  useEffect(() => {
    getResponse();

    const interval = setInterval(() => {
       console.log("useEffect called");
      
    }, 1000);
    
    return () => {
      console.log("useEffect cleanup");
      clearInterval(interval);
    };
  }, []);

  ## Class based component life cycle method : https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
  ## super props in class based component : https://namastedev.com/blog/why-we-write-superprops-in-react-class-based-component-2/


## single responsibility principle
## The Single Responsibility Principle (SRP) states that a class or module should have only one reason to change, meaning it should have a single, well-defined responsibility or job. This improves code by making it more maintainable, readable, and testable, as changes to one function (like email notifications) won't break unrelated functionality (like database saving) within the same component. It encourages separating concerns, grouping code that changes for the same reasons, and isolating those that change for different reasons. 

##  Core Idea
## 1. One Reason to Change: A class should have just one primary responsibility, so any changes related to that responsibility only affect that one class.
## 2. Actor-Based Definition: A module should be responsible to one actor (stakeholder/user group).
## 3. Gather Same-Reason Changes: Collect things that change for the same reasons; separate things that change for different reasons. 


## . navigator.onLine is a boolean that reflects the browser's network status, but be aware it isn't always perfectly reliable across all browsers and edge cases.

If you want a slightly safer or more explicit variant, prefer globalThis (available in both browsers and Node) and choose a fallback that fits your app (true means “assume online”):
() => (typeof globalThis.navigator !== 'undefined' ? globalThis.navigator.onLine : true)


## Lazy loading is used to distributing my code into different chunks. Instead of loading everything at one go when a website loads, we can use Lazy Loading to split or render the component on-demand.

## Different words for chunking is:
 1. Chunking
 2. code Splitting
 3. Dynamic bundling
 4. lazy loading
 5. on-demand loading
 6. dynamic import

 ## syntax for heavy loadin
 // MyHeavyComponent.js
import React from 'react';

const MyHeavyComponent = () => {
  return <div>I am a heavy, lazy-loaded component!</div>;
};

export default MyHeavyComponent;

## use lazy loadto optmize it
// App.js
import React, { lazy, Suspense } from 'react';

// Use React.lazy() to create a lazy-loaded component
const MyHeavyComponent = lazy(() => import('./MyHeavyComponent'));

const App = () => {
  return (
    <div>
      <h1>My Application</h1>
      {/* Wrap the lazy component with Suspense */}
      <Suspense fallback={<div>Loading content...</div>}>
        <MyHeavyComponent />
      </Suspense>
    </div>
  );
};

## Some ways to use CSS:
1. SCSS
2. SASS
3. Material UI - React component library
4. Bootstrap
5. Tailwind -learn
6. Styled component -learn
7. Chakra UI
8. Ant design


## Tailwind CSS - .postcssrc configuration file is used by parcel to understand about Tailwind CSS


## custom hooks vs higher-order components
-------------------------------------------------------|---------------------------------------------------|
Feature 	                   Custom Hooks	                   |    Higher-Order Components (HOCs)                |
-----------------------------------------------------|-----------------------------------------------------|
Primary Use Case	  |    Reusing stateful logic	             |  Component enhancement, conditional rendering       |
Implementation	    |     Function that starts with use	     |  Function takes a Component & returns a new Component
Component Tree Impact|   No extra nesting, cleaner tree	     |   Can lead to "wrapper hell" (deep nesting)         |
Data Flow	       |   Explicit                       |   Implicit                                          |
                        (you see hooks called in the component)	 (props are injected behind the scenes)            |
JSX Rendering	 |            No (logic only)	                 |    Yes (can wrap with additional UI/JSX)            |
--------------------------------------------------------------------------------------------------------------------


## Difference between ref, state and let variables

## 1. let variable, the value will update but it wont re-render the component, so that the value wont be visible in the UI
## 2. state variable,  the value will be updated but it will re-render the component for every state change
## 3. if you want to persist the value but you dont want the component to be re-render, then use useRef