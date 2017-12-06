import React, { Component } from 'react';

class ProductRow extends Component {
  render() {
    const {product} = this.props;
    return (
    	<li>      
	    	<ul className={'item ' + (product.outStock ? 'habis': '')}>
	    		<li>{product.name}</li>
	    		<li>{product.price}</li>
	    	</ul>
    	</li>      
    );
  }
}

export default ProductRow;
