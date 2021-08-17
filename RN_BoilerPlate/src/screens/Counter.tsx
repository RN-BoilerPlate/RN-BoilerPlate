/* eslint-disable react-hooks/exhaustive-deps */
import React, {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, Text, Button} from 'react-native';
// import Paper from 'react-native-paper';
// import useCounter from '../hooks/useCounter';
import {RootState} from '../store';
import {up, down} from '../store/counter';

const Counter: React.FC = () => {
  const {number} = useSelector((state: RootState) => ({
    number: state.counter.number,
  }));
  const dispatch = useDispatch();
  const onIncrease = useCallback(() => {
    dispatch(up());
  }, []);
  const onDecrease = useCallback(() => {
    dispatch(down());
  }, []);
  return (
    <View>
      <Text style={{fontWeight: 'bold'}}>Counter: {number}</Text>
      <View style={{display: 'flex', flexDirection: 'row'}}>
        <Button title="Increase" onPress={onIncrease}>
          Increase
        </Button>
        <Button title="Decrease" onPress={onDecrease}>
          Decrease
        </Button>
      </View>
    </View>
  );
};

export default Counter;
