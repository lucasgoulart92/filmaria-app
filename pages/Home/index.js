import { useEffect, useState } from 'react';
import './home.css';
import api from '../../services/api';

import {Link} from 'react-router-dom';



export default function Home() {


  const [filmes, steFilmes] = useState([]);

  useEffect(()=>{

    async function loadFilmes() {
      const response = await api.get('r-api/?api=filmes')
      // console.log(response.data; para testar
      steFilmes(response.data);
    }
    // usa async pq é uma função assíncrona, precisa buscar pelo conteúdo
    // await indica para a função esperar pelo resultado da requisição
    // método get vai buscar pelo conteúdo com a rota estre os parênteses
    // todos os resultados da requisição já colocados dentro da variável response
    // response.data corresponde a apenas os arrays da API

    loadFilmes();

  }, []);


  return (
    <div className="container" >
      <div className="lista-filmes" >
        {filmes.map((filme)=>{
          return(
            <article key={filme.id} >
              <Link to={`/filme/${filme.id}`}>
                <div className="photoframe">
                  <img src={filme.foto} alt={filme.nome} ></img>
                </div>
                <h3>{filme.nome}</h3>
              </Link>
            </article>
          )
        })}
      </div>
    </div>
  );
}

