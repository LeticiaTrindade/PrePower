import Home from './Components/Categories';
import Operador from './Components/Operador';
import Saude from './Components/Saude';
import Administrator from './Components/Administrator';

import Computing from './Components/Operador/computing';
import Windows from './Components/Operador/Windows11';
import Internet from './Components/Operador/Internet';
import Word from './Components/Operador/Word';
import Powerpoint from './Components/Operador/Powerpoint';
import Excel from './Components/Operador/Excel';

import PharmacyattendantI from './Components/Saude/PharmacyattendantI';
import PharmacyattendantII from './Components/Saude/PharmacyattendantII';
import Elderly from './Components/Saude/Elderly';
import ProfessionDoctor from './Components/Saude/ProfessionDoctor';
import Tooth from './Components/Saude/Tooth';
import FrontDesk from './Components/Saude/FrontDesk';

import Operation from './Components/Administrator/Operation';
import Secreaty from './Components/Administrator/Secretary';
import Leader from './Components/Administrator/Leader';
import Math from './Components/Administrator/Math';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/PrePower" element={<Home/>} />
        <Route path="/operador-de-computador" element={<Operador/>} />
        <Route path="/Saude" element={<Saude/>} />
        <Route path="/administracao" element={<Administrator/>} />

        <Route path="/operador-de-computador/informatica" element={<Computing/>} />
        <Route path="/operador-de-computador/windows11" element={<Windows/>} />
        <Route path="/operador-de-computador/internet" element={<Internet/>} />
        <Route path="/operador-de-computador/word" element={<Word/>} />
        <Route path="/operador-de-computador/powerpoint" element={<Powerpoint/>} />
        <Route path="/operador-de-computador/excel" element={<Excel/>} />

        <Route path="/saude/atendente-de-farmacia-i" element={<PharmacyattendantI/>} />
        <Route path="/saude/atendente-de-farmacia-ii" element={<PharmacyattendantII/>} />
        <Route path="/saude/cuidador-de-idosos" element={<Elderly/>} />
        <Route path="/saude/auxiliar-medico" element={<ProfessionDoctor/>} />
        <Route path="/saude/auxiliar-de-servico-odontologico" element={<Tooth/>} />
        <Route path="/saude/tecnicas-de-recepcao" element={<FrontDesk/>} />

        <Route path="/administracao/lideranca" element={<Leader/>} />
        <Route path="/administracao/matematica-financeira" element={<Math/>} />
        <Route path="/administracao/secretariado" element={<Secreaty/>} />
        <Route path="/administracao/assistente-administrativo" element={<Operation/>} />
      
      </Routes>
    </Router>
  );
}

export default App;
