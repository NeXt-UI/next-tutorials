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

* **properties**: data; represented as strings for text, integers for numbers, JavaScript objects for complex data stuctures and so on
* **methods**: represents logic of the class and consists of functions
* **events**: special category that contains conditionally invoked functions

Combined into a config object, it starts looking like this:

```JavaScript
var config = {
	"properties": {
		"myValue": "Hello world"
	},
	"methods": {
		// "constructor" -  NeXt invokes this function at the very beginning
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

## Define a Class
In order to define a class, you will need to use a simple function ```nx.define()``` — you will see how in a while. Just to remind you, ```nx``` is a base class for entire NeXt functionality, and, therefore, ```define``` is one of its *core* methods.

The function ```nx.define``` takes up to three parameters:

**type** (*String*)

Optional. Type is what your class represents, and, basically, that's a name of your class. For instance, that may be "ExtendedNode" if you would like to alter the default, built-in behavior of all nodes.

**parent** (*Function*)

Optional. Parent class to be inherited by the new one. There will be an article covering that, although what you need to know now is if there's a class (for example, a node) and you would like to modify a part of it (let's say, a way a color is assigned to it), the best choice is to "extend" the class by inheritance, and then, modification of it.

**members** (*Object*)

Optional. The configuration, or members, of the class. May contain *properties*, *methods*, *events*. We defined a sample config above, in the previous section.

For the configuration above (from the section *Three-piece Config*) you can define a class like that:

```JavaScript
nx.define("MyTestClass", config);
```

Pretty straight-forward, isn't it?

## What's next?

The next article covers usage of properties in your project.

[Read NEXT](tutorial-004-1.md)