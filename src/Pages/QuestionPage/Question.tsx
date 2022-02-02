import React from "react";
import { Content, Card, BodyQuestions } from "./Question.styles";
import Header from "../../Components/Header/Header";
import Answers from "../../Components/Aswers/Answers";




const Question: React.FC = () => {
  return (
    <Content>
      <Header />
      <BodyQuestions>
        <Card>
            <Answers/>
        </Card>
      </BodyQuestions>
    </Content>
  );
};

export default Question;
