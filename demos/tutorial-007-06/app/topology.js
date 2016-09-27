(function (nx) {
	nx.define('MyTopology', nx.graphic.Topology, {
		methods: {
			"init": function () {
				this.inherited({
					// width 100% if true
					'adaptive': false,
					// show icons' nodes, otherwise display dots
					'showIcon': true,
					// special configuration for nodes
					'nodeConfig': {
						'label': 'model.name',
						'iconType': function (model, node) {
							var status = model.get("status");
							if(typeof status == "string" && status == "hq")
								return "icon_hq";
							return "alien";

						},
						'color': '#0how00'
					},
					// special configuration for links
					'linkConfig': {
						'linkType': 'curve'
					},
					// property name to identify unique nodes
					'identityKey': 'id', // helps to link source and target
					// canvas size
					'width': 1000,
					'height': 600,
					// "engine" that process topology prior to rendering
					'dataProcessor': 'force',
					// moves the labels in order to avoid overlay
					'enableSmartLabel': true,
					// smooth scaling. may slow down, if true
					'enableGradualScaling': true,
					// if true, two nodes can have more than one link
					'supportMultipleLink': true,
					// enable scaling
					"scalable": true,
					// extended node
					"nodeInstanceClass": "ExtendedNode"
				});
			}
		}
	});
})(nx);