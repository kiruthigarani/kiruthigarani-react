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