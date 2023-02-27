import React from 'react';
import {
    DrawerContentScrollView,
    DrawerItemList,DrawerItem
  } from '@react-navigation/drawer';
import NavigationStrings from './Constants/NavigationStrings';
  
  const CustomDrawer = (props) => {
    const { navigation } = props;
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItem 
            label="Home" 
            onPress={() =>navigation.navigate(NavigationStrings.HOME)} 
        />
        <DrawerItem 
            label="Trips" 
            onPress={() =>navigation.navigate(NavigationStrings.TRIPS)} 
        />
      </DrawerContentScrollView>
    );
  }

  export default CustomDrawer;