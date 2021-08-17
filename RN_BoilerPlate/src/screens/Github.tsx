import React from 'react';
import RN from 'react-native';
import Paper from 'react-native-paper';
// import useCounter from '../hooks/useCounter';
// import {Avatar} from 'react-native-paper';
import {View, Text, Button} from 'react-native';

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
      <View style={{marginBottom: '2%'}} key={e.id}>
        {/* <Avatar.Image size={24} source={require(e.image)} /> */}
        <Text>{`${e.id} - ${e.name}`}</Text>
      </View>
    );
  });
  return (
    <RN.View>
      <Text>Made with ❤️, ⭐ please?</Text>
      {contributorComponents}
      <Button
        title="github"
        onPress={() =>
          RN.Linking.openURL('https://github.com/RN-BoilerPlate/RN-BoilerPlate')
        }>
        Github
      </Button>
    </RN.View>
  );
};

export default Github;
