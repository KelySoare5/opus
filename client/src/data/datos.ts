
export interface Vagas{
    id: number,
    nome_empresa: string,
    data_publicacao: string,
    periodo_trabalhado: string,
    nome_cargo: string,
    requisitos: string,

}

export const empresas: Vagas[] =[
    {
        id: 1,
        nome_empresa: "Xwitter",
        data_publicacao: "15/09/2024",
        periodo_trabalhado: "Integral",
        nome_cargo: "Lacrador senior",
        requisitos: "habitar com a mãe, QI abaixo de 10, usuario de Discord, jogador de League of Legen..."

    },
    {
        id: 2,
        nome_empresa: "Pizzaria Freddy's Feazbeer",
        data_publicacao: "25/08/1989",
        periodo_trabalhado: "Noturno",
        nome_cargo: "Guarda notuno",
        requisitos: "20 a 3 anos, familiaridade com restaurante."

    },
    {
        id: 3,
        nome_empresa: "Delterune",
        data_publicacao: "25/08/1989",
        periodo_trabalhado: "Vespertino",
        nome_cargo: "Desenvolvedor pleno",
        requisitos: "20 a 3 anos, familiaridade com restaurante."

    },
    {
        id: 4,
        nome_empresa: "Konami",
        data_publicacao: "25/09/1989",
        periodo_trabalhado: "Integral",
        nome_cargo: "Desenvolvedor Junior",
        requisitos: "Não jogar..."

    },
    {
        id: 5,
        nome_empresa: "Portal P2",
        data_publicacao: "25/10/1989",
        periodo_trabalhado: "Integral",
        nome_cargo: "Gerente de segurança",
        requisitos: "Torcer para o Palmeiras...Torcer para o Palmeiras...Torcer para o Palmeiras...Torcer para o Palmeiras...Torcer para o Palmeiras...Torcer para o Palmeiras...Torcer para o Palmeiras...Torcer para o Palmeiras...Torcer para o Palmeiras...Torcer para o Palmeiras...Torcer para o Palmeiras...Torcer para o Palmeiras...Torcer para o Palmeiras...Torcer para o Palmeiras..."

    },

]