import React from "react"; 
import ReactDOM from "react-dom/client";

//  const heading = React.createElement("h1", {id: "title", class: "heading"}, "Hello World from React!"); 

const Heading1 = () => {
    return <h1 id="title1" className="heading">
    Hello World from React!</h1> 
   };

// component name should be in captital letter Heading2 Heading1
const Heading2 = () =>  (
    <div className="container" id ="main-container">
    <Heading1 /> 
<h1 id="title" className="heading">
    Hello World from React using functional component!
    </h1> 
    </div>
    );
   

    const root= ReactDOM.createRoot(document.getElementById("root"));
    root.render(<Heading2 />); 