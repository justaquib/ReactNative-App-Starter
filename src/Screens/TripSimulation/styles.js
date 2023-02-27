import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  positionRelative: {
       position: 'relative',
  },
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '100%',
    },
    bottomCard: {
        backgroundColor: 'white',
        width: '100%',
        padding: 30,
        borderTopEndRadius: 24,
        borderTopStartRadius: 24
    },
    marker:{
        width: 32,
        height: 32,
        borderRadius: 32 / 2,
        borderWidth: 4,
        borderColor:'white',
        backgroundColor: 'red',
        bottom: 0,
        position: 'absolute',

    },
    riderNo: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        marginBottom: 8,
    },
    pinPoint:{
      bottom: 0,
      position: 'absolute',
    },
    inputStyle: {
        backgroundColor: 'white',
        borderRadius: 4,
        borderWidth: 1,
        alignItems: 'center',
        height: 48,
        justifyContent: 'center',
        marginTop: 16
    }
  });


export default styles;