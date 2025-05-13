/* eslint-disable react-native/no-inline-styles */
import {Image, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

export const HorizontalCard = () => {
  return (
    <View
      style={{
        padding: 20,
        flexDirection: 'row',
        gap: 20,
        borderRadius: 10,
        backgroundColor: '#fff',
        justifyContent:'space-between',
        width: 260,
      }}>
      <Image
        source={require('../assets/hood.png')}
        resizeMode="cover"
        style={{width: 90, height: 90, borderRadius: 10}}
      />
      <View style={{marginTop: 20 ,justifyContent:'space-between'}}>
        <Text>drawstring hoodie</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text>Vertical Card</Text>
          <Icon name={'heart'} size={14} color={'#000'} />
        </View>
      </View>
    </View>
  );
};
