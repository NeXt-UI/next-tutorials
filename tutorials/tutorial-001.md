# Setup Framework
Hi! Welcome to NeXt tutorial #1. We are here to let you understand NeXt UI and help you start writing your code as soon as possible. We keep the tutorial short and simple to let you marsh step by step and monitor your progress after each step.

Okay, why don't we start right away?

## Setup
There are two ways of installation NeXt: semi-automatic set-up with [Bower](http://bower.io/), or manual installation. We would recommend installation with Bower.

### Setup with Bower
[Bower](http://bower.io/) is a "package manager for the web". In other words, this tool allows you to download JavaScript products for your web applications (or web-sites), manage dependencies and automatically update third-party code. 

Once you have Bower installed, you can proceed to downloading NeXt framework. Go to your project's folder with [cd](https://en.wikipedia.org/wiki/Cd_(command)) and run the following command, which will download NeXt for you:

Bower:

```
npm install NeXt
```

Bower creates a folder named /bower_components/ under the working folder, which is a container for all the apps, or libraries, that you download with Bower. Navigate under /next-bower/ and you'll see "css" and "js" folders that contain a bunch of necessary files. You'll need to link only [minified versions](https://en.wikipedia.org/wiki/Minification_(programming)) of them: /css/next.min.css and /js/next.min.js.

In <head> container of your HTML page, link the files this way:

```HTML
<head>
    ...
    <link rel="stylesheet" href="bower_components/next-bower/css/next.min.css">
    <script type="text/javascript" src="bower_components/next-bower/js/next.min.js"></script>
    ...
</head>
```

### Manual Setup
First of all, download latest NeXt UI release from [Cisco DevNet web-site](https://developer.cisco.com/site/neXt/). Extract the files from archive and move them to a place, which is convenient to you. 

Create an HTML page. Link CSS and JS files to your project like this

```HTML
<head>
    ...
    <link rel="stylesheet" href="next/css/next.css">
    <script type="text/javascript" src="next/js/next.js"></script>
    ...
</head>
```

Here "next" is a path to folder, where NeXt UI files lie.

Example: see **/demos/tutorial-001/**

## What's next?
Your next step is to understand Common Topology Model. This model is pretty simple, and will take 5-10 minutes to familiarize yourself with it.

[Read NEXT](./tutorial-002.md)