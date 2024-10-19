import styled from "styled-components/native";

export const ViewPerfil = styled.View`
    width: 90%;
    height: 50px;
    margin: 20px 15px 3px 15px;
    flexDirection: row;
`

export const Perfil = styled.Image`
    width: 50px;
    height: 50px;
    backgroundColor: #535353;
    borderRadius: 25px;
`

export const NewDesc = styled.Text`
    fontSize: 15px;
    color: #b3b3b3;
    margin: 0 15px 0 15px;
`

export const NewCantor = styled.Text`
    fontSize: 25px;
    color: #FFFFFF;
    fontWeight: bold;
    margin: 0 15px 0 15px;
`

export const ViewContainer = styled.View`
    width: 90%;
    height: 160px;
    backgroundColor: #535353;
    margin: 15px;
    borderRadius: 5px;
    flexDirection: row;
`

export const ImageContainer = styled.Image`
    width: 35%;
    height: 160px;
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
    margin: 15px 15px 0 15px;
`

export const DescMusica = styled.Text`
    fontSize: 15px;
    color: #b3b3b3;
    flex-shrink: 1;        /* Faz com que o texto encolha para caber no espaço */
    flex-wrap: wrap;       /* Quebra a linha do texto se necessário */
    margin-left: 10px;     
    width: 200px;  
    margin: 5px 15px 3px 15px;
`

export const OpcoesContainer = styled.View`
    height: 60px;
    flexDirection: row;
    justifyContent: space-between;
    margin: 10px 0px 3px 15px;
`
export const AddOpcao = styled.Image`
    width: 33px;
    height: 33px;
    marginTop: 5px;
`

export const PlayOpcao = styled.Image`
    width: 60px;
    height: 60px;
`