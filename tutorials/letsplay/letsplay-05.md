# Class Extension

NeXt provides a sophisticated way to extend standard objects, such as nodes, links and tooltips (those windows you make pop up when you click a node/link).

Should you extend any class, you can change the behavior and look of the object that represents it. Let's move on and you will find out the way to do that in 15 minutes!

## Basics
Let's recall basic [inheritance](./tutorial-004-03.md):

```JavaScript
// parent class
nx.define("Foo", {
	properties: {
		"name": "John",
		"cool": true,
		"oldProp": "Sooo old"
	}
});

// child class (inherits from the parent Foo)
nx.define("Bar", Foo, {
	properties: {
		"name": "Jack",
		"cool": false,
		"newProp": "I'm new!!!"
	}
});
```

You must remember that ```Bar``` will contain the old properties, override some of them and add the new ones. That will make the list of its properties look like this:

```JSON
{
	"name": "Jack", // inherited & overriden
	"cool": false, // inherited & overriden
	"newProp": "I'm new!!!", // new prop
	"oldProp": "Sooo old" // inherited
}
```

You should also keep in mind that the same rules apply to methods. Methods differ a little from properties, though, because they can also keep executable code from parent method and invoke it like that:

```
// ...
someMethod: function(args){
	// executes inherited parent's function over the new arguments
	this.inhertited(args);
	
	// your code goes here...
	
}
// ...
```

Now that you recalled that, that's not a surprise that the extension of classes is simply class inheritance.

## Task
The task is going to come from real life. In networking some active devices might shut down in an abnormal situation (power outage etc.). Unless the application explicitly depitcs that, a network engineer may think the network runs well. We need to alert the engineer about the device's status. In order to do that, let's display a tiny red icon next to the device if the device has gone down.

## Implementation
### "ExtendedNode" Class
First and foremost, we need to "extend" the base node's class (```nx.graphic.Topology.Node```).

We are going to reveal the prepared chunk of code below. When you finish looking over it, see detailed description underneath.

This code will go over into a new file, ```/app/extended-node.js```.

```JavaScript
nx.define('ExtendedNode', nx.graphic.Topology.Node, {
	view: function (view) {
		view.content.push({
			// name to retrieve the object
			"name": "deviceDownBadge",
			// inherit from "Circle" class
			"type": "nx.graphic.Circle",
			"props": {
				// radius
				"r": 5,
				// background color
				"fill": "#ff0000",
				// should be invisible by default
				"visible": false
			}
		});
		return view;
	},
	methods: {

		// called when the model is about to initialize
		'setModel': function (model) {
			this.inherited(model);

			// draw/not draw the badge based on status
			if (this.model().get("status") === "down")
				this._showDownBadge();
			else
				this._hideDownBadge();

		},

		// display the red badge
		"_showDownBadge": function () {
			// view of badge
			var badge = this.view("deviceDownBadge");

			// set properties
			badge.sets({
				// make visible
				"visible": true,
				// set X offset
				"cx": -13,
				// set Y offset
				"cy": 13
			});

		},

		// make the badge invisible
		"_hideDownBadge": function () {
			this.view("deviceDownBadge").set("visible", false);
		}
	}
});
```

The close-up for each piece of code goes below:

#### Initialization

Take a look at the line 1:

```JavaScript
nx.define('ExtendedNode', nx.graphic.Topology.Node, {
```

It must be easy for you: the just initialized class ```ExtendedNode``` inherits ```nx.graphic.Topology.Node``` class.

#### New View

Then you can see the "view" property, which extends the default Node's view. See more details in the [Inheritance of Views](tutorial-006-04.md) tutorial.

```JavaScript
view: function (view) {
	view.content.push({
		// name to retrieve the object
		"name": "deviceDownBadge",
		// inherit from "Circle" class
		"type": "nx.graphic.Circle",
		"props": {
			// radius
			"r": 5,
			// background color
			"fill": "#ff0000",
			// should be invisible by default
			"visible": false
		}
	});
	return view;
}
```
Basically, this appends a built-in NeXt's ```nx.graphic.Circle``` to the node's view. Note there's the property ```name```, used to retrieve the component's instance from methods later on.

By default, the "badge" is invisible (we will turn in on for each node). 

#### *setModel* Method
We are going to override one of the essential built-in methods: ```setModel```. This function sets the passed into it model (object, containing properties) to the respective properties.
The start line is here: once the properties are set, we'll be able to make the badge show up.

```JavaScript
// called when the model is about to initialize
'setModel': function (model) {
	this.inherited(model);

	// draw/not draw the badge based on status
	if (this.model().get("isConnected"))
		this._hideDownBadge();
	else
		this._showDownBadge();

}
```

The two functions used here - ```_showDownBadge``` and ```_hideDownBadge ``` - do not exist yet. That will be the next task.

#### The Stars: Show/hide methods
These fellows do all the job: they make the badge visible or invisible.

```JavaScript
// display the red badge
"_showDownBadge": function () {
	// view of badge
	var badge = this.view("deviceDownBadge");

	// set properties
	badge.sets({
		// make visible
		"visible": true,
		// set X offset
		"cx": -13,
		// set Y offset
		"cy": 13
	});

},

// make the badge invisible
"_hideDownBadge": function () {
	this.view("deviceDownBadge").set("visible", false);
}
```

### Link The Class
Make sure the file is linked in HTML like that:

```HTML
<!-- ... -->
<script type="text/javascript" src="app/topology_data.js"></script>
<script type="text/javascript" src="app/action-panel.js"></script>
<script type="text/javascript" src="app/extended-node.js"></script>
<script type="text/javascript" src="app/topology.js"></script>
<script type="text/javascript" src="app/main.js"></script>
<!-- ... -->
```

That's the third script.

You created the class for nodes, however the topology knows nothing of it. What you need to do is to declare it in the ```nodeInstanceClass``` attribute in topology's configuration:

#### /app/topology.js
```JavaScript
// ...

// extended node
"nodeInstanceClass": "ExtendedNode"

// ...
```

### Topology data
Oops, we have almost forgotten to add the new property to topology data: ```isConnected```. Make sure you set the appropriate status to all the nodes like that:

#### topology_data.js (exceprt)
```JavaScript
// ...
{
	"id": 2,
	"name": "Saturn",
	"isConnected": false // can also be true
}
// ...
```

## Result
Step 5 has gone! That's what you have done:

![](../images/tutorial-007-05/device-down.png)

Yep, those tiny red pimples on aliens' faces are our "badges" that say "this guy has poor connection".

Congratulations!

## What's next?
We are going to add more interaction and redefine a few built-in events. Now you decide which alien goes down :)

[Read NEXT](./letsplay-06.md)
