import React, { Component } from "react";
import { Images } from "../../assets";
import ErrorBoundary from "../ErrorBoundary";
import CartIcon from "./CartIcon";
import DropDownCurrencies from "./DropDownCurrencies";
import {
    Container,
    Wrapper,
    Menu,
    LogoContainer,
    Actions,
    MenuItem,
    MenuItemTitle,
    DropDownHandler,
} from "./Navbar.style";

export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdownVisible: false,
        };

        this.DropDownCurrenciesRef = React.createRef();
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    toggleCurrencyDialog() {
        this.setState({ dropdownVisible: !this.state.dropdownVisible });
    }

    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClickOutside);
    }

    /**
     * Hide the currency dialog box if clicked on outside of element
     */
    handleClickOutside(event) {
        if (this.DropDownCurrenciesRef.current)
            if (!this.DropDownCurrenciesRef.current.contains(event.target)) {
                this.toggleCurrencyDialog();
            }
    }

    render() {
        return (
            <Container>
                <Wrapper>
                    <Menu>
                        <MenuItem active>
                            <MenuItemTitle active>WOMEN</MenuItemTitle>
                        </MenuItem>
                        <MenuItem>
                            <MenuItemTitle>MEN</MenuItemTitle>
                        </MenuItem>
                        <MenuItem>
                            <MenuItemTitle>KIDS</MenuItemTitle>
                        </MenuItem>
                    </Menu>
                    <LogoContainer>
                        <img src={Images.Logo} alt="logo" />
                    </LogoContainer>
                    <Actions>
                        <DropDownHandler
                            onClick={() => this.toggleCurrencyDialog()}
                            dropdownVisible={this.state.dropdownVisible}
                        >
                            $
                        </DropDownHandler>
                        <CartIcon count={0} />
                    </Actions>
                </Wrapper>
                <ErrorBoundary message="An error occurs with the currency list">
                    {this.state.dropdownVisible && <DropDownCurrencies innerRef={this.DropDownCurrenciesRef} />}
                </ErrorBoundary>
            </Container>
        );
    }
}
