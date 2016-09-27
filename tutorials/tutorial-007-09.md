# UI Class Extension

NeXt provides a sophisticated way to extend standard objects, such as nodes, links and tooltips (those windows you make pop up when you click a node/link).

Should you extend any class, you can change the behavior and look of the object that represents it. Let's move on and you will find out the way to do that in 15 minutes!

## Basics
Let's recall basic [inheritance](./tutorial-004-3.md):

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
	"name": "Jack",
	"cool": false,
	"newProp": "I'm new!!!",
	"oldProp": "Sooo old"
}
```

You should also keep in mind that the same rules apply to methods. But methods differ a little from properties, because they can also keep executable code from parent method and invoke it like that:

```
// ...
someMethod: function(args){
	this.inhertited(args);
}
// ...
```

Now that you recalled that, that's not a surprise that the extension of UI classes is simply class inheritance.

## The Task
The task is going to come from real life. In networking some active devices might shut down in an abnormal situation (power outage etc.). Unless the application explicitly depitcs that, a network engineer may think the network runs well. We need to alert the engineer about the device status. In order to do that, let's display a tiny red icon next to the device if the status is "down".

## Implementation
### "ExtendedNode" Class
First and foremost, we need to "extend" the base node's class (```nx.graphic.Topology.Node```).

We are going to reveal the prepared chunk of code below. When you look over it, see detailed description underneath.

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
Basically, this appends a built-in NeXt's ```nx.graphic.Circle``` to the node's view. Note there's the property ```name``` to retrieve the component's instance from methods later on.

By default, the "badge" is invisible (we will turn in on for each node). 

#### *setModel* Method
We are going to override one of the essential built-in methods: ```setModel```. We will need to call ```this.inherited(model)```, because it has a piece of logic to initialize properties. When we make sure it's done, we put in our  


```JavaScript
// called when the model is about to initialize
'setModel': function (model) {
	this.inherited(model);

	// draw/not draw the badge based on status
	if (this.model().get("status") === "down")
		this._showDownBadge();
	else
		this._hideDownBadge();

}
```

#### The Stars: Show/hide methods
These fellows do all the job: they make the badge visible and invisible.

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

#### Topology data
Oops, we have almost forgotten to add the new property to topology data: ```status```. Make sure you did it like that:

##### topology_data.js (exceprt)
```JavaScript
// ...
{
	"id": 2,
	"name": "Saturn",
	"status": "down" // can also be "up"
}
// ...
```
