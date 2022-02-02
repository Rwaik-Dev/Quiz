const quests = [
  {
    aswers: [
      {
        questionText: "Quem venceu a copa de 1945?",
        answerOptions: [
          { answerText: "Brasil", isCorrect: false },
          { answerText: "Não teve Copa", isCorrect: true },
          { answerText: "Inglaterra", isCorrect: false },
          { answerText: "França", isCorrect: false },
        ],
      },
      {
        questionText: "Quantas bolas de ouro Cristiano Ronaldo tem?",
        answerOptions: [
          { answerText: "4", isCorrect: false },
          { answerText: "6", isCorrect: false },
          { answerText: "5", isCorrect: true },
          { answerText: "2", isCorrect: false },
        ],
      },
      {
        questionText: "Com quantos anos Pelé aposentou?",
        answerOptions: [
          { answerText: "31", isCorrect: true },
          { answerText: "27", isCorrect: false },
          { answerText: "43", isCorrect: false },
          { answerText: "32", isCorrect: false },
        ],
      },
      {
        questionText: "Qual foi o primeiro Hat-trick do futebol?",
        answerOptions: [
          { answerText: "Preguinho", isCorrect: false },
          { answerText: "Pedro Cea", isCorrect: false },
          { answerText: "Lucien Laurent", isCorrect: false },
          { answerText: "Bert Pautenaude", isCorrect: true },
        ],
      },
      {
        questionText: "Quem venceu a libertadores de 2017?",
        answerOptions: [
          { answerText: "Corinthians", isCorrect: false },
          { answerText: "Grêmio", isCorrect: true },
          { answerText: "Vasco", isCorrect: false },
          { answerText: "Palmeiras", isCorrect: false },
        ],
      },
      {
        questionText: "Qual e a ordem correta do trio MSN?",
        answerOptions: [
          { answerText: "Suárez, Messi, Neymar", isCorrect: false },
          { answerText: "Messi, Suárez, Neymar", isCorrect: true },
          { answerText: "Neymar, Messi, Suárez", isCorrect: false },
        ],
      },
      {
        questionText: "Quem foi o melhor jogador do mundo em 2020?",
        answerOptions: [
          { answerText: "Lewandowski", isCorrect: true },
          { answerText: "Messi", isCorrect: false },
          { answerText: "Cristiano Ronaldo", isCorrect: false },
          { answerText: "Klose", isCorrect: false },
        ],
      },
      {
        questionText: "Qual partida ficou conhecida Maracanaço?",
        answerOptions: [
          { answerText: "Brasil x Espanha", isCorrect: false },
          { answerText: "Brasil x Argentina", isCorrect: false },
          { answerText: "Brasil x Uruguai", isCorrect: true },
          { answerText: "Brasil x Chile", isCorrect: false },
        ],
      },
      {
        questionText:
          "Quando foi realizada a primeira Copa do Mundo de futebol?",
        answerOptions: [
          { answerText: "13 de julho de 1934", isCorrect: false },
          { answerText: "13 de julho de 1930", isCorrect: true },
          { answerText: "13 de julho de 1946", isCorrect: false },
          { answerText: "13 de julho de 1945", isCorrect: false },
        ],
      },
      {
        questionText:
          "Qual time de futebol ganhou mais Copas do Mundo? ",
        answerOptions: [
          { answerText: "Brasil", isCorrect: true },
          { answerText: "Argentina", isCorrect: false },
          { answerText: "Italia", isCorrect: false },
          { answerText: "Alemanha", isCorrect: false },
        ],
      },
    ],
  },
];

export function getQuests() {
  return quests;
}
