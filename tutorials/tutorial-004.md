# Introduction to Classes
Now that you have [the first topology showed up](./tutorial-003.md), let us understand what stands behind it.

NeXt employes [Object-Oriented concepts](https://en.wikipedia.org/wiki/Object-oriented_programming) that simplify interaction with the framework.

## Object-Oriented Programming Aside
For those readers who are unfamiliar with OOP, or would like to recall the details, this section has been composed.

When we talk about Object-Oriented Programming (or Projecting) the first thing that comes to our minds is *an object*. The object is something that emulates real world's properties and behavior. The properties could be a color, size, weight, or a different value. The behavior of the object is represented by "an encapsulated action" and in modern programming language - what do you think this is? - this is a function. The function may have a name, like "go", it returns a result of the action, like "1 step taken", it does something inside, "something inside" does not really bother the person who's in charge of system design.

In terms of programming, the *properties* are variables that could be text, number, array, complex data structure or something else. The behavior, as was mentioned above, is represented by functions that people call *methods*. We will operate the terms *properties* and *methods* here and after.

The object comes from a class, which is "a base object", or "a parent". To give a real world example, the class would be "a cat", and the instance of a cat (an object) would be the one in your house.

The class may be inherited by a different class, like a car or a truck are inherited from "motor vehicle".

I believe it makes sense. The subject is way too complex, though, and we will go on to learn NeXt rather than abstract OOP. If need to leverage your knowledge, simply google the topic.

## Three-piece Config
Every single object in NeXt is broken into three pieces:

* properties: data; represented as strings for text, integers for numbers, JavaScript objects for complex data stuctures and so on
* methods: represents logic of the class and consists of functions
* events: special category that contains conditionally invoked functions

Combined into a config object, it starts looking like this:

```
var config = {
	"properties": {
		"myValue": "Hello world"
	},
	"methods": {
		// "constructor" - function that is called at the very beginning
		"init": function(){
			// ... hard work ...
		},
		"randomMethod": function(){
			return true;
		}
	},
	"events": {
		// click event
		"click": function(){
			// ... something ...
		}
	}
};
```

Thus, the config object is a JavaScript object with three properties "properties", "methods" and "events".

## What's next?

The next article covers usage of properties in your project.

[Read NEXT](tutorial-004-1.md)