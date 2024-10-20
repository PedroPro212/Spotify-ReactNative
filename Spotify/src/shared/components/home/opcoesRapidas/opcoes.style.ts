import styled from "styled-components/native";
import { View } from "react-native";

export const ViewContainer = styled.View`
    width: 180px;
    height: 60px;
    backgroundColor: #535353;
    flexDirection: row;
    borderRadius: 5px;
    align-items: center;
`

export const ImageContainer = styled.Image`
    width: 60px;
    height: 60px;
    backgroundColor: #535353;
    borderRadius: 5px 0 0 5px;
`

export const TextContainer = styled.Text`
    fontSize: 16px;
    color: #FFFFFF;
    flex-shrink: 1;        /* Faz com que o texto encolha para caber no espaço */
    flex-wrap: wrap;       /* Quebra a linha do texto se necessário */
    margin-left: 10px;     
    width: 100px;    
    /* fontWeight: bold; */      
`