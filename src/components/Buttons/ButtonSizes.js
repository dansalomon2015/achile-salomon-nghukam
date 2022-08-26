import styled from "styled-components";
import { Colors } from "../../utils";

const ButtonSizes = styled.button`
    background-color: ${(props) => (props.selected ? Colors.dark : Colors.bg_white)};
    border: 1px solid ${Colors.dark};
    min-width: 24px;
    height: 24px;
    justify-content: center;
    align-items: center;
    display: flex;
    font-size: 14px;
    cursor: pointer;
    margin-right: 8px;
    color: ${(props) => (props.selected ? Colors.text_white : Colors.dark)};
    font-family: "Source Sans Pro";
`;

export default ButtonSizes;
