(function(nx){
	nx.define("ActionPanel", nx.ui.Component, {
		view: {
			content: [
				{
					tag: "button",
					content: "Draw Path",
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
		properties: {
			topology: {}
		},
		methods: {

			// add random path
			"onDrawPath": function(sender, events){
				var topo = this.topology();
				var pathLayer = topo.getLayer("paths");
				var pathLinks = [
					// HQ -> Mars
					topo.getLink(0),
					// Mars -> Pluto
					topo.getLink(5),
					// Pluto -> Saturn
					topo.getLink(4)

				];

				// create Path object
				var path = new nx.graphic.Topology.Path({
					"pathWidth": 3,
					"links": pathLinks,
					"arrow": "cap",
					"pathStyle": {
						// path's color
						"fill": "#ff0000"
					}
				});

				pathLayer.addPath(path);

			},

			// clear paths
			"onClearPaths": function(sender, events){
				var pathLayer = this.topology().getLayer("paths");
				pathLayer.clear();
			}
		}
	});
})(nx);