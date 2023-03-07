import {createSlice} from '@reduxjs/toolkit';
import {RootState} from './store';

export type StyleState = {
  barStyle: 'light-content' | 'dark-content';
};

export const initialState: StyleState = {
  barStyle: 'light-content',
};

export const styleSlice = createSlice({
  name: 'style',
  initialState,
  reducers: {
    resetState() {
      return initialState;
    },
    statusBarLightMode: state => {
      state.barStyle = 'light-content';
    },
    statusBarDarkMode: state => {
      state.barStyle = 'dark-content';
    },
  },
});

export const selectStyleData = (state: RootState) => state.style;

export const {resetState, statusBarLightMode, statusBarDarkMode} =
  styleSlice.actions;
export default styleSlice.reducer;
