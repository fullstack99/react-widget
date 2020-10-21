import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { create } from 'jss';
import { StylesProvider, jssPreset, ThemeProvider } from '@material-ui/styles';
import { HashRouter } from 'react-router-dom';

import { createTheme, AppContext } from 'uki-mui-components';

import { setAssetsUrl } from './store/actions';
import Main from './views/Main';
import initStore from './store/config';

const store = initStore();

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jss: null,
      theme: null,
      context: null
    };
  }

  render() {
    const { jss, theme, context } = this.state;

    return (
      jss && (
        <StylesProvider jss={jss}>
          <ThemeProvider theme={theme}>
            <Provider store={store}>
              <AppContext.Provider value={context}>
                <HashRouter>
                  <Main />
                </HashRouter>
              </AppContext.Provider>
            </Provider>
          </ThemeProvider>
        </StylesProvider>
      )
    );
  }

  webComponentConstructed(component) {
    const root = component.shadowRoot.querySelector('div');
    root.className = 'root';

    this.setState({
      jss: create({
        ...jssPreset(),
        insertionPoint: root
      }),
      theme: createTheme(root, {
        palette: {
          primary: {
            main: '#0e8bff',
            lighter: '#0e8bff',
            darker: '#0e8bff',
            200: '#0e8bff' // For slide toggle,
          },
          secondary: {
            main: '#c60505',
            lighter: '#ffbfb3',
            darker: '#ff1800',
            200: '#ff2800' // For slide toggle,
          },
          thrid: {
            main: '#282e37',
            lighter: '#bfc0c3',
            darker: '#181d23',
            200: '#282e37' // For slide toggle,
          }
        },
        typography: {
          useNextVariants: true,
          fontFamily: ['Roboto', 'sans-serif'].join(',')
        }
      }),
      context: {
        webComponent: component,
        rootEl: root
      }
    });

    component.dispatchEvent(
      new CustomEvent('onInitCallback', {
        detail: {
          callback: init => {
            store.dispatch(setAssetsUrl(init.baseUrl + 'assets'));
          }
        }
      })
    );
  }
}

export default App;
