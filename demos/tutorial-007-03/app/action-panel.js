(function(nx){
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
})(nx);