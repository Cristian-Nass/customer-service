import { UserState, UserModel } from '../../../models/user';
import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit'

export const userInitialState: UserState = {
  users: [],
  loading: true
};

const userSlice = createSlice({
  name: 'users',
  initialState: userInitialState,
  reducers: {
    usersReceived: (state, {payload}: PayloadAction<UserModel[]>) => {
      state.users = payload;
      state.loading = false;
    },
    sortBy: (state, {payload}: PayloadAction<string>) => {
      state.users.sort((a: any, b: any) => typeof(a[payload]) === 'number' ? (a[payload] - b[payload]) : a[payload].localeCompare(b[payload]));
    }
  },
});

const { actions, reducer } = userSlice;
export const { usersReceived, sortBy } = actions;
export default reducer;