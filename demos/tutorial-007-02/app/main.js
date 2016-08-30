(function(nx){

	// instantiate NeXt app
	var app = new nx.ui.Application();

	// instantiate Topology class
	var topology = new MyTopology();

	// add icons
	topology.registerIcon("alien", "images/alien.png", 40, 48);
	nx.graphic.Icons.registerFontIcon("icon_hq", "FontAwesome", "\uf005", 48);

	// load topology data from app/data.js
	topology.data(topologyData);

	// bind the topology object to the app
	topology.attach(app);

	// app must run inside a specific container. In our case this is the one with id="topology-container"
	app.container(document.getElementById("topology-container"));

})(nx);