export interface Client{
        nome: String,
        email: String,
        sexo: String,
        cpf: String,
        profissao: String,
        telefone: String,
        religiao: String,
        estadocivil: String,
        datanascimento: String,
        idCid: Number,
        createdAt: String | null,
        updatedAt: String | null,
}

export interface ILingua{
        lingua: Number,
        obs_lingua: String,
        basic: IBasicArray[],
}
export interface IGeral{
        cor_pele: Number,
        cabeecabelos_input: String,
        formpostura: Number
        Nariz: String,
        Orelhas: String,
        Labios_input: String,
        Pele: String,
        basic: IBasicArray[],
}

export interface IAuscultação{
        Fala: Number,
        Respiracao: Number,
        obs_fala: String,
        basic: IBasicArray[],
}

export interface IFormulario{
        lingua?: Number,
        obs_lingua?: String, 
        cor_pele?: Number,
        cabeecabelos_input?: String, 
        formpostura?: Number
        Nariz?: String,
        Orelhas?: String,
        Labios_input?: String,
        Pele?: String,
        Fala?: Number,
        Respiracao?: Number,
        obs_fala?: String,
        Tranpiracao: Number,
        Obs_tranpiracao: String,
        Sono: Number,
        Obs_sono: String,
        Emocoes: Number,
        Obs_emocoes: String,
        Cor: Number,
        Estacao: Number,
        Alimentacao: Number,
        Obs_alimentacao: String,
        Sabores: Number,
        Obs_sabores: String,
        Sede: Number,
        Obs_sede: String,
        Disfuncoes_gastrointestinais: Number,
        Obs_disfuncoes: String,
        Excrecoes: Number,
        Excrecoes2: Number,
        Obs_excrecoes: String,
        Menstruacao: Number,
        Obs_mentruacao: String,
        Olho_visao: Number,
        Ouvidos_audicao:Number,
        Nariz_olfato:Number,
        Tato?: Number,
        Boca_gosto: Number,
        Obs_bocagosot: String,
        idCid: Number,
        Torax: Number,
        Dores_cabeca: Number,
        Obs_torax: String,
        Obs_dorescabe: String,
        Escala_analogdor: String,
        Coluna: Number,
        Obs_coluna: String,
        dores_musculares: String,
        dores_articulares: String,
        abdome: String,
        obs_abdome: String,
        Neuromuscular: String,
        Diagnostico_teurapeutico: String, 
        Objetivo: String,
        Medicamento: String,
        Patalogia: String,
        Condutas: String,
        diagnostico_clinico: String,
        queixa_prin: String,
} 
export interface IBasicArray{
        id:Number,
        name: String,
        value:String,
        checked: boolean
}
export interface IAlgias{
        Coluna: Number,
        Obs_coluna: String,
        dores_musculares: String,
        dores_articulares: String,
        abdome: String,
        basic: IBasicArray[],
        obs_abdome: String,
}
export interface ITorax{
        Torax: Number,
        Dores_cabeca: Number,
        Obs_torax: String,
        Obs_dorescabe: String,
        Escala_analogdor: String,
        diagnostico_clinico: String,
        queixa_prin: String,
        basic: IBasicArray[],
}       
export interface IFinal{
        Neuromuscular: String,
        Diagnostico_teurapeutico: String, 
        Objetivo: String,
        Medicamento: String,
        Patalogia: String,
        Condutas: String,
}

export interface IInterrogatorio{
        Tranpiracao: Number,
        Obs_tranpiracao: String,
        Sono: Number,
        Obs_sono: String,
        Emocoes: Number,
        Obs_emocoes: String,
        Cor: Number,
        Estacao: Number,
        Alimentacao: Number,
        Obs_alimentacao: String,
        Sabores: Number,
        Obs_sabores: String,
        Sede: Number,
        Obs_sede: String,
        Disfuncoes_gastrointestinais: Number,
        Obs_disfuncoes: String,
        Excrecoes: Number,
        Excrecoes2: Number,
        Obs_excrecoes: String,
        Menstruacao: Number,
        Obs_mentruacao: String,
        Olho_visao: Number,
        Ouvidos_audicao: Number,
        Nariz_olfato: Number,
        Tato?: Number,
        Boca_gosto: Number,
        Obs_bocagosot: String,
        basic:[]
}

export interface IListauser {
        navigation: any
        screenName: any
    }

        //     idPalpacao: 
                