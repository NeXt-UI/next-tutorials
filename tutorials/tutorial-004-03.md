# Classes: Inheritance
Now you ended up knowing the way to define a class (```nx.define```) and the way to make up properties and methods. That's cool, but what how do you reuse an existing class? 

In NeXt you'll need this all the time. Let's imagine, you're OK with the way NeXt works with nodes, except for a single method, and that's where you need inheritance: you keep all the "parent" members of class (properties and methods) and then rewrite merely one method instead of rewriting the whole thing. It's a wise way, isn't it?

## Inherit a Simple Class

You could remember from [the introduction](./tutorial-004.md) that ```nx.define``` takes three parameters, and the second one is inherited class.

Let's create a class ```Parent```.

```JavaScript
nx.define("ParentClass", {
	"properties": {
		"name": "John"
	},
	"methods": {
		// just a random method
		"do": function(){
			console.log("doing");
		}
	}
});
```

Now, you must be guessing what we'll do next. We are creating a child class. 

```JavaScript
nx.define("ChildClass", ParentClass, {
	"properties": {
		"name": "Jack"
	},
	"methods": {
		"say": function(){
			console.log("blah");
		}
	}
});
```

You see that the second argument is ```ParentClass```, and pay your attention: there are no parentheses, because that's not a name, but rather than an object (function, class, etc.).

Inheritance allows you to *override* members of class. Should you take a look at the two classes, you will see the same method ```name``` in each of them. The difference is that ```ChildClass``` copies every single member of ```ParentClass```, and then *overrides* those that exist in both of then. Eventually, ```name``` in ```ParentClass``` gives you "John", while ```ChildClass```'s ```name``` is "Jack". No methods are overridden, therefore ```ChildClass``` keeps two of them: ```do``` and ```say```, while ```ParentClass``` has the only one: ```do```.

The listing below illustrates what you have just read.

```JavaScript
var parent = new ParentClass();
var child = new ChildClass();

// display names
console.log( parent.name() ); // "John"
console.log( child.name() ); // "Jack"

// child's methods:
child.do(); // "doing"
child.say(); // "blah"
```

[Codepen](http://codepen.io/NEXTSUPPORT/pen/BzZbAk)

## Overriding

### Override Method
Like I say, *overriding* replaces a parent's method with a child's method. In this example, we are overriding a constructor, which is one of the to-go things in NeXt.

We have a simple class that will print a string into console, when you instantiate it:

```JavaScript
nx.define("ParentClass", {
	"methods": {
		"init": function(){
			console.log("If you see this text, the 'init' method has not been overriden");
		}
	}
});
```

But we can change behavior if we override the constructor:

```JavaScript
nx.define("ChildClass", ParentClass, {
	"methods": {
		"init": function(){
			console.log("This overrides the init method");
		}
	}
});
```

Let's instantiate ```ChildClass```:

```JavaScript
var foo = ChildClass(); // invokes "init" method and prints "This overrides the init method" to the console
```

Essentially, information in this section applies to any method - you can override any member of class - and prepared you for the special power of NeXt: "partial overriding", which goes next.

### Keep Method Partially
If you need to "append" behavior of the method, partial overriding is a good choice. Why should you need it? Usually developers use this feature when they want to keep standard behavior of a constructor or another method in a built-in class, but they need augment it, too.

In this case, the content of parent method goes inside the child's method, and the new behavior goes afterwards.

Let's create yet another simple class, or rather use one from the example above.

```JavaScript
nx.define("ParentClass", {
	"methods": {
		"init": function(){
			console.log("If you see this text, the 'init' method has not been overriden");
		}
	}
});
```

And then we will create a new ```ChildClass```.

```JavaScript
nx.define("ChildClass", ParentClass, {
	"methods": {
		"init": function(){
			this.inherited();
			console.log("This will not block the parent method");
		}
	}
});
```

The only thing that's changed is ```this.inherited();```. You can also pass arguments into that function if you need to.

That function, like I said, simply invokes parent constructor and applies changes to the child class.

What's going to happen if we run the example?

```JavaScript
var child = new ChildClass();
/* 
that will print both messages:
"If you see this text, the 'init' method has not been overriden"
"This will not block the parent method"
*/
```

We can run both methods at the same time. Cool, isn't it? 

The example with the constructor shows, because you will mostly need to partly override exactly constructors.

## What's next?
Singleton classes is the topic of our next lesson. 

[Read NEXT](tutorial-004-04.md)