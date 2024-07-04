import React from 'react';

console.log(React.version);

const element = document.createElement("h2");
element.className = "name-of-class"
element.style = "color: red; background-color: blue";
element.innerHTML = "Ahmed";

document.body.appendChild(element);
console.dir(element);

const phgraph = document.createElement("h2");
phgraph.className = "container center";
phgraph.style = "color: red; background-color: red";
phgraph.innerHTML = "Mohmed";
/*
const element = document.createElement(tagName) creates an HTML element
element.style = "background-color: blue" sets the background-color to blue
element.className = "container" sets the class of the element to: container
multiple classes can be set by separating them with a space character: element.className = "container center"
*/
 const element2 = React.createElement("h1");
 console.log(element2);
 //React.createElement("h1", {className: "center", style: "color: red"})
 React.createElement("h1", {}, "Hello World")
/* 
Recap
A React Element is the smallest building block.
It's a representation of a small piece of your UI.
React.createElement returns a React Element
React.createElement(type, options, children)
*/
