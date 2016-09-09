# Path Drawing
In networking you always have to think about the optimal route of traffic in the network. To visualize that, NeXt has a built-in mechanism called "Paths". Paths are implemented by class ```nx.graphic.Topology.Path ``` that provide convenient interfaces for the developer.

## Add Basic Path
We'll start with a simple path over topology. 

### /app/action-panel.js (excerpt)
```JavaScript
// ...

// add random path
"onDrawPath": function(sender, events){
	
},
// clear paths
"onClearPaths": function(sender, events){
	
}

// ...
```

## Clear Path Layer

