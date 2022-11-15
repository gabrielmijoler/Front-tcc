// // // import * as React from 'react';
// // // import { NavigationContainer } from '@react-navigation/native';
// // // // import Formulario from './src/pages/Formulario';

// // // import TableUser from './src/components/TableUsers';


// // // const App: React.FC = () => {
// // //     return (
// // //       <NavigationContainer>
// // //         <TableUser/>
// // //       </NavigationContainer>
// // //     );
// // // };

// // // export default App;


// // import * as React from 'react';
// // import { Button, View } from 'react-native';
// // import { createDrawerNavigator } from '@react-navigation/drawer';
// // import { NavigationContainer } from '@react-navigation/native';
// // import 'react-native-gesture-handler';

// // type Navegation = {
// //   navigation: any;
// // }

// // const HomeScreen: React.FC <Navegation>=({ navigation}) => {
// //   return (
// //     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
// //       <Button
// //         onPress={() => navigation.navigate('Notifications')}
// //         title="Go to notifications"
// //       />
// //     </View>
// //   );
// // }

// // const NotificationsScreen: React.FC <Navegation>= ({ navigation})=> {
// //   return (
// //     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
// //       <Button onPress={() => navigation.goBack()} title="Go back home" />
// //     </View>
// //   );
// // }

// // const Drawer = createDrawerNavigator();

// // const App: React.FC = ()=> {
// //   return (
// //     <NavigationContainer>
// //       <Drawer.Navigator initialRouteName="Home">
// //         <Drawer.Screen name="Home" component={HomeScreen} />
// //         <Drawer.Screen name="Notifications" component={NotificationsScreen} />
// //       </Drawer.Navigator>
// //     </NavigationContainer>
// //   );
// // }

// // export default App;

// import * as React from 'react';
// // import { Button, View } from 'react-native';
// // import { createDrawerNavigator } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native';
// import Formulario from './src/pages/Formulario';
// import { Appbar, Provider as PaperProvider } from 'react-native-paper';
// import TableUser from './src/components/TableUsers';
// import { Platform } from 'react-native';



import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import TableUser from './src/components/TableUsers';
import Formulario from './src/pages/Formulario';

const MusicRoute = () => <Formulario/>;

const AlbumsRoute = () => <TableUser/>;

const RecentsRoute = () => <Text>Recents</Text>;

const NotificationsRoute = () => <Text>Notifications</Text>;

const MyComponent = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'music', title: 'Formulario', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
    { key: 'albums', title: 'Clientes', focusedIcon: 'album' },
    { key: 'recents', title: 'Recents', focusedIcon: 'history' },
    { key: 'notifications', title: 'Notifications', focusedIcon: 'bell', unfocusedIcon: 'bell-outline' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    music: MusicRoute,
    albums: AlbumsRoute,
    recents: RecentsRoute,
    notifications: NotificationsRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default MyComponent;