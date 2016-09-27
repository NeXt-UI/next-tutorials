# Inheritance of Views
When you inherit a class to alter it, you may also need to modify the *view*. The way you do that differs from methods' inheritance, therefore it's worth a distinct article.

Following the tradition, let's start with an example.

## Example
### Donor Component
Below is the code that defines a "donor" component's class. Why is it the donor? Because we are going to inherit it for modification.

```JavaScript
nx.define("DonorComponent", nx.ui.Component, {
	view: {
		content: [
			{
				"tag": "strong",
				"content": "I come from donor"
			}
		]
	}
});
```

### Recepient Component
To inherit and modify it, please make it a function.

```JavaScript
nx.define("RecepientComponent", nx.ui.Component, {
	view: function(view){
		view.content.push({
			"tag": "strong",
			"content": "A message from recepient's component"
		});
		return view;
	}
});
```



## What's Use?
We normally use the inheritance of views, when it comes to extension of UI/topology classes.

Imagine, you want to adhere a tiny icon to each node, that would represent the status of it. In order to do that, you should inherit the node class and inside you should do the view manipulations.

Since the example above is a really brief one, take a look at real code:

Examples: TBD

## What's Next?
The next tutorial gives you a brief overview of implemented in NeXt "Model-View-ViewModel" concept.

[Read NEXT](tutorial-006-05.md)