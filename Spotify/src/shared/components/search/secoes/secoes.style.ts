import styled from "styled-components/native";

export const ViewContainer = styled.View<{ bgColor?: string }>`
    width: 170px;
    height: 110px;
    backgroundColor: ${({ bgColor }) => bgColor || '#535353'};
    borderRadius: 10px;
    margin: 0px 0px 15px 15px;
    overflow: hidden;
    position: relative;
`

export const GeneroMus = styled.Text`
    fontSize: 18px;
    color: #FFFFFF;
    marginTop: 12px;
    marginLeft: 10px;
    fontWeight: bold;
`

export const CapaGeneroMusc = styled.Image`
    width: 90px;
    height: 90px;
    borderRadius: 5px;
    position: absolute;
    right: -30px;
    top: 20px;
    transform: rotate(20deg);
`