import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import cartReducer from './reducers/cartReducer';

const store = configureStore({
  reducer: cartReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
    immutableCheck: false,
  }),
});

export default store;
