# Methods of Classes in NeXt
Methods determine the way a developer interacts with the object. Methods usually operate [properties](tutorial-004-1.md), performing different actions, such as iterations, conversions, adding and removal, over them.

## Define a Simple Method
Let's jump into it right away from a simple sample class.

The class ```Person``` has three *properties*: first and last names, and the age of the person. The method it has, simply gets the first letter of the both names and returns initials.

```JavaScript
nx.define("Person", {
	"properties": {
	
		// pre-set properties
		"firstName": "John",
		"lastName": "Smith"
		"age": 30
	},
	"methods": {
	
		// this methods reads the properties and extract the first letters of first and last names, contatenating them afterwards
		"getInitials": function(){
			var initials = this.firstName().charAt(0) + 
				this.lastName().charAt(0); 
			return initials;
		}
	}
});
```

Like you can see, the method ```getInitials``` reads the first letters of the properties ```firstName``` and ```lastName```, followed by concatenation of them.

In order to test the class, run the following code:

```JavaScript
var john = new Person();
console.log(john.getInitials()); // will print "JS" to the browser's console
```

[Codepen]()

## Constructor
A constructor is a method that runs when you instantiate a class with the keyword ```new```, like this:

```JavaScript
var foo = new Foo();
```

Constructor can serve you different purposes, and the most obvious is *initiate* properties with values before you touch them. *Initialization* is the key word, and that's why NeXt uses ```init``` as the name for the constructor method. 

The following listing illustrates the way to create a basic constructor.

```JavaScript
nx.define("Person", {
	"properties": {
		// by default the name is an empty string
		"name": ""
	},
	"methods": {
		// this is the CONSTRUCTOR
		"init": function(){
			// assign a new value to the "name" property
			this.name("Jack");
		}
	}
}); 
```

Now that you've got the class with the constructor, go look how the initialized name looks like:

```JavaScript
var person = new Person();
console.log( person.name() ); // "Jack"
```

[Codepen](http://codepen.io/NEXTSUPPORT/pen/rLgRJk)

## What's next?
Ok, now that you are familiar with the properties and methods, let's move on to *inheritance* - the [OOP](tutorial-004.md) principle providing a way to extend or reuse an existing class. 

[Read NEXT](tutorial-004-3.md)