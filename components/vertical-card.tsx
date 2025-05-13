/* eslint-disable react-native/no-inline-styles */
import {Image, Pressable, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

export const VerticalCard = () => {
  return (
    <View style={{padding: 20, borderRadius: 10, backgroundColor: '#fff',width: 200}}>
      <Image
        source={require('../assets/hood.png')}
        resizeMode="cover"
        style={{width: '100%', height: 130, borderRadius: 10}}
      />
      <View style={{marginTop: 20}}>
        <Text>drawstring hoodie</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text>Vertical Card</Text>
          <Pressable
            style={{
              width: 30,
              height: 30,
              alignItems: 'center',
              backgroundColor: '#000',
              padding: 8,
              borderRadius: 100,
            }}>
            <Icon name={'plus'} size={14} color={'#fff'} />
          </Pressable>
        </View>
      </View>
    </View>
  );
};
