import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FromHome from './pages/FromHome';
import Home from './pages/Home';
import InTheOffice from './pages/InTheOffice';
import Hybrid from './pages/Hybrid';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/fromHome' element={<FromHome/>}></Route>
        <Route path='/inTheOffice' element={<InTheOffice/>}></Route>
        <Route path='/hybrid' element={<Hybrid/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
