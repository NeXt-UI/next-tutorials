# Event Handling
The event is a special term to describe a conditionally invoked function in JavaScript. The condition is rather a *notification*, that could come up at any random point of time. The event is a fundamental principle to establish asynchronicity in JavaScript.

NeXt helps you track the events initialized by both user and runtime. The user events include *click*, *double-click*, *dragging* and so on. The runtime events may be literally anything like *end of HTTP request*. What that means is that you are free to design specific behavior, or modify existing.

## Get Started with Events
### Built-in Events
There are built-in events described in [documentation](https://developer.cisco.com/site/neXt/document/api-reference-manual/). Choose a class on the left-hand side and go to the section *Events*. Those events have to do with specifics of each class: for example zooming in and out generates such events like *zoomStart* and *zoomEnd*. 


### Set Event Listener
*If you are not familiar with what a callback function is, we highly recommend to spend 10-15 minutes and read an article on the Internet about it. This tutorial tries to avoid as much JavaScript-specific lessons as possible.*

A listener is a special function that takes an event's name and *a callback function*. The listener starts tracking the event by specified name; and once the event has been *fired*, the listener invokes the callback function passed into it.

Let's set a listener for an event.

```JavaScript
nx.define("SimpleClass", {});

var foo = new SimpleClass();

// Listener setter
// The 1st parameter is a name of event
// The 2nd one is a callback
foo.on("myEvent", function(sender, data){
	// display custom message
	console.log(data);
});
```

```foo``` is an instance of an empty class. ```.on``` sets a listener for event tracking. The event name can be both built-in and custom.

Remember that events are local to the instance they are assigned to. 

### Fire Event
You've already set an event listener for the event, and all you need to do now is to put some fire in it. 

A simple expression will "catch" the event and notify the event listener:

```JavaScript
foo.fire("myEvent");
```

In order to pass a custom message to the callback function, specify the second parameter:

```JavaScript
// "hey" is the message
foo.fire("myEvent", "hey");
```

In that case, the second parameter of the callback function will take the message (in this example, that was ```data```).

[Codepen](http://codepen.io/NEXTSUPPORT/pen/OXZLZr)

## Watchers
A watcher is a type of event listener that tracks any change of variable's value.

```JavaScript
nx.define("WatcherExample", nx.Observable, {
	"properties": {
		"name": {
			"value": "John",
			/**
				pName: property name
				pValue: new value
				pOldValue: old value
			*/
			"watcher": function(pName, pValue, pOldValue){
				console.log("### WATCHER TRIGGERRED ###");
				console.log(pName, pValue, pOldValue);
			}
		}
	}
});

var foo = new WatcherExample();
foo.name("Jack");
foo.name("Sam");
```

```nx.Observable``` provides special interfaces for watchers, that's why you need to inherit the class. Watcher is obviously defined by ```watcher``` keyword in a property object. And the callback function assigned to the watcher, will be invoked once the property setter detects a change.


## What's next?
The next chapter will tell you about UI capabilities of NeXt and its way to work with DOM model.

[Read NEXT](tutorial-006.md)