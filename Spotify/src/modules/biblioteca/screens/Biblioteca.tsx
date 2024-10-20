import { View, Text, Image, ScrollView } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from "../style/biblioteca.style";
import Opcoes from "../../../shared/components/library/opcoes/Opcoes";
import Playlist from "../../../shared/components/library/playlist/Playlist";

const Biblioteca = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={{flexDirection:'row'}}>
                    <View style={styles.header_perfil}>
                        <Image style={styles.header_perfil} source={require('../../../shared/imgs/icons/perfil.jpeg')} />
                    </View>
                    <Text style={styles.header_titulo}>Your Library</Text>
                </View>
                <View style={{flexDirection: 'row', gap: 20}}>
                    <Ionicons name="search-outline" size={37 } color="white" />
                    <Ionicons name="add-outline" size={37 } color="white" />
                </View>
            </View>

            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.scrollContainer}
                style={{ flexGrow: 0 }}
            >
                <Opcoes title="Playlist" />
                <Opcoes title="Podcasts & Shows" />
                <Opcoes title="Albums" />
                <Opcoes title="Artistas" />
                <Opcoes title="Downloaded" />
            </ScrollView>

            <ScrollView>
                <View>
                    <Playlist title="Liked Songs" descricao="Playlist - 889 songs" source={require('../../../shared/imgs/icons/curtidas.png')} />
                    <Playlist title="Músicas Para Estudar 2024" descricao="Playlist - White Cat" source={require('../../../shared/imgs/capasAlbuns/anime.png')} />
                    <Playlist title="phonk" descricao="Playlist - Spotify" source={require('../../../shared/imgs/capasAlbuns/phonk.png')} />
                    <Playlist title="Linkin Park" descricao="Playlist - Spotify" source={require('../../../shared/imgs/capasAlbuns/logoLinkinPark.jpg')} />
                    <Playlist title="Clássicos Sertanejos" descricao="Playlist - Made in Pedro Oliveira" source={require('../../../shared/imgs/capasAlbuns/cesarFabiano.jpg')} />
                    <Playlist title="American Country" descricao="Playlist - Spotify" source={require('../../../shared/imgs/capasAlbuns/carAmerican.jpg')} />
                    <Playlist title="Rock Classics" descricao="Playlist - Spotify" source={require('../../../shared/imgs/capasAlbuns/elvispresley.jpg')} />
                    <Playlist title="Programming and Coding" descricao="Artist" source={require('../../../shared/imgs/capasAlbuns/coding.jpg')} />
                    <Playlist title="Brasil Anos 90" descricao="Playlist - Made for Pedro Oliveira" source={require('../../../shared/imgs/capasAlbuns/anos90.png')} />
                </View>
            </ScrollView>

            <View style={{marginBottom: 100}} />

        </View>
    )
}

export default Biblioteca;