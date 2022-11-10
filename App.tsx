import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Formulario from './src/pages/Formulario';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TableUser from './src/components/TableUsers';

const Stack = createNativeStackNavigator();

// import {AuthProvider} from './context/auth';
// import Routes from './routes/index';

// menstruação mostrar so qd for mulher selecionado
// tato não obrigatorio

const App: React.FC = () => {
    return (
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={TableUser}
          options={{ title: 'Welcome' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    );
};

export default App;