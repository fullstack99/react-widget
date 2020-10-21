# React Widget Boilerplate

This project is a boilerplate to create a widget with `create-react-app` and `material-ui`.
It demonostrates how to use `uki-react-components`.

## Problems solved in this project:

- Porting `create-react-app` to a web component using Shadow DOM.
- Injecting css/scss styles into Shadow DOM.
- Injecting jss styles into Shadow DOM.
- Rendering select component, dialogs and modals in Shadow DOM

## Running the project

### Install dependencies
```
$ npm install
```

### Development
```
$ npm start
```
This is only useful for UI development.

### Build for packaging
```
$ npm run deploy
```
Package the widget to be used in dev-tools for further obfuscation and manifest generation.
