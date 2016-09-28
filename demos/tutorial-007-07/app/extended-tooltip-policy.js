(function(nx){
	nx.define("ExtendedTooltipPolicy",nx.graphic.Topology.TooltipPolicy, {

		"properties": {
			topology: {},
			tooltipManager: {}
		},

		"methods": {

			// inherit methods and properties from base class (nx.graphic.Topology.TooltipPolicy)
			"init": function(args){
				this.inherited(args);
				this.sets(args);
				this._tm = this.tooltipManager();
			},

			// disable default behavior: "click" closes the tooltip
			"clickNode": function(node){
				this._tm.closeAll();
			},

			// overwrite default behavior: hovering the node makes tooltip show up
			"enterNode": function(node){
				var topo = node.topology();
				topo.tooltipManager().openNodeTooltip(node);
			},

			// overwrite default behavior: leaving the node makes tooltip hide
			"leaveNode": function(node){
				this._tm.closeAll();
			}

		}
	});
})(nx);