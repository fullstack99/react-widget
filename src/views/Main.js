import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import FormControls from './FormControls';
import SampleCollection from './SampleCollection';
import Dialogs from './Dialogs';
import Resources from './Resources';
import MainHeader from './MainHeader';

import './Main.scss';

const Main = () => (
  <div className="main">
    <Switch>
      <Route path="/form-controls">
        <MainHeader tab={0} />
        <FormControls />
      </Route>
      <Route path="/collection">
        <MainHeader tab={1} />
        <SampleCollection />
      </Route>
      <Route path="/dialogs">
        <MainHeader tab={2} />
        <Dialogs />
      </Route>
      <Route path="/resources">
        <MainHeader tab={3} />
        <Resources />
      </Route>
      <Redirect to="/form-controls" />
    </Switch>
  </div>
);
export default Main;
