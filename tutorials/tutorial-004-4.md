# Static Class & Members
## Introduction
IF you have run into static classes, properties and method in other programming languages, you may want to skip this sector. Otherwise, you are very welcome.

**Static class** can only be a *singleton* (that's a technical term), which means that it is an instance of itself and cannot have any copies. They cannot be inherited. 

**Static members** (properties, methods) are similar to static classes. If a class has them, any instance of this class would point to the same object, when a user interacts with them. That said, the copies of the class could be different, but those very static members would be the same objects for all the classes, and therefore change of ```obj1.randomStaticProp``` will be reflected in ```obj2.randomStaticProp```.

## Static Class
A static class has ```static: true``` attribute in the class configuration.

```JavaScript
nx.define("Foo", {
    "static": true,
    "properties": {
        "message": "I am Foo"
    },
    "methods": {
        "hello": function() {
            console.log('Hello World!');
        }
    }
});

console.log(Foo.message());
Foo.hello();
```

It's important to note you **must not** use keyword ```new``` over a static class. Otherwise NeXt will throw an exception. The name of class is the name of object you can talk to.

[Demo on Codepen](http://codepen.io/NEXTSUPPORT/pen/EgadPJ)

## Static Members
Static members sit inside ```statics``` object in class configuration.

```JavaScript
nx.define("Bar", {
	"statics": {
		"message": "hello",
		"say": function(){
			console.log("test");
		}
	}
});

console.log(Bar.message);
Bar.say();
```

The rule about ```new``` keyword applies to classes with static members, too.

[Demo on Codepen](http://codepen.io/NEXTSUPPORT/pen/kkYAxq)

## Why?
Sometimes programmers use singletons as configuration across the app, for utility classes and testing. The case is up to you, we'd recommend you to read more materials on object-oriented programming if you are unfamiliar with that.

## What's next?
Events is what makes JavaScript JavaScript. That will be the conslusive article, which will be followed by tutorial on how to create and customize topologies.

[Read NEXT](tutorial-005.md)