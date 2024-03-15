import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const Header = ({title, icon, onpressIcon}) => {
  return (
    <View
      style={{
        height: 60,
        width: '100%',
        flexDirection: 'row',
        backgroundColor: '#fff',
        elevation: 5,
        alignItems: 'center',
      }}>
      <TouchableOpacity
        activeOpacity={onpressIcon ? 0 : 1}
        onPress={onpressIcon}>
        <Image source={icon} style={{width: 24, height: 24, marginLeft: 20}} />
      </TouchableOpacity>

      <Text
        style={{
          marginLeft: 20,
          fontSize: 18,
          fontWeight: '600',
          color: '#262626',
        }}>
        {title}
      </Text>
    </View>
  );
};

export default Header;
