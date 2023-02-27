import React from 'react'
import { Text, View,Image } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ImagePath from '../Community/Constants/ImagePath';

export default function BrandName() {
  return (
    <View style={{paddingStart:10,flex:1,justifyContent:"space-between"}}>
        <Image style={{width:36,height:36}} source={ImagePath.brandLogo} />
        {/* <Text style={{}}>
            <MaterialCommunityIcons name="racing-helmet" size={32} color="black" />
            <Text style={{fontSize:20}}>inMates</Text>
        </Text> */}
    </View>
  )
}
