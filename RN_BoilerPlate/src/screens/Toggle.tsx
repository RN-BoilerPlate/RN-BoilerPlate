/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable dot-notation */
import React, {useCallback, useMemo, useState} from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import {Button} from 'react-native-paper';

export interface IItem {
  text: string;
}

const Item: React.FC<IItem> = ({text}) => {
  const [toggled, setToggled] = useState(false);
  const callback = useCallback(() => setToggled(!toggled), [toggled]);
  return (
    <Button mode={toggled ? 'contained' : 'outlined'} onPress={callback}>
      {text}
    </Button>
  );
};

function* to(start: number, end: number) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}

const Toggle: React.FC = () => {
  const renderItem = ({item}: {item: IItem}) => <Item {...item} />;
  const range = useMemo(() => {
    const result = [];
    for (const e of to(1, 10)) {
      result.push(String(e));
    }
    return result.map<IItem>(e => ({
      text: e,
    }));
  }, []);
  const id = (e: IItem) => e.text;
  return (
    <SafeAreaView>
      <FlatList data={range} renderItem={renderItem} keyExtractor={id} />
    </SafeAreaView>
  );
};

export default Toggle;
