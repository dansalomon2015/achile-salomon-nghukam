import React, { PureComponent } from "react";

export default class ErrorBoundary extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
        };
    }

    static getDerivedStateFromError() {
        return {
            hasError: true,
        };
    }

    componentDidCatch(error, info) {
        console.log(error);
        console.log(info);
    }

    render() {
        let { message } = this.props;
        if (this.state.hasError) return <h4>{message}</h4>;
        return this.props.children;
    }
}
