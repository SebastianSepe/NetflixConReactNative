import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import CatalogueScreen from '../../screens/CatalogueScreen';
import Menu from '../../components/Menu';
import colors from '../../constantes/colors';

const Drawer = createDrawerNavigator();

function CustomDrawerContent() {
  return (
    <DrawerContentScrollView style={{backgroundColor:colors.backgroundSecondary}}>  
      <Menu />
    </DrawerContentScrollView>
  );
}

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Catalogue" drawerContent={() => <CustomDrawerContent />}>
      <Drawer.Screen name="Catalogue" component={CatalogueScreen} options={{ headerShown:false }} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

