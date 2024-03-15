import {View, Text, FlatList, Image} from 'react-native';
import React from 'react';
import Header from '../components/Header';

const Completed = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <Header
        icon={require('../images/back.png')}
        title={'Completed Appointment'}
        onpressIcon={() => {
          navigation.goBack();
        }}
      />
      <View>
        <FlatList
          data={[1, 1, 1, 1, 1]}
          renderItem={({item, index}) => {
            return (
              <View
                style={{
                  width: '95%',
                  height: 100,
                  color: '#fff',
                  borderWidth: 1,
                  borderRadius: 10,
                  alignSelf: 'center',
                  marginVertical: 5,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../images/doctor.png')}
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 30,
                    marginLeft: 10,
                  }}
                />
                <View>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: '700',
                      marginLeft: 20,
                      color: '#404040',
                    }}>
                    {'Doctor XYZ'}
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: '700',
                      marginLeft: 20,
                      color: '#404040',
                    }}>
                    {'08:10PM'}
                  </Text>
                </View>
                <Text
                  style={{
                    marginLeft: 60,
                    borderRadius: 10,
                    backgroundColor: '#f2f2f2',
                    padding: 5,
                    color: 'green',
                  }}>
                  {'Completed'}
                </Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Completed;
