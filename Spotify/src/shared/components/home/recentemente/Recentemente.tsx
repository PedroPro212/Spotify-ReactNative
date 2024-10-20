import { ImageProps, Text, View } from "react-native";

import { ViewContainer, Recentemente, CapaRecentemente, NomeRecentemente, DescricaoRecentemente } from "./recentemente.style";

type PlaylistFast = ImageProps & {
    title: string;
}

const TocadasRecentemente = ({title, ...props}: PlaylistFast) => {
    return (
        <ViewContainer>
            <View style={{flexDirection: 'row', gap: 15}}>
                <Recentemente>
                    <CapaRecentemente source={props.source}></CapaRecentemente>
                    <NomeRecentemente>{title}</NomeRecentemente>
                </Recentemente>
            </View>
        </ViewContainer>
    )
}

export default TocadasRecentemente;