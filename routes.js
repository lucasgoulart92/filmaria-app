import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
// precisamos importar as páginas dentro do Routes.js

import Header from './Components/Header';
import Footer from './Components/Footer';
import Filme from './pages/Filme';
import Favoritos from './pages/Favoritos';
import Erro from './pages/Erro';

const Routes = () => {
    return (
        <Router>
            <Header/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/filme/:id" component={Filme}/>
                <Route exact path="/favoritos" component={Favoritos}/>
                <Route path="*" component={Erro} />
            </Switch>
            <Footer/>
        </Router>
    )
}

// colocamos o Header antes do Switch para ter o cabeçalho em todas as páginas

// Usamos Switch para garantir rotas únicas no site,
// sem risco de duplicação por rotas que coincidam com
// outras por trechos do id, por exemplo

// exact dentro do Route garante que não haverão confusões

export default Routes;
// O Routes deve ser importado dentro do App.js para funcionar