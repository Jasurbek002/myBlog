import {BrowserRouter,Route,Routes} from 'react-router-dom'
import './App.css';
import About from './Companents/About/About';
import Home from './Companents/Home/Home';
import Porject from './Companents/Projects/Porject';
import Admin from './Layout/Admin';
import {useTranslation} from 'react-i18next'

function App() {
  const {t}  = useTranslation()
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Admin />} >
        <Route index path='/' element={<Home />} />
        <Route path='/About'element={<About />} />
        <Route path='/Projects' element={<Porject />} />
      </Route>

    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
