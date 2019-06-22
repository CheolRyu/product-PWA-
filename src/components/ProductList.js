import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import ProductDetail from './ProductDetail';

export default class ProductList extends Component {
  state = { products: [] };
  componentWillMount() {
    axios
      .get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(res => this.setState({ products: res.data }));
  }
  renderProducts() {
    return this.state.products.map(product => (
      <ProductDetail key={product.title} product={product} />
    ));
  }

  render() {
    return <View>{this.renderProducts()}</View>;
  }
}
