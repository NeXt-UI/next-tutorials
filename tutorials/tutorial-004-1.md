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
nx.define("ObjectExample", {
	properties: {
	
		// this would break it
		wrongList: {
			value: []
		},
		
		// correct implementation
		correctList: {
			value: function () {
				return [];
			}
		}
	}
});
```
 

## What's next?
Let's get to know how to handle the properties with the methods. Next article will tell about that.

[Read NEXT](tutorial-004-1.md)