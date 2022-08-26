import styled from "styled-components";
import { Colors } from "../../utils";

export const QtyButton = styled.button`
    background-color: ${Colors.bg_white};
    border: 1px solid ${Colors.dark};
    width: 24px;
    height: 24px;
    justify-content: center;
    align-items: center;
    display: flex;
    font-size: 18px;
    cursor: pointer;
    color: ${Colors.dark};
    font-family: "Roboto";
    font-weight: 300;
`;
