# Homepage

A personal homepage deployed at [florianbuehler.github.io](https://florianbuehler.github.io/).


## Technology

The project is a [Gatsby](https://www.gatsbyjs.com/) site and uses [TypeScript](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html), [React](https://reactjs.org/) and [Sass](https://sass-lang.com/) under the hood.

Additionally [ESLint](https://eslint.org/), [Prettier](https://prettier.io/) and [stylelint](https://stylelint.io/) are setup to ensure a high quality and consistent code style.


## Getting started

To get started, first clone the project using
```shell script
git clone https://github.com/florianbuehler/homepage.git
```
Alternatively you can also clone it using SSH `git@github.com:florianbuehler/homepage.git`.

Once you cloned the project successfully, navigate into the root project folder and run
```shell script
npm install
```
to install all required packages into the *node_modules* folder.


## Development

```shell script
npm run develop
```
To run the project locally in development mode you can execute `npm run start` in the project directory.
If no other port was specified the result can be observed in the browser at [http://localhost:8000](http://localhost:8000), otherwise the port needs to be adapted accordingly.

```shell script
npm run eslint
```
To see all formatting and code snippets which do not match the code quality standards specified in the Eslint & Prettier configurations you can use `npm run eslint`. The command outputs a list of all violations in the terminal.

```shell script
npm run fix-eslint
```
If you don't want to fix the code quality issues found by Eslint & Prettier by hand you can simply run `fix-eslint`.
It will try to fix all violations and output the violations which couldn't be fixed automatically.

To do the same thing for the stylesheets you can run
```shell script
npm run stylelint
```
to obtain a list of all violations and
```shell script
npm run fix-stylelint
```
to try to fix them automatically.

## Production

To build a production ready, optimized version of the website use
```shell script
npm run build
```
The generated output can be found in the *public* directory and can be served using
```shell script
npm run serve
```
