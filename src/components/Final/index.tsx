import { View, Text, TextInput, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import { IFinal } from '../../models';

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        color: "#000",
        backgroundColor: "#f3F2F2"
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
    fail:{
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
        marginLeft: 12,
        marginTop:5,
    },
    dataComponent:{
        width:350,
        margin:20,
    },
    obs:{
        backgroundColor: '#d3d3d3',
    }
});
interface Props{
    dataFinal: (data: IFinal)=> void
} 


const Final: React.FC<Props> = ({dataFinal}) => {
    const [neuromuscular, setNeuromuscular] = useState("");
    const [diagnosticoteurapeutico, setDiagnosticoteurapeutico] = useState("");
    const [objetivo, setObjetivo] = useState("");
    const [medicamento, setMedicamento] = useState("");
    const [patalogia, setPatalogia] = useState("");
    const [condutas, setCondutas] = useState("");
    
    useEffect(()=>{
        dataFinal({
        Neuromuscular: '',
        Diagnostico_teurapeutico: '', 
        Objetivo: '',
        Medicamento: '',
        Patalogia: '',
        Condutas: '',
        }as IFinal)
    }, [])
    return (
        <View>
            <Text style={styles.text}>Teste Neuromuscular Bioenergético (Constitucional, O-Ring Test, Cinesiologia  Aplicada)</Text>
            <TextInput
                style={styles.input}
                onChangeText={setNeuromuscular}
                value={neuromuscular}
            />
            <Text style={styles.text}>DIAGNÓSTICO TERAPÊUTICO</Text>
            <TextInput
                style={styles.input}
                onChangeText={setDiagnosticoteurapeutico}
                value={diagnosticoteurapeutico}
            />
            <Text style={styles.text}>OBJETIVOS</Text>
            <TextInput
                style={styles.input}
                onChangeText={setObjetivo}
                value={objetivo}
            />
            <Text style={styles.text}>MEDICAMENTOS</Text>
            <TextInput
                style={styles.input}
                onChangeText={setMedicamento}
                value={medicamento}
            />
            <Text style={styles.text}>OBJETIVOS</Text>
            <TextInput
                style={styles.input}
                onChangeText={setPatalogia}
                value={patalogia}
            />
            <Text style={styles.text}>Condutas</Text>
            <TextInput
                style={styles.input}
                onChangeText={setCondutas}
                value={condutas}
            />
        </View>
    )
}
export default Final;