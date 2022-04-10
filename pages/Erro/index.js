import './erro.css';
import { Link } from 'react-router-dom';

export default function erro() {
    return(
        <div>
            <h1>Erro 404</h1>
            <p>Página não encontrada</p>
            <Link to="/">Ver todos os filmes</Link>
        </div>
    )

}