
import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, Dimensions, Image, Platform } from 'react-native';
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
const LATITUDE_DELTA = 0.04;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;


const TripSimulation = ({navigation}) => {
  const mapRef = useRef()
  const markerRef = useRef()

  const [state, setState] = useState({
      curLoc: {
          latitude: 22.5372,
          longitude: 88.3231,
      },
      destinationCords: {},
      isLoading: false,
      coordinate: new AnimatedRegion({
          latitude: 22.5372,
          longitude: 88.3231,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA
      }),
      time: 0,
      distance: 0,
      heading: 0

  })

  const { curLoc, time, distance, destinationCords, isLoading, coordinate,heading } = state
  const updateState = (data) => setState((state) => ({ ...state, ...data }));


  useEffect(() => {
    getLiveLocation()
  }, [])

  const getLiveLocation = async () => {
      const locPermissionDenied = await locationPermission()
      if (locPermissionDenied) {
          const { latitude, longitude, heading } = await getCurrentLocation()
          console.log("get live location after 4 second",heading)
          animate(latitude, longitude);
          updateState({
              heading: heading,
              curLoc: { latitude, longitude },
              coordinate: new AnimatedRegion({
                  latitude: latitude,
                  longitude: longitude,
                  latitudeDelta: LATITUDE_DELTA,
                  longitudeDelta: LONGITUDE_DELTA
              })
          })
      }
  }

    useEffect(() => {
        const interval = setInterval(() => {
            getLiveLocation()
        }, 6000);
        return () => clearInterval(interval)
    }, [])

    const onPressLocation = () => {
        navigation.navigate('ChooseLocation', { getCordinates: fetchValue })
    }
    const fetchValue = (data) => {
        console.log("this is data", data)
        updateState({
            destinationCords: {
                latitude: data.destinationCords.latitude,
                longitude: data.destinationCords.longitude,
            }
        })
    }

    const animate = (latitude, longitude) => {
        const newCoordinate = { latitude, longitude };
        if (Platform.OS == 'android') {
            if (markerRef.current) {
                markerRef.current.animateMarkerToCoordinate(newCoordinate, 7000000);
            }
        } else {
            coordinate.timing(newCoordinate).start();
        }
    }

    const onCenter = () => {
        mapRef.current.animateToRegion({
            latitude: curLoc.latitude,
            longitude: curLoc.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA
        })
    }

    const fetchTime = (d, t) => {
        updateState({
            distance: d,
            time: t
        })
    }


  return (
    <View style={styles.container}>
        {distance !== 0 && time !== 0 && (
                <View style={{ alignItems: 'center', marginVertical: 16, marginTop:36 }}>
                    <Text>Time left: {time.toFixed(0)} min </Text>
                    <Text>Distance left: {distance.toFixed(0)} Km</Text>
                </View>
            )}
            <View style={{ flex: 1 }}>
                <MapView
                    ref={mapRef}
                    style={styles.map}
                    customMapStyle={mapStyles}
                    initialRegion={{
                        ...curLoc,
                        latitudeDelta: LATITUDE_DELTA,
                        longitudeDelta: LONGITUDE_DELTA,
                    }}
                >

                    <Marker.Animated
                        ref={markerRef}
                        coordinate={coordinate}
                    >
                        <Image
                            source={imagePath.icBike}
                            style={{
                                width: 40,
                                height: 40,
                                transform: [{rotate: `${heading}deg`}]
                            }}
                            resizeMode="contain"
                        />
                    </Marker.Animated>
                    <Marker
                        coordinate={curLoc}
                        image={imagePath.icCurLoc}
                    />
                    {Object.keys(destinationCords).length > 0 && (<Marker
                        coordinate={destinationCords}
                        image={imagePath.icGreenMarker}
                    />)}

                    {Object.keys(destinationCords).length > 0 && (<MapViewDirections
                        origin={curLoc}
                        destination={destinationCords}
                        apikey={GOOGLE_MAP_KEY}
                        strokeWidth={6}
                        strokeColor="black"
                        optimizeWaypoints={true}
                        onStart={(params) => {
                            console.log(`Started routing between "${params.origin}" and "${params.destination}"`);
                        }}
                        onReady={result => {
                            console.log(`Distance: ${result.distance} km`)
                            console.log(`Duration: ${result.duration} min.`)
                            fetchTime(result.distance, result.duration),
                                mapRef.current.fitToCoordinates(result.coordinates, {
                                    edgePadding: {
                                        right: 30,
                                        bottom: 300,
                                        left: 30,
                                        top: 100,
                                    },
                                });
                        }}
                        onError={(errorMessage) => {
                            // console.log('GOT AN ERROR');
                        }}
                    />)}
                </MapView>
                <TouchableOpacity
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        right: 0
                    }}
                    onPress={onCenter}
                >
                    <Image source={imagePath.greenIndicator} />
                </TouchableOpacity>
            </View>
            <View style={styles.bottomCard}>
                <Text>Where are you going..?</Text>
                <TouchableOpacity
                    onPress={onPressLocation}
                    style={styles.inputStyle}
                >
                    <Text>Choose your location</Text>
                </TouchableOpacity>
            </View>
            <Loader isLoading={isLoading} />
    </View>
  );
};



export default TripSimulation;
