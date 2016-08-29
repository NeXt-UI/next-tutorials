# Quick Start

## Installation
Create a separate empty folder for this app.

We described [installation process](/tutorials/tutorial-001.md) in a special article. We highly recommend to install bower and NPM, since it would make your life a little bit better.

## Initial Set-up
We assume you used *bower*; so you should only have *bower_components* directory. Create a a few folders and files to make the project structure look like this:

```
app/
	main.js
	topology.js
	topology_data.js
bower_components/
	next-bower/
index.html
style.css
```

*app* is a directory for the project JavaScript files (we'll see what they do later on). They are empty yet. *bower_components* is a standard directory created by *bower* package manager. *index.html* and *style.css* are the main page and an empty stylesheet file respectively.

Let's bootstrap the JavaScript and CSS files to the index page.

**index.html**

```HTML
<!DOCTYPE html>
<html>
<head>
	<title>Quick start with NeXt</title>
	<!-- NeXt library -->
	<link rel="stylesheet" href="bower_components/next-bower/css/next.min.css">
	<script type="text/javascript" src="bower_components/next-bower/js/next.min.js"></script>
</head>
<body>
	<div id="next-container"></div>
	<!-- Application scripts -->
	<script type="text/javascript" src="app/topology_data.js"></script>
	<script type="text/javascript" src="app/topology.js"></script>
	<script type="text/javascript" src="app/main.js"></script>
</body>
</html>
```

Super! What have we got here? Inside ```<head>``` container you are including the library files (JS and CSS). In the body a ```<div>``` goes. The ID (```next-container```) will be used later to identify the position of a DOM element to fit a topology in. Underneath three JS file are included. Now they are empty, but we'll take care of that in a while.

If you open the *index.html* in a browser, you'll see an empty page. Try to open a developer console and see if any error messages pop up (they should not).

## It's Show Time!
Open up 
