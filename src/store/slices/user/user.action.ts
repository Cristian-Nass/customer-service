import { UserModel } from '../../../models/user';
import { usersReceived } from './user.reducer';
import { createAsyncThunk, Dispatch } from '@reduxjs/toolkit'
import { palceHolderApi } from '../../../api/jsonPlaceHolder'


export const getUsers = () => async (dispatch: Dispatch) => {
  const users: {data: UserModel[]} = await palceHolderApi.get('/users')
  return dispatch(usersReceived(users.data));
}
