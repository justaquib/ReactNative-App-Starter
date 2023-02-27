import React from 'react'
import { Button,Card,Text } from 'react-native-paper';
import { View } from 'react-native';
import { StyledComponent } from "nativewind";
import Carousel from 'react-native-snap-carousel-v4';
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from '../../Components/CarouselCardItem';
import data from '../../../data';
import { ScrollView } from 'react-native-gesture-handler';

export default function Home() {

    const isCarousel = React.useRef(null)

    // console.log(data)

  return (
    <>
        <ScrollView className="flex-1 bg-sky-200 p-4">
            <Text className="font-extrabold text-3xl mb-4 text-gray-600">
                Home
            </Text>
            <View>
                <Carousel
                    layout="default"
                    // layout={'stack'} 
                    // layoutCardOffset={`18`}
                    // layout="tinder"
                    // layoutCardOffset={9}
                    ref={isCarousel}
                    data={data}
                    renderItem={CarouselCardItem}
                    sliderWidth={SLIDER_WIDTH}
                    itemWidth={ITEM_WIDTH}
                    inactiveSlideShift={1}
                    useScrollView={true}
                    activeSlideAlignment="start"
                    loop={true}
                />
            </View>
            <View className="my-4">
                <Card>
                    <Card.Content>
                        <StyledComponent component={Text} className="font-bold">
                            We have used Tailwind CSS and React Native Snap Carousel and React Native Paper to build this app
                        </StyledComponent>
                    </Card.Content>
                </Card>
            </View>
            <Card>
                <Card.Content>
                    <Button icon="thumb-up" mode="contained" onPress={() => console.log('Pressed')}>
                        Press me
                    </Button>
                </Card.Content>
            </Card>
        </ScrollView>
    </>
  )
}
