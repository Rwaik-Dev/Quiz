import styled from "styled-components";

export const Content = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgb(67, 85, 96);
  background: linear-gradient(
    22deg,
    rgba(67, 85, 96, 1) 5%,
    rgba(32, 42, 88, 0.982421875) 56%,
    rgba(0, 0, 0, 1) 100%
  );

  color: #fff;
`;
export const Bodycontent = styled.div`
  padding: 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  .Link{
    text-decoration: none;
    background-color: none;
    color: #fff;
  }
`;
