
import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, Dimensions, Image, Platform, StyleSheet } from 'react-native';
import MapView, { Marker, AnimatedRegion } from 'react-native-maps';
import { GOOGLE_MAP_KEY } from '../../Components/Constants/GoogleMapKey';
import imagePath from '../../Components/Constants/ImagePath';
import MapViewDirections from 'react-native-maps-directions';
import Loader from '../../Components/Loader';
import { locationPermission, getCurrentLocation } from '../../Helper/HelperFunction';
import mapStyles from './mapStyle';
import styles from './styles';


const screen = Dimensions.get('window');
const ASPECT_RATIO = screen.width / screen.height;

const LATITUDE_DELTA = 0.045;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
// console.log(LATITUDE_DELTA)
// console.log(LONGITUDE_DELTA);
// const LONGITUDE_DELTA = 0.095;


const TripSimulation = ({navigation}) => {
  const mapRef = useRef()
  const markerRef = useRef()

  const [state, setState] = useState({
    originCords: {
        latitude: 22.5372,
        longitude: 88.3231,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
    },
    destinationCords: {
        latitude: 21.6681,
        longitude: 87.7025,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
    }
  });




  const { originCords, destinationCords, distance } = state;


  return (
    <View style={styles.container}>
        {
            /* {distance !== 0 && time !== 0 && (
                <View style={{ alignItems: 'center', marginVertical: 16, marginTop:36 }}>
                    <Text>Time left: {time.toFixed(0)} min </Text>
                    <Text>Distance left: {distance.toFixed(0)} Km</Text>
                </View>
            )} */
        }

            {/*             
            Disable All intraction from Map
            pitchEnabled={false} rotateEnabled={false} zoomEnabled={false} scrollEnabled={false} */}

            <View pointerEvents="none">
                <MapView style={styles.map} showsCompass={true} showsUserLocation={true}
                    customMapStyle={mapStyles} initialRegion={originCords} ref={mapRef}>
                    {/* <View style={{ position: 'absolute', top: 100, left: 50 }}></View> */}
                    <Marker ref={markerRef} coordinate={originCords}
                        image={imagePath.icGreenMarker}
                        style={styles.pinPoint}
                    />
                    <Marker ref={markerRef} coordinate={destinationCords}
                        style={styles.marker}
                        image={imagePath.tripOrigin}
                    />
                    {/* <Marker ref={markerRef} style={styles.positionRelative} coordinate={destinationCords}>
                        <View style={styles.marker}>
                            <Text style={styles.riderNo}>1</Text>
                        </View>
                    </Marker> */}
                    {/* <MapViewDirections origin={originCords} destination={destinationCords} apikey={GOOGLE_MAP_KEY} 
                        strokeWidth={6} optimizeWaypoints={true}
                        onReady={(result) => {
                            mapRef.current.fitToCoordinates(result.coordinates, {
                                edgePadding: {
                                    right: 30,
                                    left: 30,
                                    top: 80,
                                    bottom: 36
                                }
                            });
                        }}
                    /> */}
                </MapView>
            </View>
            {/* <View style={styles.bottomCard}>
                <Text>Where are you going..?</Text>
                <TouchableOpacity
                    onPress={onPressLocation}
                    style={styles.inputStyle}
                >
                    <Text>Choose your location</Text>
                </TouchableOpacity>
            </View>
            <Loader isLoading={isLoading} /> */}
    </View>
  );
};



export default TripSimulation;
