import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f0f0f7"
    },
    teacherList: {
        marginTop: -40
    },
    searchForm: {
        marginBottom: 24
    },
    label: {
        fontFamily: "Poppins_400Regular",
        color: "#d4c2ff"
    },
    input: {
        justifyContent: "center",
        height: 54,
        paddingHorizontal: 16,
        marginTop: 4,
        marginBottom: 16,
        backgroundColor: "#fff",
        borderRadius: 8
    },
    inputGroup: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    inputBlock: {
        width: "48%"
    },
    submitButton: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: 56,
        backgroundColor: "#04d361",
        borderRadius: 8
    },
    submitButtonText: {
        fontFamily: 'Archivo_700Bold',
        color: '#fff',
        fontSize: 16
    }
});

export default styles;