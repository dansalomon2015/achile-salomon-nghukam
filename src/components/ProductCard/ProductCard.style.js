import styled from "styled-components";
import { Colors } from "../../utils";

export const Card = styled.div`
    position: relative;
    padding: 14px;
    margin-top: 100px;
    &:hover {
        -webkit-box-shadow: 10px 5px 33px 5px rgba(0, 0, 0, 0.22);
        box-shadow: 10px 5px 33px 5px rgba(0, 0, 0, 0.22);
    }
    margin-inline: 10%;
    // & a:hover {
    //     text-decoration: none;
    //     color: ${Colors.primary};
    // }
    & a:focus {
        text-decoration: none;
        color: inherit;
    }
    & a:active {
        text-decoration: none;
        color: inherit;
    }
    & a {
        text-decoration: none;
        color: inherit;
    }
`;

export const ProductImage = styled.img`
    height: auto;
`;

export const ProductName = styled.span`
    font-size: 18px;
    line-height: 160%;
    font-weight: 300;
`;

export const ProductPrice = styled.span`
    font-size: 16px;
    line-height: 160%;
    font-weight: 500;
`;

export const AddToCardIcon = styled.div`
    width: 50px;
    height: 50px;
    display: none;
    border-radius: 25px;
    justify-content: center;
    align-items: center;
    background-color: ${Colors.primary};
    position: absolute;
    right: 30px;
    bottom: 70px;
    #card:hover & {
        display: flex;
    }
    cursor: pointer;
`;

export const CartIcon = styled.img`
    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(323deg) brightness(102%) contrast(101%);
    width: 24px;
`;

export const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
`;

export const ImgContainer = styled.div`
    background-image: ${(props) => `url("${props.src}")`};
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 330px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const OutOfStock = styled.p`
    font-size: 24px;
    line-height: 160%;
    color: ${Colors.bg_grey};
    text-transform: uppercase;
`;
