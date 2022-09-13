import styled from "styled-components";
import { Colors } from "../../utils";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 160px;
`;

export const GalleryContainer = styled.div`
    flex: 3;
    margin-right: 50px;
    display: flex;
    flex-direction: row;
`;

export const DetailsContainer = styled.div`
    flex: 2;
`;

export const GalleryItemsContainer = styled.div`
    margin-right: 30px;
`;

export const GalleryItem = styled.div`
    width: 90px;
    height: 90px;
    border-color: ${(props) => (props.selected ? `${Colors.primary}` : `${Colors.text_white}`)};
    margin-bottom: 30px;
    border-width: 2px;
    border-style: solid;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const GalleryItemContent = styled.div`
    width: 85px;
    height: 85px;
    background-image: ${(props) => `url("${props.src}")`};
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`;

export const ImgViewer = styled.div`
    width: 100%;
    height: 580px;
    background-image: ${(props) => `url("${props.src}")`};
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
`;

export const ItemName = styled.div`
    font-weight: 300;
    font-size: 30px;
    line-height: 27px;
    color: ${Colors.dark};
    margin-bottom: 20px;
    padding-bottom: 24px;
`;

export const ItemPrice = styled.div`
    font-weight: 700;
    font-size: 24px;
    line-height: 45px;
    margin-top: 10px;
    margin-bottom: 20px;
    color: ${Colors.dark};
`;

export const SectionTitle = styled.span`
    font-weight: 700;
    font-size: 18px;
    line-height: 18px;
    color: ${Colors.dark};
    font-family: "Roboto Condesed";
    text-transform: uppercase;
`;

export const Section = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 8px;
    margin-bottom: 24px;
`;

export const Brand = styled.div`
    font-weight: 600;
    font-size: 30px;
    line-height: 27px;
    color: ${Colors.dark};
    margin-bottom: 16px;
`;

export const AttributesContainer = styled.div`
    margin-bottom: 35px;
`;

export const Description = styled.div`
    font-family: "Roboto";
    font-weight: 400;
    font-size: 16px;
    line-height: 159.96%;
`;

export const NotFound = styled.div`
    display: flex;
    height: 200px;
    justify-content: center;
    align-items: center;
`;
