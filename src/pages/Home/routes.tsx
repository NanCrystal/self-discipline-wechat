import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

const HomeComponent = React.lazy(() => import('@/pages/Home'));
const DocumentComponent = React.lazy(() => import('@/pages/Document'));
interface PropsType {}
const Routes: React.FC = (props: PropsType) => {
  return (
    // <ErrorBoundary>
    <Suspense fallback={null}>
      <Switch>
        <Route exact path={`/home`} component={HomeComponent} />
        <Route exact path={`/document`} component={DocumentComponent} />
        <Route exact path={`https://github.com/nancrystal`} />

        <Route render={() => null} />
      </Switch>
    </Suspense>
    // </ErrorBoundary>
  );
};
export default Routes;
