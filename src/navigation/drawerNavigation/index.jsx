import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import CatalogueScreen from '../../screens/CatalogueScreen';
import Menu from '../../components/Menu';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = ({ navigation }) => {
  return (
    <DrawerContentScrollView>
      <DrawerItem
        label="Menu"
        onPress={() => navigation.navigate('Catalogue')}
      />
    </DrawerContentScrollView>
  );
};


const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Catalogue" component={CatalogueScreen} options={{headerTitle:''}}/>
      <Drawer.Screen name="Menu" component={Menu} options={{headerTitle:''}}/>
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;




// import React from 'react';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import CatalogueScreen from '../../screens/CatalogueScreen';

// const Drawer = createDrawerNavigator();

// const DrawerNavigator = () => {
//   return (
//       <Drawer.Navigator>
//         <Drawer.Screen name="Catalogue" component={CatalogueScreen} />
//       </Drawer.Navigator>
//   );
// };

// export default DrawerNavigator;