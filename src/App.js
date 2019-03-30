import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './layout'
import Posts from './pages/Posts'
import About from './pages/About'
import Archive from './pages/Archive'

const App = () => (
  <div>
    <Layout>
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/archive" component={Archive} />
        <Route path="/" exact component={Posts} />
      </Switch>
    </Layout>
  </div>
)

export default App;
