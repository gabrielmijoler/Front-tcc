import { View, Text, TextInput, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { Client, IAuscultação } from '../../models';
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
    const [fala, setFala] = useState(0);
    const [respiracao, setRespiracao] = useState(0);
    const [falaobsr, setFalaobsr] = useState("");

    useEffect(()=>{
        dataAuscultacao({
            Fala: fala,
            Respiracao: respiracao,
            obs_fala: falaobsr,
        }as IAuscultação)
    }, [
        fala,
        respiracao,
        falaobsr,
    ])

    return (
        <View>
            <Text style={styles.title}>Auscultação</Text>
            <Text style={styles.text}>Fala</Text>
            <Text>Fala alta  (síndrome de excesso, calor )</Text>
            <CheckBox
                value={fala === 1}
                onValueChange={()=>setFala(1)}
            />
            <Text>Fala baixo (síndrome de def. , frio)</Text>
            <CheckBox
               value={fala === 2}
               onValueChange={()=>setFala(2)}
            />
            <Text>Fala incoerente (debilidade do C)</Text>
            <CheckBox
               value={fala === 3}
               onValueChange={()=>setFala(3)}
            />
            <Text>Fala muito (def. Yin do C )</Text>
            <CheckBox
                value={fala === 4}
                onValueChange={()=>setFala(4)}
            />
            <Text>Gagueira (Qi perverso vento/fleuma C)</Text>
            <CheckBox
                value={fala === 5}
                onValueChange={()=>setFala(5)}
            />
            <Text>Chorosa,  gemência (obstrução do Qi do P)</Text>
            <CheckBox
                value={fala === 6}
                onValueChange={()=>setFala(6)}
            />
            <Text>Rouquidão, afonia gradual (def. Yin Qi do P e R)</Text>
            <CheckBox
                value={fala === 7}
                onValueChange={()=>setFala(7)}
            />
            <Text>Afonia súbita (estase de  Qi do P, obstrução  de Qi do P)</Text>
            <CheckBox
                value={fala === 8}
                onValueChange={()=>setFala(8)}
            />
            <Text>Sem fala (frio interno, lesão interna)</Text>
            <CheckBox
               value={fala === 9}
               onValueChange={()=>setFala(9)}
            />
            <Text>Pouca fala (síndrome def.iciência, Qi perverso frio ou lesão interna)</Text>
            <CheckBox
                value={fala === 10}
                onValueChange={()=>setFala(10)}
            />
            <Text>Observação</Text>
            <TextInput
                onChangeText={setFalaobsr}
                value={falaobsr}
                placeholder="Observação"
                style={styles.obs}
            />
            <Text style={styles.title}>Respiração</Text>

            <Text>Respiração fraca (def. Qi do C e P)</Text>
            <CheckBox
                value={respiracao === 1}
                onValueChange={()=>setRespiracao(1)}
            />
            <Text>Falta de ar (def. Qi do P)</Text>
            <CheckBox
                value={respiracao === 2}
                onValueChange={()=>setRespiracao(2)}
            />
            <Text>Suspiro (estase do Qi do F)</Text>
            <CheckBox
                value={respiracao === 3}
                onValueChange={()=>setRespiracao(3)}
            />
            <Text>Tosse seca ( def. Yin do P) </Text>
            <CheckBox
                value={respiracao === 4}
                onValueChange={()=>setRespiracao(4)}
            />
            <Text>Respiração forçada (flegma, Qi perverso umidade em P) </Text>
            <CheckBox
                value={respiracao === 5}
                onValueChange={()=>setRespiracao(5)}
            />
            <Text>Dispnéia (estase  de  Qi do P)</Text>
            <CheckBox
                value={respiracao === 6}
                onValueChange={()=>setRespiracao(6)}
            />
            <Text>Tosse rouca (Qi perverso vento-frio ou frio/flegma no P) </Text>
            <CheckBox
                value={respiracao === 7}
                onValueChange={()=>setRespiracao(7)}
            />
            <Text> Tosse clara (Qi perverso vento/calor ou flegma/calor no P)</Text>
            <CheckBox
                value={respiracao === 8}
                onValueChange={()=>setRespiracao(8)}
            />
        </View>
    )
}

export default Auscultacao;