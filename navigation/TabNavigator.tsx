/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Icon from 'react-native-vector-icons/Entypo';
import {Image, Pressable} from 'react-native';
import CartNavigator from './CartNavigation';
const HomeIcon = ({focused}: {focused: boolean}) => (
  <Icon
    name={'home'}
    size={focused ? 28 : 24}
    color={focused ? '#fff' : '#aaa'}
  />
);
const CartIcon = ({focused}: {focused: boolean}) => (
  <Icon
    name={'shopping-cart'}
    size={focused ? 28 : 24}
    color={focused ? '#fff' : '#aaa'}
  />
);
const FavoriteIcon = ({focused}: {focused: boolean}) => (
  <Icon
    name={'heart'}
    size={focused ? 28 : 24}
    color={focused ? '#fff' : '#aaa'}
  />
);
const ProfileIcon = ({focused}: {focused: boolean}) => (
  <Icon
    name={'user'}
    size={focused ? 28 : 24}
    color={focused ? '#fff' : '#aaa'}
  />
);

const HomeHeaderLeft = () => <Icon name={'menu'} size={24} color={'#000'} />;
const HomeHeaderRight = () => (
  <Image
    source={require('../assets/user.png')}
    style={{width: 30, height: 30}}
  />
);
const BackButton = () => {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.goBack()}>
      <Icon name={'chevron-left'} size={24} color={'#000'} />
    </Pressable>
  );
};
const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        headerLeftContainerStyle: {paddingLeft: 20},
        headerRightContainerStyle: {paddingRight: 20},
        headerStyle: {
          backgroundColor: '#F5F9FD',
        },
        tabBarStyle: {
          backgroundColor: '#000',
          borderRadius: 20,
          height: 70,
          paddingTop: 14,
          marginBottom: 30,
          marginHorizontal: 40,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => HomeIcon({focused}),
          title: '',
          headerShadowVisible: false,
          headerLeft: () => HomeHeaderLeft(),
          headerRight: () => HomeHeaderRight(),
        }}
      />
      <Tab.Screen
      initialParams={{screen: 'Cart'}}
        name="Cart"
        component={CartNavigator}
        options={{
          headerShown: false, 
          tabBarIcon: ({focused}) => CartIcon({focused}),
          title: '',
          headerTitle:'Cart',
          headerTitleAlign:'center',
          headerShadowVisible: false,
          tabBarStyle: { display: 'none' },
          headerLeft: () => BackButton(),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          tabBarIcon: ({focused}) => FavoriteIcon({focused}),
          title: '',
          headerShadowVisible: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => ProfileIcon({focused}),
          title: '',
          headerShadowVisible: false,
        }}
      />
    </Tab.Navigator>
  );
}
