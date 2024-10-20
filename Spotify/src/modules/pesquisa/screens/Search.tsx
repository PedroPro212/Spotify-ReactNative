import { View, Text, Image, ScrollView } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from "../style/search.style";
import Input from "../../../shared/components/search/input/Input";
import Explore from "../../../shared/components/search/explore/Explore";
import Secao from "../../../shared/components/search/secoes/Secoes";

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

            <ScrollView>
                <Text style={styles.subtitulo}>Explore seus gêneros</Text>
                <View style={{flexDirection: 'row'}}>
                    <Explore descricao="#country" source={require('../../../shared/imgs/capasAlbuns/alan.jpg')} />
                    <Explore descricao="#rock" source={require('../../../shared/imgs/capasAlbuns/rockCapa.jpg')} />
                    <Explore descricao="#pop" source={require('../../../shared/imgs/capasAlbuns/Michael.png')} />
                </View>

                <Text style={styles.subtitulo}>Navegar por todas as seções</Text>
                <View style={{flexDirection: 'row', gap: 7}}>
                    <Secao bgColor="#e32551" descricao="Música" source={require('../../../shared/imgs/capasAlbuns/musicas.jpg')} />
                    <Secao bgColor="#029daf" descricao="Podcasts" source={require('../../../shared/imgs/capasAlbuns/podcast.jpg')} />
                </View>
            </ScrollView>
        </View>
    )
}

export default Search