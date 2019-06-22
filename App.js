import React, { Component } from 'react';
import { View } from 'react-native';
import Header from './src/components/Header';
import ProductList from './src/components/ProductList';

export default class App extends Component {
  render() {
    return (
      <View>
        <Header headerText={'Products'} />
        <ProductList />
      </View>
    );
  }
}
