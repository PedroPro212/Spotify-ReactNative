import { ImageProps } from "react-native";
import { ViewContainer, GeneroMus, CapaGeneroMusc } from "./secoes.style";

type SecaoFast = ImageProps & {
    descricao: string;
    bgColor: string;
}

const Secao = ({bgColor, descricao, ...props}: SecaoFast) => {
    return (
        <ViewContainer bgColor={bgColor}>
            <GeneroMus>{descricao}</GeneroMus>
            <CapaGeneroMusc source={props.source} />
        </ViewContainer>
    )
}

export default Secao;