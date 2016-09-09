# Action Panel
This lesson should reveal details on how to create and embed a UI component into the NeXt application.

## Getting Started
Find the ```app``` directory in the project folder and create a file ```action-panel.js``` inside it.

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
			var pathLayer = sender.getLayer("paths");
		},
		// clear paths
		"onClearPaths": function(sender, events){
			var pathLayer = sender.getLayer("paths");
			pathLayer.clear();
		}
	}
});
```


