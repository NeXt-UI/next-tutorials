# Tutorial #1
Hi! Welcome to NeXt tutorials: we are here to let you understand NeXt UI and make you write your code as soon as possible.

We highly recommend using NeXt UI with [AngularJS](http://angularjs.org).

## Setup
First of all, download latest NeXt UI release from [Cisco DevNet web-site](https://developer.cisco.com/site/neXt/). Extract the files from archive and move them to a place, which is convenient to you. 

Create an HTML page. Link CSS and JS files to your project.

TODO: add examples

## Common Topology Model
What you need to know before you start: [JSON](http://www.json.org)
Common Topology Model (CTM) is a basic concept of representation of topology in NeXt UI. It is very simple, but vital to understand. Due to NeXt's JavaScript nature, we use JSON to store topology data (in CTM form). 

In CTM a topology is an object containing arrays of nodes, nodes' connections (links) and group of nodes (node sets). Node sets are usually omitted and used only in specific situations. 
 
```
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

This will be represented as shown on Figure 1:
TODO: add picture of example topology
TODO: close up on CTM: describe nodes, links and node sets separately. More text.

