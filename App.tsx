import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Formulario from './src/pages/Formulario';

// import {AuthProvider} from './context/auth';
// import Routes from './routes/index';

// menstruação mostrar so qd for mulher selecionado
// tato não obrigatorio

const App: React.FC = () => {
    return (
    <NavigationContainer>
        <Formulario/>
    </NavigationContainer>
    );
};

export default App;