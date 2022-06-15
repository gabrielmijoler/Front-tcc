import { View, Text, StyleSheet, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';
import  CheckBox  from '@react-native-community/checkbox';
import { ILingua } from '../../models';

const styles = StyleSheet.create({
    title: {
        color: '#000',
        fontSize: 30,
    },
    obs:{
        backgroundColor: '#d3d3d3',
    }
});

interface Props{
    datalingua: (data: ILingua)=> void
}

const Lingua: React.FC<Props>= ({datalingua}) => {
    const [lingua, setLingua] = useState(0);
    const [obs, setObs] = useState("");

    useEffect(()=>{
        datalingua({
            lingua,
            obs_lingua: obs
        }as ILingua)
    }, [
        lingua,
        obs
    ])
    return (
        <View>
            <Text style={styles.title}>Língua.</Text>
            <Text>Pálida e seca (def. Xue)</Text>
            <CheckBox
                value={lingua === 1}
                onValueChange={()=>setLingua(1)}
            />
            <Text>Pálida e úmida (def. Yang Qi)</Text>
            <CheckBox
                value={lingua === 2}
                onValueChange={()=>setLingua(2)}
            />
            <Text>Vermelha (calor, def. Yin Qi)</Text>
            <CheckBox
                value={lingua === 3}
                onValueChange={()=>setLingua(3)}

            />
            <Text>Vermelha com áreas avermelhadas (estagnação de Xue)</Text>
            <CheckBox
                value={lingua === 4}
                onValueChange={()=>setLingua(4)}
            />
            <Text>Ulcerada e vermelha (ascensão de fogo do C)</Text>
            <CheckBox
                value={lingua === 5}
                onValueChange={()=>setLingua(5)}
            />
            <Text>Com fissuras  (calor excessivo, def. Yin Qi do R)</Text>
            <CheckBox
                value={lingua === 6}
                onValueChange={()=>setLingua(6)}
            />
            <Text>Com saburra  branca (frio interno)</Text>
            <CheckBox
                value={lingua === 7}
                onValueChange={()=>setLingua(7)}
            />
            <Text>Com saburra amarela (calor interno) </Text>
            <CheckBox
               value={lingua === 8}
               onValueChange={()=>setLingua(8)}
            />
            <Text>Sem saburra (Insuficiência de Qi do E) </Text>
            <CheckBox
               value={lingua === 9}
               onValueChange={()=>setLingua(9)}
            />
            <Text>Denteada (umidade, def. Qi do BP)</Text>
            <CheckBox
                value={lingua === 10}
                onValueChange={()=>setLingua(10)}
            />
            <Text>Inchada (umidade em BP)</Text>
            <CheckBox
               value={lingua === 11}
               onValueChange={()=>setLingua(11)}
            />
            <Text>Púrpura ou violácea (estase de Xue)</Text>
            <CheckBox
                value={lingua === 12}
                onValueChange={()=>setLingua(12)}
            />
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