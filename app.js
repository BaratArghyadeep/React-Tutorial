
const root = ReactDOM.createRoot(document.getElementById("root"));

const parent = React.createElement(
    "div", 
{id:"parent"}, React.createElement("div",{id:"child"}, [React.createElement("h1", {}, "Hello"),React.createElement("h2", {}, "Hello")])


)

root.render(parent);