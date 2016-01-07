# Webpack boilerplate

Starter kit for modern web app ([React][react-link], [Bootstrap][bootstrap-link], [jQuery][jquery-link]) and bundle logic with [Webpack][webpack-link] for development (with [hot reloading][hot-reloading-link]) and for production

Made by [Paul Musso](https://twitter.com/paulmuss0)

## Features

- Output 2 js files, one for app code and other one for dependencies ([jQuery][jquery-link], ...)
- SourceMaps for JS, JSX and [LESS][less-link]
- Ressources (fonts and images) lesser than 100Kb are inlined in JS files
- Files generated by [Webpack](webpack-link) are injected to index.html
- 2 configurations
  - Development (npm run start)
    - [Source Maps][sourcemap-link] are inlined in JS files
    - [Hot reloading][hot-reloading-link] for CSS and [React][react-link], update changed files without refreshing web app
    - CSS are injected in JS files (for [hot reloading][hot-reloading-link])
  - Production (npm run serve or npm run build)
    - Styles exported to a CSS file
	- CSS and JS files are minimized
    - [Source Maps][sourcemap-link] are exported to dedicated files
- Use [ESLint][eslint-link]: check JS syntax at packaging time
- [React][react-link]
  - Enable [hot reloading][hot-reloading-link] for html (really fast)
- [Bootstrap][bootstrap-link]
  - App styles use Less [Bootstrap][bootstrap-link] files, useful to [change vars](http://getbootstrap.com/css/#less) like primary color
  - JS files are included in js file for dependencies, like [React][react-link] and [JQuery][jquery-link]
- [JQuery][jquery-link]
  - Included in JS file for dependencies
  - It is exposed in global scope as [jQuery][jquery-link]
- [Less][less-link] (CSS preprocessor)

[webpack-link]: http://webpack.github.io/
[jquery-link]: https://jquery.com/
[less-link]: http://lesscss.org/
[react-link]: https://facebook.github.io/react/
[bootstrap-link]: http://getbootstrap.com/
[hot-reloading-link]: https://webpack.github.io/docs/hot-module-replacement.html
[sourcemap-link]: http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/?redirect_from_locale=fr
[eslint-link]: http://eslint.org/
[webpack-analyse-link]: http://webpack.github.io/analyse/
[node-link]: https://nodejs.org/en/

## Getting started

Ensure you have [node][node-link] greater than version 4 (Code contains es6 syntax)

### Installation

1. Get repo with `git clone https://github.com/paulmusso/webpack-boilerplate.git`

2. Delete the existing git repository by running `rm -rf .git`

3. Initialize a new git repository with `git init`, `git add .` and `git commit -m "Initial commit"`

4. Run `npm install` to install the dependencies

### Development server (with hot reload)

```bash
npm start
```

Go to `http://localhost:8080` and you should see the app running!

### Build for production

```bash
npm run build
```

Output files are copied to `dist` folder

### Serve production files

```bash
npm run serve
```

## License

This project is licensed under the MIT license