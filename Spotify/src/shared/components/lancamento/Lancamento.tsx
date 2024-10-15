import { View, Text } from "react-native";

import { ViewContainer, ImageContainer, TextMusica } from "./lancamento.style";

const Lancamento = () => {
    return (
        <ViewContainer>
            <ImageContainer source={require('../../imgs/capasAlbuns/alanWalker.png')} />
            <TextMusica>When I Grow Up (Young, Wild, & Free)</TextMusica>
        </ViewContainer>
    )
}

export default Lancamento;