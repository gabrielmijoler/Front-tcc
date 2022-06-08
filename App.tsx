import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';
import Dashboard from './src/pages/Formulario';
// import {AuthProvider} from './context/auth';
// import Routes from './routes/index';

const App: React.FC = () => {
    return (
    <NavigationContainer>
        <Dashboard/>
    </NavigationContainer>
    );
};

export default App;