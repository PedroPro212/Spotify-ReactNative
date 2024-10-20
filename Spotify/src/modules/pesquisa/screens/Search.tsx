import { View, Text, Image } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from "../style/search.style";
import Input from "../../../shared/components/search/input/Input";
import Explore from "../../../shared/components/search/explore/Explore";

const Search = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={{flexDirection:'row'}}>
                    <View style={styles.header_perfil}>
                        <Image style={styles.header_perfil} source={require('../../../shared/imgs/icons/perfil.jpeg')} />
                    </View>
                    <Text style={styles.header_titulo}>Search</Text>
                </View>
                <Ionicons name="camera-outline" size={37 } color="white" />
            </View>

            <Input source={require('../../../shared/imgs/icons/search.png')} placeholder="What do you want to listen to?" />

            <Text style={styles.subtitulo}>Explore seus gêneros</Text>
            <View style={{flexDirection: 'row'}}>
                <Explore descricao="#country" source={require('../../../shared/imgs/capasAlbuns/alan.jpg')} />
                <Explore descricao="#rock" source={require('../../../shared/imgs/capasAlbuns/rockCapa.jpg')} />
                <Explore descricao="#pop" source={require('../../../shared/imgs/capasAlbuns/Michael.png')} />
            </View>

        </View>
    )
}

export default Search