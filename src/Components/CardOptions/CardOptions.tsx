import React from "react";
import { Card, ImageCard, InfoCard } from "./CardOptions.styles";

interface IPropsCardOptions {
  src: string;
  titulo: string;
  conteudo: string;
}

const CardOptions: React.FC<IPropsCardOptions> = ({
  src,
  titulo,
  conteudo,
}) => {
  return (
    <Card>
      <ImageCard>
        <img src={src} alt="Imagem modelo" />
      </ImageCard>
      <InfoCard>
        <h1>{titulo}</h1>
        <span>{conteudo}</span>
      </InfoCard>
    </Card>
  );
};

export default CardOptions;
