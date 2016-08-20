# Common Topology Model
What you need to know before you start: [JSON](http://www.json.org)

**Common Topology Model** (CTM) is a basic concept of topology representation in NeXt UI. It is very simple, but vital to understand. Due to NeXt's JavaScript nature, we use JSON to store topology data (in CTM form). 

## Format of Common Topology Model

### Topology

Topology is represented as a JavaScript object, essentially consisting of three properties: _nodes_, _links_ and _nodeSet_. NodeSet is sometimes missing, because it is actually a container of nodes. Each of the properties is an array.

```JavaScript
var topologyData = {
    nodes: [
        //...
    ],
    links: [
        //...
    ],
    nodeSet: [
        //...
    ]
};
```

### Nodes

From the example above we see that _nodes_ (a property of _topologyData_) is an array. The array consists of objects, which we're going to describe in a moment.

Basically, no properties are necessary for NeXt: because if anything's missed, NeXt will replace the value of the property with a default or calculated one.

| Property | Description                                                                                                               | Example  value |
|----------|---------------------------------------------------------------------------------------------------------------------------|----------------|
| id       | Identifier of a node. Should be unique for both nodes and nodeSets. Indexed, i. e. you can get a node's instance by ID.   | 1              |
| name     | Short label for a node. Works better, if unique.                                                                          | "San Jose"     |
| x        | Horizontal offset of a node.Integer.                                                                                      | 123            |
| y        | Vertical offset of a node. Integer.                                                                                       | 345            |
| type     | Node's type. Can be "router", "switch" or other built-in icon. If you register an icon, you'll be able to use it as well. | "router"       |
| color    | RGB hex-formatted string for color of a node.                                                                             | "#000000"      |

Code example:

```JavaScript
var topologyData = {
    nodes = [
        {
            id: 0,
            name: "Campus 1",
            type: "switch"
        },
        {
            id: 1,
            name: "Campus 2",
            type: "switch"
        },
        // ... some other nodes ...
    ],
    // ... links and nodeSets ...
};
```

### Links

One link connects two nodes. Because of this, it is mandatory to reflect the nodes' identifiers (or nodes' names for certain cases) in CTM.

| Property | Description                                                                        | Example value |
|----------|------------------------------------------------------------------------------------|---------------|
| id       | Identifier of a link. Likewise node IDs, it should be unique among all the links.  | 0             |
| source   | ID of a source node. If you explicitly defined it, you may use node's name.        | 0             |
| target   | ID of node-destination. If you explicitly defined it, you may use node's name.     | 1             |

You do not have to define link's ID, NeXt may generate it for you. For _source_ and _target_ you may want to use names, but I highly recommend you to use node IDs, it would be easier to handle them.

Code example:

```JavaScript
    links = [
        {
            id: 0,
            source: 5,
            target: 7
        },
        {
            id: 1,
            source: 7,
            target: 3
        },
        // ... some other links ...
    ],
    // ... nodes and nodeSets ...
};
```

### NodeSets

Once again, NodeSets do not necessarily have to go along with links and nodes. Use can use them, only when you need them.

What they do is they collapse selected nodes into a single node container, which may be expanded by click.

A table of properties goes below.

| Property | Description                                                          | Example value |
|----------|----------------------------------------------------------------------|---------------|
| id       | Identifier of a nodeSet. Must be unique for both nodes and nodeSets  | 5             |
| nodes    | Array of included node IDs                                           | [0, 1, 5, 10] |


Code example

```JavaScript
    nodeSet = [
        {
            id: 0,
            nodes: [0, 3, 5, 99]
        },
        {
            id: 1,
            nodes: [1, 6, 15]
        },
        // ... some other nodeSets ...
    ],
    // ... nodes and links ...
};
```

## Complete example

Below is the object that is completely correct from CTM's point of view. You can pass this object to NeXt and vizualize the topology (we'll do this in the next lesson).

```JavaScript
{
	// array of nodes
	nodes: [
		{
			id: 0,
			name: "DC 1"
		},
		{
			id: 1,
			name: "DC 2"
        },
		{
			id: 2,
			name: "DC 3"
        }
	],
	// array of links
	links: [
		{
			id: 0,
			source: 0,
			target: 1
		},
		{
			id: 1,
			source: 1,
			target: 2
		},
		{
			id: 2,
			source: 0,
			target: 2
		},
	],
	// array of node sets (groups)
	nodeSet: [
		{
			id: 3 // should not overlap any node's ID
			nodes: [1, 2]
		}
	]
}
```

## What's next?
We're going to get to know how to vizualize and customize the topology.

[Read NEXT](./tutorial-003.md)
