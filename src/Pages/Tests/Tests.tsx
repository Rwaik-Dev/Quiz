import React from "react";
import { Content } from "./styles";
import { Link } from "react-router-dom";
import CardOptions from "../../Components/CardOptions/CardOptions";
import { getQuests } from "../../Answers/Questions";

const fotbal = require("../../Images/img_fut.jpg");

const Test: React.FC = () => {
  let quests = getQuests();
  return (
    <Content>
      {fotbal}
    </Content>
  );
};

export default Test;
