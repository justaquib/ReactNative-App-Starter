import React from 'react'
import { Text } from 'react-native'
import { Button,Card } from 'react-native-paper';

export default function Community() {
  return (
    <Card>
        <Card.Content>
            <Text>Community</Text>
            <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
                Press me
            </Button>
        </Card.Content>
    </Card>
  )
}
