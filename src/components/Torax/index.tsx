import { View, Text, TextInput, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { Client, ITorax } from '../../models';
import CheckBox from '@react-native-community/checkbox';
import RNPickerSelect from 'react-native-picker-select'
import { PrivateValueStore } from '@react-navigation/native';

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
        marginTop: 10,
        fontSize: 20,
    },
    obs: {
        backgroundColor: '#d3d3d3',
    }
});
interface Props {
    datatorax: (data: ITorax) => void
}
const Torax: React.FC<Props> = ({ datatorax }) => {
    const [torax, setTorax] = useState([
        { id: 1, name: 'Dores (alterações patológicas do C e P)', value: 'Dores (alterações patológicas do C e P)', checked: false },
        { id: 2, name: 'Opressão (Qi perverso frio e umidade no P)', value: 'Opressão (Qi perverso frio e umidade no P)', checked: false },

    ])
    const [dorescabeca, setDorescabeca] = useState([
        { id: 1, name: 'Frontal (retenção de alimentos no E)', value: 'Frontal (retenção de alimentos no E)', checked: false },
        { id: 2, name: 'Orbital (def. Xue do F)', value: 'Orbital (def. Xue do F)', checked: false },
        { id: 3, name: 'Ápice (excesso/ascensão Yang F)', value: 'Ápice (excesso/ascensão Yang F)', checked: false },
        { id: 4, name: 'Temporal (hiperatividade de Yang Qi do F, calor/umidade de F e VB)', value: 'Temporal (hiperatividade de Yang Qi do F, calor/umidade de F e VB)', checked: false },
        { id: 5, name: 'Occipital (distúrbio de B e ID)', value: 'Occipital (distúrbio de B e ID)', checked: false },
        { id: 6, name: 'Generalizada (ascensão/Inversão Yang F)', value: 'Generalizada (ascensão/Inversão Yang F)', checked: false },
    ])
    const [obstorax, setObstorax] = useState("")
    const [obsdorescab, setObsdorescab] = useState("")
    const [escalanalog, setEscalanalog] = useState("")
    const pickerRef = React.useRef<RNPickerSelect | null>()
    {
        torax.map((item) => {
            return (
                <>
                    <Text key={item.name}></Text>
                    <CheckBox
                        key={item.id}
                        onValueChange={() => item.checked = !item.checked}
                    />
                </>
            );
        })
    }
    {
        dorescabeca.map((item) => {
            return (
                <>
                    <Text key={item.name}></Text>
                    <CheckBox
                        key={item.id}
                        onValueChange={() => item.checked = !item.checked}
                    />
                </>
            );
        })
    }

    // {torax.map((item) => (
    //      `<CheckBox
    //      onValueChange={(item)=>${item.titulo}${item.value}}
    //     />`
    // ))}

    // useEffect(() => {
    //     datatorax({
    //         Torax: torax,
    //         Dores_cabeca: dorescabeca,
    //         Obs_torax: obstorax,
    //         Obs_dorescabe: obsdorescab,
    //         Escala_analogdor: escalanalog,
    //     } as ITorax)
    // }, [
    //     torax,
    //     dorescabeca,
    //     obstorax,
    //     obsdorescab,
    //     escalanalog,
    // ])


    return (

        <View>
            <Text style={styles.text}>Tórax</Text>
            <TextInput
                onChangeText={setObstorax}
                value={obstorax}
                placeholder="Observação Toráx"
                style={styles.obs}
            />
            <Text style={styles.text}>Dores de cabeça</Text>
            <TextInput
                onChangeText={setObsdorescab}
                value={obsdorescab}
                placeholder="Observação Dores de cabeça"
                style={styles.obs}
            />
            <Text style={styles.text}>ESCALA ANALÓGICA DE DOR</Text>
            <RNPickerSelect
                ref={r => pickerRef.current = r}
                value={3}
                placeholder={{ label: '3', value: '3' }}
                onValueChange={() => setEscalanalog}
                items={[
                    { label: "1", value: "1" },
                    { label: "2", value: "2" },
                    { label: "3", value: "3" },
                    { label: "4", value: "4" },
                    { label: "5", value: "5" },
                    { label: "6", value: "6" },
                    { label: "7", value: "7" },
                    { label: "8", value: "8" },
                    { label: "9", value: "9" },
                    { label: "10", value: "10" },
                ]}
            />
        </View>
    )
}

export default Torax;