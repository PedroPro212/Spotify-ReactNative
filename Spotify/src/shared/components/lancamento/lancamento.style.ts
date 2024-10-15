import styled from "styled-components/native";

export const ViewContainer = styled.View`
    width: 90%;
    height: 130px;
    backgroundColor: #535353;
    margin: 15px;
    borderRadius: 5px;
    flexDirection: row;
`

export const ImageContainer = styled.Image`
    width: 35%;
    height: 130px;
    backgroundColor: #535353;
    borderRadius: 5px 0 0 5px;
`

export const TextMusica = styled.Text`
    fontSize: 18px;
    color: #FFFFFF;
    flex-shrink: 1;        /* Faz com que o texto encolha para caber no espaço */
    flex-wrap: wrap;       /* Quebra a linha do texto se necessário */
    margin-left: 10px;     
    width: 200px;  
    margin: 15px;
`