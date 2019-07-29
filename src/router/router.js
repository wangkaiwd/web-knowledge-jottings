import React, { Suspense } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import App from '@/App';
import { Spin } from 'antd';
import menuList from './router.config.js';

const RootRouter = () => {
  return (
    <Router>
      <App>
        <Suspense fallback={<Spin size={'large'}/>}>
          <Switch>
            {
              menuList.map(menu => {
                if (menu.children) {
                  return menu.children.map(item => (
                    <Route path={item.key} component={item.component}/>
                  ));
                }
                return null;
              })
            }
          </Switch>
        </Suspense>
      </App>
    </Router>
  );
};

export default RootRouter;
