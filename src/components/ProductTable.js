import React, { Component } from 'react';

import ProductCategoryRow from './ProductCategoryRow';

class ProductTable extends Component {
	render() {
		const product_categories = this.props.product_categories;
		return (
		  <div className="container product-table-container">
		  	<div className="table-container">
		  		<ul className="table-thead">
		  			<li><a href="#">Name</a></li>
		  			<li><a href="#">Price ($)</a></li>
		  		</ul>		  		
		  		<ul className="table-tbody">
		  			{
		  				product_categories.map((cateories, index) => (
		  					<ProductCategoryRow cateories={cateories} key={index} />
		  				))
		  			}		  				  			
		  		</ul>
		  	</div>
		  </div>
		);
	}
}

export default ProductTable;
