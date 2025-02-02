import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 10,
        margin: 15,
        marginBottom: 20,
        alignItems: 'center',
    },
    header_perfil: {
        width: 44,
        height: 44,
        backgroundColor: '#535353',
        borderRadius: 22
    },
    header_titulo: {
        fontSize: 23,
        color: '#FFFFFF',
        fontWeight: 'bold',
        alignSelf: 'center',
        marginLeft: 15
    },
    scrollContainer: {
        flexDirection: 'row',
    },
})

export default styles;