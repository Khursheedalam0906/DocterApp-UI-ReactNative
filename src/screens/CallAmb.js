import {View, Text, TextInput} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import Button from '../components/Button';

const CallAmb = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <Header
        icon={require('../images/back.png')}
        title={'Call Ambulance'}
        onpressIcon={() => {
          navigation.goBack();
        }}
      />
      <TextInput
        placeholder="Address"
        placeholderTextColor={'gray'}
        style={{
          height: 50,
          width: '90%',
          borderWidth: 0.5,
          borderRadius: 10,
          marginTop: 50,
          alignSelf: 'center',
          paddingLeft: 20,
          color: '#404040',
        }}
      />
      <Button w={200} h={50} txt={'Call Now'} index={0} />
    </View>
  );
};

export default CallAmb;
