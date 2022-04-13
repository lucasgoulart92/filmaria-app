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
                                <button onClick={ () => handleDelete(item.id) }>
                                    <svg className="delete-filme" enable-background="new 0 0 92 92" height="92" viewBox="0 0 92 92" width="92" xmlns="http://www.w3.org/2000/svg"><path d="m78.4 30.4-3.1 57.8c-.1 2.1-1.9 3.8-4 3.8h-50.6c-2.1 0-3.9-1.7-4-3.8l-3.1-57.8c-.1-2.2 1.6-4.1 3.8-4.2s4.1 1.6 4.2 3.8l2.9 54h43.1l2.9-54c.1-2.2 2-3.9 4.2-3.8 2.1.1 3.8 2 3.7 4.2zm10.6-13.4c0 2.2-1.8 4-4 4h-78c-2.2 0-4-1.8-4-4s1.8-4 4-4h22v-9c0-1.9 1.3-3 3.2-3h27.6c1.9 0 3.2 1.1 3.2 3v9h22c2.2 0 4 1.8 4 4zm-53-4h20v-5h-20zm1.7 65c2 0 3.5-1.9 3.5-3.8l-1-43.2c0-1.9-1.6-3.5-3.6-3.5-1.9 0-3.5 1.6-3.4 3.6l1 43.3c0 1.9 1.6 3.6 3.5 3.6zm16.5 0c1.9 0 3.5-1.6 3.5-3.5l1-43.2c0-1.9-1.5-3.6-3.4-3.6-2 0-3.5 1.5-3.6 3.4l-1 43.2c-.1 2 1.5 3.7 3.5 3.7-.1 0-.1 0 0 0z"/></svg>
                                </button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}