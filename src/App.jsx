import ButtonUp from './components/ButtonUp/ButtonUp';
import Navbar from './components/Navbar/Navbar';
import Home from './view/Home/Home';
import './Global.scss'
import Tech from './view/Tech/Tech';
import Projects from './view/Projects/Projects';
import Servicos from './view/Servics/Servics'
import Contato from './view/Contato/Contato'

function App() {
  return (
    <div className='background'>
      <Navbar />
      <Home />
      <Tech />
      <Projects />
      <Servicos />
      <Contato />
      <ButtonUp />
    </div>
  );
}

export default App;