import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./src/component/HeaderComponent";
import BodyComponent from "./src/component/BodyComponent";


const AppComponent = () => {
    return (
        <div className="app-container">
            <HeaderComponent />
            <BodyComponent />
        </div>
    );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppComponent />);