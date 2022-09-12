import React from 'react';
import {Provider} from 'react-redux';
import store from './redux/store';
import {CustomProvider} from './context/provide';
import {Navigator} from './Navigation';

function Router({route}) {
  return (
    <CustomProvider>
      <Provider store={store}>
        <Navigator />
      </Provider>
    </CustomProvider>
  );
}

export default Router;
