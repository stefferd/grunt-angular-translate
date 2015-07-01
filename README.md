# grunt-angular-translates

> Language specific rendering of the templates for angular. The templates will be rendered in the $templateCache.
The template will be added as much as languages files are set. The template path will be extended with the language
file name before .json.

The plugin is created to not use any extra bindings in the angularJS app for translations. This will be executed before
the templates are used. The problem I faced was that the translations for attributes had to use filters and i didn't
want to use filters. The npm package grunt-angular-translates was born.

I've anybody has suggestions or bugs feel free to report these in github. The documentation will be updated on friday
3 juli 2015 for the full description of the features.

Example:

template: test_multiplelevels.html 
languages: ['en.json', 'nl.json']

Will result in en/test_multiplelevels.html and nl/test_multiplelevels.html

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-angular-translates --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-angular-translates');
```

## The "angular_translate" task

### Overview
In your project's Gruntfile, add a section named `angular_translate` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  multpleTemplates: {
    src: ['test/templates/test_multiplelevels.html', 'test/templates/template.html'],
    languages: ['test/resources/en.json', 'test/resources/nl.json'],
    dest: 'tmp/custom_multipleTemplates.js',
    options: {
      module: 'customModuleName'
    }
  }
});
```

Make sure the name of the languages file is unique. This will be used during the rendering in the template path.

### Options

#### options.separator
Type: `String`
Default value: `',  '`

A string value that is used to do something with whatever.

#### options.punctuation
Type: `String`
Default value: `'.'`

A string value that is used to do something else with whatever else.

### Usage Examples

#### Default Options
In this example, the default options are used to do something with whatever. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result would be `Testing, 1 2 3.`

```js
grunt.initConfig({
  angular_translate: {
    src: ['test/templates/test_multiplelevels.html', 'test/templates/template.html'],
    languages: ['test/resources/en.json', 'test/resources/nl.json'],
    dest: 'tmp/custom_multipleTemplates.js',
    options: { }
  }
});
```

#### Custom Options
In this example, custom options are used to do something else with whatever else. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result in this case would be `Testing: 1 2 3 !!!`

```js
grunt.initConfig({
  angular_translate: {
      src: ['test/templates/test_multiplelevels.html', 'test/templates/template.html'],
      languages: ['test/resources/en.json', 'test/resources/nl.json'],
      dest: 'tmp/custom_multipleTemplates.js',
      options: { 
        module: 'yourModuleName'
      }
    }
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
- 0.0.1 Initial version
- 0.0.2 Added bootstrapper function
- 0.0.3 bootstrapper function inside the task
- 0.0.4 Fixed errors and tests
- 0.0.5 Updated the documentation