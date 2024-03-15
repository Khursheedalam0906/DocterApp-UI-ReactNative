import React, {useEffect} from 'react';
import {View, Text, Image} from 'react-native';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 3000);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue',
      }}>
      <Image
        source={require('../images/logo.png')}
        style={{tintColor: 'white'}}
      />
      <Text style={{fontSize: 25, marginTop: 20, color: 'white'}}>
        DoctorApp
      </Text>
    </View>
  );
};

export default Splash;
