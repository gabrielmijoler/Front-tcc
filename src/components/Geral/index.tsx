import { View, Text, StyleSheet, TextInput, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import  CheckBox  from '@react-native-community/checkbox';
import { IGeral } from '../../models';

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
    }
});
interface Props{
    datageral: (data: IGeral)=> void
}
const Geral: React.FC<Props>= ({datageral}) => {
    const [formpostura, setFormpostura] = useState(0);
    const [corpele, setCorpele] = useState(0);
    const [cabecaecabelo, setCabecaecabelo] = useState("");
    const [nariz , setNariz ] = useState("");
    const [orelhas , setOrelhas ] = useState("");
    const [labidentgen, setLabidentgen] = useState("");
    const [pcorescicatr , setPcorescicatr] = useState("");
    
    useEffect(()=>{
        datageral({
            formpostura,
            cor_pele: corpele,
            cabeecabelos_input: cabecaecabelo,
            Nariz: nariz,
            Orelhas: orelhas,
            Labios_input: labidentgen,
            Pele: pcorescicatr,
        }as IGeral)
    }, [
        formpostura,
        corpele,
        cabecaecabelo,
        nariz,
        orelhas,
        labidentgen,
        pcorescicatr,
    ])
    
    return (
        <View>
            <Text style={styles.title}>Geral.</Text>
            <Text style={styles.title}>Aspecto geral do corpo (forma, postura, locomoção, astenia):</Text>
                <Text>Ombro largo, cintura fina proporcionalmente, tórax bem desenvolvido testa larga, - brilho muito intenso nos olhos.</Text>
                <CheckBox
                    value={formpostura === 1}
                    onValueChange={()=>setFormpostura(1)}
                />
                <Text>Tórax bem desenvolvido, - tronco curto, pernas compridas proporcionalmente, - possui brilho nos olhos, pele clara, seca, não muito macia, voz clara e aguda.</Text>
                <CheckBox
                    value={formpostura === 2}
                    onValueChange={()=>setFormpostura(2)}
                />
                <Text>Pescoço bem desenvolvido, tronco comprido, perna curta proporcional, tórax não muito desenvolvido, cintura e barriga proeminente, esqueleto grosso, mãos e pés grandes e úmidos  pele e musculatura consistente, muita transpiração, quadril largo.</Text>
                <CheckBox
                    value={formpostura === 3}
                    onValueChange={()=>setFormpostura(3)}

                />
                <Text>Em geral estatura pequena, corpo proporcional, bem equilibrado, mãos e pés pequenos, pele fina macia, pouca transpiração, não possui brilho nos olhos.</Text>
                <CheckBox
                    value={formpostura === 4}
                    onValueChange={()=>setFormpostura(4)}
                />
                <Text style={styles.title}>Cor da pele</Text>
                <Text> Face brilhante (normal)</Text>
                <CheckBox
                    value={corpele === 1}
                    onValueChange={()=>setCorpele(1)}
                />
                <Text>Face opaca (def. Qi)</Text>
                <CheckBox
                    value={corpele === 2}
                    onValueChange={()=>setCorpele(2)}
                />
                <Text>Face amarelada (E e BP)</Text>
                <CheckBox
                    value={corpele === 3}
                    onValueChange={()=>setCorpele(3)}

                />
                <Text>Face amarelada (E e BP) </Text>
                <CheckBox
                    value={corpele === 4}
                    onValueChange={()=>setCorpele(4)}

                />
                <Text>Face avermelhada (ascensão do fogo do F, calor) </Text>
                <CheckBox
                    value={corpele === 5}
                    onValueChange={()=>setCorpele(5)}

                />
                <Text>Face esverdeada ou azulada (estagnação de Qi do F) </Text>
                <CheckBox
                    value={corpele === 6}
                    onValueChange={()=>setCorpele(6)}

                />
                <Text>Face escurecida (def. de R)</Text>
                <CheckBox
                    value={corpele === 7}
                    onValueChange={()=>setCorpele(7)}
                    
                />
                <Text>Pele seca (def. Qi e meridianos)</Text>
                <CheckBox
                    value={corpele === 8}
                    onValueChange={()=>setCorpele(8)}
                    
                />
                <Text>Pele úmida (def. Yin Qii)</Text>
                <CheckBox
                    value={corpele === 9}
                    onValueChange={()=>setCorpele(9)}
                />
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