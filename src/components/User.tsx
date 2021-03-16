import React, { useEffect,useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { UserProps, UserState } from '../models/user';
import { getUsers } from '../store/slices/user/user.action';
import { sortBy } from '../store/slices/user/user.reducer'
import { Loading } from './Loading';

const User: React.FC<UserProps> = (): JSX.Element => {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state: {usersReducer: UserState}) => state.usersReducer);
  const [sortAscending, setSortAscending] = useState(false);

  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch]);
  
  const handleSortering = (key: string, sortAscending: boolean) => {
    setSortAscending(!sortAscending);
    dispatch(sortBy({key, sortAscending}));
  };

  if (loading) return <Loading />
  return (
    <>
      <table>
        <thead>
        <tr>
            <th 
              className="cursor-arrow" onClick={() => handleSortering('id', sortAscending)}>ID 	&darr;&uarr;</th>
            <th 
              className="cursor-arrow" onClick={() => handleSortering('name', sortAscending)}>Name 	&darr;&uarr;</th>
            <th 
              className="cursor-arrow" onClick={() => handleSortering('username', sortAscending)}>Username 	&darr;&uarr;</th>
            <th
              className="cursor-arrow" onClick={() => handleSortering('username', sortAscending)}>Email   &darr;&uarr;</th>
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