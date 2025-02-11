import ButtonUp from './components/ButtonUp/ButtonUp';
import Navbar from './components/Navbar/Navbar';
import Home from './view/Home/Home';
import './Global.css'
import Tech from './view/Tech/Tech';
import Projects from './view/Projects/Projects';
import Servicos from './view/Servics/Servics'

function App() {
  return (
    <div className='background'>
      <Navbar />
      <Home />
      <Tech />
      <Projects />
      <Servicos />
      <ButtonUp />
    </div>
  );
}

export default App;