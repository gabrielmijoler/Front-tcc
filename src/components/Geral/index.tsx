import { View, Text, StyleSheet, TextInput, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import  CheckBox  from '@react-native-community/checkbox';
import { IGeral, IBasicArray } from '../../models';

const styles = StyleSheet.create({
    title: {
        marginTop:10,
        fontSize: 20,
    },
    check:{
        flexDirection: "row",
    }, 
    logo: {
        marginHorizontal: 95,
        width: 200,
        height: 300,
    },
    obs:{
        backgroundColor: '#d3d3d3',
    },
    text: {
        color: '#000',
        marginBottom: 10,
        marginTop: 10
    },
});
interface Props{
    datageral: (data: IGeral)=> void
}
const Geral: React.FC<Props>= ({datageral}) => {
    const [formpostura, setFormpostura] = useState<IBasicArray[]>([
        { id: 1, name: 'Ombro largo, cintura fina proporcionalmente, tórax bem desenvolvido testa larga, - brilho muito intenso nos olhos.', value: 'Ombro largo, cintura fina proporcionalmente, tórax bem desenvolvido testa larga, - brilho muito intenso nos olhos.', checked: false },
        { id: 2, name: 'Tórax bem desenvolvido, - tronco curto, pernas compridas proporcionalmente, - possui brilho nos olhos, pele clara, seca, não muito macia, voz clara e aguda.', value: 'Tórax bem desenvolvido, - tronco curto, pernas compridas proporcionalmente, - possui brilho nos olhos, pele clara, seca, não muito macia, voz clara e aguda.', checked: false },
        { id: 3, name: 'Pescoço bem desenvolvido, tronco comprido, perna curta proporcional, tórax não muito desenvolvido, cintura e barriga proeminente, esqueleto grosso, mãos e pés grandes e úmidos  pele e musculatura consistente, muita transpiração, quadril largo.', value: 'Pescoço bem desenvolvido, tronco comprido, perna curta proporcional, tórax não muito desenvolvido, cintura e barriga proeminente, esqueleto grosso, mãos e pés grandes e úmidos  pele e musculatura consistente, muita transpiração, quadril largo.', checked: false },
        { id: 4, name: 'Em geral estatura pequena, corpo proporcional, bem equilibrado, mãos e pés pequenos, pele fina macia, pouca transpiração, não possui brilho nos olhos.', value: 'Em geral estatura pequena, corpo proporcional, bem equilibrado, mãos e pés pequenos, pele fina macia, pouca transpiração, não possui brilho nos olhos.', checked: false }
    ]);
    const [corpele, setCorpele] = useState<IBasicArray[]>([
        { id: 1, name: 'Face brilhante (normal)', value: 'Face brilhante (normal)', checked: false },
        { id: 2, name: 'Face opaca (def. Qi)', value: 'Face opaca (def. Qi)', checked: false },
        { id: 3, name: 'Face amarelada (E e BP)', value: 'Face amarelada (E e BP)', checked: false },
        { id: 4, name: 'Face pálida (def. Qi e Xue, def. Qi do C, frio)', value: 'Face pálida (def. Qi e Xue, def. Qi do C, frio)', checked: false },
        { id: 5, name: 'Face avermelhada (ascensão do fogo do F, calor)', value: 'Face avermelhada (ascensão do fogo do F, calor)', checked: false },
        { id: 6, name: 'Face esverdeada ou azulada (estagnação de Qi do F)', value: 'Face esverdeada ou azulada (estagnação de Qi do F)', checked: false },
        { id: 7, name: 'Face escurecida (def. de R)', value: 'Face escurecida (def. de R)', checked: false },
        { id: 8, name: 'Pele seca (def. Qi e meridianos)', value: 'Pele seca (def. Qi e meridianos)', checked: false },
        { id: 9, name: 'Pele úmida (def. Yin Qii)', value: 'Pele úmida (def. Yin Qii)', checked: false },
    ])
    const [cabecaecabelo, setCabecaecabelo] = useState("");
    const [nariz , setNariz ] = useState("");
    const [orelhas , setOrelhas ] = useState("");
    const [labidentgen, setLabidentgen] = useState("");
    const [pcorescicatr , setPcorescicatr] = useState("");
    
    useEffect(()=>{
        datageral({
            formpostura: 0,
            cor_pele: 0,
            cabeecabelos_input: '',
            Nariz: '',
            Orelhas: '',
            Labios_input: '',
            Pele: '',
            basic:[],
        }as IGeral)
    }, [])
    
    return (
        
        <View>
            <Text style={styles.title}>Geral.</Text>
                <Text style={styles.title}>Aspecto geral do corpo (forma, postura, locomoção, astenia):</Text>
                    {formpostura.map((item) => {
                        return (
                            <View key={`${item.id}`}>
                                <Text style={styles.text} children={item.name}></Text>
                                <CheckBox
                                    onValueChange={() => item.checked = !item.checked}
                                />
                            </View>
                        );
                    })}
                <Text style={styles.title}>Cor da pele</Text>
                {corpele.map((item) => {
                    return (
                        <View key={`${item.id}`}>
                            <Text style={styles.text} children={item.name}></Text>
                            <CheckBox
                                onValueChange={() => item.checked = !item.checked}
                            />
                        </View>
                    );
                })}
                <Text style={styles.title}>Expressão do rosto:</Text>
                <Image
                    source={require('../../imagem/rosto.png')}
                    style={styles.logo}
                />
                <Text style={styles.title}>Cabeçã e Cabelos</Text>
                <TextInput
                onChangeText={setCabecaecabelo}
                value={cabecaecabelo}
                placeholder="Descreva"
                style={styles.obs}
                />
                <Text style={styles.title}>Nariz (deformidades, secreções):</Text>
                <TextInput
                onChangeText={setNariz}
                value={nariz}
                placeholder="Descreva"
                style={styles.obs}
                />
                <Text style={styles.title}>Orelhas (coloração, brilho, aspecto interior):</Text>
                <TextInput
                onChangeText={setOrelhas}
                value={orelhas}
                placeholder="Descreva"
                style={styles.obs}
                />
                <Text style={styles.title}>Lábios, dentes, gengiva, garganta (cor, umidade, forma, ulceração, morfologia):</Text>
                <TextInput
                onChangeText={setLabidentgen}
                value={labidentgen}
                placeholder="Descreva"
                style={styles.obs}
                />
                <Text style={styles.title}>Pele (alterações da cor, textura, cicatrizes, alterações morfológicas):</Text>
                <TextInput
                onChangeText={setPcorescicatr}
                value={pcorescicatr}
                placeholder="Descreva"
                style={styles.obs}
                />
        </View>
    )
}

export default Geral;