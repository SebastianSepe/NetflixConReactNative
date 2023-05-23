import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Menu from '../Menu';
import HomeScreen from '../../screens/HomeScreen'
import CatalogueScreen from '../../screens/CatalogueScreen';
import StackNavigator from '../../stackNavigation';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
      <Drawer.Navigator>
        <Drawer.Screen name="Menu" component={StackNavigator} />
      </Drawer.Navigator>
  );
};

export default DrawerNavigator;