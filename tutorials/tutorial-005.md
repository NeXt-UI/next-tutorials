# Event Handling in NeXt
NeXt helps you track the events initialized by both user and runtime. The user events include *click*, *double-click*, *dragging* and so on. The runtime events may be literally anything like *end of HTTP request*. What that means is that you are free to design specific behavior, or modify existing.

## Get Started with Events
### Built-in Events
There are built-in events described in [documentation](https://developer.cisco.com/site/neXt/document/api-reference-manual/). Choose a class on the left-hand side and go to the section *Events*. Those events have to do with specifics of each class: for example if you can zoom in or out the stage, you should be able to track the action with events like zoomStart, zoomEnd. 

### Define Custom Events
Two methods to define the events: inside "

### Set Event Listeners
```JavaScript
// typical .on() implementation
```
