
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
        createdAt: Date | null,
        updatedAt: Date | null,
}

export interface ILingua{
        lingua: Number,
        obs_lingua: String, // add
}
export interface IGeral{
        cor_pele: Number,
        cabeecabelos_input: String, //add
        formpostura: Number
        Nariz: String,
        Orelhas: String,
        Labios_input: String,
        Pele: String,
}

export interface IAuscultação{
        Fala: Number,
        Respiracao: Number,
        obs_fala: String,
}

export interface IFormulario{
        lingua?: Number,
        obs_lingua?: String, // add
        cor_pele?: Number,
        cabeecabelos_input?: String, //add
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
        Obs_excrecoes: String,
        Menstruacao: Number,
        Obs_mentruacao: String,
        Olho_visao: Number,
        Ouvidos_audicao:Number,
        Nariz_olfato:Number,
        Tato: Number,
        Boca_gosto: Number,
        Obs_bocagosot: String,
        idCid: Number,
} 

        // Coluna: String,
        // Dores_musculares: String,
        // Dores_articulares: String,
        // Abdome: String,
        // Dores_cabeca: String,
        // Torax: String,
        // Escala_analogdor: String,
        // Diagnostico_teurapeutico:String,
        // Condutas: String,
        // Obs_casa: String ,
        // Obs_mentruacao: String,
        // Obs_bocagosot: String,
        // createdAt: Date | null,
        // updatedAt: Date | null,