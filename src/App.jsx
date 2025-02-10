import ButtonUp from './components/ButtonUp/ButtonUp';
import Navbar from './components/Navbar/Navbar';
import Home from './view/Home/Home';
import './Global.css'
import Tech from './view/Tech/Tech';

function App() {
  return (
    <div className='background'>
      <Navbar />
      <Home />
      <Tech />
      <ButtonUp />

    </div>
  );
}

export default App;