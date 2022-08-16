import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './pages/landingPage/Landing';
import Result from "./pages/Result";
import Calculator from "./pages/calculator/Calculator";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/calculator' element={<Calculator/>}/>
        <Route path='/result' element={<Result/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
