/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  SafeAreaView,
  Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

const CheckOutOrder = () => {
  const [selectedMethod, setSelectedMethod] = useState('MasterCard');

  const paymentMethods = [
    {id: 'GPay', image: require('../assets/gpay.png')},
    {id: 'MasterCard', image: require('../assets/mastercard.png')},
    {id: 'Visa', image: require('../assets/visa.png')},
    {id: 'Payoneer', image: require('../assets/payoneer.png')},
    // {id: 'Add', image: require('./assets/plus.png')},
  ];

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#F5F9FD'}}>
      <ScrollView style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Credit Card</Text>
          <Text style={styles.cardNumber}>3541 5575402 33006</Text>
          <View style={styles.cardFooter}>
            <Text style={styles.cardName}>Ashik Mia</Text>
            <Image
              source={require('../assets/mastercard.png')}
              style={styles.cardLogo}
            />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Address</Text>
          <View style={styles.addressBox}>
            <View style={{maxWidth: '70%'}}>
              <Text style={styles.addressName}>Ashik Mia</Text>
              <Text>Sylet City Residence B -15 Lakhai 675538</Text>
            </View>
            <TouchableOpacity style={styles.changeBtn}>
              <Text style={styles.changeText}>Change Address</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Payment Method</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View style={styles.paymentRow}>
              {paymentMethods.map(method => (
                <TouchableOpacity
                  key={method.id}
                  style={[
                    styles.paymentMethod,
                    selectedMethod === method.id && styles.selectedPayment,
                  ]}
                  onPress={() => setSelectedMethod(method.id)}>
                  <Image source={method.image} style={styles.paymentIcon} />
                </TouchableOpacity>
              ))}
            </View>
            <Pressable
              style={{
                width: 30,
                height: 30,
                alignItems: 'center',
                borderWidth: 1,
                borderRadius: 100,
                justifyContent: 'center',
                borderColor: 'lightgrey',
              }}>
              <Icon name={'plus'} size={20} color={'#000'} />
            </Pressable>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Shipping to</Text>
          <View style={styles.shippingBox}>
            <Text>Shylet</Text>
          </View>
        </View>

        <View style={styles.totalBox}>
          <Text style={styles.totalText}>Total Payment</Text>
          <Text style={styles.totalAmount}>$148.00</Text>
        </View>
      </ScrollView>
      <View style={{padding: 20}}>
        <TouchableOpacity style={styles.confirmButton}>
          <Text style={styles.confirmText}>Confirm Order</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CheckOutOrder;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f8f9fd',
    flex: 1,
  },
  card: {
    backgroundColor: '#1f1f23',
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
  },
  cardTitle: {
    color: '#ccc',
    fontSize: 16,
    marginBottom: 10,
  },
  cardNumber: {
    color: '#fff',
    fontSize: 20,
    letterSpacing: 2,
    marginBottom: 10,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardName: {
    color: '#fff',
    fontSize: 16,
  },
  cardLogo: {
    width: 40,
    height: 24,
    resizeMode: 'contain',
  },
  section: {
    marginBottom: 20,
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  addressBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
  },
  addressName: {
    fontWeight: '600',
    marginBottom: 4,
  },
  changeBtn: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 5,
    backgroundColor: '#eee',
  },
  changeText: {
    color: '#555',
    fontSize: 10,
  },
  paymentRow: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  paymentMethod: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  selectedPayment: {
    borderColor: '#000',
    borderWidth: 2,
  },
  paymentIcon: {
    width: 40,
    height: 25,
    resizeMode: 'contain',
  },
  shippingBox: {
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    width: 100,
    alignItems: 'center',
  },
  totalBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginTop: 20,
  },
  totalText: {
    fontSize: 16,
    fontWeight: '600',
  },
  totalAmount: {
    fontSize: 16,
    fontWeight: '600',
  },
  confirmButton: {
    marginTop: 20,
    backgroundColor: '#1f1f23',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  confirmText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
