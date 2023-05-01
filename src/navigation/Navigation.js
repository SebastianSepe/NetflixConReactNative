// import DetailsScreen from "../Screens/DetailScreen";
// import HomeScreen from "../Screens/HomeScreen";
// import { MaterialCommunityIcons } from '@expo/vector-icons';
// import { NavigationContainer } from "@react-navigation/native";
// import React from "react";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";

// const Tab = createBottomTabNavigator();

// function MyTabs() {
//     return(
//         <Tab.Navigator
//             initialRouteName="Home"
//             screenOptions={{
//                 tabBarInactiveTintColor: 'purple'
//             }}
//         >
//             <Tab.Screen name="Home" component={HomeScreen}
//                 options={{
//                     tabBarIcon: ({color, size}) =>(
//                         <MaterialCommunityIcons name="home" size={24} color="black" />
//                     ),
//                     tabBarBadge: 16
//                 }}
//             />
//             <Tab.Screen name="Detail" component={DetailsScreen}
//                 options={{
//                     tabBarIcon: ({color, size}) =>(
//                         <MaterialCommunityIcons name="details" size={24} color="black" />
//                     )
//                 }}
//             /> 
//         </Tab.Navigator>
//     );
// }

// const homeStackNavigator = createNativeStackNavigator();

// function MyStack() {
//     return(
//     <homeStackNavigator.Navigator
//         initialRouteName="HomeScreen"
//     >
//         <homeStackNavigator.Screen
//             name="HomeScreen"
//             component={HomeScreen}
//         />
//         <homeStackNavigator.Screen
//             name="DetailScreen"
//             component={DetailsScreen}
//         />
//     </homeStackNavigator.Navigator>
//     )
// }


// export default function Navigation(){
//     return(
//         <NavigationContainer>
//             <MyTabs></MyTabs>
//         </NavigationContainer>
//     )
// }