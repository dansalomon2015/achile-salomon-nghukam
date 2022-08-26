import React, { Component } from "react";
import { Navbar, ProductList } from "../../components";
import { connect } from "react-redux";
import Loader from "../../components/Navbar/Loader";

class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Loader />
                <ProductList />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { currencies: state.mystore.currencies };
};

export default connect(mapStateToProps)(Home);
