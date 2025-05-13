/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CartScreen from '../screens/CartScreen';
import CheckOutOrder from '../screens/CheckOutOrder';
import {Pressable, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const BackButton = () => {
  const navigation = useNavigation<any>();
  return (
    <Pressable onPress={() => navigation.goBack()}>
      <Icon name={'chevron-left'} size={24} color={'#000'} />
    </Pressable>
  );
};

const NotificationButton = () => {
  return (
    <Pressable
      style={{
        backgroundColor: 'white',
        padding: 10,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        borderRadius: 100,
        position: 'relative',
      }}>
      <Feather name={'bell'} size={20} color={'#000'} />
      <View
        style={{
          position: 'absolute',
          top: 3,
          right: 5,
          backgroundColor: 'black',
          borderRadius: 100,
          width: 15,
          height: 15,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 8, color: '#fff'}}>2</Text>
      </View>
    </Pressable>
  );
};

export default function CartNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Cart"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#F5F9FD',
        },
        headerTitleAlign: 'center',
        headerShadowVisible: false,
      }}>
      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={{
          title: 'Cart',
          headerLeft: () => BackButton(),
        }}
      />
      <Stack.Screen
        name="CheckOutOrder"
        component={CheckOutOrder}
        options={{
          title: 'Order',
          headerLeft: () => BackButton(),
          headerRight: () => NotificationButton(),
        }}
      />
    </Stack.Navigator>
  );
}
