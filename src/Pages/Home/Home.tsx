import React from "react";
import Header from "../../Components/Header/Header";
import CardOptions from "../../Components/CardOptions/CardOptions";
import { Link } from "react-router-dom";
import { Content, Bodycontent } from "./Home.styles";

const getQuests = require("../../Answers/Questions");
const fotbal = require("../../Images/img_fut.jpg");

const Home: React.FC = () => {
  return (
    <Content>
      <Header />
      <Bodycontent>
        <Link to="question" className="Link">
          <CardOptions
            src={fotbal}
            titulo="Futebol"
            conteudo="Aqui você vera um quiz de 10 questões de futebol"
          />
        </Link>
        <Link to="question" className="Link">
          <CardOptions
            src={fotbal}
            titulo="Cinema"
            conteudo="Aqui você vera um quiz de 10 questões de Cinema"
          />
        </Link>
        <Link to="question" className="Link">
          <CardOptions
            src={fotbal}
            titulo="Historia"
            conteudo="Aqui você vera um quiz de 10 questões de Historia"
          />
        </Link>
        <Link to="question" className="Link">
          <CardOptions
            src={fotbal}
            titulo="Informatica"
            conteudo="Aqui você vera um quiz de 10 questões de Informatica"
          />
        </Link>
        <Link to="question" className="Link">
          <CardOptions
            src={fotbal}
            titulo="Musica"
            conteudo="Aqui você vera um quiz de 10 questões de Musica"
          />
        </Link>
      </Bodycontent>
    </Content>
  );
};

export default Home;
