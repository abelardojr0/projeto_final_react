import { useParams } from "react-router-dom";
import { JogoContent, JogoImg, JogoInfos, JogoSection } from "./style";
import { useEffect, useState } from "react";
import axios from "axios";

function Jogo() {
  const { id } = useParams();

  const [jogo, setJogo] = useState();

  async function buscar_jogo() {
    const { data } = await axios.get(`http://localhost:3000/${id}`);
    setJogo(data);
    console.log(data);
  }
  useEffect(() => {
    buscar_jogo();
  }, []);

  return (
    <>
      {jogo && (
        <JogoSection>
          <h1>{jogo.titulo}</h1>
          <JogoContent>
            <JogoImg src={jogo.foto} />
            <JogoInfos>
              <h3>{jogo.titulo}</h3>
              <p>{jogo.descricao}</p>
              <p>{jogo.lancamento}</p>
            </JogoInfos>
          </JogoContent>
        </JogoSection>
      )}
    </>
  );
}

export default Jogo;
