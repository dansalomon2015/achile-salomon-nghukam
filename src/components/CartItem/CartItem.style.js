import styled from "styled-components";
import { Colors } from "../../utils";

export const Container = styled.div`
    flex-direction: row;
    display: flex;
    margin-top: 20px;
    justify-content: space-between;
    border-bottom: 1px solid ${Colors.bg_grey};
    padding-bottom: 20px;
`;

export const ItemDetails = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ItemDetail = styled.div`
    display: flex;
    flex-direction: row;
`;

export const ItemName = styled.div`
    font-weight: 400;
    font-size: 25px;
    line-height: 27px;
    color: ${Colors.dark};
    margin-top: 16px;
`;

export const QtyContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin-right: 14px;
    min-height: 180px;
`;

export const Qty = styled.span`
    font-weight: 500;
    font-size: 16px;
    line-height: 160%;
    text-align: center;
    color: ${Colors.dark};
`;

export const ItemImgContainer = styled.div`
    width: 200px;
    min-height: 280px;
    background-image: ${(props) => `url("${props.src}")`};
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;

export const ItemPrice = styled.span`
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    margin-top: 20px;
    margin-bottom: 20px;
    color: ${Colors.dark};
`;

export const SectionTitle = styled.span`
    font-weight: 700;
    font-size: 16px;
    line-height: 18px;
    color: ${Colors.dark};
    font-family: "Roboto Condensed";
    text-transform: uppercase;
`;

export const Section = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 7px;
    margin-bottom: 16px;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 30px;
`;

export const BrandName = styled.span`
    font-weight: 600;
    font-size: 30px;
    line-height: 27px;
    color: ${Colors.dark};
`;

export const ControlsContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    padding: 16px;
`;

export const ControlRight = styled.div`
    width: 24px;
    height: 24px;
    background: rgba(0, 0, 0, 0.73);
    transform: matrix(-1, 0, 0, 1, 0, 0);
    margin-inline: 5px;
    cursor: pointer;
    &::after {
        position: relative;
        content: "";
        /* display: inline-block; */
        width: 6px;
        height: 6px;
        border-right: 2px solid ${Colors.bg_white};
        border-top: 2px solid ${Colors.bg_white};
        transform: rotate(${225}deg);
        top: 8px;
    }
    display: flex;
    justify-content: center;
`;

export const ControlLeft = styled.div`
    width: 24px;
    height: 24px;
    background: rgba(0, 0, 0, 0.73);
    transform: matrix(-1, 0, 0, 1, 0, 0);
    margin-inline: 5px;
    cursor: pointer;
    &::after {
        position: relative;
        content: "";
        /* display: inline-block; */
        width: 6px;
        height: 6px;
        border-right: 2px solid ${Colors.bg_white};
        border-top: 2px solid ${Colors.bg_white};
        transform: rotate(${45}deg);
        top: 8px;
    }
    display: flex;
    justify-content: center;
`;
