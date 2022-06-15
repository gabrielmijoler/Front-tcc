import { View, Text, TextInput, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { Client, IFormulario } from '../../models';
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
    dataformulario: (data: IFormulario)=> void
}

const Interrogatorio: React.FC<Props> = ({dataformulario}) => {
    const [transpiracao, setTranspiracao] = useState(0);
    const [tranobs, setTranobs] = useState("");
    const [sono, setSono] = useState(0);
    const [sonobsr, setSonobsr] = useState("");
    const [emocao, setEmocao] = useState(0);
    const [emotobsr, setEmotobsr] = useState("");
    const [cor, setCor] = useState(0);
    const [estacao, setEstacao] = useState(0);
    const [alimentacao, setAlimentacao] = useState(0);
    const [alimobs, setAlimobs] = useState("");
    const [sabores, setSabores] = useState(0);
    const [sabomobs, setSaboobs] = useState("");
    const [sede, setSede] = useState(0);
    const [sedeobs, setSedeobs] = useState("");
    const [disfungastro, setDisfungastro] = useState(0);
    const [digasobs, setDigasobs] = useState("");
    const [excrecoes, setExcrecoes] = useState(0);
    const [escreobs, setEscresobs] = useState("");
    const [menstruacao, setMenstruacao] = useState(0);
    const [menstobs, setMenstobs] = useState("");
    const [olhovisao, setOlhovisao] = useState(0);
    const [ouviaudicao, setOuviaudicao] = useState(0);
    const [narizolfato, setNarizolfato] = useState(0);
    const [tato, setTato] = useState(0);
    const [bocagosto, setBocagosto] = useState(0);
    const [bocgostoobs, setBocgostoobs] = useState("");

    useEffect(()=>{
        dataformulario({
            Tranpiracao: transpiracao,
            Obs_tranpiracao: tranobs,
            Sono: sono,
            Obs_sono: sonobsr,
            Emocoes: emocao,
            Obs_emocoes: emotobsr,
            Cor: cor,
            Estacao: estacao,
            Alimentacao: alimentacao,
            Obs_alimentacao: alimobs,
            Sabores: sabores,
            Obs_sabores: sabomobs,
            Sede: sede,
            Obs_sede: sedeobs,
            Disfuncoes_gastrointestinais: disfungastro,
            Obs_disfuncoes: digasobs,
            Excrecoes: excrecoes,
            Obs_excrecoes: escreobs,
            Menstruacao: menstruacao,
            Obs_mentruacao: menstobs,
            Olho_visao: olhovisao,
            Ouvidos_audicao: ouviaudicao,
            Nariz_olfato: narizolfato,
            Tato: tato,
            Boca_gosto: bocagosto,
            Obs_bocagosot: bocgostoobs,
        }as IFormulario)
    }, [
        transpiracao,
        tranobs,
        sono,
        sonobsr,
        emocao,
        emotobsr,
        cor,
        estacao,
        alimentacao,
        alimobs,
        sabores,
        sabomobs,
        sede,
        sedeobs,
        disfungastro,
        digasobs,
        excrecoes,
        escreobs,
        menstruacao,
        menstobs,
        olhovisao,
        ouviaudicao,
        narizolfato,
        tato,
        bocagosto,
        bocgostoobs,
        
    ])

    return (
        <View>
            <Text style={styles.title}>Interrogatório</Text>
            <Text style={styles.subtitle}>Transpiração</Text>
            <Text>Sua pouco (normal)</Text>
            <CheckBox
                value={transpiracao === 1}
                onValueChange={()=>setTranspiracao(1)}
            />
            <Text>Não sua (Qi perverso frio, def. Yang Qi, def. Xue)</Text>
            <CheckBox
                value={transpiracao === 2}
                onValueChange={()=>setTranspiracao(2)}
            />
            <Text>Sua muito (Qi perverso vento/calor )</Text>
            <CheckBox
                value={transpiracao === 3}
                onValueChange={()=>setTranspiracao(3)}
            />
            <Text>Suor na cabeça (def. Yin Qi, calor no E)</Text>
            <CheckBox
                value={transpiracao === 4}
                onValueChange={()=>setTranspiracao(4)}
            />
            <Text>Suor frio (def. Yang Qi)</Text>
            <CheckBox
                value={transpiracao === 5}
                onValueChange={()=>setTranspiracao(5)}
            />
            <Text>Suor nas mãos e pés (debilidade dos R)</Text>
            <CheckBox
                value={transpiracao === 6}
                onValueChange={()=>setTranspiracao(6)}
            />
            <Text>Suor noturno (def. Yin Qi, calor interno)</Text>
            <CheckBox
                value={transpiracao === 7}
                onValueChange={()=>setTranspiracao(7)}
            />
            <Text>Horário:</Text>
            <TextInput
                onChangeText={setTranobs}
                value={tranobs}
                placeholder="23:00-6:00"
                style={styles.obs}
            />
            <Text style={styles.title}>Sono</Text>
            <Text>Dorme bem</Text>
            <CheckBox
                value={sono === 1}
                onValueChange={()=>setSono(1)}
            />
            <Text>Insônia</Text>
            <CheckBox
                value={sono === 2}
                onValueChange={()=>setSono(2)}
            />
            <Text>Muito sono</Text>
            <CheckBox
                value={sono === 3}
                onValueChange={()=>setSono(3)}
            />
            <Text>Pouco sono</Text>
            <CheckBox
                value={sono === 4}
                onValueChange={()=>setSono(4)}
            />
            <Text>Sonhos</Text>
            <CheckBox
                value={sono === 5}
                onValueChange={()=>setSono(5)}
            />
            <Text>Observação</Text>
            <TextInput
                onChangeText={setSonobsr}
                value={sonobsr}
                placeholder="Observação"
                style={styles.obs}
            />
            <Text style={styles.title}>Emoções</Text>
            <Text>Medo</Text>
            <CheckBox
                value={emocao === 1}
                onValueChange={()=> setEmocao(1)}
            />
            <Text>Preocupação/Pensamento excessivo</Text>
            <CheckBox
                value={emocao === 2}
                onValueChange={()=> setEmocao(2)}
            />
            <Text>Raiva/Irritabilidade</Text>
            <CheckBox
                value={emocao === 3}
                onValueChange={()=> setEmocao(4)}
            />
            <Text>Ansiedade</Text>
            <CheckBox
                value={emocao === 5}
                onValueChange={()=> setEmocao(5)}
            />
            <Text>Tristeza</Text>
            <CheckBox
                value={emocao === 6}
                onValueChange={()=> setEmocao(6)}
            />
            <Text>Alegria</Text>
            <CheckBox
                value={emocao === 7}
                onValueChange={()=> setEmocao(7)}
            />
            <Text>Observação</Text>
            <TextInput
                onChangeText={setEmotobsr}
                value={emotobsr}
                placeholder="Observação"
                style={styles.obs}
            />
            <Text style={styles.title}>Côr</Text>
            <Text>Verde/Azul</Text>
            <CheckBox
                value={cor === 1}
                onValueChange={()=> setCor(1)}
            />
            <Text>Vermelho</Text>
            <CheckBox
                value={cor === 2}
                onValueChange={()=> setCor(2)}
            />
            <Text>Amarelo</Text>
            <CheckBox
                value={cor === 3}
                onValueChange={()=> setCor(3)}
            />
            <Text>Branco</Text>
            <CheckBox
                value={cor === 4}
                onValueChange={()=> setCor(4)}
            />
            <Text>Preto</Text>
            <CheckBox
                value={cor === 5}
                onValueChange={()=> setCor(5)}
            />
            <Text style={styles.title}>Estação</Text>
            <Text>Primavera</Text>
            <CheckBox
                value={estacao === 1}
                onValueChange={()=> setEstacao(1)}
            />
            <Text>Verão</Text>
            <CheckBox
                value={estacao === 2}
                onValueChange={()=> setEstacao(2)}
            />
            <Text>Final de Verão</Text>
            <CheckBox
                value={estacao === 3}
                onValueChange={()=> setEstacao(3)}
            />
            <Text>Outono</Text>
            <CheckBox
                value={estacao === 4}
                onValueChange={()=> setEstacao(4)}
            />
            <Text>Inverno</Text>
            <CheckBox
                value={estacao === 5}
                onValueChange={()=> setEstacao(5)}
            />
            
            <Text style={styles.title}>Alimentação</Text>
            <Text>Come muito (calor no E)</Text>
            <CheckBox
                value={alimentacao === 1}
                onValueChange={()=> setAlimentacao(1)}
            />
            <Text>Come pouco (def. Qi do BP, calor/umidade em BP, retenção de alimentos no E)</Text>
            <CheckBox
                value={alimentacao === 2}
                onValueChange={()=> setAlimentacao(2)}
            />
            <Text>Sem apetite (vazio de Qi em BP e E)</Text>
            <CheckBox
                value={alimentacao === 3}
                onValueChange={()=> setAlimentacao(3)}
            />
            <Text>Prefere alimentos quentes (síndrome de frio)</Text>
            <CheckBox
                value={alimentacao === 4}
                onValueChange={()=> setAlimentacao(4)}
            />
            <Text>Prefere alimentos frios (síndrome de calor)</Text>
            <CheckBox
                value={alimentacao === 5}
                onValueChange={()=> setAlimentacao(5)}
            />
            <Text>Observação</Text>
            <TextInput
                onChangeText={setAlimobs}
                value={alimobs}
                placeholder="Observação"
                style={styles.obs}
            />
            <Text style={styles.title}>Sabores</Text>
            <Text>Salgado (def. Qi do R)</Text>
            <CheckBox
                value={sabores === 1}
                onValueChange={()=> setSabores(1)}
            />
            <Text>Doce (def. Qi do BP)</Text>
            <CheckBox
                value={sabores === 2}
                onValueChange={()=> setSabores(2)}
            />
            <Text>Picante (def. Qi do P)</Text>
            <CheckBox
                value={sabores === 3}
                onValueChange={()=> setSabores(3)}
            />
            <Text>Amargo (def. Qi do C)</Text>
            <CheckBox
                value={sabores === 4}
                onValueChange={()=> setSabores(4)}
            />
            <Text>Azedo/ácido (estagnação de Qi do F)</Text>
            <CheckBox
                value={sabores === 5}
                onValueChange={()=> setSabores(5)}
            />
            <Text>Observação</Text>
            <TextInput
                onChangeText={setSaboobs}
                value={sabomobs}
                placeholder="Observação"
                style={styles.obs}
            />

            <Text style={styles.title}>Sede</Text>
            <Text>Sem sede (plenitude e Qi perverso frio/umidade em BP)</Text>
            <CheckBox
                value={sede === 1}
                onValueChange={()=> setSede(1)}
            />
            <Text>Pouca sede  (def. Yang Qi,, estagnação em meridianos, acúmulo de frio no E)</Text>
            <CheckBox
                value={sede === 2}
                onValueChange={()=> setSede(2)}
            />
            <Text>Muita sede (calor interno)</Text>
            <CheckBox
                value={sede === 3}
                onValueChange={()=> setSede(3)}
            />
            <Text>Preferência por  água gelada (calor interno)</Text>
            <CheckBox
                value={sede === 4}
                onValueChange={()=> setSede(4)}
            />
            <Text>Observação</Text>
            <TextInput
                onChangeText={setSedeobs}
                value={sedeobs}
                placeholder="Observação"
                style={styles.obs}
            />

            <Text style={styles.title}>Disfunções gastro-intestinais</Text>
            <Text>Hallitose  (retenção de alimentos no E)</Text>
            <CheckBox
                value={disfungastro === 1}
                onValueChange={()=> setDisfungastro(1)}
            />
            <Text>Azia (Qi  do E em ascensão)</Text>
            <CheckBox
                value={disfungastro === 2}
                onValueChange={()=> setDisfungastro(2)}
            />
            <Text>Náuseas (enjôos) (Qi perverso calor-umidade em E)</Text>
            <CheckBox
                value={disfungastro === 3}
                onValueChange={()=> setDisfungastro(3)}
            />
            <Text>Gastrite (Qi perverso calor em E)</Text>
            <CheckBox
                value={disfungastro === 4}
                onValueChange={()=> setDisfungastro(4)}
            />
            <Text>Constipação   (Qi perverso calor em IG)</Text>
            <CheckBox
                value={disfungastro === 5}
                onValueChange={()=> setDisfungastro(5)}
            />
            <Text>Diarréia (Qi perverso calor ou frio/umidade)</Text>
            <CheckBox
                value={disfungastro === 6}
                onValueChange={()=> setDisfungastro(6)}
            />
            <Text>Observação</Text>
            <TextInput
                onChangeText={setDigasobs}
                value={digasobs}
                placeholder="Observação"
                style={styles.obs}
            />

            <Text style={styles.title}>Excreções</Text>
            <Text>Diarréia seguida de alívio (def. Yang Qi do R )</Text>
            <CheckBox
                value={excrecoes === 1}
                onValueChange={()=> setExcrecoes(1)}
            />
            <Text>Diarréia com alimentos não digeridos (def. Qi de BP)</Text>
            <CheckBox
                value={excrecoes === 2}
                onValueChange={()=> setExcrecoes(2)}
            />
            <Text>Fezes retidas (excesso de Yin Qi do R)</Text>
            <CheckBox
                value={excrecoes === 3}
                onValueChange={()=> setExcrecoes(3)}
            />
            <Text>Fezes finas com água (Umidade/frio em BP e E)</Text>
            <CheckBox
                value={excrecoes === 4}
                onValueChange={()=> setExcrecoes(4)}
            />
            <Text>Fezes com muco (Qi perverso umidade/frio no IG)</Text>
            <CheckBox
                value={excrecoes === 5}
                onValueChange={()=> setExcrecoes(5)}
            />
            <Text>Fezes secas (calor interno/def. Yin Qi)</Text>
            <CheckBox
                value={excrecoes === 6}
                onValueChange={()=> setExcrecoes(6)}
            />
            <Text>Fezes com sangue (Qi perverso calor no IG)</Text>
            <CheckBox
                value={excrecoes === 7}
                onValueChange={()=> setExcrecoes(7)}
            />
            <Text> Escura (Qi perverso calor em R e B)</Text>
            <CheckBox
                value={excrecoes === 8}
                onValueChange={()=> setExcrecoes(8)}
            />
            <Text>Clara (Qi perverso frio)</Text>
            <CheckBox
                value={excrecoes === 9}
                onValueChange={()=> setExcrecoes(9)}
            />
            <Text>Muita (def. Yang Qi do R,  calor/umidade em B)</Text>
            <CheckBox
                value={excrecoes === 10}
                onValueChange={()=> setExcrecoes(10)}
            />
            <Text>Pouca (síndrome de calor )</Text>
            <CheckBox
                value={excrecoes === 11}
                onValueChange={()=> setExcrecoes(11)}
            />
            <Text>Incontinência/solta (def. Qi do R, afundamento do Qi do BP)</Text>
            <CheckBox
                value={excrecoes === 12}
                onValueChange={()=> setExcrecoes(12)}
            />
            <Text>Com  sangue /retenção (Qi perverso calor/umidade em  B)</Text>
            <CheckBox
                value={excrecoes === 13}
                onValueChange={()=> setExcrecoes(13)}
            />
            <Text>Enurese noturna (def. de Qi do R, disf. de B)</Text>
            <CheckBox
                value={excrecoes === 14}
                onValueChange={()=> setExcrecoes(14)}
            />
            <Text>Noctúria (def. Yang  Qi  do R)</Text>
            <CheckBox
                value={excrecoes === 15}
                onValueChange={()=> setExcrecoes(15)}
            />
            <Text>Observação de Excreções</Text>
            <TextInput
                onChangeText={setEscresobs}
                value={escreobs}
                placeholder="Observação"
                style={styles.obs}
            />
            
            <Text style={styles.title}>Menstruação</Text>
            <Text>Ciclo prolongado e escasso  com coloração clara (def. de Qi e Xue,   Qi  perverso frio)</Text>
            <CheckBox
                value={menstruacao === 1}
                onValueChange={()=>setMenstruacao(1)}
            />
            <Text>Menorragia /ciclo diminuído com muito sangue  e  coloração escura (estagnação de sangue, calor no sangue, def. Qi de BP, hiperatividade do Yang Qi do F)</Text>
            <CheckBox
                value={menstruacao === 2}
                onValueChange={()=>setMenstruacao(2)}
            />
            <Text>Metrorragia/ Irregular (estagnação e  Qi perverso calor  em Xue)</Text>
            <CheckBox
                value={menstruacao === 3}
                onValueChange={()=>setMenstruacao(3)}
            />
            <Text>Dismenorréia/cólicas (estagnação de Qi e Xue do F)</Text>
            <CheckBox
                value={menstruacao === 4}
                onValueChange={()=>setMenstruacao(4)}
            />
            <Text>Amenorréia (def. Qi + Xue, def. Xue do F)</Text>
            <CheckBox
                value={menstruacao === 5}
                onValueChange={()=>setMenstruacao(5)}
            />
            <Text>Leucorréia  com corrimento branco, e aquoso  (def. de Yang  Qi do BP e do R)</Text>
            <CheckBox
                value={menstruacao === 6}
                onValueChange={()=>setMenstruacao(6)}
            />
            <Text>Leucorréia espessa com cor amarela e odor desagradável (Qi perverso umidade-calor em TA inferior)</Text>
            <CheckBox
                value={menstruacao === 7}
                onValueChange={()=>setMenstruacao(7)}
            />
            <Text>Observação Menstruação</Text>
            <TextInput
                onChangeText={setMenstobs}
                value={menstobs}
                placeholder="Observação"
                style={styles.obs}
            />
            <Text style={styles.title}>Órgão dos sentidos</Text>
            <Text style={styles.subtitle}>Olhos e visão</Text>
            <Text>Fraca (estagnação de  Qi do F, def. de Yin  Qi na  B e R)</Text>
            <CheckBox
                value={olhovisao === 1}
                onValueChange={()=> setOlhovisao(1)}
            />
            <Text>Turva (Qi perverso vento, def. Xue do F)</Text>
            <CheckBox
                value={olhovisao === 2}
                onValueChange={()=> setOlhovisao(2)}
            />
            <Text>Vermelhidão (fogo, ascensão do Yang  Qi do F)</Text>
            <CheckBox
                value={olhovisao === 3}
                onValueChange={()=> setOlhovisao(3)}
            />
            <Text>Secura (vazio de  Yin Qi do F)</Text>
            <CheckBox
                value={olhovisao === 4}
                onValueChange={()=> setOlhovisao(4)}
            />
            <Text>Lacrimejamento (Qi perverso vento)</Text>
            <CheckBox
                value={olhovisao === 5}
                onValueChange={()=> setOlhovisao(5)}
            />
            <Text style={styles.subtitle}>Ouvidos e Audição</Text>
            <Text>Zumbido (def. Yin Qi na B e R,, vento)</Text>
            <CheckBox
                value={ouviaudicao === 1}
                onValueChange={()=> setOuviaudicao(1)}
            />
            <Text>Prurido (coceira)</Text>
            <CheckBox
                value={ouviaudicao === 2}
                onValueChange={()=> setOuviaudicao(2)}
            />
            <Text>Fraca (def. Yin Qi da B e R)</Text>
            <CheckBox
                value={ouviaudicao === 3}
                onValueChange={()=> setOuviaudicao(3)}
            />
            <Text>Surdez (def. sangue no C, def, Yin  Qi   na B e R)</Text>
            <CheckBox
                value={ouviaudicao === 4}
                onValueChange={()=> setOuviaudicao(4)}
            />
            <Text>Surdez súbita (fogo no F)</Text>
            <CheckBox
                value={ouviaudicao === 5}
                onValueChange={()=> setOuviaudicao(5)}
            />
            <Text style={styles.subtitle}>Nariz e olfato</Text>
            <Text>Fraco (def.  Yin Qi dos P,    Qi perverso vento/frio)</Text>
            <CheckBox
                value={narizolfato === 1}
                onValueChange={()=> setNarizolfato(1)}
            />
            <Text>Anosmia (debilidade de IG)</Text>
            <CheckBox
                value={narizolfato === 2}
                onValueChange={()=> setNarizolfato(2)}
            />
            <Text>Coriza/mucosidade (Qi  perverso calor no P)</Text>
            <CheckBox
                value={narizolfato === 3}
                onValueChange={()=> setNarizolfato(3)}
            />
            <Text>Prurido (Qi perverso vento no P)</Text>
            <CheckBox
                value={narizolfato === 4}
                onValueChange={()=> setNarizolfato(4)}
            />
            <Text>Obstrução (Qi perverso vento no P)</Text>
            <CheckBox
                value={narizolfato === 5}
                onValueChange={()=> setNarizolfato(5)}
            />

            <Text style={styles.subtitle}>Tato</Text>
            <Text>Fraco (def. Qi  do C)</Text>
            <CheckBox
                value={tato === 1}
                onValueChange={()=>setTato(1)}
            />

            <Text style={styles.subtitle}>Boca e gosto</Text>
            <Text>Lábios pálidos (Qi  perverso frio/umidade em BP)</Text>
            <CheckBox
                value={bocagosto === 1}
                onValueChange={()=>setBocagosto(1)}
            />
            <Text>Lábios brancos ( def. de Yin Qi  e Xue do C)</Text>
            <CheckBox
                value={bocagosto === 2}
                onValueChange={()=>setBocagosto(2)}
            />
            <Text>Salivação (Qi perverso umidade em BP)</Text>
            <CheckBox
                value={bocagosto === 3}
                onValueChange={()=>setBocagosto(3)}
            />
            <Text>Secura (Xie em P e Wei Qi)</Text>
            <CheckBox
                value={bocagosto === 4}
                onValueChange={()=>setBocagosto(4)}
            />
            <Text>Garganta seca (subida do Fogo do F)</Text>
            <CheckBox
                value={bocagosto === 5}
                onValueChange={()=>setBocagosto(5)}
            />
            <Text>Boca amarga (Qi perverso calor/umidade em F e VB)</Text>
            <CheckBox
                value={bocagosto === 6}
                onValueChange={()=>setBocagosto(6)}
            />
            <Text>Sangramentos (def. de Qi do BP)</Text>
            <CheckBox
                value={bocagosto === 7}
                onValueChange={()=>setBocagosto(7)}
            />
            <Text>Lábios azulados (estase de Xue do C)</Text>
            <CheckBox
                value={bocagosto === 8}
                onValueChange={()=>setBocagosto(8)}
            />
            <Text>Observação - Órgão dos sentidos</Text>
            <TextInput
                onChangeText={setBocgostoobs}
                value={bocgostoobs}
                placeholder="Observação"
                style={styles.obs}
            />
        </View>
    )
}

export default Interrogatorio;