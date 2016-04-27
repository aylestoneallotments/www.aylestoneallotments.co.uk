# The Great Project Website

This is the code for website of The Great Project Website.

## Technical details

The site is built using a customised version of Jekyll static site generator which can be automatically built using Github pages.

In addition the Bourbon framework by Thoughbot is used to enable faster development.

## Includes

* [Bourbon](http://bourbon.io):
  Sass mixin library
* [Neat](http://neat.bourbon.io):
  Semantic grid for Sass and Bourbon
* [Bitters](http://bitters.bourbon.io):
  Scaffold styles, variables and structure for Bourbon projects.
* [Fullcalendar](http://fullcalendar.io/):
  FullCalendar is a drag-n-drop jQuery plugin for displaying events on a full-sized calendar.


## Getting Started

Install dependencies.
```
bundle install
```

Run the server and watch for changes in your files
```
jekyll serve -w
```

## Help for content editors

A simple [help system](/help) is included for content editors.

## Compiling Javascripts

sudo npm install uglify-js -g
	
Then use it to compress your files…

<code>
echo "$(cat js/_forjekyllcompile/opening.js ; uglifyjs js/_foruglification/*; cat js/_forjekyllcompile/lunrfeed.js js/_forjekyllcompile/calendar.js)" > js/application.js
</code>