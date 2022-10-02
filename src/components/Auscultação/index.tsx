import { View, Text, TextInput, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { Client, IAuscultação, IBasicArray } from '../../models';
import DatePicker from 'react-native-datepicker';
import CheckBox from '@react-native-community/checkbox';

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        colors: "#000",
    },
    container: {
        flex: 1,
        alignItems: 'center',
    },
    button: {
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 6,
        marginTop: 50,
    },
    fail: {
        color: '#dc3545',
    },
    select: {
        minHeight: 40,
        backgroundColor: '#dfdfdf',
        width: 373,
        margin: 12,

    },
    text: {
        color: '#000',
        marginBottom: 10,
        marginTop: 10
    },
    dataComponent: {
        width: 350,
        margin: 20,
    },
    title: {
        marginTop:10,
        fontSize: 20,
    },
    obs:{
        backgroundColor: '#d3d3d3',
    }
});
interface Props{
    dataAuscultacao: (data: IAuscultação)=> void
}
const Auscultacao: React.FC<Props> = ({dataAuscultacao}) => {
    const [fala, setFala] = useState<IBasicArray[]>([
        { id: 1, name: 'Fala alta  (síndrome de excesso, calor)', value: 'Fala alta  (síndrome de excesso, calor)', checked: false },
        { id: 2, name: 'Fala baixo (síndrome de def. , frio)', value: 'Fala baixo (síndrome de def. , frio)', checked: false },
        { id: 3, name: 'Fala incoerente (debilidade do C)', value: 'Fala incoerente (debilidade do C)', checked: false },
        { id: 4, name: 'Fala muito (def. Yin do C)', value: 'Fala muito (def. Yin do C)', checked: false },
        { id: 5, name: 'Gagueira (Qi perverso vento/fleuma C)', value: 'Gagueira (Qi perverso vento/fleuma C)', checked: false },
        { id: 6, name: 'Chorosa,  gemência (obstrução do Qi do P)', value: 'Chorosa,  gemência (obstrução do Qi do P)', checked: false },
        { id: 7, name: 'Rouquidão, afonia gradual (def. Yin Qi do P e R)', value: 'Rouquidão, afonia gradual (def. Yin Qi do P e R)', checked: false },
        { id: 8, name: 'Afonia súbita (estase de  Qi do P, obstrução  de Qi do P)', value: 'Afonia súbita (estase de  Qi do P, obstrução  de Qi do P)', checked: false },
        { id: 9, name: 'Sem fala (frio interno, lesão interna)', value: 'Sem fala (frio interno, lesão interna)', checked: false },
        { id: 10, name: 'Pouca fala (síndrome def.iciência, Qi perverso frio ou lesão interna)', value: 'Pouca fala (síndrome def.iciência, Qi perverso frio ou lesão interna)', checked: false },
    ])
    const [respiracao, setRespiracao] = useState<IBasicArray[]>([
        { id: 1, name: 'Respiração fraca (def. Qi do C e P)', value: 'Respiração fraca (def. Qi do C e P)', checked: false },
        { id: 2, name: 'Falta de ar (def. Qi do P)', value: 'Falta de ar (def. Qi do P)', checked: false },
        { id: 3, name: 'Suspiro (estase do Qi do F)', value: 'Suspiro (estase do Qi do F)', checked: false },
        { id: 4, name: 'Tosse seca ( def. Yin do P)', value: 'Tosse seca ( def. Yin do P)', checked: false },
        { id: 5, name: 'Respiração forçada (flegma, Qi perverso umidade em P)', value: 'Respiração forçada (flegma, Qi perverso umidade em P)', checked: false },
        { id: 6, name: 'Dispnéia (estase  de  Qi do P)', value: 'Dispnéia (estase  de  Qi do P)', checked: false },
        { id: 7, name: 'Tosse rouca (Qi perverso vento-frio ou frio/flegma no P)', value: 'Tosse rouca (Qi perverso vento-frio ou frio/flegma no P)', checked: false },
        { id: 8, name: 'Tosse clara (Qi perverso vento/calor ou flegma/calor no P)', value: 'Tosse clara (Qi perverso vento/calor ou flegma/calor no P)', checked: false },
    ])
    const [falaobsr, setFalaobsr] = useState("");

    useEffect(()=>{
        dataAuscultacao({
            Fala: 0,
            Respiracao: 0,
            obs_fala: '',
            basic:[],
        }as IAuscultação)
    }, [])

    return (
        <View>
            <Text style={styles.title}>Auscultação</Text>
            <Text style={styles.title}>Fala</Text>
                {fala.map((item) => {
                    return (
                        <View key={`${item.id}`}>
                            <Text style={styles.text} children={item.name}></Text>
                            <CheckBox
                                onValueChange={() => item.checked = !item.checked}
                            />
                        </View>
                    );
                })}
            <Text>Observação</Text>
            <TextInput
                onChangeText={setFalaobsr}
                value={falaobsr}
                placeholder="Observação"
                style={styles.obs}
            />
            <Text style={styles.title}>Respiração</Text>
                {respiracao.map((item) => {
                    return (
                        <View key={`${item.id}`}>
                            <Text style={styles.text} children={item.name}></Text>
                            <CheckBox
                                onValueChange={() => item.checked = !item.checked}
                            />
                        </View>
                    );
                })}
        </View>
    )
}

export default Auscultacao;