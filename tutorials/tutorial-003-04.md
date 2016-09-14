# Path Drawing
Paths are as important to NeXt as they are to networking. 

## Example
Let's imagine we've got such a crazy topology:

![](../images/tutorial-003-04/topology-image.png)

The code will be available below.

What path are we going to take? Let it be San Francisco for New Jersey through Los Angeles and Houston (SF -> LA -> Houston -> NJ). The array that represents the path would look like that:

```JavaScript
var pathHops = [
	"San Francisco",
	"Los Angeles",
	"Houston",
	"New Jersey"
]
```

It simply has the hop list in a correct order.


