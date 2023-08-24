// const heading = React.createElement("h1", {id : "heading", xyz: "xyz"}, "Hello World from React!");
// console.log(heading);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

{
  /* <div id="parent">
<div id="child1">
    <h1>I am h1 tag.</h1>
    <h2>I am h2 tag.</h2>
</div>
<div class="child2">
    <h1>I am h1 tag.</h1>
    <h2>I am h2 tag.</h2>
</div>
</div> */
}

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am hi tag"),
    React.createElement("h2", {}, "I am hi tag"),
  ]),
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am hi tag"),
    React.createElement("h2", {}, "I am hi tag"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);