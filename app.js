
import React from "react";
import ReactDOM from "react-dom/client";

const TitleComponent = function() {

    return(
    <h1 className="head" tabIndex="5">

        Namaste React using JSX 🙏
    </h1>)
}
const number = 10000;
const HeadingComponent = () => (

<div id="container">
    {number}
    <h1 className="heading"> Namaste React functional components </h1>

</div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);