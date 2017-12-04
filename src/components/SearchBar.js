import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <div className="container search-container">
        <div className="area-search">
          <input type="text" placeholder="Search product..." />
        </div>
        <div>
          <input type="checkbox" /> Only show products in stock
        </div>        
      </div>
    );
  }
}

export default SearchBar;
