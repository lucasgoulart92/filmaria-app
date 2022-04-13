import { useEffect, useState } from 'react';
import './filme-info.css';
import { useParams, useHistory } from 'react-router-dom';
import api from '../../services/api';
import { toast } from 'react-toastify';
import logo from '../../icons/logo.png';

export default function Filme(){
// essa é a função que vai renderizar cada página de filme de acordo com o ID da API

    const { id } = useParams();
    const history = useHistory()

    const [ filme, setFilme ] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function loadFilme(){
            const response = await api.get(`r-api/?api=filmes/${id}`);
            
            if(response.data.length === 0){
                //Se cair em um ID que não existe, retorna para home.
                history.replace('/');
                return;
            }
            
            setFilme(response.data);
            setLoading(false);
        }

        loadFilme();

        return () => {

        }

    }, [history, id]);

    function salvaFilme(){

        const minhaLista = localStorage.getItem('filmes');
        let filmesSalvos = JSON.parse(minhaLista) || [];
        // vai trazer a lista de filmes salvou ou um array vazio

        // Se já tiver esse filmena lista, ignorar
        const hasFilme = filmesSalvos.some( (filmeSalvo)=> filmeSalvo.id === filme.id )
        // o some nos retorna True ou False em relação a ter um filme com o mesmo nome na lista

        if (hasFilme) {
            toast.info('Você já possui este filme salvo');
            return;
        }
        // se tem esse filme na lista, alerta o usuário e para a execução


        filmesSalvos.push(filme);
        localStorage.setItem('filmes', JSON.stringify(filmesSalvos));
        toast.success('Filme Salvo com Sucesso!');
        // adiciona o filme à lista do usuário
    }

    if(loading){
        // vai renderizar esta mensagem enquanto o filme carrega da API
        return(
            <div>
                <img className="loading-image" src={logo}></img>
            </div>
        )
    }

    return(
        <div className="filme-info">
            <img src={filme.foto} />
            <div className="filme-info-text">
                <h1> {filme.nome} </h1>
                <p>
                    {filme.sinopse}
                </p>

                <div className="botoes">
                    <button onClick={ salvaFilme } >Salvar</button>
                    <button>
                        <a target="_blank" href={`https://youtube.com/results?search_query=${filme.nome} trailer`}>
                            Trailer
                        </a>
                    </button>
                </div>
            </div>
        </div>
    )
}