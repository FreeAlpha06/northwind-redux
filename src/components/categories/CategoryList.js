import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as categoryActions from '../../redux/actions/categoryActions';
import * as productActions from '../../redux/actions/productActions';

import 'bootstrap';

class CategoryList extends Component {

    componentDidMount() {
        {
            this.props.actions.getCategories();
        }
    }
    selectCategory = (category) => {
        this.props.actions.changeCategory(category);
        this.props.actions.getProducts(category.id);

    };

    render() {
        return (
            <div className="mt-4">
                <h5> {() => this.props.currentCategory.categoryName}</h5>
                <ul >
                    {this.props.categories?.map(category => (
                        <li className='border mt-2'
                            onClick={() => this.selectCategory(category)}
                            key={category.id}>
                            {category.categoryName}
                        </li>

                    ))}
                </ul>
                {/* <h5 >{this.props.currentCategory.categoryName}
                </h5> */}

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        currentCategory: state.changeCategoryReducer,
        categories: state.categoryListReducer,
    }
}


function mapDispatchToProps(dispatch) {
    return {
        actions: {
            getCategories: bindActionCreators(categoryActions.getCategories, dispatch),
            changeCategory: bindActionCreators(categoryActions.changeCategory, dispatch),
            getProducts: bindActionCreators(productActions.getProducts, dispatch)

        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);