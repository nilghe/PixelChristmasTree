Pixel Christmas Tree
====================

A lightweight jQuery plugin that creates a Pixel Christmas tree with flickering lights. Spread holiday cheer with a dash of nerd on your web page or app!

## Demo
See index.html

## Setup 

1. Reference the JavaScript and CSS files

```html
<link rel="stylesheet" href="css/pixelxmas-1.0.0.min.css">
<script src="js/pixelxmas-1.0.0.min.js"></script>
```

2. Create a div with id "tree-canvas" in your HTML

```html
<div id="tree-canvas"></div>
```

3. Initialize plugin in your main JavaScript file

```javascript
$('#tree-canvas').pixelxmas();
```

## Options

1. numRows - Default is 16. Number of rows you want the tree to have. 
2. lightFlickerSpeed - Default speed is 500. Speed at which the lights on the tree flicker.

## Options Usage

```javascript
$('#tree-canvas').pixelxmas({
	numRows: 24,
	lightFlickerSpeed: 100
});
```

## Dependencies
- jQuery 