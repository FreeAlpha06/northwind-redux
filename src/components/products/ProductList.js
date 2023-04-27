import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as productActions from '../../redux/actions/productActions';



class ProductList extends Component {

    componentDidMount() {
        this.props.actions.getProducts();
    }
    render() {
        return (
            <>
                <div>
                    <h3>Product List == {this.props.currentCategory.categoryName}</h3>
                </div>
                <div className="mt-4">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Product Name</th>
                                <th scope="col">Quantity Per Unit</th>
                                <th scope="col">Unit Price</th>
                                <th scope="col">Unit In Stock</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.products.map(product => (
                                <tr key={product.id}>
                                    <th scope="row">{product.id}</th>
                                    <td>{product.productName}</td>
                                    <td>{product.unitPrice}</td>
                                    <td>{product.quantityPerUnit}</td>
                                    <td>{product.unitsInStock}</td>
                                    {/* <td><button onClick={() => this.props.addToCart(product)} type="button" className="btn btn-outline-success">Add to Cart </button></td> */}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div >
            </>
        )
    }
}

function mapStateToProps(state) {
    return {
        currentCategory: state.changeCategoryReducer,
        products: state.productListReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            getProducts: bindActionCreators(productActions.getProducts, dispatch),
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);