# The browser
* describe a web browsers different internal components and their interactions 
including browser security mechanisms,
* The web browser (internal structure, security models, developer tools)

## Server/Client
Select what is true for communication over http:
* The server initiates the request to the client
* The server sends a response to the client request
* The client sends a response to the server request
* The client initiates the request to the server

What is an example of a http method
* application/json
* 200 OK
* DELETE
* XMLHttpRequest

Which browser component is responsible for drawing on the screen?
* Javascript Engine
* Network stack
* Rendering Engine
* UI Backend
* Browser Engine

Why do we not want styling to be done in our javascript files? (Multiple choice)
* CSS generated from javascript will not be rendered
* Modern browsers won´t accept CSS manipulation in javascript code as it opens up for security issues
* Seperation Of Concern is a design goal that simplifies the maintenance of an application
* Designers would probably like to have CSS separeted from javascript

Why is it recommended to place script-tags at the bottom of the html file? (Multiple choice)
* The script will have increased performance
* The HTML code will be easier to read
* Loading of the script will not block rendering of html
* The DOM is rendered before we try to manipulate it.

Which object is the "global object" in the browser?
* document
* window
* object
* module

Can we use node-modules (modules.export) out of the box in the browser?
* No
* Yes

What is true? (Multiple choice)
* The only way to debug in the browser is to use console.log or alert
* Vagrant is needed to be able to build javascript applications for the browser
* Browserify is needed to be able to build javascript applications for the browser
* Javascript can run both on client and server

# JavaScript
* create web applications were JavaScript, HTML and CSS have clear roles and 
are clearly separated
* store and with asynchronous communication, transfer data with for the task 
appropriate data formats 
* JavaScript in relation to CSS and HTML
* DOM (traversing, selecting, manipulating)
* Handling events in the browser
* Asynchronous communication (incl. Ajax)
* Data transfer formats (incl. JSON)

DOM is an abbrevation for....
* Dynamic Object Moderation
* Document Over Modulation
* Document Object Model
* Dynamic Over Model

Given:
```html
<body>
  <div>
    <ul id="numberlist">
      <li class="active">First one</li>
      <li>Second one</li>
    </ul>
  </div>
</body>
```
Which option do you have to select the li element with the  text node "Second one"
* document.querySelector("#SecondOne");
* document.querySelectorAll("li")[1];
* document.getElementById("numberlist").firstChild.nextSibling;
* document.getElementById("numberlist").children[1];


What is wrong with the following code?
```javascript
  var lis = document.querySelectorAll("li");

  lis.forEach(function(li){
    li.textContent = "Some text";
  });
```
* List elements can not have textnodes.
* "lis" is not an Array, but treated as one
* The function does not have a name
* querySelectorAll should be querySelector

What is best practice to be able to use forEach on a NodeList?
* Extend the NodeList prototype with Array.prototype.forEach
* Use the Elvis operator ?. on forEach.
* Borrow the Array.prototype.forEach using call
* This is not possible

How do you create a new ELEMENT_NODE using javascript? (Multiple choice)
* document.createElement()
* document.createTextNode()
* document.importNode()
* node:create "ELEMENT_NODE"

Given:
HTML:
```html
  <div class="number red"></div>
```
Javascript:
```javascript
var div = document.querySelector(".number");
div.setAttribute("class", "blue");
div.classList.toggle("number");
div.classList.add("tiger");
```  
Which class/classes is set on the div?
* red, blue, tiger
* blue, number, tiger
* blue, tiger
* red, number
* number, red, blue, number, tiger

Why do we use templates?
* Better performance than creating nodes using js
* They help us separate html from js
* It is a better version of flash
* Templates are cached in the browser. JS-code is not.

What is an event listener?
* An asynchronous call to a synchronous object-prototype using the build in document.xhr-function
* the string "click", "load" etc.
* A function that receives a notification when an event of a specified type occurs in the browser
* A tree describing the modular parts of the browser including mouse and keyboard

Given:
```javascript
console.log("dog");

setTimeout(function(){
  console.log("bird");
}, 0)

console.log("cat");

```
In what order will the animals be logged?
* dog, bird, cat
* bird, dog, cat
* dog, cat, bird
* cat, dog, bird

---> Something about propagation

Given:
```html
<div id="div1">
  <button id="btn1">
    Knapp 1
  </button>  
</div>
```

```javascript
var div1 = document.querySelector("#div1");
var btn1 = document.querySelector("#btn1");

div1.addEventListener("click", function(e){
  console.log("The div");
   e.stopPropagation();
});

btn1.addEventListener("click", function(e){
    console.log("The button");
  	e.stopPropagation();
});
```

What is written in the log when the button is clicked:
* The div The button
* The button The div
* The button
* The div


```javascript
var xhr = new XMLHttpRequest();
xhr.addEventListener("load", ajax);
xhr.open("POST", "http://whatever.com");
xhr.send();

function ajax (){
  document.body.innerHTML = xhr.responseText;
}
```

What is the problems in this case
* Synchronous calls should always be avoided
* You should always provide an callback function to the eventlistener
* You need to require("./ajax");
* There are security concerns regarding the use of innerHTML

What is wrong with this code:

```javascript
var xhr = new XMLHttpRequest();
xhr.open("POST", "http://whatever.com");
xhr.send();

setTimeout(function(){
    console.log(respondeText);
}, 1000);
```
* Nothing. It will work
* XMLHttpRequest object is deprecated
* You do not know how long the response time is
* The code will only work in Chrome
