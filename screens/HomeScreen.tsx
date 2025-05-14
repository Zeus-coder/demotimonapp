/* eslint-disable react-native/no-inline-styles */
import {SafeAreaView, Text, View} from 'react-native';
import {Input} from '../components/input';
import {Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {VerticalCard} from '../components/vertical-card';
import {ScrollView} from 'react-native';
import {HorizontalCard} from '../components/horizontal-card';
const HomeScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#F5F9FD'}}>
      <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1,padding: 20}}>
        <Text style={{fontSize: 28, fontWeight: 'bold'}}>Discover</Text>
        <Text style={{fontSize: 28, fontWeight: 'bold'}}>our new items</Text>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 20,
            marginVertical: 20,
          }}>
          <Input
            placeholder={'Search'}
            searchIcon={true}
            inputButton={false}
            style={{flex: 1}}
            onChangeText={() => {}}
          />
          <Pressable
            style={{
              backgroundColor: '#000',
              padding: 10,
              height: 58,
              width: 58,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
            }}>
            <Icon name={'options'} size={24} color={'#fff'} />
          </Pressable>
        </View>

        <View style={{marginVertical: 0}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 20,
            }}>
            <Pressable
              style={{
                padding: 8,
                backgroundColor: '#1B1F28',
                borderRadius: 10,
                paddingHorizontal: 30,
              }}>
              <Text style={{color: '#fff'}}>Hoodi</Text>
            </Pressable>
            <Pressable
              style={{
                padding: 8,
                backgroundColor: '#1B1F28',
                borderRadius: 10,
                paddingHorizontal: 30,
              }}>
              <Text style={{color: '#fff'}}>Mens</Text>
            </Pressable>
            <Pressable
              style={{
                padding: 8,
                backgroundColor: '#1B1F28',
                borderRadius: 10,
                paddingHorizontal: 30,
              }}>
              <Text style={{color: '#fff'}}>Womens</Text>
            </Pressable>
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {Array(10)
              .fill(0)
              .map((_, index) => (
                <View key={index} style={{marginRight: 20}}>
                  <VerticalCard />
                </View>
              ))}
          </ScrollView>
          <View style={{marginVertical: 20, gap: 10}}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>
              Popular Products
            </Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              {Array(10)
                .fill(0)
                .map((_, index) => (
                  <View key={index} style={{marginRight: 20}}>
                    <HorizontalCard />
                  </View>
                ))}
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
