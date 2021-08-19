import React from 'react';
import RN, { StyleSheet } from 'react-native';
import {Text, Button} from 'react-native-paper';
// import useCounter from '../hooks/useCounter';
// import {Avatar} from 'react-native-paper';
import {View} from 'react-native';

const Github: React.FC = () => {
  const contributors = [
    {
      name: '장동현',
      id: 'ww8007',
      // image: './assets/ww8007.jpeg',
    },
    {
      name: '이하늘',
      id: 'oldSalao',
      // image: './assets/oldSalao.png',
    },
    {
      name: '이지호',
      id: 'DPS0340',
      // image: './assets/DPS0340.png',
    },
  ];
  const contributorComponents = contributors.map(e => {
    return (
      <View style={styles.contributor} key={e.id}>
        {/* <Avatar.Image size={24} source={require(e.image)} /> */}
        <Text>{`${e.id} - ${e.name}`}</Text>
      </View>
    );
  });
  return (
    <RN.View style={styles.view}>
      <Text>Made with ❤️, ⭐ please?</Text>
      {contributorComponents}
      <Button
        mode="contained"
        style={styles.button}
        onPress={() =>
          RN.Linking.openURL('https://github.com/RN-BoilerPlate/RN-BoilerPlate')
        }>
        Github
      </Button>
    </RN.View>
  );
};

export const styles = StyleSheet.create({
  contributor: {marginBottom: '2%'},
  view: {flex: 1, justifyContent: 'center',alignItems: 'center'},
  button: {backgroundColor: 'black', color: 'white'}
})

export default Github;
