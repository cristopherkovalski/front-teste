
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import InserirItem from './components/inserir-item';
import ListarItens from './components/listar-itens';
import EditarItem from './components/editar-item';
import VisualizarItem from './components/visualizar-item';

function App() {

  return (
    <Router>
    <div>
      <Routes>
        <Route path="/" element={<ListarItens />} />
        <Route path="/inserir-item" element={<InserirItem />} />
        <Route path="/editar-item" element={<EditarItem />} /> 
        <Route path="/visualizar-item" element={<VisualizarItem />} />
      </Routes>
    </div>
  </Router>
  )
}

export default App
