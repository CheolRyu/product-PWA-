import React, { Component } from 'react';
import { View } from 'react-native';
import Header from './src/components/Header';
import ProductList from './src/components/ProductList';

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText={'PRODUCTS'} />
        <ProductList />
      </View>
    );
  }
}
