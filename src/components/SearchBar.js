import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);  

    this.handleChangeSearch = this.handleChangeSearch.bind(this);
    this.handleInStock = this.handleInStock.bind(this);    
  }

  handleChangeSearch(event){
    const keyword = event.target.value;
    this.props.keyword(keyword);
  }

  handleInStock(event){
    const checked = event.target.checked;
    this.props.inStock(checked);
  }  

  render() {
    return (
      <div className="container search-container">
        <div className="area-search">
          <input type="text" placeholder="Search product..." onChange={this.handleChangeSearch} />
        </div>
        <div>
          <input type="checkbox" onChange={this.handleInStock} /> Only show products in stock
        </div>        
      </div>
    );
  }
}

export default SearchBar;
