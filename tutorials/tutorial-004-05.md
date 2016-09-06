# Binding & Dependencies
This chapter is not affiliated with any OOP principles, however that's a good place to put it to.

Before you start, we'd like to let you know you can access the code snippets on [Codepen](http://codepen.io/NEXTSUPPORT/pen/LREvRg).

## Binding
**Binding** is responsible for corelation between different properties by name. A binded property is a sort of alias, however NeXt offers complex callback functions to make preliminary calculations before assign a new value to the property.

A binded property needs to be *released* when you're done. Otherwise you'll set the ground for memory leaks. 

Not yet ready to mess with it? Look into **dependencies**. That should satisfy most users' needs.

### Basic Binding
This example demonstrates simple binding within a selected class. 

```JavaScript
nx.define('SimpleBindingClass', nx.Observable, {
    properties: {
        prop: 10,
        prop1: {
            value: nx.keyword.binding("prop")
        },
        prop2: {
            value: nx.keyword.binding("prop1", function (prop1) {
                return prop1 * 2;
            })
        },
        prop3: {
            value: nx.keyword.binding({
                source: "prop1, prop2",
                callback: function (prop1, prop2) {
                    return prop1 + prop2;
                }
            })
        }
    }
});

var foo = new SimpleBindingClass();
console.log("prop=",foo.prop()); // 10 - explicitly assigned
console.log("prop1=",foo.prop1()); // 10 - implicitly points to prop
console.log("prop2=",foo.prop2()); // 20 - doubles prop1
console.log("prop3=",foo.prop3()); // 30 - sums up prop1 and prop2

foo.prop(20);
console.log("Assume prop = 20, therefore:");

console.log("prop1=",foo.prop1()); // 20
console.log("prop2=",foo.prop2()); // 40
console.log("prop3=",foo.prop3()); // 60
```

What's happening here? The only *explicitly* assigned to a property value is ```prop```, which equals 10 by default. The rest depend on it. ```prop1``` is simply an alias for ```prop```. ```prop2``` doubles ```prop1```, and then ```prop1``` adds ```prop2``` and results in ```prop3```.

We we changed ```prop```, it led us to change of the other properties' values. Get it? Move on.

### Binding by Path
This is essentially the exact same thing demonstrated above, except for a single detail: some properties are additionally binded to the class from the previous example *by path*.

```JavaScript
nx.define("PathBindingClass", nx.Observable, {
    properties: {
        simple: {
            value: function () {
                return new SimpleBindingClass();
            }
        },
        prop1: {
            value: nx.keyword.binding("simple.prop")
        },
        prop2: {
            value: nx.keyword.binding("simple.prop", function (prop1) {
                return prop1 * 2;
            })
        },
        prop3: {
            value: nx.keyword.binding({
                source: "simple.prop1, prop2",
                callback: function (prop1, prop2) {
                    return prop1 + prop2;
                }
            })
        }
    }
});

var bar = new PathBindingClass();

console.log("prop=",bar.simple().prop()); // 10 - explicitly assigned
console.log("prop1=",bar.prop1()); // 10 - implicitly points to prop
console.log("prop2=",bar.prop2()); // 20 - doubles prop1
console.log("prop3=",bar.prop3()); // 30 - sums up prop1 and prop2

bar.simple().prop(20);
console.log("Assume prop = 20, therefore:");

console.log("prop1=",bar.prop1()); // 20
console.log("prop2=",bar.prop2()); // 40
console.log("prop3=",bar.prop3()); // 60
```

Property ```simple``` instantiates the class ```SimpleBindingClass``` shown in the previous code listing. The other properties use ```simple``` to point to the instance, and then use a dot (like ```simple.prop```) to access properties within the the external class.

### Binding Outside of The Class
TBD
tell about setBinding, clearBinding

## Dependencies
TBD