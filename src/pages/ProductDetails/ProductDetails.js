import React, { Component } from "react";
import { Navbar } from "../../components";

export default class ProductDetails extends Component {
    componentDidMount() {
        console.log(this.props.params);
    }

    render() {
        return (
            <div>
                <Navbar />
            </div>
        );
    }
}
