import { ImageProps, Text, View } from "react-native";

import { ViewContainer, Playlist, CapaPlaylist, NomePlaylist, DescricaoPlaylist } from "./playlistFrequentes.style";

type PlaylistFast = ImageProps & {
    title: string;
    descricao: string;
}

const PlaylistFrequenets = ({title, descricao, ...props}: PlaylistFast) => {
    return (
        <ViewContainer>
            <View style={{flexDirection: 'row', gap: 15}}>
                <Playlist>
                    <CapaPlaylist source={props.source}></CapaPlaylist>
                    <NomePlaylist>{title}</NomePlaylist>
                    <DescricaoPlaylist>{descricao}</DescricaoPlaylist>
                </Playlist>
            </View>
        </ViewContainer>
    )
}

export default PlaylistFrequenets;