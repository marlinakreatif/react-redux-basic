import React, { Component } from "react";
import { connect } from "react-redux";
import { ambilData, chooseProduct } from "../action/product";

class ListProduct extends Component {
  componentDidMount() {
    this.props.ambilData();
  }

  renderListProduct = () => {
    return this.props.listProduct.map((product, index) => {
      return (
        <div
          className="col-4"
          key={product.id}
          onClick={() => this.props.chooseProduct(product)}
        >
          <div className="card">
            <div className="card-header">{product.productName}</div>
            <div className="card-body">
              <p>Price : Rp. {product.price},-</p>
            </div>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="row">
        <div className="col-12">
          <hr />
          <h4>List Product</h4>
          <hr />
        </div>
        {this.renderListProduct()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    listProduct: state.listProduct,
  };
};

export default connect(mapStateToProps, { ambilData, chooseProduct })(
  ListProduct
);
