import { ImageProps, TextProps } from "react-native";
import { ViewContainer, ImageContainer, TextContainer } from "./opcoes.style";


type OpcoesFast = ImageProps & {
    title: string;
}

const OpcoesRapidas = ({title, ...props}: OpcoesFast) => {
    return (
        <ViewContainer>
            <ImageContainer source={props.source} />
            <TextContainer>{title}</TextContainer>
        </ViewContainer>
    )
}

export default OpcoesRapidas;