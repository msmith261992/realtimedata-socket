// toolkit
import { configureStore, ThunkAction, Action, EnhancedStore } from '@reduxjs/toolkit';
// redux
import * as ReactRedux from 'react-redux';
// Modules
import * as Devices from './modules/devices';

export type RootState = ReturnType<typeof store.getState>;
export type AppStore = ReturnType<typeof configureStore>;
export type Dispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

/* Set store */
export const store = configureStore({
  devTools: true,
  reducer: {
    device: Devices.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

/* Setup store for testing */
export const setupStore = (
  preloadedState?: Partial<RootState>,
): EnhancedStore =>
  configureStore({
    reducer: {
      device: Devices.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
        immutableCheck: false,
      }),
    preloadedState,
  });

export {
  Devices,
};

/* useSelector to fetch redux states */
export const useSelector = <T extends unknown = RootState>(
  selector: (state: RootState) => T,
  equalityFn?: (left: T, right: T) => boolean,
): T => ReactRedux.useSelector(selector, equalityFn);

/* useDispatch set to call module functions */
export const useDispatch = ReactRedux.useDispatch.withTypes<Dispatch>();
