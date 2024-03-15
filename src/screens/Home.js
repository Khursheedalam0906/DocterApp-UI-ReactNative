import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import LinearGradient from 'react-native-linear-gradient';
import Button from '../components/Button';

const Home = ({navigation}) => {
  return (
    <View>
      <ScrollView>
        <View style={{flex: 1, backgroundColor: '#fff'}}>
          <Header icon={require('../images/logo.png')} title={'DoctorApp'} />
          <Image
            source={require('../images/doctorbg.jpg')}
            style={{
              width: '100%',
              height: 200,
              marginTop: 10,
              borderRadius: 10,
            }}
          />
          <Text
            style={{
              color: '#333333',
              fontSize: 18,
              fontWeight: '700',
              marginTop: 20,
              marginLeft: 15,
            }}>
            Select Category
          </Text>
          <View>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={[1, 1, 1, 1, 1, 1]}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity>
                    <LinearGradient
                      colors={['#20BF55', '#01BAEF']}
                      style={{
                        width: 120,
                        height: 50,
                        borderRadius: 10,
                        marginLeft: 10,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: 10,
                      }}>
                      <Text
                        style={{color: '#fff', fontWeight: 600, fontSize: 16}}>
                        {'Category ' + index + 1}
                      </Text>
                    </LinearGradient>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
          <Text
            style={{
              color: '#333333',
              fontSize: 18,
              fontWeight: '700',
              marginTop: 15,
              marginLeft: 15,
            }}>
            Top Rated Doctors
          </Text>
          <View style={{marginTop: 20, alignItems: 'center'}}>
            <FlatList
              numColumns={2}
              data={[1, 1, 1, 1, 1, 1]}
              renderItem={({item, index}) => {
                return (
                  <View
                    style={{
                      width: '45%',
                      //  height: 200,
                      borderWidth: 0.2,
                      backgroundColor: '#fff',
                      borderRadius: 10,
                      margin: 10,
                    }}>
                    <Image
                      source={require('../images/doctor.png')}
                      style={{
                        width: 60,
                        height: 60,
                        alignSelf: 'center',
                        marginTop: 15,
                      }}
                    />
                    <Text
                      style={{
                        fontSize: 18,
                        fontWeight: 700,
                        marginTop: 5,
                        alignSelf: 'center',
                      }}>
                      Doctor {index + 1}
                    </Text>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: 600,
                        marginTop: 5,
                        alignSelf: 'center',
                        color: 'green',
                        padding: 5,
                        backgroundColor: '#ebe1e6',
                        borderRadius: 10,
                      }}>
                      Skin Specialist
                    </Text>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: 600,
                        marginTop: 10,
                        alignSelf: 'center',
                        color: index / 2 == 0 ? 'green' : 'red',
                        opacity: index / 2 == 0 ? 1 : 0.5,
                        padding: 5,
                        backgroundColor: '#ebe1e6',
                        borderRadius: 10,
                      }}>
                      {index / 2 == 0 ? 'Available' : 'Busy'}
                    </Text>

                    <Button
                      index={index}
                      txt={'Book Appointment'}
                      w={150}
                      h={30}
                      onClick={() => {
                        if (index / 2 == 0) {
                          navigation.navigate('BookAppointment');
                        }
                      }}
                    />
                  </View>
                );
              }}
            />
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          width: '90%',
          height: 60,
          borderRadius: 10,
          elevation: 5,
          position: 'absolute',
          bottom: 20,
          backgroundColor: '#fff',
          alignSelf: 'center',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Completed');
          }}>
          <Image
            source={require('../images/completed.png')}
            style={{width: 30, height: 30}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Pending');
          }}>
          <Image
            source={require('../images/pending.png')}
            style={{width: 30, height: 30}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('CallAmb');
          }}>
          <Image
            source={require('../images/ambulance.png')}
            style={{width: 30, height: 30}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
