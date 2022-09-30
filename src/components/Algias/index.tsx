import { View, Text, TextInput, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { Client, IAlgias, IBasicArray } from '../../models';
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
    dataAlgias: (data: IAlgias)=> void
}


const Algias: React.FC<Props> = ({ dataAlgias }) => {
    const [coluna, setColuna] = useState<IBasicArray[]>([
        { id: 1, name: 'Cervical', value: 'Cervical', checked: false },
        { id: 2, name: 'Torácica', value: 'Torácica', checked: false },
        { id: 3, name: 'Lombar', value: 'Lombar', checked: false },
        { id: 4, name: 'Cervical com irradiação para membros superiores', value: 'Cervical com irradiação para membros superiores', checked: false }
    ]);
    const [doresmusculares, setDoresmusculares] = useState<IBasicArray[]>([
        { id: 1, name: 'Tendinites (estagnação de Qi do F)', value: 'Tendinites (estagnação de Qi do F)', checked: false },
        { id: 2, name: 'Dor migratória muscular (Qi perverso vento)', value: 'Dor migratória muscular (Qi perverso vento)', checked: false },
        { id: 3, name: 'Espasmo agudo, facada, pontada, inflamação (Vazio de Yin Qi,  Qi perverso calor)', value: 'Espasmo agudo, facada, pontada, inflamação (Vazio de Yin Qi,  Qi perverso calor )', checked: false },
        { id: 4, name: 'Câimbras (def.  Xue do F)', value: 'Câimbras (def.  Xue do F)', checked: false },
        { id: 5, name: 'Contraturas, queimação, contínua e profunda (Qi  perverso frio , vazio de Yang Qi)', value: 'Contraturas, queimação, contínua e profunda (Qi  perverso frio , vazio de Yang Qi)', checked: false },
    ]);
    const [doresarticulares, setDoresarticulares] = useState<IBasicArray[]>([
        { id: 1, name: 'Bi errante: dor nas articulações das extremidades com limitação de movimento  (Qi perverso vento)', value: 'Bi  errante: dor nas articulações das extremidades com limitação de movimento  (Qi perverso vento)', checked: false },
        { id: 2, name: 'Bi fixa: dor  localizada com dormência e sensação de peso (estagnação de Qi e Xue,  Qi perverso frio/umidade)', value: 'Bi  fixa: dor  localizada com dormência e sensação de peso (estagnação de Qi e Xue,  Qi perverso frio/umidade)', checked: false },
        { id: 3, name: 'Bi dolorida : dor  aliviada com calor agravada pelo frio (Qi perverso frio)', value: 'Bi  dolorida : dor  aliviada com calor agravada pelo frio (Qi perverso frio)', checked: false },
        { id: 4, name: 'Dores migratórias (Qi perverso vento, disfunção de VB)', value: 'Dores migratórias (Qi perverso vento, disfunção de VB)', checked: false },
        { id: 5, name: 'Bi febril: com vermelhidão, inchaço e sensibilidade local (Qi perverso vento/frio/umidade se transformam em  calor )', value: 'Bi  febril: com vermelhidão, inchaço e sensibilidade local (Qi perverso vento/frio/umidade se transformam em  calor )', checked: false },
    ]);
    const [abdome, setAbdome] = useState<IBasicArray[]>([
        { id: 1, name: 'Dores epigástricas (Qi perverso frio no E)', value: 'Dores epigástricas (Qi perverso frio no E)', checked: false },
        { id: 2, name: 'Dor no hipocôndrio tipo pontada (estase de Qi do F)', value: 'Dor no hipocôndrio tipo pontada (estase de Qi do F)', checked: false },
    ]);
    const [obscoluna, setObscoluna] = useState("");
    const [obsabdome, setObsabdome] = useState("");
    
    useEffect(()=>{
        dataAlgias({
            Coluna: 0,
            Obs_coluna: '',
            dores_musculares: '',
            dores_articulares: '',
            abdome: [],
            obs_abdome: '',
        } as  IAlgias,)
    }, [])
    

    return (
        <View>
            {coluna.map((item) => {
                return (
                    <View key={`${item.id}`}>
                        <Text style={styles.text} children={item.name}></Text>
                        <CheckBox
                            onValueChange={() => item.checked = !item.checked}
                        />
                    </View>
                );
            })}
            {doresmusculares.map((item) => {
                return (
                    <View key={`${item.id}`}>
                        <Text style={styles.text} children={item.name}></Text>
                        <CheckBox
                            onValueChange={() => item.checked = !item.checked}
                        />
                    </View>
                );
            })}
            {doresarticulares.map((item) => {
                return (
                    <View key={`${item.id}`}>
                        <Text style={styles.text} children={item.name}></Text>
                        <CheckBox
                            onValueChange={() => item.checked = !item.checked}
                        />
                    </View>
                );
            })}
            {abdome.map((item) => {
                return (
                    <View key={`${item.id}`}>
                        <Text style={styles.text} children={item.name}></Text>
                        <CheckBox
                            onValueChange={() => item.checked = !item.checked}
                            accessibilityRole='radio'
                        />
                    </View>
                );
            })}
        </View>
    )
}

export default Algias;