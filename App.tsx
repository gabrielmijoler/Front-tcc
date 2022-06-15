import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Formulario from './src/pages/Formulario';

// import {AuthProvider} from './context/auth';
// import Routes from './routes/index';

const App: React.FC = () => {
    return (
    <NavigationContainer>
        <Formulario/>
    </NavigationContainer>
    );
};

export default App;