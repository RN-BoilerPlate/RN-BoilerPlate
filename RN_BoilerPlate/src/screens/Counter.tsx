/* eslint-disable react-hooks/exhaustive-deps */
import React, {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View} from 'react-native';
import {Text, Button} from 'react-native-paper';
// import useCounter from '../hooks/useCounter';
import {RootState} from '../store';
import {up, down, reset} from '../store/counter';
import {StyleSheet} from 'react-native';

const Counter: React.FC = () => {
  const {number} = useSelector((state: RootState) => ({
    number: state.counter.number,
  }));
  const dispatch = useDispatch();
  const onIncrease = useCallback(() => {
    dispatch(up());
  }, []);
  const onReset = useCallback(() => {
    dispatch(reset());
  }, []);
  const onDecrease = useCallback(() => {
    dispatch(down());
  }, []);
  return (
    <View style={styles.view}>
      <Text style={styles.boldText}>Counter: {number}</Text>
      <View style={styles.buttonView}>
        <Button mode="contained" style={styles.button} onPress={onIncrease}>
          Increase
        </Button>
        <Button mode="contained" style={styles.button} onPress={onReset}>
          Reset
        </Button>
        <Button mode="contained" style={styles.button} onPress={onDecrease}>
          Decrease
        </Button>
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  contributor: {marginBottom: '2%'},
  view: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  buttonView: {display: 'flex', flexDirection: 'column'},
  boldText: {fontWeight: 'bold'},
  button: {flexShrink: 1, width: '80vw'},
});

export default Counter;
