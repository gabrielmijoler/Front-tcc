import { View, Text, TextInput, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { IBasicArray, IInterrogatorio } from '../../models';
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
        marginLeft: 12,
    },
    dataComponent: {
        width: 350,
        margin: 20,
    },
    title: {
        color:'#000',
        marginTop:10,
        fontSize: 20,
    },
    subtitle:{
        color:'#001',
        marginTop:8,
        marginBottom:8,
        fontSize: 15,
    },
    obs:{
        backgroundColor: '#d3d3d3',
    }
});
interface Props{
    datainterrogatorio: (data: IInterrogatorio)=> void
}


const Interrogatorio: React.FC<Props> = ({datainterrogatorio}) => {
    const [transpiracao, setTranspiracao] = useState<IBasicArray[]>([
        { id: 1, name: 'Sua pouco (normal)', value: 'Sua pouco (normal)', checked: false },
        { id: 2, name: 'Não sua (Qi perverso frio, def. Yang Qi, def. Xue)', value: 'Não sua (Qi perverso frio, def. Yang Qi, def. Xue)', checked: false },
        { id: 3, name: 'Sua muito (Qi perverso vento/calor )', value: 'Sua muito (Qi perverso vento/calor )', checked: false },
        { id: 4, name: 'Suor na cabeça (def. Yin Qi, calor no E)', value: 'Suor na cabeça (def. Yin Qi, calor no E)', checked: false },
        { id: 5, name: 'Suor frio (def. Yang Qi)', value: 'Suor frio (def. Yang Qi)', checked: false },
        { id: 6, name: 'Suor nas mãos e pés (debilidade dos R)', value: 'Suor nas mãos e pés (debilidade dos R)', checked: false },
        { id: 7, name: 'Suor noturno (def. Yin Qi, calor interno)', value: 'Suor noturno (def. Yin Qi, calor interno)', checked: false }
    ]);
    const [tranobs, setTranobs] = useState("")
    const [sono, setSono] = useState<IBasicArray[]>([
        { id: 1, name: 'Dorme bem', value: 'Dorme bem', checked: false },
        { id: 2, name: 'Insônia', value: 'Insônia', checked: false },
        { id: 3, name: 'Muito sono', value: 'Muito sono', checked: false },
        { id: 4, name: 'Pouco sono', value: 'Pouco sono', checked: false },
        { id: 5, name: 'Sonhos', value: 'Sonhos', checked: false }
    ]);
    const [sonobsr, setSonobsr] = useState("");
    const [emocao, setEmocao] = useState<IBasicArray[]>([
        { id: 1, name: 'Medo', value: 'Medo', checked: false },
        { id: 2, name: 'Preocupação/Pensamento excessivo', value: 'Preocupação/Pensamento excessivo', checked: false },
        { id: 3, name: 'Raiva/Irritabilidade', value: 'Raiva/Irritabilidade', checked: false },
        { id: 4, name: 'Ansiedade', value: 'Ansiedade', checked: false },
        { id: 5, name: 'Tristeza', value: 'Tristeza', checked: false },
        { id: 6, name: 'Alegria', value: 'Alegria', checked: false }
    ]);
    const [emotobsr, setEmotobsr] = useState("");
    const [cor, setCor] = useState<IBasicArray[]>([
        { id: 1, name: 'Verde/Azul', value: 'Verde/Azul', checked: false },
        { id: 2, name: 'Vermelho', value: 'Vermelho', checked: false },
        { id: 3, name: 'Amarelo', value: 'Amarelo', checked: false },
        { id: 4, name: 'Branco', value: 'Branco', checked: false },
        { id: 5, name: 'Preto', value: 'Preto', checked: false }
    ]);
    const [estacao, setEstacao] = useState<IBasicArray[]>([
        { id: 1, name: 'Primavera', value: 'Primavera', checked: false },
        { id: 2, name: 'Verão', value: 'Verão', checked: false },
        { id: 3, name: 'Final de Verão', value: 'Final de Verão', checked: false },
        { id: 4, name: 'Outono', value: 'Outono', checked: false },
        { id: 5, name: 'Inverno', value: 'Inverno', checked: false }
    ]);
    const [alimentacao, setAlimentacao] = useState<IBasicArray[]>([
        { id: 1, name: 'Come muito (calor no E)', value: 'Come muito (calor no E)', checked: false },
        { id: 2, name: 'Come pouco (def. Qi do BP, calor/umidade em BP, retenção de alimentos no E)', value: 'Come pouco (def. Qi do BP, calor/umidade em BP, retenção de alimentos no E)', checked: false },
        { id: 3, name: 'Sem apetite (vazio de Qi em BP e E)', value: 'Sem apetite (vazio de Qi em BP e E)', checked: false },
        { id: 4, name: 'Prefere alimentos quentes (síndrome de frio)', value: 'Prefere alimentos quentes (síndrome de frio)', checked: false },
        { id: 5, name: 'Prefere alimentos frios (síndrome de calor)', value: 'Prefere alimentos frios (síndrome de calor)', checked: false },
        
    ]);
    const [alimobs, setAlimobs] = useState("");
    const [sabores, setSabores] = useState<IBasicArray[]>([
        { id: 1, name: 'Salgado (def. Qi do R)', value: 'Salgado (def. Qi do R)', checked: false },
        { id: 2, name: 'Doce (def. Qi do BP)', value: 'Doce (def. Qi do BP)', checked: false },
        { id: 3, name: 'Picante (def. Qi do P)', value: 'Picante (def. Qi do P)', checked: false },
        { id: 4, name: 'Amargo (def. Qi do C)', value: 'Amargo (def. Qi do C)', checked: false },
        { id: 5, name: 'Azedo/ácido (estagnação de Qi do F)', value: 'Azedo/ácido (estagnação de Qi do F)', checked: false }
    ]);
    const [sabomobs, setSaboobs] = useState("");
    const [sede, setSede] = useState<IBasicArray[]>([
        { id: 1, name: 'Sem sede (plenitude e Qi perverso frio/umidade em BP)', value: 'Sem sede (plenitude e Qi perverso frio/umidade em BP)', checked: false },
        { id: 2, name: 'Pouca sede  (def. Yang Qi,, estagnação em meridianos, acúmulo de frio no E)', value: 'Pouca sede  (def. Yang Qi,, estagnação em meridianos, acúmulo de frio no E)', checked: false },
        { id: 3, name: 'Muita sede (calor interno)', value: 'Muita sede (calor interno)', checked: false },
        { id: 4, name: 'Preferência por  água gelada (calor interno)', value: 'Preferência por  água gelada (calor interno)', checked: false }
    ]);
    const [sedeobs, setSedeobs] = useState("");
    const [disfungastro, setDisfungastro] = useState<IBasicArray[]>([
        { id: 1, name: 'Hallitose  (retenção de alimentos no E)', value: 'Hallitose  (retenção de alimentos no E)', checked: false },
        { id: 2, name: 'Azia (Qi  do E em ascensão)', value: 'Azia (Qi  do E em ascensão)', checked: false },
        { id: 3, name: 'Náuseas (enjôos) (Qi perverso calor-umidade em E)', value: 'Náuseas (enjôos) (Qi perverso calor-umidade em E)', checked: false },
        { id: 4, name: 'Gastrite (Qi perverso calor em E)', value: 'Gastrite (Qi perverso calor em E)', checked: false },
        { id: 5, name: 'Constipação   (Qi perverso calor em IG)', value: 'Constipação   (Qi perverso calor em IG)', checked: false },
        { id: 6, name: 'Diarréia (Qi perverso calor ou frio/umidade)', value: 'Diarréia (Qi perverso calor ou frio/umidade)', checked: false },
    ]);
    const [digasobs, setDigasobs] = useState("");
    const [excrecoes, setExcrecoes] = useState<IBasicArray[]>([
        { id: 1, name: 'Diarréia seguida de alívio (def. Yang Qi do R )', value: 'Diarréia seguida de alívio (def. Yang Qi do R )', checked: false },
        { id: 2, name: 'Diarréia com alimentos não digeridos (def. Qi de BP)', value: 'Diarréia com alimentos não digeridos (def. Qi de BP)', checked: false },
        { id: 3, name: 'Fezes retidas (excesso de Yin Qi do R)', value: 'Fezes retidas (excesso de Yin Qi do R)', checked: false },
        { id: 4, name: 'Fezes finas com água (Umidade/frio em BP e E)', value: 'Fezes finas com água (Umidade/frio em BP e E)', checked: false },
        { id: 5, name: 'Fezes com muco (Qi perverso umidade/frio no IG)', value: 'Fezes com muco (Qi perverso umidade/frio no IG)', checked: false },
        { id: 6, name: 'Fezes secas (calor interno/def. Yin Qi)', value: 'Fezes secas (calor interno/def. Yin Qi)', checked: false },
        { id: 7, name: 'Fezes com sangue (Qi perverso calor no IG)', value: 'Fezes com sangue (Qi perverso calor no IG)', checked: false },
    ]);
    const [excrecoes2, setExcrecoes2] = useState<IBasicArray[]>([
        { id: 1, name: 'Escura (Qi perverso calor em R e B)', value: 'Escura (Qi perverso calor em R e B)', checked: false },
        { id: 2, name: 'Clara (Qi perverso frio)', value: 'Clara (Qi perverso frio)', checked: false },
        { id: 3, name: 'Muita (def. Yang Qi do R,  calor/umidade em B)', value: 'Muita (def. Yang Qi do R,  calor/umidade em B)', checked: false },
        { id: 4, name: 'Pouca (síndrome de calor)', value: 'Pouca (síndrome de calor)', checked: false },
        { id: 5, name: 'Incontinência/solta (def. Qi do R, afundamento do Qi do BP)', value: 'Incontinência/solta (def. Qi do R, afundamento do Qi do BP)', checked: false },
        { id: 6, name: 'Com  sangue /retenção (Qi perverso calor/umidade em  B)', value: 'Com  sangue /retenção (Qi perverso calor/umidade em  B)', checked: false },
        { id: 7, name: 'Enurese noturna (def. de Qi do R, disf. de B)', value: 'Enurese noturna (def. de Qi do R, disf. de B)', checked: false },
        { id: 8, name: 'Noctúria (def. Yang Qi do R)', value: 'Noctúria (def. Yang Qi do R)', checked: false }
    ]);
    const [escreobs, setEscresobs] = useState("");
    const [menstruacao, setMenstruacao] = useState<IBasicArray[]>([
        { id: 1, name: 'Ciclo prolongado e escasso  com coloração clara (def. de Qi e Xue,   Qi  perverso frio)', value: 'Ciclo prolongado e escasso  com coloração clara (def. de Qi e Xue,   Qi  perverso frio)', checked: false },
        { id: 2, name: 'Menorragia /ciclo diminuído com muito sangue  e  coloração escura (estagnação de sangue, calor no sangue, def. Qi de BP, hiperatividade do Yang Qi do F)', value: 'Menorragia /ciclo diminuído com muito sangue  e  coloração escura (estagnação de sangue, calor no sangue, def. Qi de BP, hiperatividade do Yang Qi do F)', checked: false },
        { id: 3, name: 'Metrorragia/ Irregular (estagnação e  Qi perverso calor  em Xue)', value: 'Metrorragia/ Irregular (estagnação e  Qi perverso calor  em Xue)', checked: false },
        { id: 4, name: 'Dismenorréia/cólicas (estagnação de Qi e Xue do F)', value: 'Dismenorréia/cólicas (estagnação de Qi e Xue do F)', checked: false },
        { id: 5, name: 'Amenorréia (def. Qi + Xue, def. Xue do F)', value: 'Amenorréia (def. Qi + Xue, def. Xue do F)', checked: false },
        { id: 6, name: 'Leucorréia  com corrimento branco, e aquoso  (def. de Yang  Qi do BP e do R)', value: 'Leucorréia  com corrimento branco, e aquoso  (def. de Yang  Qi do BP e do R)', checked: false },
        { id: 7, name: 'Leucorréia espessa com cor amarela e odor desagradável (Qi perverso umidade-calor em TA inferior)', value: 'Leucorréia espessa com cor amarela e odor desagradável (Qi perverso umidade-calor em TA inferior)', checked: false }
    ]);
    const [menstobs, setMenstobs] = useState("");
    const [olhovisao, setOlhovisao] = useState<IBasicArray[]>([
        { id: 1, name: 'Fraca (estagnação de  Qi do F, def. de Yin  Qi na  B e R)', value: 'Fraca (estagnação de  Qi do F, def. de Yin  Qi na  B e R)', checked: false },
        { id: 2, name: 'Turva (Qi perverso vento, def. Xue do F)', value: 'Turva (Qi perverso vento, def. Xue do F)', checked: false },
        { id: 3, name: 'Vermelhidão (fogo, ascensão do Yang  Qi do F)', value: 'Vermelhidão (fogo, ascensão do Yang  Qi do F)', checked: false },
        { id: 4, name: 'Secura (vazio de  Yin Qi do F)', value: 'Secura (vazio de  Yin Qi do F)', checked: false },
        { id: 6, name: 'Lacrimejamento (Qi perverso vento)', value: 'Lacrimejamento (Qi perverso vento)', checked: false }
    ]);
    const [ouviaudicao, setOuviaudicao] = useState<IBasicArray[]>([
        { id: 1, name: 'Zumbido (def. Yin Qi na B e R, vento)', value: 'Zumbido (def. Yin Qi na B e R,vento)', checked: false },
        { id: 2, name: 'Prurido (coceira)', value: 'Prurido (coceira)', checked: false },
        { id: 3, name: 'Fraca (def. Yin Qi da B e R)', value: 'Fraca (def. Yin Qi da B e R)', checked: false },
        { id: 4, name: 'Surdez (def. sangue no C, def, Yin Qi na B e R)', value: 'Surdez (def. sangue no C, def, Yin  Qi na B e R)', checked: false },
        { id: 5, name: 'Surdez súbita (fogo no F)', value: 'Surdez súbita (fogo no F)', checked: false }
        
    ]);
    const [narizolfato, setNarizolfato] = useState<IBasicArray[]>([
        { id: 1, name: 'Fraco (def.  Yin Qi dos P, Qi perverso vento/frio)', value: 'Fraco (def.  Yin Qi dos P, Qi perverso vento/frio)', checked: false },
        { id: 2, name: 'Anosmia (debilidade de IG)', value: 'Anosmia (debilidade de IG)', checked: false },
        { id: 3, name: 'Coriza/mucosidade (Qi perverso calor no P)', value: 'Coriza/mucosidade (Qi perverso calor no P)', checked: false },
        { id: 4, name: 'Prurido (Qi perverso vento no P)', value: 'Prurido (Qi perverso vento no P)', checked: false },
        { id: 5, name: 'Obstrução (Qi perverso vento no P)', value: 'Obstrução (Qi perverso vento no P)', checked: false }
    ]);
    const [tato, setTato] = useState<IBasicArray[]>([
        { id: 1, name: 'Fraco (def. Qi  do C)', value: 'Fraco (def. Qi  do C)', checked: false } 
    ]); 
    const [bocagosto, setBocagosto] = useState<IBasicArray[]>([
        { id: 1, name: 'Lábios pálidos (Qi  perverso frio/umidade em BP)', value: 'Lábios pálidos (Qi  perverso frio/umidade em BP)', checked: false },
        { id: 2, name: 'Lábios brancos ( def. de Yin Qi  e Xue do C)', value: 'Lábios brancos ( def. de Yin Qi  e Xue do C)', checked: false },
        { id: 3, name: 'Salivação (Qi perverso umidade em BP)', value: 'Salivação (Qi perverso umidade em BP)', checked: false },
        { id: 4, name: 'Secura (Xie em P e Wei Qi)', value: 'Secura (Xie em P e Wei Qi)', checked: false },
        { id: 5, name: 'Garganta seca (subida do Fogo do F)', value: 'Garganta seca (subida do Fogo do F)', checked: false },
        { id: 6, name: 'Boca amarga (Qi perverso calor/umidade em F e VB)', value: 'Boca amarga (Qi perverso calor/umidade em F e VB)', checked: false },
        { id: 7, name: 'Sangramentos (def. de Qi do BP)', value: 'Sangramentos (def. de Qi do BP)', checked: false },
        { id: 8, name: 'Lábios azulados (estase de Xue do C)', value: 'Lábios azulados (estase de Xue do C)', checked: false }
    ]);
    const [bocgostoobs, setBocgostoobs] = useState("");

    const Check = (givenId: Number) => {
        let updatedUserList = [...bocagosto]
        const objIndex = updatedUserList.findIndex(user => user.id == givenId);
        updatedUserList[objIndex].checked = !updatedUserList[objIndex].checked;
        setTranspiracao(updatedUserList)
    }
    const monstrarid = (id: any) => {
        console.log(id);
        let updatedUserList = [...transpiracao]
        const objIndex = updatedUserList.findIndex(user => user.id == id);
        updatedUserList[objIndex].checked = !updatedUserList[objIndex].checked;
        setTranspiracao(updatedUserList)
        console.log(updatedUserList)
      };

    useEffect(()=>{
        datainterrogatorio({
            Tranpiracao: 0,
            Obs_tranpiracao: '',
            Sono: 0,
            Obs_sono: '',
            Emocoes: 0,
            Obs_emocoes: '',
            Cor: 0,
            Estacao: 0,
            Alimentacao: 0,
            Obs_alimentacao: '',
            Sabores: 0,
            Obs_sabores: '',
            Sede: 0,
            Obs_sede: '',
            Disfuncoes_gastrointestinais: 0,
            Obs_disfuncoes: '',
            Excrecoes: 0,
            Excrecoes2: 0,
            Obs_excrecoes: '',
            Menstruacao: 0,
            Obs_mentruacao: '',
            Olho_visao: 0,
            Ouvidos_audicao: 0,
            Nariz_olfato: 0,
            Tato: 0,
            Boca_gosto: 0,
            Obs_bocagosot: '',
            basic:[]
        }as IInterrogatorio)
    }, [] )


        // const listItems = transpiracao.findIndex((item) =>
        //   item.id == id ? { ...item, checked: !item.checked } : item
        // );
        // setTranspiracao(transpiracao);
        // console.log(listItems)
    
    
    return (
        <View>
            <Text style={styles.title}>Interrogatório</Text>
            <Text style={styles.subtitle}>Transpiração</Text>
                <View>{ transpiracao.length > 0 &&
                transpiracao.map((item) => {
                    return (
                        <View key={`${item.id}`}>
                            <Text style={styles.text} children={item.name}></Text>
                            <CheckBox
                                onValueChange={()=> monstrarid(item.id)}
                                value={item.checked}
                                onCheckColor="#eee"
                                />
                        </View>
                    );
                })}
                </View>
            <Text>Horário:</Text>
            <TextInput
                onChangeText={setTranobs}
                value={tranobs}
                placeholder="23:00-6:00"
                style={styles.obs}
            />
            <Text style={styles.title}>Sono</Text>
                <View>{ sono.length > 0 &&
                sono.map((item) => {
                    return (
                        <View key={`${item.id}`}>
                            <Text style={styles.text} children={item.name}></Text>
                            <CheckBox
                                onValueChange={() => {item.checked = !item.checked; console.log(item.id)}}
                                value={item.checked}
                            />
                        </View>
                    );
                })}
                </View>
            <Text>Observação</Text>
            <TextInput
                onChangeText={setSonobsr}
                value={sonobsr}
                placeholder="Observação"
                style={styles.obs}
            />
            <Text style={styles.title}>Emoções</Text>
                {emocao.map((item) => {
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
                onChangeText={setEmotobsr}
                value={emotobsr}
                placeholder="Observação"
                style={styles.obs}
            />
            <Text style={styles.title}>Côr</Text>
                {cor.map((item) => {
                        return (
                            <View key={`${item.id}`}>
                                <Text style={styles.text} children={item.name}></Text>
                                <CheckBox
                                    onValueChange={() => item.checked = !item.checked}
                                />
                            </View>
                        );
                })}
            <Text style={styles.title}>Estação</Text>
                {estacao.map((item) => {
                    return (
                        <View key={`${item.id}`}>
                            <Text style={styles.text} children={item.name}></Text>
                            <CheckBox
                                onValueChange={() => item.checked = !item.checked}
                            />
                        </View>
                    );
                })}
            <Text style={styles.title}>Alimentação</Text>
                {alimentacao.map((item) => {
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
                onChangeText={setAlimobs}
                value={alimobs}
                placeholder="Observação"
                style={styles.obs}
            />
            <Text style={styles.title}>Sabores</Text>
                {sabores.map((item) => {
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
                onChangeText={setSaboobs}
                value={sabomobs}
                placeholder="Observação"
                style={styles.obs}
            />

            <Text style={styles.title}>Sede</Text>
                {sede.map((item) => {
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
                onChangeText={setSedeobs}
                value={sedeobs}
                placeholder="Observação"
                style={styles.obs}
            />

            <Text style={styles.title}>Disfunções gastro-intestinais</Text>
                {disfungastro.map((item) => {
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
                onChangeText={setDigasobs}
                value={digasobs}
                placeholder="Observação"
                style={styles.obs}
            />

            <Text style={styles.title}>Excreções</Text>
                {excrecoes.map((item) => {
                        return (
                            <View key={`${item.id}`}>
                                <Text style={styles.text} children={item.name}></Text>
                                <CheckBox
                                    onValueChange={() => item.checked = !item.checked}
                                />
                            </View>
                        );
                })}
            <Text>Observação de Excreções</Text>
            <TextInput
                onChangeText={setEscresobs}
                value={escreobs}
                placeholder="Observação"
                style={styles.obs}
            />
            
            <Text style={styles.title}>Menstruação</Text>
                {menstruacao.map((item) => {
                        return (
                            <View key={`${item.id}`}>
                                <Text style={styles.text} children={item.name}></Text>
                                <CheckBox
                                    onValueChange={() => item.checked = !item.checked}
                                />
                            </View>
                        );
                })}
            <Text>Observação Menstruação</Text>
            <TextInput
                onChangeText={setMenstobs}
                value={menstobs}
                placeholder="Observação"
                style={styles.obs}
            />
            <Text style={styles.title}>Órgão dos sentidos</Text>
            <Text style={styles.subtitle}>Olhos e visão</Text>
                {olhovisao.map((item) => {
                        return (
                            <View key={`${item.id}`}>
                                <Text style={styles.text} children={item.name}></Text>
                                <CheckBox
                                    onValueChange={() => item.checked = !item.checked}
                                />
                            </View>
                        );
                })}
            <Text style={styles.subtitle}>Ouvidos e Audição</Text>
                {ouviaudicao.map((item) => {
                        return (
                            <View key={`${item.id}`}>
                                <Text style={styles.text} children={item.name}></Text>
                                <CheckBox
                                    value={item.checked}  
                                    onValueChange={() => item.checked = !item.checked}
                                    tintColors={{ true: '#F15927', false: 'black' }}
                                    onCheckColor={'#6F763F'}
                                />
                            </View>
                        );
                })}
            <Text style={styles.subtitle}>Nariz e olfato</Text>
            {narizolfato.map((item) => {
                        return (
                            <View key={`${item.id}`}>
                                <Text style={styles.text} children={item.name}></Text>
                                <CheckBox
                                    onValueChange={() => item.checked = !item.checked}
                                />
                            </View>
                        );
                })}
            <Text style={styles.subtitle}>Tato</Text>
            {tato.map((item) => {
                        return (
                            <View key={`${item.id}`}>
                                <Text style={styles.text} children={item.name}></Text>
                                <CheckBox
                                    onValueChange={() => item.checked === !item.checked }
                                />
                            </View>
                        );
                })}

            <Text style={styles.subtitle}>Boca e gosto</Text>
                {bocagosto.map((item) => {
                        return (
                            <View key={`${item.id}`}>
                                <Text style={styles.text} children={item.name}></Text>
                                <CheckBox
                                    onValueChange={() => item.checked = !item.checked}
                                />
                            </View>
                        );
                        
                })}
            <Text>Observação - Órgão dos sentidos</Text>
            <TextInput
                onChangeText={setBocgostoobs}
                value={bocgostoobs}
                placeholder="Observação"
                style={styles.obs}
            />
        </View>
  );
  
}

export default Interrogatorio;