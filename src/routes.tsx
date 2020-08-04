import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Landing = lazy(() => import('./pages/Landing'))
const TeacherList = lazy(() => import('./pages/TeacherList'))
const TeacherForm = lazy(() => import('./pages/TeacherForm'))

export default () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Landing}/>
        <Route path="/study" component={TeacherList}/>
        <Route path="/give-classes" component={TeacherForm}/>
      </Switch>
    </Suspense>
  </Router>
);