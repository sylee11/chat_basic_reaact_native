import React from 'react';
import {Text} from 'react-native';
import store from '../redux/store';
import action from '../redux/action';
import {useSelector} from 'react-redux';

export default () => {
  // const count = useSelector((store) => store.te)
  console.log('sss11111', store.getState().testReducer);
  store.getState();
  store.dispatch(action);
  console.log('sss22222', store.getState());

  return <Text>Say Oke</Text>;
};
