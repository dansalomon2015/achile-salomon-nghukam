import styled from "styled-components";
import { Colors } from "../../utils";

export const Container = styled.div`
    margin-top: 160px;
    margin-bottom: 100px;
`;

export const Title = styled.p`
    font-weight: 700;
    font-size: 32px;
    line-height: 40px;
    text-transform: uppercase;
    color: ${Colors.dark};
`;

export const List = styled.div`
    border-top: 1px solid ${Colors.bg_grey};
    margin-top: 50px;
    margin-bottom: 30px;
`;

export const NoItems = styled.div`
    margin-top: 20px;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const RowTitle = styled.td`
    font-weight: ${(props) => props.fontWeight || 400};
    font-size: 24px;
    line-height: 28px;
    color: ${Colors.dark};
`;

export const RowValue = styled.td`
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: ${Colors.dark};
`;

export const Row = styled.tr`
    padding-top: 10px;
`;
