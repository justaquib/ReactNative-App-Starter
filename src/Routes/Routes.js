import React from 'react';
import { NavigationContainer, TabRouter } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabRoutes from './TabRoutes';
import NavigationStrings from '../Components/Constants/NavigationStrings';
import CustomDrawer from '../Components/CustomDrawer';
import Header from '../Components/Header';
import BrandName from '../Components/BrandName';
import { Ionicons } from '@expo/vector-icons';
import { Text } from 'react-native';


const Drawer = createDrawerNavigator();


const Routes = () => {

    return (
      <NavigationContainer>
            <Drawer.Navigator screenOptions={{
                headerShown: true,
                headerTitle:() => '',//<Text>Brandname</Text>,
                // headerLeft:() => <BrandName />,
                headerRight:() => <Ionicons name="md-chatbubble-outline" style={{paddingEnd:10}} size={24} color="black" />,
                headerStatusBarHeight:32,
                headerStyle:{
                    height: 80,
                }
                
            }}
                drawerContent={(props) => <CustomDrawer {...props} />}
                
            >  
                <Drawer.Screen component={TabRoutes} name={NavigationStrings.TABS}  />
            </Drawer.Navigator>
      </NavigationContainer>
    );
}

export default Routes;