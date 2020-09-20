import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ambilData, chooseProduct } from "../action";

class ListProduct extends Component {
    componentDidMount() {
        this.props.ambilData();
    }

    renderListProduct = () => {
        return this.props.listProduct.map((product, index) => {
            return (
                <div key={product.id} onClick={() => this.props.chooseProduct(product)}>
                    <h3>{product.productName}</h3>
                    <p><small>Price : Rp. {product.price},-</small></p>
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                <h4>List Product</h4>
                {this.renderListProduct()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        listProduct: state.listProduct
    }
}


export default connect(mapStateToProps, { ambilData, chooseProduct })(ListProduct);
