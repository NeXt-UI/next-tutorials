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

This file will contain topology data that we want to display. Here's our example topology, but you may want to build your own to get more expertise.

```
var topologyData = {
	"nodes": [
		{
			"id": 0,
			"name": "New York"
		},
		{
			"id": 1,
			"name": "Los Angeles"
		},
		{
			"id": 2,
			"name": "Houston"
		}
	],
	"links": [
		{
			"source": 0,
			"target": 1
		},
		{
			"source": 0,
			"target": 2
		}
	]
};
```

## Create app.js

I am writing the code inside closures in app.js and it is available for you under **/demos/tutorial-003/**


```
(function(nx){

	// instantiate next app
	var app = new nx.ui.Application();

	// configuration object for next
	var topologyConfig = {
		// special configuration for nodes
		"nodeConfig": {
			"label": "model.name",
			"iconType": "router"

		},
		// special configuration for links
		"linkConfig": {
			"linkType": "curve"
		},
		// if true, the nodes' icons are shown, otherwise a user sees a dot instead
		"showIcon": true,
		// automatically compute the position of nodes
		"dataProcessor": "force"

	};

	// instantiate Topology class
	var topology = new nx.graphic.Topology(topologyConfig);

	// load topology data from app/data.js
	topology.data(topologyData);

	// bind the topology object to the app
	topology.attach(app);

	// app must run inside a specific container. In our case this is the one with id="topology-container"
	app.container(document.getElementById("topology-container"));

})(nx);
```
## Create index.html
We have all of our code ready now, so the only thing left is to make up an HTML webpage that fetches the above code. This will be easy one.

```
<!DOCTYPE html>
<html>
<head>
	<title>My first NeXt topology!</title>
	<link rel="stylesheet" href="../common/next/css/next.css">
	<script type="text/javascript" src="../common/next/js/next.js"></script>
</head>
<body>
	<div id="topology-container"></div>
	<script type="text/javascript" src="app/data.js"></script>
	<script type="text/javascript" src="app/app.js"></script>
</body>
</html>
```