import React from 'react';
import { View, Text } from 'react-native';
import Card from './Card';

const ProductDetail = ({ product }) => {
  console.warn(product);
  const { title } = product;
  return (
    <Card>
      <View>
        <Text>{title}</Text>
      </View>
    </Card>
  );
};

export default ProductDetail;
