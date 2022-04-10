import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './favoritos.css';
import {toast} from 'react-toastify';

export default function Favoritos(){
    const [filmes, setFilmes] = useState([]);

    useEffect(()=>{
        const minhaLista = localStorage.getItem('filmes');
        setFilmes(JSON.parse(minhaLista) || []);

    }, []);

    function handleDelete(id){
        // essa função vai percorrer o Storage e devolver todos os itens, menos o que eu cliquei
        let filtroFilmes = filmes.filter((item)=> {
            return (item.id !== id)
        })

        setFilmes(filtroFilmes);
        localStorage.setItem('filmes', JSON.stringify(filtroFilmes))
        toast.success('Filme escluído com sucesso!')
    }

    return(
        <div id="meus-filmes">
            <h1>Seus filmes salvos</h1>

            {filmes.length === 0 && <p>Você ainda não possui nenhum filme salvo, <Link to="/" >volte à tela inicial</Link> para escolher</p>}

            <ul>
                {filmes.map((item)=>{
                    return(
                        <li key={item.id}>
                            <Link to={`/filme/${item.id}`}>{item.nome}</Link>

                            <div>
                                <Link to={`/filme/${item.id}`} >Ver Detalhes</Link>
                                <button onClick={ () => handleDelete(item.id) }>Excluir</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}