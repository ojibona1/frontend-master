import {Routes, Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login';
import Register from './pages/Register';
import Header from './components/Header';
import FloatButton from './components/FloatButton';
import Contact from './pages/Contact'
import Footer from './components/Footer';
import Search from './pages/Search';
import Catalog from './pages/Catalog';
import Cart from './pages/Cart';

function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route index element={<Dashboard/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/Register' element={<Register/>} />
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/catalog' element={<Catalog/>} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>
      <Footer/>
      <FloatButton/>
    </>
  );
}

export default App;
