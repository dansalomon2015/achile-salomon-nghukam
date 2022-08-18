import styled from "styled-components";
import { Colors } from "../../utils";

export const Card = styled.div`
    position: relative;
    padding-top: 14px;
    padding-inline: 14px;
    max-width: 350px;
    margin-top: 100px;
    /* border: 1px solid black; */
    &:hover {
        -webkit-box-shadow: 10px 5px 33px 5px rgba(0, 0, 0, 0.22);
        box-shadow: 10px 5px 33px 5px rgba(0, 0, 0, 0.22);
    }
`;

export const ProductImage = styled.img`
    height: auto;
`;

export const ProductName = styled.p`
    font-size: 18px;
    line-height: 160%;
    font-weight: 300;
`;

export const ProductPrice = styled.p`
    font-size: 16px;
    line-height: 100%;
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
    bottom: 78px;
    #card:hover & {
        display: flex;
    }
    cursor: pointer;
`;

export const CartIcon = styled.img`
    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(323deg) brightness(102%) contrast(101%);
    width: 24px;
`;
