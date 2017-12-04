import React, { Component } from 'react';

import ProductRow from './ProductRow';

class ProductCategoryRow extends Component {
  render() {
    const {cateories} = this.props;
    return (      
      <i>
        <tr>
          <td>
            {cateories.category}
          </td>
        </tr>  
        {
          cateories.products.map((product, i) => (
            <ProductRow product={product} key={i} />
          ))
        }              
      </i>
    );
  }
}

export default ProductCategoryRow;
