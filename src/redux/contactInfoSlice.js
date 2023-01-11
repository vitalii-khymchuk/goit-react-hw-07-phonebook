import { createSlice } from '@reduxjs/toolkit';
import { getContactInfo } from './operations';

const initialState = { info: {}, isLoading: false, error: null };

const contactInfoSlice = createSlice({
  name: 'contactInfo',
  initialState,
  reducers: {
    clearContactsInfo(state) {
      state.info = {};
    },
  },
  extraReducers: builder =>
    builder
      .addCase(getContactInfo.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(getContactInfo.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(getContactInfo.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.info = payload;
      }),
});

export const { clearContactsInfo } = contactInfoSlice.actions;

export { contactInfoSlice };
