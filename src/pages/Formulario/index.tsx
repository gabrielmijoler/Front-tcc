import { View, Button,RefreshControl, StyleSheet, Alert, Text, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import React, { useState } from 'react';
import ClientForm from '../../components/Client';
import api from '../../services/api';
import LinguaForm from '../../components/Lingua';
import Geral from '../../components/Geral';
import { Client, IAlgias, IAuscultação, IFormulario, IGeral, ILingua, ITorax } from '../../models';
import Interrogatorio from '../../components/Interrogatório';
import Auscultacao from '../../components/Auscultação';
import Torax from '../../components/Torax';
import Algias from '../../components/Algias';

// menstruação mostrar so qd for mulher selecionado
// tato não obrigatorio

const Formulario: React.FC = () => {
  const [client, setClient] = useState<Client>({
    nome: "",
    email: "",
    sexo: "",
    cpf: "",
    profissao: "",
    telefone: "",
    religiao: "",
    estadocivil: "",
    datanascimento: "",
    idCid: 0,
    createdAt: null,
    updatedAt: null,
  });
  const [lingua, setLingua] = useState<ILingua>({
    obs_lingua: "",
    lingua: 0
  });
  const [geral, setGeral] = useState<IGeral>({
    formpostura: 0,
    cor_pele: 0,
    cabeecabelos_input: "",
    Nariz: "",
    Orelhas: "",
    Labios_input: "",
    Pele: "",
  });
  const [torax, setTorax] = useState<ITorax>({
    Torax: "",
    Dores_cabeca: "",
    Obs_torax: "",
    Obs_dorescabe: "",
    Escala_analogdor: "",
  });
  const [algias, setAlgias] = useState<IAlgias>({
    Coluna: 0,
    Obs_coluna: '',
    dores_musculares: '',
    dores_articulares: '',
    abdome: [],
    obs_abdome: '',
  });

  const [auscultacao, setAuscultacao] = useState<IAuscultação>({
    Fala: 0,
    Respiracao: 0,
    obs_fala: "",
  });
  const [interroga, setInterroga] = useState<IFormulario>({
    Tranpiracao: 0,
    Obs_tranpiracao: "",
    Sono: 0,
    Obs_sono: "",
    Emocoes: 0,
    Obs_emocoes: "",
    Cor: 0,
    Estacao: 0,
    Alimentacao: 0,
    Obs_alimentacao: "",
    Sabores: 0,
    Obs_sabores: "",
    Sede: 0,
    Obs_sede: "",
    Disfuncoes_gastrointestinais: 0,
    Obs_disfuncoes: "",
    Excrecoes: 0,
    Excrecoes2: 0,
    Obs_excrecoes: "",
    Menstruacao: 0,
    Obs_mentruacao: "",
    Olho_visao: 0,
    Ouvidos_audicao: 0,
    Nariz_olfato: 0,
    Tato: 0,
    Boca_gosto: 0,
    Obs_bocagosot: "",
    idCid: 0,
    Torax: "",
    Dores_cabeca: "",
    Obs_torax: "",
    Obs_dorescabe: "",
    Escala_analogdor: "",
  });



  const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    scrollView: {
      backgroundColor: '#dfdfdf',
      marginHorizontal: 1,
      padding: 6

    },
    title: {
      justifyContent: 'center',
      textAlign: 'center',
      fontSize: 15,
      backgroundColor: 'green',
      color: "#fff",
      padding: 10,
    },
    button: {
      padding: 10,
      borderRadius: 6,
      height: 100,
    },
    obs: {
      backgroundColor: '#d3d3d3',
    }
  });


  const submit = async () => {
    const [refreshing, setRefreshing] = React.useState(false);
    try {
      const payload: IFormulario = {
        formpostura: geral.formpostura,
        lingua: lingua.lingua,
        obs_lingua: lingua.obs_lingua,
        cor_pele: geral.cor_pele,
        cabeecabelos_input: geral.cabeecabelos_input,
        Nariz: geral.Nariz,
        Orelhas: geral.Orelhas,
        Labios_input: geral.Labios_input,
        Pele: geral.Pele,
        Fala: auscultacao.Fala,
        Respiracao: auscultacao.Respiracao,
        obs_fala: auscultacao.obs_fala,
        Tranpiracao: interroga.Tranpiracao,
        Obs_tranpiracao: interroga.Obs_tranpiracao,
        Sono: interroga.Sono,
        Obs_sono: interroga.Obs_sono,
        Emocoes: interroga.Emocoes,
        Obs_emocoes: interroga.Obs_emocoes,
        Cor: interroga.Cor,
        Estacao: interroga.Estacao,
        Alimentacao: interroga.Alimentacao,
        Obs_alimentacao: interroga.Obs_alimentacao,
        Sabores: interroga.Sabores,
        Obs_sabores: interroga.Obs_sabores,
        Sede: interroga.Sede,
        Obs_sede: interroga.Obs_sede,
        Disfuncoes_gastrointestinais: interroga.Disfuncoes_gastrointestinais,
        Obs_disfuncoes: interroga.Obs_disfuncoes,
        Excrecoes: interroga.Excrecoes,
        Excrecoes2: interroga.Excrecoes2,
        Obs_excrecoes: interroga.Obs_excrecoes,
        Menstruacao: interroga.Menstruacao,
        Obs_mentruacao: interroga.Obs_mentruacao,
        Olho_visao: interroga.Olho_visao,
        Ouvidos_audicao: interroga.Ouvidos_audicao,
        Nariz_olfato: interroga.Nariz_olfato,
        Tato: interroga.Tato,
        Boca_gosto: interroga.Boca_gosto,
        Obs_bocagosot: interroga.Obs_bocagosot,
        idCid: client.idCid,
        Torax: torax.Torax,
        Dores_cabeca: torax.Torax,
        Obs_torax: torax.Torax,
        Obs_dorescabe: torax.Torax,
        Escala_analogdor: torax.Torax,
        // Coluna: "String",
        // Dores_musculares: "String",
        // Dores_articulares: "String",
        // Abdome: "String",
        // Dores_cabeca: "String",
        // Torax: "String",
        // Escala_analogdor: "String",
        // Diagnostico_teurapeutico:"String",
        // Condutas: "String",
        // Obs_casa: "String" ,
        // Obs_mentruacao: "String",
        // Obs_bocagosot: "String",
        // Obs_abdome: "String",
        // Obs_torax: "String",
        // Objetivo: "String",  
      }
      console.log(payload, "DEU CERTO")
      const responseone = await api.post('/formulario', payload)
      console.log(responseone.data)
      const responsetwo = await api.post('/user', { ...client, idFormulario: responseone.data.id })
      Alert.alert('Cliente cadastrado com sucesso!!')
    } catch (error) {
      console.log('err', error)
    }
  }

  const [refreshing, setRefreshing] = React.useState(false);
  
  const onRefresh = React.useCallback(() => {
      setRefreshing(true);
      setTimeout(() => setRefreshing(false),4000);
  }, []);
  

  return (
    <View>
      <Text style={styles.title}>FICHA DE AVALIAÇÃO TERAPÊUTICA</Text>
      <KeyboardAvoidingView
        style={styles.scrollView}
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        keyboardVerticalOffset={80}>
        <ScrollView 
            style={{width:"100%"}}
            refreshControl={ <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
              />
            }
          >
          <ClientForm dataclient={setClient} />
          <LinguaForm datalingua={setLingua} />
          <Geral datageral={setGeral} />
          <Auscultacao dataAuscultacao={setAuscultacao} />
          <Interrogatorio dataformulario={setInterroga} />
          <Algias dataAlgias={setAlgias} />
          <Torax datatorax={setTorax} />
          <View style={styles.button}>
            <Button
              title="Enviar"
              onPress={() => submit()}
              color="green"
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>

  )
}

export default Formulario;
