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