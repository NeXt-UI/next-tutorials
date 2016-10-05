# Layers
Layers are the containers for homogeneous objects. For instance, the built-in layers include nodes', links', paths' and other layers. You may need them for mass operations (like *clear path layer* to wipe all the paths out the screen), or to iterate all object in the layer: e.g. spin each node round.

Moreover, layers sit on their respective levels, that is each of them overlay one another.

## Built-in layers
There are 6 layers that are available out-of-the-box. 

| Layer name |               Class              |
|:----------:|:--------------------------------:|
|    nodes   |  nx.graphic.Topology.NodesLayer  |
|    links   |  nx.graphic.Topology.LinksLayer  |
|    path    |   nx.graphic.Topology.PathLayer  |
|   nodeSet  | nx.graphic.Topology.NodeSetLayer |
|   linkSet  | nx.graphic.Topology.LinkSetLayer |
|   groups   |  nx.graphic.Topology.GroupsLayer |

Each of them could be retrieved with command ```topo.getLayer(layerName)```, e.g. ```topo.getLayer("nodes")```.

## Layer Manipulation
Layers share some functionality. For example, you can *hide*, *clear* or *add* a new element to the layer. A few conventions for this section: ```topo``` is a topology instance reference, and ```myLayer``` is a reference to any layer's instance (no matter, built-in or custom).

### Create Layer
#### Append
Add a layer onto the top.

```JavaScript
topo.appendLayer("myNewLayer", myLayer);
```

#### Prepend
Prepend a new layer.
```JavaScript
topo.prependLayer("myNewLayer", myLayer);
```

#### Insert After
Insert a layer under a certain layer.

```JavaScript
topo.insertLayerAfter("myNewLayer", myLayer, upsideLayerNameOrClass);
```

### Attach Layer
When you are ready to show the layer on topology, you will need to "attach" it.

```JavaScript
topo.attachLayer("myNewLayer", myLayer);
```


### Remove Layer
Remove layer from layer list:

```JavaScript
myLayer.dispose();
```

### Get Layer
You don't have to store the reference to layer's object across the entire app. If you know its name, you can "get" the reference by that.

```JavaScript
var myLayer = topo.getLayer("layerName");
```

### Clear Layer
This is to erase all elements from the layer and make it empty.

```JavaScript
myLayer.clear();
```

### Show/hide Layer
When you make hide a layer, all elements remain in the layer, but the layer itself goes away until shown again.

```JavaScript
myLayer.hide();
```

To make the layer active again:

```JavaScript
myLayer.show();
```


### Fade In/Out
You can also fade in or out the content of the layer.

```JavaScript
myLayer.fadeIn();
```
```JavaScript
myLayer.fadeOut();
```

### Specific Elements
There are two properties included into the bundle: ```highlightedElements``` and ```activeElements```. The way you do or do not use it depends on you.

## What's next?
The next tutorial covers path drawing.

[Read NEXT](./tutorial-003-03.md)