import styled from "styled-components";
import { Colors } from "../../utils";

export const Container = styled.div`
    height: 80px;
`;

export const Wrapper = styled.div`
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
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
