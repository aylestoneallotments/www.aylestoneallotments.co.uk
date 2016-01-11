# Jelly Jekyll

## About Jelly

Jellystack is based on the Proteus starter kit for Jely

[Proteus](http://github.com/thoughtbot/proteus) is a collection of useful
starter kits to help you prototype faster. It follows the
[thoughtbot styleguide](https://github.com/thoughtbot/guides) and includes our
favorite front end tools.

## About Jekyll

Jekyll is a static site generator built in Ruby. This makes it a great fit
for projects that may end up as a Ruby on Rails app.

## Includes

* [HAML](http://haml.info):
  Simple template markup
* [Coffeescript](http://coffeescript.org):
  Write javascript with simpler syntax
* [Sass](http://sass-lang.com):
  CSS with superpowers
* [Autoprefixer](https://github.com/postcss/autoprefixer):
  Add vendor prefixes to CSS
* [Bourbon](http://bourbon.io):
  Sass mixin library
* [Neat](http://neat.bourbon.io):
  Semantic grid for Sass and Bourbon
* [Bitters](http://bitters.bourbon.io):
  Scaffold styles, variables and structure for Bourbon projects.

We also recommend [Refills](http://refills.bourbon.io/) for prepackaged interface patterns.

## Getting Started

Set up your project in your code directory
```
git clone https://github.com/thoughtbot/proteus-jekyll.git your-project-folder
cd your-project-folder
git remote rm origin
git remote add origin your-repo-url
```

Install dependencies
```
bundle install
```

Run the server and watch for changes in your files
```
jekyll serve -w
```

Deploy to Github Pages

You have two options:

Build locally (requires that you set the build directory to 'build'). This works anywhere (bitbucket for example):

```
jekyll build && git subtree push --prefix build origin gh-pages
```
Build online on Github (you want to set the destination directory to '_site' which is jekyll and githubs default):

```
git subtree push --prefix source origin gh-pages
```

Pull down updates to work on a live version with:

```
git pull -s subtree origin gh-
```

Or install the [Proteus gem](https://github.com/thoughtbot/proteus) and enjoy some shortcuts.

Stylesheets, fonts, images, and javascript files go in the `/source/_assets/` directory.
Vendor stylesheets and javascripts should go in each of their `/vendor/` directories.

## Issues

If you have problems, please create a
[GitHub Issue](https://github.com/thoughtbot/proteus-jekyll/issues).

## Contributing

Have a fix or want to add a feature?
[Pull Requests](https://github.com/thoughtbot/proteus-jekyll/pulls) are welcome!

## Credits

[![thoughtbot](http://images.thoughtbot.com/bourbon/thoughtbot-logo.svg)](http://thoughtbot.com)

Proteus Jekyll is maintained and funded by [thoughtbot, inc](http://thoughtbot.com). Thank you to all of [the contributors](https://github.com/thoughtbot/proteus-jekyll/contributors)!

## License

Copyright © 2014–2015 [thoughtbot, inc](http://thoughtbot.com). Proteus Jekyll is free software, and may be redistributed under the terms specified in the [license](LICENSE.md).
