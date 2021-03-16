import { UserState, UserModel } from '../../../models/user';
import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit'

export const userInitialState: UserState = {
  users: [],
  loading: true
};

type payload = {
  key: string;
  sortAscending: boolean;
};

const userSlice = createSlice({
  name: 'users',
  initialState: userInitialState,
  reducers: {
    usersReceived: (state, {payload}: PayloadAction<UserModel[]>) => {
      state.users = payload;
      state.loading = false;
    },
    sortBy: (state, {payload}: PayloadAction<payload>) => {
      if (payload.sortAscending) {
        state.users.sort((a: any, b: any) => typeof(a[payload.key]) === 'number' ? (a[payload.key] - b[payload.key]) : a[payload.key].localeCompare(b[payload.key]));
      } else {
        state.users.sort((a: any, b: any) => typeof(a[payload.key]) === 'number' ? (b[payload.key] - a[payload.key]) : b[payload.key].localeCompare([payload.key]));
      }
      console.log('TEST TEXT: ', payload.sortAscending);
    }
  },
});

const { actions, reducer } = userSlice;
export const { usersReceived, sortBy } = actions;
export default reducer;