import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Images } from "../../assets";
import { selectCategory } from "../../store";
import ErrorBoundary from "../ErrorBoundary";
import CartIcon from "./CartIcon";
import DropDownHandler from "./DropDownHandler";
import { Container, Wrapper, Menu, LogoContainer, Actions, MenuItem, MenuItemTitle, Mask } from "./Navbar.style";
import ShoppingBag from "./ShoppingBag";

class Navbar extends PureComponent {
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

    renderNavbarActions = () => {
        return (
            <Actions>
                <DropDownHandler
                    onClick={() => this.toggleCurrencyDialogVisibility()}
                    dropdownVisible={this.state.dropdownVisible}
                    innerRef={this.DropDownHandlerRef}
                    dropDownRef={this.DropDownCurrenciesRef}
                />

                <CartIcon
                    onClick={() => this.toggleShoppingBagVisibility()}
                    count={this.props.cart.length}
                    innerRef={this.cartIconRef}
                />
            </Actions>
        );
    };

    renderMenu = (categories, name) => {
        if (!categories) return null;

        return (
            <>
                <Menu>
                    {categories.map((c, index) => {
                        return (
                            <Link to={`/${c.name}`} key={index}>
                                <MenuItem
                                    active={c.name === name}
                                    onClick={() => {
                                        this.props.dispatch(selectCategory(c));
                                    }}
                                >
                                    <MenuItemTitle active={c.name === name}>{c.name}</MenuItemTitle>
                                </MenuItem>
                            </Link>
                        );
                    })}
                </Menu>
            </>
        );
    };

    render() {
        const { categories, category } = this.props;
        return (
            <Container>
                <Wrapper>
                    {this.renderMenu(categories, category ? category.name : "")}
                    <LogoContainer>
                        <Link
                            to={{
                                pathname: "/",
                            }}
                        >
                            <img src={Images.Logo} alt="logo" />
                        </Link>
                    </LogoContainer>
                    {this.renderNavbarActions()}
                </Wrapper>

                <ErrorBoundary message="An error occurs with the shooping bag">
                    {this.state.shoppingBagVisible && (
                        <ShoppingBag
                            innerRef={this.shoppingBagRef}
                            hide={() => this.setState({ shoppingBagVisible: false })}
                        />
                    )}
                </ErrorBoundary>

                {this.state.shoppingBagVisible && <Mask />}
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        categories: state.mystore.categories,
        currency: state.mystore.currency,
        category: state.mystore.category,
        cart: state.mystore.cart,
    };
};

export default connect(mapStateToProps)(Navbar);
