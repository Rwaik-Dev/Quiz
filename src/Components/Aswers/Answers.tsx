import React, { useState } from "react";
import {
  Content,
  Result,
  BoxQuestions,
  CountQuest,
  QuestText,
  QuestAnswers,
} from "./Answers.styles";
import { GiJeweledChalice } from "react-icons/gi";

const quests = [
  {
    questionText: "Quantos titulos nacionais tem o Cruzeiro",
    answerOptions: [
      { answerText: "19", isCorrect: false },
      { answerText: "20", isCorrect: false },
      { answerText: "21", isCorrect: true },
      { answerText: "22", isCorrect: false },
    ],
  },
  {
    questionText: "Quantos anos tem o Cruzeiro ?",
    answerOptions: [
      { answerText: "101", isCorrect: true },
      { answerText: "110", isCorrect: false },
      { answerText: "115", isCorrect: false },
      { answerText: "121", isCorrect: false },
    ],
  },
  {
    questionText:
      "Qual foi o maior placar de jogo entre Cruzeiro X Atletico Mineiro ?",
    answerOptions: [
      { answerText: "Cruzeiro 5 x 0 Atletico", isCorrect: false },
      { answerText: "Cruzeiro 4 x 2 Atletico", isCorrect: false },
      { answerText: "Cruzeiro 6 x 1 Atletico", isCorrect: true },
      { answerText: "Cruzeiro 2 x 9 Atletico", isCorrect: false },
    ],
  },
  {
    questionText: "Qual e o melhor time do mundo ?",
    answerOptions: [
      { answerText: "Cruzeiro", isCorrect: true },
      { answerText: "Atletico Mineiro", isCorrect: false },
      { answerText: "Bahia", isCorrect: false },
      { answerText: "America Mineiro", isCorrect: false },
    ],
  },
];

const Answers: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionsClick = (isCorrect: any) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quests.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <Content>
      {showScore ? (
        <Result>
          <label>
            Você acertou {score} questões de {quests.length}.
          </label>
          <GiJeweledChalice className="icon" />
        </Result>
      ) : (
        <BoxQuestions>
          <CountQuest>
            <span>Questão {currentQuestion + 1}</span>/{quests.length}
          </CountQuest>
          <QuestText>{quests[currentQuestion].questionText}</QuestText>
          <QuestAnswers>
            {quests[currentQuestion].answerOptions.map((answerOption) => (
              <button
                onClick={() => handleAnswerOptionsClick(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </button>
            ))}
          </QuestAnswers>
        </BoxQuestions>
      )}
    </Content>
  );
};

export default Answers;
