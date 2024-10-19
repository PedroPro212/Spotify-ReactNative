import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
    },
    header: {
        flexDirection: 'row',
        gap: 10,
        margin: 15,
        marginBottom: 30
    },
    header_perfil: {
        width: 38,
        height: 38,
        backgroundColor: '#535353',
        borderRadius: 19
    },
    header_opcoes: {
        height: 38,
        backgroundColor: '#535353',
        padding: 7,
        borderRadius: 45,
        alignItems: 'center',
        justifyContent: 'center'
    },
    header_opcoes_text: {
        color: '#FFFFFF',
        fontSize: 15,
    },
    opcoesRapidas: {
        flexDirection: 'row', 
        gap: 13, 
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 10,
    },
    scrollContainer: {
        flexDirection: 'row',
    },
    playlistFrequentes: {
        fontSize: 21,
        color: '#FFFFFF',
        fontWeight: 'bold',
        marginTop: 13,
        marginLeft: 15,
        marginBottom: 8,
    }

})

export default styles;