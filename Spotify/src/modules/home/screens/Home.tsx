import { Text, View, StyleSheet, Image, ScrollView, FlatList } from "react-native";

import styles from "../style/home.style";
import OpcoesRapidas from "../../../shared/components/home/opcoesRapidas/Opcoes";
import Lancamento from "../../../shared/components/home/lancamento/Lancamento";
import PlaylistFrequenets from "../../../shared/components/home/playlistFrequentes/PlaylistFavoritas";
import TocadasRecentemente from "../../../shared/components/home/recentemente/Recentemente";

const Home = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.header_perfil}>
                    <Image style={styles.header_perfil} source={require('../../../shared/imgs/icons/perfil.jpeg')} />
                </View>
                <View style={[styles.header_opcoes, {width: 70, backgroundColor: '#1db954'}]}>
                    <Text style={[styles.header_opcoes_text, {color: 'black'}]}>Tudo</Text>
                </View>
                <View style={[styles.header_opcoes, {width: 85}]}>
                    <Text style={styles.header_opcoes_text}>Música</Text>
                </View>
                <View style={[styles.header_opcoes, {width: 88}]}>
                    <Text style={styles.header_opcoes_text}>Podcasts</Text>
                </View>
            </View>

            <ScrollView>
                <View style={styles.opcoesRapidas}>
                    <OpcoesRapidas title="Músicas Curtidas" source={require('../../../shared/imgs/icons/curtidas.png')} />
                    <OpcoesRapidas title="Linkin Park" source={require('../../../shared/imgs/capasAlbuns/logoLinkinPark.jpg')} />
                </View>
                <View style={styles.opcoesRapidas}>
                    <OpcoesRapidas title="Rock Forever" source={require('../../../shared/imgs/capasAlbuns/rock.png')} />
                    <OpcoesRapidas title="Scorpions" source={require('../../../shared/imgs/capasAlbuns/Scorpions.jpg')} />
                </View>
                <View style={styles.opcoesRapidas}>
                    <OpcoesRapidas title="Músicas Para Estudar 2024" source={require('../../../shared/imgs/capasAlbuns/anime.png')} />
                    <OpcoesRapidas title="phonk" source={require('../../../shared/imgs/capasAlbuns/phonk.png')} />
                </View>
                <View style={styles.opcoesRapidas}>
                    <OpcoesRapidas title="Evanescence" source={require('../../../shared/imgs/capasAlbuns/Fallen.jpg')} />
                    <OpcoesRapidas title="Imagine Dragons" source={require('../../../shared/imgs/capasAlbuns/imagine.png')} />
                </View>

                <Lancamento />
                
                <Text style={styles.subtitulos}>Suas playlists frequentes</Text>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.scrollContainer}
                >
                    <PlaylistFrequenets source={require('../../../shared/imgs/capasAlbuns/notionred.png')} title="Notion" descricao="Playlist" />
                    <PlaylistFrequenets source={require('../../../shared/imgs/capasAlbuns/diploma.png')} title="Caminho Faculdade" descricao="Playlist" />
                    <PlaylistFrequenets source={require('../../../shared/imgs/capasAlbuns/foco.jpeg')} title="Foco" descricao="Playlist" />
                    <PlaylistFrequenets source={require('../../../shared/imgs/capasAlbuns/academia.jpg')} title="Academia" descricao="Playlist" />
                </ScrollView>

                <Text style={styles.subtitulos}>Tocadas recentemente</Text>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.scrollContainer}
                >
                    <TocadasRecentemente source={require('../../../shared/imgs/icons/curtidas.png')} title="Liked Songs" />
                    <TocadasRecentemente source={require('../../../shared/imgs/capasAlbuns/artworks.jpg')} title="Okean Elzy" />
                    <TocadasRecentemente source={require('../../../shared/imgs/capasAlbuns/skillet.jpg')} title="Skillet" />
                    <TocadasRecentemente source={require('../../../shared/imgs/capasAlbuns/eminem.png')} title="Eminem" />
                    <TocadasRecentemente source={require('../../../shared/imgs/capasAlbuns/coldplay.png')} title="Coldplay" />
                    <TocadasRecentemente source={require('../../../shared/imgs/capasAlbuns/queen.png')} title="Queen" />
                </ScrollView>

            </ScrollView>

        </View>
    )
}

export default Home;