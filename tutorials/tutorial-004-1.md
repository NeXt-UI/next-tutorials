# Properties of Classes in NeXt
The previous article covered classes in NeXt and Object-Oriented Programming on the whole, and now we are going to obtain practical skills of configuring the object properties.

## Get started
Properties work as a data storage for objects. Like the previous article shows, properties could be strings, numbers, JavaScript objects, arrays or of another data type.

### Standard definition
Let's define a simple class with a couple of properties:

```JavaScript
nx.define("Person", {
	"properties": {
		"name": "John",
		"age": 0
	}
});
```

That chunk of code defines the class with two properties ```name``` (*string*) and ```age``` (*number*).

If you need to initialize the class (create an instance of it), that's simple:

```JavaScript
var john = new Person();
console.log(john.name()); // prints "John" in console
```
By default, ```john.name()``` will return the current value. If you pass a value to the function, like that: ```john.name("Jonathan")```, the new value will be assigned to the property.

Thus, there is a unified interface to set and get values, which is very useful.

### Setter/getter
The standard way is cool, but in case you need to process the property's value before print or write it, you need to consider writing your own setter and getter. That's not as hard as it sounds like.

Let's take a look at the example below. We added new properties "wLb" and "wKg", which represent weight in US pounds and in kilograms respectively. 

If you set 

```JavaScript
nx.define("Person", {
	"properties": {
		"name": "John",
		"age": 0,
		
		// Private properties: DO NOT INTERACT DIRECTLY
		"_wLb": 0,
		"_wKg": 0,
		
		// Instead, use these set of setters and getters
		"wLb": {
			"get": function(){
				return this._wLb;
			},
			"set": function(lbNewValue){
				this._wLb = lbNewValue;
				this._wKg = lbNewValue * 0.453592;
			}
		},
		
		// Here's a pair of set/get for the weight in kilogram
		"wKg": {
			"get": function(){
				return this._wKg;
			},
			"set": function(kgNewValue){
				this._wKg = kgNewValue;
				this._wLb = kgNewValue * 2.20462;
			}
		},
	}
});

var john = new Person();

// by default the weight is 0
console.log(john.wLb()); // 0
console.log(john.wKg()); // 0

// set new weight in lb, which will eventually reflect the weight in kg
john.wLb(180);

// print new weight
console.log(john.wLb()); // 180 (pounds)
console.log(john.wKg()); // 81.6466 (kg)
```

Both ```_wLb``` and ```_wKg``` (pay attention to the underscore at the beginning) are a sort of *private* properties. We will not read them, write into them or work in any way with them *directly*. Instead, there are setters and getters like ```wLb``` and ```wKg``` that provide nice interfaces, letting us synchronize the values.

### Objects as properties
If a property needs to be an object (or an array), you need to perform a special conversion into a return value of a function. Sounds complex?

Take a look at the following piece of code:

```JavaScript
nx.define("ExampleClass", {
	properties: {
	
		// this would break it
		wrongList: {
			// this object/array will point to the same memory cell for each instance of the class
			value: []
		},
		
		// correct implementation
		correctList: {
			value: function () {
				// return what you need to return (object, array, whatever...)
				return [];
			}
		}
	}
});
```
*"What do I need to complicate that for?"* - you would be reasonably asking, and I understand you. The reason is a weird to beginners way JavaScript handles objects (arrays are considered objects, too). In short, JavaScript *does not* copy the object, but rather it copies a pointer to the same memory address, so every instance of the above ```ExampleClass``` will link to the same ```wrongList```, but to the different instances of ```correctList```. Still sounds complex?

The following chunk of code will illustrate my point. It continues the code listing above. 

```JavaScript

// let's create two different objects out of same class
var example1 = new ExampleClass();
var example2 = new ExampleClass();

// write into different objects (wrongList)
example1.wrongList().push("this will be");
example2.wrongList().push("the same destination");

// but the data ends up in the same place
console.log("Example1 (wrongList): " + example1. wrongList());
console.log("Example2 (wrongList): " + example2. wrongList());

// add new element into different object (correctList)
example1.correctList().push("destination #1");
example2.correctList().push("destination #2");

// different objects = different lists
console.log("Example1 (correctList): " + example1. correctList());
console.log("Example2 (correctList): " + example2. correctList());
```

The output results:

```
Example1 (wrongList): this will be,the same destination
Example2 (wrongList): this will be,the same destination
Example1 (correctList): destination #1
Example2 (correctList): destination #2
```

No memory leaks, isn't that great? :)

## What's next?
Let's get to know how to handle the properties with the methods. Next article will tell about that.

[Read NEXT](tutorial-004-2.md)