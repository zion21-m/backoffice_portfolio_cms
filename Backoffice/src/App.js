import "./index.css";
import styled from "styled-components";
import background from "./images/cms-bcg.jpg";

const HomeSectionStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-image: url(${background});
  background-size: cover;
  h1 {
    font-size: 3rem;
    color: #fff;
  }
`;
const ButtonStyled = styled.button`
  padding: 0.5rem;
  margin: 0.5rem;
`;
const App = () => {
  return (
    <HomeSectionStyled>
      <h1>Le Backoffice de mon portfolio</h1>
      <div>
        <ButtonStyled>Voir tous mes projets</ButtonStyled>
        <ButtonStyled>Ajouter un projet</ButtonStyled>
      </div>
    </HomeSectionStyled>
  );
};

export default App;
