# Tutorial #3: Your First Topology
In the [past tutorial](./tutorial-003.md) you got to know Common Topology Model. This lesson will help you to employ this knowledge to spin up a basic NeXt application.

## Define the file structure

Now that you downloaded NeXt library, put it under /js/next/, while and our project-specific files will be located under /app/. 

These are app.js and data.js - you'll get back to them momentarily, but now make sure you have the index.html in the root and file structure like it goes below:

```
app/
    app.js
    data.js
js/
    next/
        ... NeXt library go here ...
index.html
```

## JavaScript aside: Brief introduction to closures
When you work with JavaScript libraries from third parties, it's a good habit to use [immediately-invoked function expressions](https://en.wikipedia.org/wiki/Immediately-invoked_function_expression) (or, simply "closures"). 
 
This is how you may use them:

```
// example.js

(function(localVar1, localVar2){

    // you code goes here...

})(globalVar1, globalVar2);

```

**TL;DR**

You will be able to use localVar1 and localVar2 as global objects globalVar1 and globalVar2, but your variables will not be visible from the global namespace (from outside this code).

**More detailed explanation**


*globalVar1* and *globalVar2* are variables, accessible from global namespace. If you want to use them and not to pollute global namespace with your variable, closures come to the rescue. In this example *globalVar1* transforms to *localVar1* and *globalVar2* transforms to *localVar2*. That means that variables passed into the immediately-invoked function ()() will become local from the anonymous function's point of view.  

This is good when you want to achieve modularity and keep you code clean.

## Create data.js

This file will contain topology data that we want to display. Here's our example topology, but you want to build your own to get more expertise.


## Create app.js

I am writing the code inside closures in app.js and it is available for you under /demos/tutorial-003/


```
var app = new nx.ui.Application();
```
