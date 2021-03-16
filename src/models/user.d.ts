import {Action} from 'redux';

export interface UserModel {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    }
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export interface UserState {
  users: UserModel[];
  loading: boolean;
}

export interface UserProps {
  getUsers: () => void;
  users: UserModel[];
  loading: boolean;
}

export interface CustomAction extends Action {
  payload: any;
}

export interface StoreState extends UserState {}