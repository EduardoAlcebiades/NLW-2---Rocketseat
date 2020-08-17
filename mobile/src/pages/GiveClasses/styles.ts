import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: '#8257e5',
        padding: 40
    },
    content: {
        flex: 1,
        justifyContent: "center"
    },
    title: {
        fontFamily: 'Archivo_700Bold',
        color: "#fff",
        fontSize: 32,
        lineHeight: 37,
        maxWidth: 180
    },
    description: {
        marginTop: 24,
        fontFamily: 'Poppins_400Regular',
        color: "#d4c2ff",
        fontSize: 16,
        lineHeight: 26,
        maxWidth: 240
    },
    okButton: {
        justifyContent: "center",
        alignItems: "center",
        height: 58,
        marginVertical: 40,
        backgroundColor: '#04d361',
        borderRadius: 8
    },
    okButtonText: {
        fontFamily: 'Archivo_700Bold',
        color: '#fff',
        fontSize: 16
    }
});

export default styles;