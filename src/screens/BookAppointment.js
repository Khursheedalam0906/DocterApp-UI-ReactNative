import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../components/Header';
import Button from '../components/Button';

let DaysList = [];

const BookAppointment = ({navigation}) => {
  const [selectedSlot, setSelectedSlot] = useState(-1);
  const [selectedGender, setSelectedGender] = useState(0);
  const [selectedDay, setSelectedDay] = useState(-1);
  const [slots, setSlots] = useState([
    {sloT: '10:00 - 12:00PM', selected: false},
    {sloT: '12:00 - 02:00PM', selected: false},
    {sloT: '02:00 - 04:00PM', selected: false},
    {sloT: '04:00 - 06:00PM', selected: false},
    {sloT: '06:00 - 08:00PM', selected: false},
    {sloT: '08:00 - 10:00PM', selected: false},
  ]);
  const [days, setDays] = useState([]);

  useEffect(() => {
    DaysList = [];
    for (let i = 1; i <= getDays(new Date().getMonth() + 1); i++) {
      DaysList.push({day: i, selected: false});
    }
    setDays(DaysList);
  }, []);
  const getDays = month => {
    let days = 0;
    if (month == 1) {
      days = 31;
    } else if (month == 2) {
      days = 28;
    } else if (month == 3) {
      days = 31;
    } else if (month == 4) {
      days = 30;
    } else if (month == 5) {
      days = 30;
    } else if (month == 6) {
      days = 30;
    } else if (month == 7) {
      days = 31;
    } else if (month == 8) {
      days = 31;
    } else if (month == 9) {
      days = 30;
    } else if (month == 10) {
      days = 31;
    } else if (month == 11) {
      days = 30;
    } else if (month == 12) {
      days = 31;
    }
    return days;
  };
  return (
    <View style={{flex: 1}}>
      <Header
        icon={require('../images/back.png')}
        title={'Book Appointment'}
        onpressIcon={() => {
          navigation.goBack();
        }}
      />
      <ScrollView style={{flex: 1}}>
        <Image
          source={require('../images/doctor.png')}
          style={{width: 80, height: 80, alignSelf: 'center', marginTop: 40}}
        />
        <Text
          style={{
            fontSize: 16,
            fontWeight: 700,
            textAlign: 'center',
            marginTop: 15,
            color: '#262626',
          }}>
          Dr. Anurag Kashyap
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 700,
            textAlign: 'center',
            marginTop: 10,
            color: '#262626',
          }}>
          Skin Doctor
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 700,
            marginLeft: 10,
            marginTop: 10,
            color: '#262626',
          }}>
          Select Date
        </Text>
        <View>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={days}
            keyExtractor={({item, index}) => index}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  style={{
                    width: 60,
                    height: 70,
                    borderRadius: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: selectedDay == index ? 'blue' : 'white',
                    borderWidth: selectedDay == index ? 0 : 1,
                    marginVertical: 10,
                    marginHorizontal: 10,
                  }}
                  onPress={() => {
                    if (item.day < new Date().getDate()) {
                    } else {
                      setSelectedDay(index);
                    }
                  }}>
                  <Text style={{color: selectedDay == index ? '#fff' : 'blue'}}>
                    {item.day}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 700,
            marginLeft: 10,
            marginTop: 10,
            color: '#262626',
          }}>
          Available Slots
        </Text>
        <View>
          <FlatList
            numColumns={2}
            data={[
              '10:00AM - 12:00PM',
              '12:00PM - 02:00PM',
              '03:00PM - 05:00PM',
              '05:00PM - 08:00PM',
              '08:00PM - 10:00PM',
            ]}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  style={{
                    width: '45%',
                    borderWidth: 0.5,
                    padding: 8,
                    borderRadius: 5,
                    margin: 10,
                    borderColor: selectedSlot == index ? 'blue' : 'black',
                  }}
                  onPress={() => {
                    setSelectedSlot(index);
                  }}>
                  <Text
                    style={{
                      fontSize: 16,
                      textAlign: 'center',
                      color: selectedSlot == index ? 'blue' : 'black',
                    }}>
                    {item}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <Text
          style={{
            fontSize: 18,
            marginLeft: 10,
            fontWeight: 'bold',
            color: 'black',
          }}>
          Patient Name
        </Text>
        <TextInput
          style={{
            borderWidth: 0.5,
            borderRadius: 5,
            marginTop: 10,
            width: '95%',
            height: 45,
            paddingLeft: 20,
            marginLeft: 10,
            color: '#404040',
          }}
          placeholder="Enter Name"
          placeholderTextColor={'gray'}
        />
        <Text
          style={{
            fontSize: 18,
            marginLeft: 10,
            fontWeight: 'bold',
            color: 'black',
            marginTop: 10,
          }}>
          Select Gender
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginTop: 20,
            marginBottom: 20,
          }}>
          <TouchableOpacity
            style={{
              padding: 10,
              borderWidth: 1,
              borderRadius: 5,
              borderColor: selectedGender == 0 ? 'blue' : 'black',
            }}
            onPress={() => {
              setSelectedGender(0);
            }}>
            <Image
              source={require('../images/male.png')}
              style={{width: 40, height: 40}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              padding: 10,
              borderWidth: 1,
              borderRadius: 5,
              borderColor: selectedGender == 1 ? 'blue' : 'black',
            }}
            onPress={() => {
              setSelectedGender(1);
            }}>
            <Image
              source={require('../images/female.png')}
              style={{width: 40, height: 40}}
            />
          </TouchableOpacity>
        </View>
        <Button
          w={220}
          h={45}
          txt={'Book Now'}
          index={0}
          onClick={() => {
            navigation.navigate('Success');
          }}
        />
      </ScrollView>
    </View>
  );
};

export default BookAppointment;
