// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// // import Formulario from './src/pages/Formulario';

// import TableUser from './src/components/TableUsers';


// const App: React.FC = () => {
//     return (
//       <NavigationContainer>
//         <TableUser/>
//       </NavigationContainer>
//     );
// };

// export default App;


import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

type Navegation = {
  navigation: any;
}

const HomeScreen: React.FC <Navegation>=({ navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

const NotificationsScreen: React.FC <Navegation>= ({ navigation})=> {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

const App: React.FC = ()=> {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;