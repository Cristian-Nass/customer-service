import React, { useEffect, useState } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';
import { useDispatch, useSelector } from 'react-redux';
import { googleMapIconImage, googleMapUrl } from '../config';
import { UserModel, UserState } from '../models/user';
import { getUsers } from '../store/slices/user/user.action';
import { Loading } from './Loading';


const Map = (props: any) => {
  const dispatch = useDispatch();
  const {users, loading} = useSelector((state: {usersReducer: UserState}) => state.usersReducer)
  const [selectedUser, setSelectedUser] = useState<UserModel>({} as UserModel)
  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])

  if (loading) return <Loading />
  return (
    <GoogleMap
    defaultZoom={4}
    defaultCenter={{ lat: parseFloat(users[0].address.geo.lat), lng: parseFloat(users[0].address.geo.lng) }}
  >
    {users.length && users.map(user => (
      <Marker 
        key={user.id} 
        position={{ lat: parseFloat(user.address.geo.lat), lng: parseFloat(user.address.geo.lng) }}
        onClick={() => setSelectedUser(user)}
        icon={{
          url: googleMapIconImage,
          scaledSize: new window.google.maps.Size(25, 25)
        }}
      />
    ))}

    {selectedUser.id && (
      <InfoWindow
        position={{ lat: parseFloat(selectedUser.address.geo.lat), lng: parseFloat(selectedUser.address.geo.lng) }}
        onCloseClick={() => setSelectedUser({} as UserModel)}
      >
        <>
          <div>ID: {selectedUser.id}</div>
          <div>Name: {selectedUser.name}</div>
        </>
      </InfoWindow>
    )}
  </GoogleMap>
  )
}
const WrappedMap =  withScriptjs(withGoogleMap(Map))

const MapComponent = () => {
  return (
    <WrappedMap
      isMarkerShown
      googleMapURL={googleMapUrl}
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div className='map' />}
      mapElement={<div style={{ height: `100%` }} />}
    />
  )
}


export default MapComponent;