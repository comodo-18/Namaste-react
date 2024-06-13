const heading1 = React.createElement(
  "h1",
  { id: "heading" },
  "Hello world from React"
); // Second arguement in this function is an object which is responsible for attributes for element. This function returns an object
const root2 = ReactDOM.createRoot(document.getElementById("root2"));
// root1.render(heading1);

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am an h1 Tag"),
    React.createElement("h2", {}, "I am an h2 tag"),
  ])
);

root2.render(parent);

