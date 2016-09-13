# Path Drawing
In networking you always have to think about the optimal route of traffic in the network. To visualize that, NeXt has a built-in mechanism called "Paths". Paths are implemented by class ```nx.graphic.Topology.Path ``` that provide convenient interfaces for the developer.

## Assign Topology Object
The first thing you need to do is to pass 

## Add Basic Path
We'll start with a simple path over topology. Open up ```action-panel.js``` and keep it open.

### /app/action-panel.js (excerpt)
```JavaScript
// ...

// add random path
"onDrawPath": function(sender, events){
	
}

// ...
```

## Clear Path Layer
We are going to modify the same file.

### /app/action-panel.js (excerpt)
```JavaScript
// ...

// clear paths
"onClearPaths": function(sender, events){
	
}

// ...

##