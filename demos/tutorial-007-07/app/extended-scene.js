(function(nx){
	nx.define('ExtendedScene', nx.graphic.Topology.DefaultScene, {
		methods: {
			clickNode: function(sender, node){
				node.model().set("isConnected", !node.model().get("isConnected"));
				node.updateBadge();
			}
		}
	});
})(nx);	