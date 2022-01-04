import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
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
  Professional as ProfessionalView,
  Books as BooksView,
  Courses as CoursesView
} from 'views/landingPages/Home/components';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <WithLayout
            component={HomeView}
            layout={MainLayout}
          />
        </Route>
        <Route exact path="/professional-view">
          <WithLayout
            component={ProfessionalView}
            layout={MainLayout}
          />
        </Route>
        <Route exact path="/books-view">
          <WithLayout
            component={BooksView}
            layout={MainLayout}
          />
        </Route>
        <Route exact path="/courses-view">
          <WithLayout
            component={CoursesView}
            layout={MainLayout}
          />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
