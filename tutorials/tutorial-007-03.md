# Action Panel
This lesson should reveal details on how to create and embed a UI component into the NeXt application.

## Getting Started
Find the ```/app/``` directory in the project folder and create a file ```action-panel.js``` inside it.

### /app/action-panel.js
```JavaScript
nx.define("ActionPanel", nx.ui.Component, {
	view: {
		content: [
			{
				tag: "button",
				content: "Draw Random Path",
				events: {
					click: "{#onDrawPath}"
				}
			},
			{
				tag: "button",
				content: "Clear Paths",
				events: {
					click: "{#onClearPaths}"
				}
			}
		]
	},
	methods: {
		// add random path
		"onDrawPath": function(sender, events){
			// todo: add code
		},
		// clear paths
		"onClearPaths": function(sender, events){
			// todo: add code
		}
	}
});
```

That's enough for understanding of basic functionality of UI components.

## Connect to the App
In order to make the component show up you will need to crack open file ```/app/main.js```. 

### /app/main.js (excerpt)
```JavaScript
// ...

// instantiate Topology class
var topology = new MyTopology();
// instantiate ActionPanel class
var actionPanel = new ActionPanel();

// ...

// bind the topology object to the app
topology.attach(app);
// add action panel to the view
actionPanel.attach(app);

// ...
```

We simply instantiated the new class and appended it to the UI module of the NeXt app. Now it's going to come up right underneath the topology.

### /index.html (excerpt)
Make sure you've connected the ```action-panel.js``` to the index page.

```HTML
<!-- ... -->

<script type="text/javascript" src="app/topology_data.js"></script>
<script type="text/javascript" src="app/action-panel.js"></script>
<script type="text/javascript" src="app/topology.js"></script>
<script type="text/javascript" src="app/main.js"></script>

<!-- ... -->
```

## Demo
![](../images/tutorial-007-03/topology-action-panel.png)

The app is expected to display both topology and the UI component (action panel). The component renders two buttons and even binds JavaScript functions to events. The fact the functions are "empty" at the moment is normal though, since we are going to pay attention to what goes inside them in the following lesson.

## What's next?
In this tutorial you appended a new UI component to the app and binded events to such UI objects as buttons. The next lessons reveals details of yet another built-in module of NeXt UI: *paths* and *paths' layer*. We'll make the buttons' behavior comply with their labels :)

[Read NEXT](tutorial-007-04.md)