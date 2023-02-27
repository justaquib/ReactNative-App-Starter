import React from 'react'
import { Text, View } from 'react-native'
import { Button,Card } from 'react-native-paper';

export default function Trips() {
  return (
    <View style={{padding:10}}>
        <Card>
            <Card.Content>
                <Text>Trips</Text>
                {/* <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
                    Press me
                </Button> */}
            </Card.Content>
        </Card>
    </View>
  )
}
