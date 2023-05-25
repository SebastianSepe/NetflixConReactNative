import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CatalogueScreen from '../../screens/CatalogueScreen';
import Menu from '../../components/Menu';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Catalogue">
      <Drawer.Screen name="Catalogue" component={CatalogueScreen} options={{ headerTitle: '' }} />
      <Drawer.Screen name="Menu" component={Menu} options={{ headerTitle: '' }} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
