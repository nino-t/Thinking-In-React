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
              price: 49.99,
              outStock: false
            },
            {
              name: 'Baseball',
              price: 9.99,
              outStock: false
            },
            {
              name: 'Basketball',
              price: 29.99,
              outStock: true
            }            
          ]
        },
        {
          category: 'Electronics',
          products: [
            {
              name: 'IPod Touch',
              price: 99.99,
              outStock: false
            },
            {
              name: 'IPhone 5',
              price: 399.99,
              outStock: true
            },
            {
              name: 'Nexus 7',
              price: 199.99,
              outStock: false
            },
          ]          
        }
      ],
      keyword: '',
      inStock: false
    }    

    this.handleSearch = this.handleSearch.bind(this);
    this.handleInStock = this.handleInStock.bind(this);    
  }

  handleInStock(checked){
    const keyword = this.state.keyword;
    const product_categories = JSON.parse(localStorage.getItem('product_categories'));

    var queryObject = '';
    var queryResult = [];
    product_categories.forEach((categories) => {      
      var products = [];          
      categories.products.forEach((product) => {
        if (checked) {
          if (product.outStock === false && product.name.toLowerCase().indexOf(keyword) !== -1) {
            products.push(product);
          }          
        }else{
          if (product.name.toLowerCase().indexOf(keyword) !== -1) {
           products.push(product);
          }
        }
      });

      if (products.length > 0) {
        queryObject = {'category': categories.category, 'products': products};
        queryResult.push(queryObject);
      }
    });    

    this.setState({
      product_categories: queryResult,
      inStock: checked
    });    
  }

  handleSearch(keyword){
    const inStock = this.state.inStock;
    const product_categories = JSON.parse(localStorage.getItem('product_categories'));

    var queryObject = '';
    var queryResult = [];
    product_categories.forEach((categories) => {      
      var products = [];          
      categories.products.forEach((product) => {
        if(product.name.toLowerCase().indexOf(keyword) !== -1)          
          if (inStock) {
            if (product.outStock === false) {
              products.push(product);
            }
          }else{
            products.push(product);
          }          
      });

      if (products.length > 0) {
        queryObject = {'category': categories.category, 'products': products};
        queryResult.push(queryObject);
      }
    });    

    this.setState({
      product_categories: queryResult,
      keyword: keyword
    });    
  }

  componentWillMount(){
    localStorage.setItem('product_categories', JSON.stringify(this.state.product_categories));
  }

  render() {
    const { product_categories } = this.state;
    return (
      <div className="container">
        <SearchBar keyword={this.handleSearch} inStock={this.handleInStock} />
        <ProductTable product_categories={product_categories} />
      </div>
    );
  }
}

export default App;
