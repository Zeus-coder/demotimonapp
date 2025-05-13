/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, SafeAreaView, ScrollView, Dimensions} from 'react-native';
import LottieView from 'lottie-react-native';

const { width } = Dimensions.get('window');

const ProfileScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#F5F9FD', padding: 20}}>
      <ScrollView
        contentContainerStyle={{flexGrow: 1, justifyContent: 'center', alignItems: 'center'}}
        showsVerticalScrollIndicator={false}
      >
        <LottieView
          source={require('../assets/building-progress.json')}
          autoPlay
          loop
          style={{
            width: width * 0.8,
            height: width * 0.8,
          }}
        />
        <Text style={{fontSize: 18, fontWeight: '600', marginTop: 20}}>
          Building in Progress...
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
