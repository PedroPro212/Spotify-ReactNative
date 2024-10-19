import { View, Text } from "react-native";

import { ViewPerfil, Perfil, NewDesc, NewCantor, ViewContainer, ImageContainer, TextMusica, DescMusica, OpcoesContainer, AddOpcao, PlayOpcao } from "./lancamento.style";

const Lancamento = () => {
    return (
        <View>
            <ViewPerfil>
                <Perfil source={require('../../imgs/capasAlbuns/alanWalker.png')} />
                <View>
                    <NewDesc>Novo lançamento de</NewDesc>
                    <NewCantor>Alan Walker</NewCantor>
                </View>
            </ViewPerfil>
            <ViewContainer>
                <ImageContainer source={require('../../imgs/capasAlbuns/fundoAlanWalker.jpg')} />
                <View>
                    <TextMusica>When I Grow Up (Young, Wild, & Free)</TextMusica>
                    <DescMusica>Single - Flo Rida, Alan Walker</DescMusica>

                    <OpcoesContainer>
                        <AddOpcao source={require('../../imgs/icons/add.png')} />
                        <PlayOpcao source={require('../../imgs/icons/play.png')} />
                    </OpcoesContainer>
                </View>
            </ViewContainer>
        </View>
    )
}

export default Lancamento;