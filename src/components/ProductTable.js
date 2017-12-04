import React, { Component } from 'react';

import ProductCategoryRow from './ProductCategoryRow';

class ProductTable extends Component {
	render() {
		const product_categories = this.props.product_categories;
		return (
		  <div className="container product-table-container">
		  	<table border="1" style={{borderCollapse:"collapse"}}>
		  		<thead>
		  			<tr>
		  				<td>Name</td>
		  				<td>Price</td>
		  			</tr>
		  		</thead>
		  		<tbody>
		  			{
		  				product_categories.map((cateories, index) => (
		  					<ProductCategoryRow cateories={cateories} key={index} />
		  				))
		  			}
		  		</tbody>
		  	</table>
		  </div>
		);
	}
}

export default ProductTable;
