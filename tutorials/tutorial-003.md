# Tutorial #3: Your First Topology
In the past tutorial I was talking about Common Topology Model. In this lesson we'll employ this knowledge to spin up a NeXt application.

## Define the file structure
```
/
    app/
        app.js
        data.js
    js/
        next/
            ... NeXt files go here ...
    index.html
```

Ok, /js/next folder contains NeXt library along with CSS files and fonts. The files from this folder will be connected to /index.html in order to render interface. We are not touching them.
index.html is our main page, where the topology is displayed. This is normally a static file, we are not making changes to it.
data.js will contain topology data in JSON format and CTM form.
app.js is actually our application's code - the vital part of this lesson.

## JavaScript aside: Brief introduction to closures
When you work with JavaScript libraries from third parties, it's a good habit to use [immediately-invoked function expressions](https://en.wikipedia.org/wiki/Immediately-invoked_function_expression) (or, simply "closures"). 
 
This is how you may use them:

```
// example.js

(function(localVar1, localVar2){

    // you code goes here...

})(globalVar1, globalVar2);

```

*globalVar1* and *globalVar2* are variables, accessible from global namespace. If you want to use them and not to pollute global namespace with your variable, closures come to the rescue. In this example *globalVar1* transforms to *localVar1* and *globalVar2* transforms to *localVar2*. That means that variables passed into the immediately-invoked function ()() will become local from the anonymous function's point of view.  

In other words, you will be able to use localVar1 and localVar2 as global objects globalVar1 and globalVar2, but your variables will not be visible from the global namespace (from outside this code).

This is good when you want to achieve modularity and keep you code clean.

## Create app.js

I am writing the code inside closures in app.js and it is available for you under /demos/tutorial-003/


```
var app = new nx.ui.Application();
```
