/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

export const ProductCard = () => {
  const [quantity, setQuantity] = useState(1);

  const increaseQty = () => setQuantity(prev => Math.min(prev + 1, 99));
  const decreaseQty = () => setQuantity(prev => Math.max(prev - 1, 1));

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 12,
        margin: 10,
        gap: 4,
      }}
    >
      <Image
        source={{ uri: 'https://via.placeholder.com/60' }} // Replace with actual image URL
        style={{
          width: 60,
          height: 60,
          borderRadius: 12,
          marginRight: 12,
          backgroundColor: '#D1D5DB',
        }}
      />
      <View style={{ flex: 1 }}>
        <Text
          style={{
            fontWeight: '600',
            fontSize: 16,
            marginBottom: 2,
          }}
        >
          Drawstring hoodi
        </Text>
        <Text
          style={{
            color: '#6B7280',
            fontSize: 12,
            marginBottom: 4,
          }}
        >
          25/43
        </Text>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 16,
          }}
        >
          $50.00
        </Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TouchableOpacity
          onPress={decreaseQty}
          style={{
            width: 28,
            height: 28,
            borderRadius: 14,
            borderWidth: 1,
            borderColor: '#D1D5DB',
            alignItems: 'center',
            justifyContent: 'center',
            marginHorizontal: 6,
          }}
        >
          <Text style={{ fontSize: 18, color: '#111827' }}>−</Text>
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '500',
            minWidth: 20,
            textAlign: 'center',
          }}
        >
          {String(quantity).padStart(2, '0')}
        </Text>
        <TouchableOpacity
          onPress={increaseQty}
          style={{
            width: 28,
            height: 28,
            borderRadius: 14,
            backgroundColor: '#111827',
            alignItems: 'center',
            justifyContent: 'center',
            marginHorizontal: 6,
          }}
        >
          <Text style={{ fontSize: 18, color: '#FFFFFF' }}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

