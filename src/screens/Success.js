import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const Success = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Image
        source={require('../images/correct.png')}
        style={{
          width: 75,
          height: 75,
        }}
      />
      <Text
        style={{
          fontSize: 18,
          color: '#181717',
          marginTop: 20,
          fontWeight: 600,
        }}>
        Your appointment Successfully booked
      </Text>
      <TouchableOpacity
        style={{
          width: 150,
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
          borderWidth: 0.5,
          marginTop: 25,
        }}
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <Text style={{color: 'black'}}>Go to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Success;
