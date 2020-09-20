import React from 'react'
import { connect } from "react-redux";

function DetailProduct({ product }) {
    if (!product) {
        return (
            <div>
                <hr />
                <h4>Choosen Product</h4>
                <hr />
                <p>Please Select Product</p>
            </div>
        )
    }

    return (
        <div>
            <hr />
            <h4>Choosen Product</h4>
            <hr />
            <p><strong>{product.productName}</strong>- <small>Rp. {product.price}</small></p>
        </div>
    )
}
const mapStateToProps = (state) => {
    return { product: state.choosenProduct }
}



export default connect(mapStateToProps)(DetailProduct);
