import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import WithLayout from 'WithLayout';
// Available layouts
import {
  Main as MainLayout,
  Fluid as FluidLayout,
  Fixed as FixedLayout,
} from './layouts';

// Landing pages
import {
  Home as HomeView,
  Software as SoftwareView
} from 'views/landingPages';
import {
  Professional as ProfessionalView
} from 'views/landingPages/Home/components';


const Routes = () => {
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={(matchProps) => (
          <WithLayout
            {...matchProps}
            component={HomeView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path="/professional-view"
        render={(matchProps) => (
          <WithLayout
            {...matchProps}
            component={ProfessionalView}
            layout={MainLayout}
          />
        )}
      />
    </Switch>
  );
};

export default Routes;
