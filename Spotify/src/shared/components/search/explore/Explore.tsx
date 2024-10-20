import { ImageProps } from "react-native";
import { ExploreContainer, ImageContainer, DescImage } from "./explore.style";

type ExploreFast = ImageProps & {
    descricao: string;
}

const Explore = ({descricao, ...props}: ExploreFast) => {
    return (
        <ExploreContainer>
            <ImageContainer source={props.source} />
            <DescImage>{descricao}</DescImage>
        </ExploreContainer>
    )
}

export default Explore;