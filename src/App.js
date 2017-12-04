import React, { Component } from 'react';
import './App.css';

import SearchBar from './components/SearchBar';
import ProductTable from './components/ProductTable';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product_categories: [
        {
          category: 'Sporting Goods',
          products: [
            {
              name: 'Football',
              price: '$ 49.99',
              outStock: false
            },
            {
              name: 'Baseball',
              price: '$ 9.99',
              outStock: false
            },
            {
              name: 'Basketball',
              price: '$ 29.99',
              outStock: true
            }            
          ]
        },
        {
          category: 'Electronics',
          products: [
            {
              name: 'IPod Touch',
              price: '$ 99.99',
              outStock: false
            },
            {
              name: 'IPhone 5',
              price: '$ 399.99',
              outStock: true
            },
            {
              name: 'Nexus 7',
              price: '$ 199.99',
              outStock: false
            },
          ]          
        }
      ]
    }    
  }
  render() {
    const { product_categories } = this.state;
    return (
      <div className="container">
        <SearchBar />
        <ProductTable product_categories={product_categories} />
      </div>
    );
  }
}

export default App;
