import { ImageProps, View } from "react-native";

import { ViewContainer, ImageCapa, Titulo, Subtitulo } from "./playlist.style";

type PlaylistFast = ImageProps & {
    title: string;
    descricao: string;
}

const Playlist = ({title, descricao, ...props}: PlaylistFast) => {
    return (
        <ViewContainer>
            <ImageCapa source={props.source} />
            <View style={{justifyContent: 'center'}}>
                <Titulo>{title}</Titulo>
                <Subtitulo>{descricao}</Subtitulo>
            </View>
        </ViewContainer>
    )
}

export default Playlist;