 const heading = React.createElement("h1", {id: "title", class: "heading"}, "Hello World from React!"); // this is not an html tag, its JS object, here the 3rd argumant is children of the parent element

 const parent = React.createElement("div", {id: "parent"},
    React.createElement("div", {id: "child1"}, 
        React.createElement("h1", {}, "I am h1 tag inside child1 div"))); // this is how we can create nested elements
    const root= ReactDOM.createRoot(document.getElementById("root"));
    root.render(parent); // render() job is to take the createelement (JS object) and convert it into HTML element and show it on the browser