import React from 'react';
import App from './App';
import ReactWebComponent from "react-web-component";
import './styles.scss';

if (!customElements.get('react-widget-demo')) {
  ReactWebComponent.create(<App />, 'react-widget-demo');
}
