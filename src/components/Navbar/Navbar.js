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
    Mask,
} from "./Navbar.style";
import ShoppingBag from "./ShoppingBag";

export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdownVisible: false,
            shoppingBagVisible: false,
        };

        this.cartIconRef = React.createRef();
        this.shoppingBagRef = React.createRef();
        this.DropDownCurrenciesRef = React.createRef();
        this.DropDownHandlerRef = React.createRef();
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    toggleCurrencyDialogVisibility() {
        this.setState({ dropdownVisible: !this.state.dropdownVisible, shoppingBagVisible: false });
    }

    toggleShoppingBagVisibility() {
        this.setState({ shoppingBagVisible: !this.state.shoppingBagVisible, dropdownVisible: false });
    }

    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClickOutside);
    }

    /**
     * Hide the currency dialog box if clicked on outside of Currency dialog and the dropdown handler
     */
    handleClickOutside(event) {
        if (this.DropDownCurrenciesRef.current)
            if (
                !this.DropDownCurrenciesRef.current.contains(event.target) &&
                !this.DropDownHandlerRef.current.contains(event.target)
            ) {
                this.setState({ dropdownVisible: false });
            }

        if (this.shoppingBagRef.current)
            if (
                !this.shoppingBagRef.current.contains(event.target) &&
                !this.cartIconRef.current.contains(event.target)
            ) {
                this.setState({ shoppingBagVisible: false });
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
                            onClick={() => this.toggleCurrencyDialogVisibility()}
                            dropdownVisible={this.state.dropdownVisible}
                            ref={this.DropDownHandlerRef}
                        >
                            $
                        </DropDownHandler>
                        <CartIcon
                            onClick={() => this.toggleShoppingBagVisibility()}
                            count={0}
                            innerRef={this.cartIconRef}
                        />
                    </Actions>
                </Wrapper>
                <ErrorBoundary message="An error occurs with the currency list">
                    {this.state.dropdownVisible && <DropDownCurrencies innerRef={this.DropDownCurrenciesRef} />}
                </ErrorBoundary>

                <ErrorBoundary message="An error occurs wuth the shooping bag">
                    {this.state.shoppingBagVisible && <ShoppingBag innerRef={this.shoppingBagRef} />}
                </ErrorBoundary>

                {this.state.shoppingBagVisible && <Mask />}
            </Container>
        );
    }
}
