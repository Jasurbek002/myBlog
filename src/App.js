import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import About from './Companents/About/About';
import AdminAbout from './Companents/Admin/companents/about/about';


import Home from './Companents/Home/Home';
import AdminHome from './Companents/Admin/companents/home/home';

import Porject from './Companents/Projects/Porject';
import AdminPorject from './Companents/Admin/companents/projects/projects';

import AdminBlog from './Companents/Admin/companents/blog/blog'

import Admin from './Layout/Admin';
import { useTranslation } from 'react-i18next'
import Servis from './Page/servis/servis';
import SupperAdmin from './Companents/Admin/supperAdmin';
import Login from './auth/Login/login';
import ProtectedAdmin from './auth/Protected/protectAdmin';
import Xizmatlar from './Page/Xizmatlar';

function App() {
  const { t } = useTranslation()
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>
          <Route path='/' element={<Admin />} >
            <Route index path='/' element={<Home />} />
            <Route path='/About' element={<About />} />
            <Route path='/xizmatlar' element={<Xizmatlar />} />
            <Route path='/Projects' element={<Porject />} />
          </Route>
          <Route path='/Servis' element={<Servis />} />
        </Routes>

        <Routes>
          <Route path='/admin' element={
            <ProtectedAdmin>
              <SupperAdmin />
            </ProtectedAdmin>
          } >
            <Route index path='/admin/home' element={<AdminHome />} />
            <Route path='/admin/about' element={<AdminAbout />} />
            <Route path='/admin/blog' element={<AdminBlog />} />
            <Route path='/admin/projects' element={<AdminPorject />} />
          </Route>
          <Route path='/admin/login' element={<Login />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
