import React from "react";
import ReactDOM from "react-dom";

console.log("start - this is not a problem");

const myArray = [1, 2, 3, 4, 5];

function range(length) {
  const arr = [];
  for (let i = 0; i < length; i++) {
    arr[i] = i;
  }
  return arr;
}

ReactDOM.render(
  // if i start with an html syntax, i can no longer use "normal" javascript-syntax:
  // below starts the jsx-part:
  <div>
    {/* here i am inside jsx, javascript is not working "normal" */}
    console.log("this is a problem, because this will not work!")
    {/* in jsx and VS code, you can create comments with ctrl + / (strg + /) */}
    {/* in jsx you can write "normal" javascript, if you wrap it inside curly
    braces: "{" and "}"
    */}
    {console.log(
      "this again is not a problem, because this will work again and log it!"
    )}
    <a href="https//google.com">this is a link</a>
    <p>this is a paragraph inside js - crazy!</p>
    <p>lets use the component:</p>
    <MyComponent />
    <p>use an array to render something:</p>
    <ul>
      {["Martha", "Simba", "Felix"].map((name) => {
        // the key attribute is important so that react
        // can correctly test how often the component needs to rerender it
        // it is a performance issue:
        // without a key, react needs to rerender the child elements with every
        // rerender of the parent
        return <li key={name}>{name}</li>;
      })}
    </ul>
    <p>I also can use my functional components inside the lists:</p>
    <div>
      {range(10).map((number) => {
        return <MyComponent key={number} />;
      })}
    </div>
    <p>of course you can just use arrays which are stored in a variable:</p>
    <div>
      {myArray.map((number) => {
        return <div key={number}>this is the component: {number}</div>;
      })}
    </div>
  </div>,
  // here the jsx part ends, so normal javascript again:
  // -----
  // the root element is defined inside public/index.html
  document.getElementById("root")
);

function MyComponent() {
  return <div>my cool component</div>;
}
