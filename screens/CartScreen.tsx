/* eslint-disable react-native/no-inline-styles */
import {ScrollView, Text, TouchableOpacity} from 'react-native';
import {SafeAreaView, View} from 'react-native';
import {ProductCard} from '../components/product-card';
import {Input} from '../components/input';
import { useNavigation } from '@react-navigation/native';

const CartScreen = () => {
  const navigation = useNavigation<any>();
  const orderAmount = 138.0;
  const tax = 10.0;
  const total = orderAmount + tax;
  const itemCount = 3;

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#F5F9FD', padding: 20}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          {Array(3)
            .fill(0)
            .map((_, index) => (
              <View key={index} style={{marginRight: 20}}>
                <ProductCard />
              </View>
            ))}
        </View>
        <View style={{marginVertical: 20, gap: 10}}>
          <Input
            placeholder={'Promo Code'}
            searchIcon={false}
            inputButton={true}
            style={{flex: 1}}
            onChangeText={() => {}}
          />
        </View>
        <View style={{padding: 20, backgroundColor: '#F9FAFB', flex: 1}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 12,
              paddingVertical: 10,
            }}>
            <Text style={{fontWeight: '600', fontSize: 16}}>Order Amount</Text>
            <Text style={{fontSize: 16}}>${orderAmount.toFixed(2)}</Text>
          </View>

          <View
            style={{
              borderBottomWidth: 1,
              borderStyle: 'dashed',
              borderBottomColor: '#E5E7EB',
              marginBottom: 12,
            }}
          />

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 12,
              paddingVertical: 10,
            }}>
            <Text style={{fontWeight: '600', fontSize: 16}}>Tax</Text>
            <Text style={{fontSize: 16}}>${tax.toFixed(2)}</Text>
          </View>

          <View
            style={{
              borderBottomWidth: 1,
              borderStyle: 'dashed',
              borderBottomColor: '#E5E7EB',
              marginBottom: 12,
            }}
          />

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 20,
              paddingVertical: 10,
            }}>
            <Text style={{fontWeight: '600', fontSize: 16}}>
              Total Payment
              <Text style={{fontWeight: '400', fontSize: 12, color: '#6B7280'}}>
                ({itemCount} items)
              </Text>
            </Text>
            <Text style={{fontSize: 18, fontWeight: '700'}}>
              ${total.toFixed(2)}
            </Text>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity
      onPress={() => {
        navigation.navigate('CheckOutOrder');
      }}
        style={{
          backgroundColor: '#111827',
          paddingVertical: 18,
          borderRadius: 14,
          alignItems: 'center',
        }}>
        <Text style={{color: '#FFFFFF', fontSize: 16, fontWeight: '600'}}>
          Proceed To Checkout
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default CartScreen;
