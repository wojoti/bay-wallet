import type {PreloadedState} from '@reduxjs/toolkit';
import {configureStore} from '@reduxjs/toolkit';
import {ToolkitStore} from '@reduxjs/toolkit/dist/configureStore';
import {cleanup, render, RenderOptions} from '@testing-library/react-native';
import React, {PropsWithChildren} from 'react';
import {Provider} from 'react-redux';
import {RootState, store} from 'store/store';
import {resetState, styleSlice} from 'store/styleSlice';
// As a basic setup, import your same slice reducers

// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store.
interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>;
  store?: ToolkitStore;
}

afterEach(() => {
  cleanup();
  store.dispatch(resetState());
});

function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {
      style: {barStyle: 'light-content'},
    },
    // Automatically create a store instance if no store was passed in
    store = configureStore({
      reducer: {style: styleSlice.reducer},
      preloadedState,
    }),
    ...renderOptions
  }: ExtendedRenderOptions = {},
) {
  function Wrapper({children}: PropsWithChildren<{}>): JSX.Element {
    return <Provider store={store}>{children}</Provider>;
  }

  // Return an object with the store and all of RTL's query functions
  return {store, ...render(ui, {wrapper: Wrapper, ...renderOptions})};
}

export default renderWithProviders;
