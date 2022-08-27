import React, { Component } from "react";

export class Cart extends Component {
    componentDidMount() {
        console.log(window.location.pathname);
    }
    render() {
        return <div>Cart</div>;
    }
}
