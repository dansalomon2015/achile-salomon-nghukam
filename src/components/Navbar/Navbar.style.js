import styled from "styled-components";
import { Colors } from "../../utils";

export const Container = styled.div`
    position: fixed;
    top: 0px;
    right: 0px;
    width: 100%;
    z-index: 100;
    background-color: ${Colors.bg_white};
`;

export const Wrapper = styled.div`
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    padding-inline: 80px;
`;

export const Menu = styled.div`
    width: 40%;
    display: flex;
    flex-direction: row;
    align-items: center;
`;
export const LogoContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;
export const Actions = styled.div`
    width: 40%;
    height: 80px;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 15px;
`;

export const MenuItem = styled.div`
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-inline: 16px;
    border-bottom: ${(props) => (props.active ? `2px solid ${Colors.primary}` : null)};
    cursor: pointer;
`;

export const MenuItemTitle = styled.span`
    font-size: 16px;
    color: ${(props) => (props.active ? Colors.primary : Colors.dark)};
    font-weight: ${(props) => (props.active ? "600" : "normal")};
    line-height: 19.2px;
    text-transform: uppercase;
    cursor: pointer;
    & a:hover {
        text-decoration: none;
        color: inherit;
    }
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

export const Mask = styled.div`
    background-color: ${Colors.bg_dark_light};
    position: fixed;
    top: 80px;
    right: 0px;
    width: 100%;
    height: 100%;
    z-index: 100;
    opacity: 22%;
    overflow: hidden;
`;

// Shopping bag styled --------------------------------

export const ShoppingBagContainer = styled.div`
    background-color: ${Colors.bg_white};
    padding-top: 25px;
    padding-bottom: 25px;
    /* padding-inline: 14px; */
    position: fixed;
    top: 65px;
    right: 70px;
    /* width: 114px; */
    -webkit-box-shadow: 5px 5px 32px 3px rgba(0, 0, 0, 0.05);
    box-shadow: 5px 5px 32px 3px rgba(0, 0, 0, 0.05);
    z-index: 101;
`;

export const ShoppingBagBody = styled.div`
    flex-direction: row;
    display: flex;
    margin-top: 24px;
    align-items: center;
    padding-inline: 14px;
`;

export const MyBagText = styled.span`
    font-weight: bold;
    font-size: 16px;
    line-height: 160%;
    margin-right: 8px;
    color: ${Colors.dark};
`;

export const NbrOfItemText = styled.span`
    font-weight: 500;
    font-size: 16px;
    line-height: 160%;
    color: ${Colors.dark};
`;

export const ItemDetails = styled.div`
    width: 130px;
    margin-right: 40px;
    display: flex;
    flex-direction: column;
`;

export const ItemName = styled.div`
    font-weight: 300;
    font-size: 16px;
    line-height: 160%;
    color: ${Colors.dark};
`;

export const QtyContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin-right: 14px;
    height: 180px;
`;

export const Qty = styled.span`
    font-weight: 500;
    font-size: 16px;
    line-height: 160%;
    text-align: center;
    color: ${Colors.dark};
`;

export const ItemImgContainer = styled.div`
    width: 100px;
    height: 172px;
    background-image: ${(props) => `url("${props.src}")`};
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    color: ${Colors.dark};
`;

export const ItemPrice = styled.span`
    font-weight: 500;
    font-size: 16px;
    line-height: 160%;
    margin-top: 3px;
    margin-bottom: 5px;
    color: ${Colors.dark};
`;

export const SectionTitle = styled.span`
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: ${Colors.dark};
`;

export const Section = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 8px;
    margin-bottom: 8px;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 30px;
`;

export const TotalContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 25px;
`;

export const Total = styled.span`
    font-weight: bold;
    font-size: 16px;
    line-height: 160%;
    color: ${Colors.dark};
`;

export const TotalText = styled.span`
    font-weight: bold;
    font-size: 16px;
    line-height: 160%;
    font-family: "Roboto";
    color: ${Colors.dark};
`;

export const BrandName = styled.span`
    font-weight: 600;
    font-size: 30px;
    line-height: 27px;
    color: ${Colors.dark};
`;

export const ShoppingBagList = styled.div`
    max-height: 500px;
    overflow-y: scroll;
    width: 100%;
    scroll-behavior: smooth;
    &::-webkit-scrollbar {
        -webkit-appearance: none;
        width: 7px;
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 4px;
        background-color: rgba(0, 0, 0, 0.5);
        box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
    }
`;

export const Content = styled.div`
    padding-inline: 14px;
`;

export const NoItems = styled.div`
    margin-top: 20px;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
// -----------------------------------------------
