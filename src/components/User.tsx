import React, { useEffect,useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { UserProps, UserState } from '../models/user';
import { getUsers } from '../store/slices/user/user.action';
import { sortBy } from '../store/slices/user/user.reducer'
import { Loading } from './Loading';

const User: React.FC<UserProps> = (): JSX.Element => {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state: {usersReducer: UserState}) => state.usersReducer);
  const [sortAscending, setSortAscending] = useState(true);

  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch]);
  
  const handleSortering = (key: string, sortAscending: boolean) => {
    setSortAscending(!sortAscending);
    dispatch(sortBy({key, sortAscending}));
  };

  if (loading) return <Loading />
  return (
    <div className='users'>
      <table className='users__table'>
        <thead className='users__table-head'>
          <tr className='users__table-head-row'>
            <th className='users__table-head-row-title' onClick={() => handleSortering('id', sortAscending)}>ID &darr;&uarr;</th>
            <th className='users__table-head-row-title' onClick={() => handleSortering('name', sortAscending)}>Name &darr;&uarr;</th>
            <th className='users__table-head-row-title' onClick={() => handleSortering('username', sortAscending)}>Username &darr;&uarr;</th>
            <th className='users__table-head-row-title' onClick={() => handleSortering('username', sortAscending)}>Email &darr;&uarr;</th>
            <th className='users__table-head-row-title' onClick={() => handleSortering('username', sortAscending)}>Phone &darr;&uarr;</th>
          </tr>
        </thead>
        <tbody className='users__table-body'>
          {users.length && users.map((user: any) => (
            <tr key={user.id} className='users__table-body-row'>
              <th>{user.id}</th>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default User;