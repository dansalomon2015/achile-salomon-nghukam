import styled from "styled-components";
import { Colors } from "../../utils";

const ButtonSizes = styled.button`
    background-color: ${(props) => (props.selected ? Colors.dark : Colors.bg_white)};
    border: 1px solid ${Colors.dark};
    min-width: ${(props) => props.minWidth || `24px`};
    height: ${(props) => props.height || `24px`};
    justify-content: center;
    align-items: center;
    display: flex;
    font-size: ${(props) => props.fontSize || `14px`};
    cursor: ${(props) => (props.onClick ? `pointer` : `auto`)};
    margin-right: 8px;
    color: ${(props) => (props.selected ? Colors.text_white : Colors.dark)};
    font-family: "Source Sans Pro";
`;

export default ButtonSizes;
