import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    // bgWhite:{
    //     backgroundColor: '#ffffff',
    // },
    container: {
        height: 280,
        flex: 0,
        flexDirection: 'row',
        padding: 10,
        // justifyContent: 'center',
        // backgroundColor: '#ecf0f1',
    },
    // wrapper: {
    //     flex: 3,
    //     flexDirection: 'row',
    //     gap: 10,
    // },
    slide1: {
        height: 200,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    slide2: {
        height: 200,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },
    slide3: {
        height: 200,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },
    text: {
        color: '#000000',
        fontSize: 30,
        fontWeight: 'bold'
    },
    // paginationStyle: {
    //     position: 'relative',
    //     bottom: 10,
    //     right: 10
    // },
    // paginationText: {
    //     color: 'white',
    //     fontSize: 20
    // }
});

export default styles;