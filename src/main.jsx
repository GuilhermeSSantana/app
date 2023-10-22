import ReactDOM from 'react-dom/client'
import Rotas from './routers'
import './main.css'
import Header from './common/Header'


ReactDOM.createRoot(document.getElementById('root')).render(

    <Rotas/>,
    <Header />

)
