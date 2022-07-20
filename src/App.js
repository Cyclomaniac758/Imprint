import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FromHome from './pages/FromHome';
import Home from './pages/Home';
import InTheOffice from './pages/InTheOffice';
import Hybrid from './pages/Hybrid';
import Result from "./pages/Result";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/fromHome' element={<FromHome/>}/>
        <Route path='/inTheOffice' element={<InTheOffice/>}/>
        <Route path='/hybrid' element={<Hybrid/>}/>
        <Route path='/result' element={<Result/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
