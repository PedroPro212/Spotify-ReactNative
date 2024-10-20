import { TextProps, View } from "react-native";

import { TextContainer } from "./opcao.style";

type OpcoesFast = TextProps & {
    title: string;
}

const Opcoes = ({title, ...props}: OpcoesFast) => {
    return (
        <View style={{height: 60}}>
            <TextContainer>{title}</TextContainer>
        </View>
    )
}

export default Opcoes;