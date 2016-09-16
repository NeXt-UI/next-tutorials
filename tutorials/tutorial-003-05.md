# Data Processors
Data processor (hereinafter DP) is a procedure that processes topology data in one or another way. The way we usually use them in NeXt is to assign special positioning to the nodes, or modify the input information so that its representation would match our purposes.

## Built-in DPs

Before you get the detailed description of each data processor, let us give you more information on where to find the code:

* You can normally find the DP classes at the following path: ```/src/js/graphic/data/processor``` 
* If you navigate to the ```/src/js/graphic/data/dataprocessor.js```, you'll find the place where all the DPs are included as static members.

Now let's look over each DP.

### Force
**Force** data processor create a fundament for autolayout. Essentially what it does is it spreads out the nodes automatically so they would as equally distant as possible. That makes a beautiful picture without you assigning the x/y or altitude/latitude positioning to the nodes.

#### Force: Usage
To use Force DP you need to set the ```dataProcessor``` prop in topology configuration to "force". 

```JavaScript
nx.define("Topo", nx.graphic.Topology, {

	// ... some properties ...
	
	"dataProcessor": "force"
	
	// ... some properties ...
});
```

### NeXt Force
TBD

### Quick
TBD

### Circle
TBD

### Hierarchical nodeset?
TBD

## Create Your DP
