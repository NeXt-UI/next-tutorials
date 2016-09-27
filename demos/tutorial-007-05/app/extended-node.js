(function(nx){
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
				if (this.model().get("isConnected"))
					this._hideDownBadge();
				else
					this._showDownBadge();

			},

			// display the red badge
			"_showDownBadge": function () {console.log("lol");
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
})(nx);