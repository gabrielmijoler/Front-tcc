import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import  CheckBox  from '@react-native-community/checkbox';
import { IBasicArray, ILingua } from '../../models';

const styles = StyleSheet.create({
    title: {
        color: '#000',
        fontSize: 30,
    },
    obs:{
        backgroundColor: '#d3d3d3',
    },
    text: {
        color: '#000',
        marginBottom: 10,
        marginTop: 10
    },
    scroll: {
           overflow: 'scroll',
    },
    

});

interface Props{
    datalingua: (data: ILingua)=> void
}

const Lingua: React.FC<Props>= ({datalingua}) => {
    const [lingua, setLingua] = useState<IBasicArray[]>([
        { id: 1, name: 'Pálida e seca (def. Xue)', value: 'Pálida e seca (def. Xue)', checked: false },
        { id: 2, name: 'Pálida e úmida (def. Yang Qi)', value: 'Pálida e úmida (def. Yang Qi)', checked: false },
        { id: 3, name: 'Vermelha (calor, def. Yin Qi)', value: 'Vermelha (calor, def. Yin Qi)', checked: false },
        { id: 4, name: 'Vermelha com áreas avermelhadas (estagnação de Xue)', value: 'Vermelha com áreas avermelhadas (estagnação de Xue)', checked: false },
        { id: 5, name: 'Ulcerada e vermelha (ascensão de fogo do C)', value: 'Ulcerada e vermelha (ascensão de fogo do C)', checked: false },
        { id: 6, name: 'Com fissuras  (calor excessivo, def. Yin Qi do R)', value: 'Com fissuras  (calor excessivo, def. Yin Qi do R)', checked: false },
        { id: 7, name: 'Com saburra  branca (frio interno)', value: 'Com saburra  branca (frio interno)', checked: false },
        { id: 8, name: 'Com saburra amarela (calor interno) ', value: 'Com saburra amarela (calor interno) ', checked: false },
        { id: 9, name: 'Sem saburra (Insuficiência de Qi do E)', value: 'Sem saburra (Insuficiência de Qi do E)', checked: false },
        { id: 10, name: 'Denteada (umidade, def. Qi do BP)', value: 'Denteada (umidade, def. Qi do BP)', checked: false },
        { id: 11, name: 'Inchada (umidade em BP)', value: 'Inchada (umidade em BP)', checked: false },
        { id: 12, name: 'Púrpura ou violácea (estase de Xue)', value: 'Púrpura ou violácea (estase de Xue)', checked: false },
    ])
    const [obs, setObs] = useState("");
    
    useEffect(()=>{
        datalingua({
            lingua: 0,
            obs_lingua: '',
            basic:[],
        }as ILingua)
    }, [
        lingua,
        obs
    ])
    return (
        <View style={styles.scroll}>
            <Text style={styles.title}>Língua.</Text>
                {lingua.map((item) => {
                        return (
                            <View key={`${item.id}`}>
                                <Text style={styles.text} children={item.name}></Text>
                                <CheckBox
                                    onValueChange={() => item.checked = !item.checked}
                                />
                            </View>
                        );
                })}
            <TextInput
            onChangeText={setObs}
            value={obs}
            placeholder="Observação"
            style={styles.obs}
            />
        </View>
    )
}

export default Lingua;