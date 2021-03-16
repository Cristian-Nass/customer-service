import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { UserProps, UserState } from '../models/user';
import { getUsers } from '../store/slices/user/user.action';
import { sortBy } from '../store/slices/user/user.reducer'
import { Loading } from './Loading';

const User: React.FC<UserProps> = (): JSX.Element => {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state: {usersReducer: UserState}) => state.usersReducer);
  
  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch]);
  
  const handleSortering = (key: string) => dispatch(sortBy(key));

  if (loading) return <Loading />
  return (
    <>
      <table>
        <thead>
          <tr>
            <th 
              onClick={() => handleSortering('id')}><span className="cursor-arrow" >ID 	&darr;</span></th>
            <th 
              onClick={() => handleSortering('name')}><span className="cursor-arrow" >Name 	&darr;</span></th>
            <th 
              onClick={() => handleSortering('username')}><span className="cursor-arrow" >Username 	&darr;</span></th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {users.length && users.map((user: any) => (
            <tr key={user.id}>
              <th>{user.id}</th>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default User;