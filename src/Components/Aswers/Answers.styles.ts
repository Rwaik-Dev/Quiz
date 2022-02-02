import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  background-color: #0f1c57;
  border-radius: 15px;
  border: 5px solid;
`;

export const Result = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  > label {
    font-size: 30px;
    font-weight: bold;
  }
  .icon {
    font-size: 40px;
  }
`;

export const BoxQuestions = styled.div`
  width: 100%;
  height: 100%;
`;

export const CountQuest = styled.div`
  width: 100%;
  height: 20%;
  > span {
    font-size: 35px;
  }
`;

export const QuestText = styled.div`
  width: 100%;
  padding-left: 15px;
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
`;

export const QuestAnswers = styled.div`
  width: 90%;
  height: 64%;
  margin-left: 5%;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  > button {
    height: 40px;
    border: solid #fff 1.5px;
    margin: 5px 0px;
    border-radius: 7px;
    background-color: #202a58;
    color: #fff;
    font-weight: bold;
    font-size: 17px;
    &:hover {
      background-color: #fff;
      color: #000;
      opacity: 0.8;
      border: solid #ff1b00 1.5px;
      transition: 0.3s;
    }
  }
`;
