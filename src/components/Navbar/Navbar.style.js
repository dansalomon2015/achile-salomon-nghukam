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
`;

export const MenuItemTitle = styled.span`
    font-size: 16px;
    color: ${(props) => (props.active ? Colors.primary : Colors.dark)};
    font-weight: ${(props) => (props.active ? "600" : "normal")};
    line-height: 19.2px;
`;

export const DropDownHandler = styled.div`
    padding-inline: 10px;
    margin-right: 10px;
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
    &::after {
        position: relative;
        content: "";
        display: inline-block;
        width: 5px;
        height: 5px;
        border-right: 1px solid ${Colors.dark};
        border-top: 1px solid ${Colors.dark};
        transform: ${(props) => (props.dropdownVisible ? `rotate(${-45}deg)` : `rotate(${135}deg)`)};
        margin-left: 10px;
        top: ${(props) => (props.dropdownVisible ? `10px` : `5px`)};
    }
    display: flex;
    justify-content: center;
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
    padding-inline: 14px;
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
    margin-right: 20px;
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

export const QtyButton = styled.button`
    background-color: ${Colors.bg_white};
    border: 1px solid ${Colors.dark};
    width: 24px;
    height: 24px;
    justify-content: center;
    align-items: center;
    display: flex;
    font-size: 20px;
    cursor: pointer;
    color: ${Colors.dark};
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

export const ButtonSizes = styled.button`
    background-color: ${(props) => (props.selected ? Colors.dark : Colors.bg_white)};
    border: 1px solid ${Colors.dark};
    width: 24px;
    height: 24px;
    justify-content: center;
    align-items: center;
    display: flex;
    font-size: 12px;
    cursor: pointer;
    margin-right: 8px;
    color: ${(props) => (props.selected ? Colors.text_white : Colors.dark)};
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
`;
// -----------------------------------------------
