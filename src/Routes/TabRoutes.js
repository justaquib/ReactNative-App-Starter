import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home,TripSimulation,Community,Trips } from '../Screens';
import { AntDesign,Feather,MaterialCommunityIcons  } from '@expo/vector-icons'; 
import NavigationStrings from '../Components/Constants/NavigationStrings';

const Tab = createBottomTabNavigator();

const TabRoutes = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false, tabBarActiveTintColor:'black',tabBarInactiveTintColor:'gray',tabBarStyle:{
      paddingBottom:12,
      height:72
      }}}>
      <Tab.Screen
        name={NavigationStrings.HOME}
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size, focused }) => (
            <AntDesign style={{color: focused ? 'black' : 'gray'}} name="home" size={24} />
          ),
        }}
      />
      <Tab.Screen
        name={NavigationStrings.TRIPS}
        component={Trips}
        options={{
          tabBarLabel: "Trips",
          tabBarIcon: ({ color, size,focused }) => (
            <Feather name="map-pin" size={24} style={{color: focused ? 'black' : 'gray'}}  />
          ),
        }}
      />
      <Tab.Screen
        name="Community"
        component={Community}
        options={{
          tabBarLabel: "Community",
          tabBarIcon: ({ color, size,focused }) => (
            <MaterialCommunityIcons
              name="google-circles-communities"
              size={24}
              style={{color: focused ? 'black' : 'gray'}} 
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Community}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color, size,focused }) => (
            <MaterialCommunityIcons
              name="cog-outline"
              size={24}
              style={{color: focused ? 'black' : 'gray'}} 
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TabRoutes