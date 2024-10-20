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
                <View style={{flexDirection: 'row', gap: 7}}>
                    <Secao bgColor="#6743a5" descricao="Eventos ao vivo" source={require('../../../shared/imgs/capasAlbuns/mercury.png')} />
                    <Secao bgColor="#005bc5" descricao="Feito para você" source={require('../../../shared/imgs/capasAlbuns/evanescence.jpeg')} />
                </View>
                <View style={{flexDirection: 'row', gap: 7}}>
                    <Secao bgColor="#6b8f0b" descricao="Lançamentos" source={require('../../../shared/imgs/capasAlbuns/Machine.jpg')} />
                    <Secao bgColor="#e3a72f" descricao="Sertanejo" source={require('../../../shared/imgs/capasAlbuns/marilia.jpeg')} />
                </View>
                <View style={{flexDirection: 'row', gap: 7}}>
                    <Secao bgColor="#e05576" descricao="Brasil" source={require('../../../shared/imgs/capasAlbuns/chitaozinho.jpg')} />
                    <Secao bgColor="#464d70" descricao="Pop" source={require('../../../shared/imgs/capasAlbuns/michaelJ.jpg')} />
                </View>
                <View style={{flexDirection: 'row', gap: 7}}>
                    <Secao bgColor="#288d85" descricao="Funk" source={require('../../../shared/imgs/capasAlbuns/mcHariel.png')} />
                    <Secao bgColor="#5e2f46" descricao="No carro" source={require('../../../shared/imgs/capasAlbuns/mustang.png')} />
                </View>
                <View style={{flexDirection: 'row', gap: 7}}>
                    <Secao bgColor="#001449" descricao="Hip hop" source={require('../../../shared/imgs/capasAlbuns/hiphop.jpg')} />
                    <Secao bgColor="#36802d" descricao="Samba e pagode" source={require('../../../shared/imgs/capasAlbuns/Samba.jpeg')} />
                </View>
                <View style={{flexDirection: 'row', gap: 7, marginBottom: 55}}>
                    <Secao bgColor="#e84b2c" descricao="Rádio" source={require('../../../shared/imgs/capasAlbuns/radio.jpg')} />
                    <Secao bgColor="#157a8c" descricao="MPB" source={require('../../../shared/imgs/capasAlbuns/CaetanoVeloso.png')} />
                </View>
            </ScrollView>
        </View>
    )
}

export default Search