import styled from "styled-components";

export const Card = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(3.5px);
  -webkit-backdrop-filter: blur(3.5px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  cursor: pointer;
  margin: 10px;

  &:hover {
    transition: 0.3s;
    opacity: 0.7;
  }

  border: 1px solid;
`;
export const ImageCard = styled.div`
  width: 100%;
  height: 160px;
  > img {
    width: 100%;
    height: 160px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
  }
`;
export const InfoCard = styled.div`
  height: calc(100% - 160px);
  display: flex;
  flex-direction: column;
  align-items: center;
  > h1 {
    font-size: 30px;
    padding-top: 10px;
  }
  > span {
    font-size: 19px;

    text-align: center;
  }
`;
