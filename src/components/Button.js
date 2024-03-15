import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const Button = ({index, txt, w, h, onClick}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          onClick();
        }}>
        {index / 2 == 0 ? (
          <LinearGradient
            colors={['#20BF55', '#01BAEF']}
            style={{
              width: w,
              height: h,
              borderRadius: 5,
              alignSelf: 'center',
              justifyContent: 'center',
              marginTop: 10,
              marginBottom: 10,
            }}>
            <Text
              style={{
                color: '#fff',
                fontWeight: 600,
                fontSize: 16,
                textAlign: 'center',
              }}>
              {txt}
            </Text>
          </LinearGradient>
        ) : (
          <LinearGradient
            colors={['#8e8e8e', '#8e8e8e']}
            style={{
              width: w,
              height: h,
              borderRadius: 5,
              alignSelf: 'center',
              justifyContent: 'center',
              marginTop: 10,
              marginBottom: 10,
              opacity: 0.5,
            }}>
            <Text
              style={{
                color: '#fff',
                fontWeight: 600,
                fontSize: 16,
                textAlign: 'center',
              }}>
              {txt}
            </Text>
          </LinearGradient>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Button;
