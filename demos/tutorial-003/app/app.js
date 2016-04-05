(function(nx){

	// instantiate next app
	var app = new nx.ui.Application();

	// configuration object for next
	var topologyConfig = {



	};
	var topology = new nx.graphic.Topology(topologyConfig);

	topology.data(topologyData);

	topology.attach(app);
	app.container(document.getElementById("topology-container"));

})(nx);