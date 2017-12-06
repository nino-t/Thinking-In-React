import React, { Component } from 'react';

import ProductRow from './ProductRow';

class ProductCategoryRow extends Component {
  render() {
    const {cateories} = this.props;
    return (      
        <div>
          <li className="categories"># {cateories.category}</li>
          <ul className="products">
            {
              cateories.products.map((product, i) => (
                <ProductRow product={product} key={i} />
              ))
            }              
          </ul>
        </div>
    );
  }
}

export default ProductCategoryRow;
