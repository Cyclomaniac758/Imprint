import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './pages/landingPage/Landing';
import Result from "./pages/ResultPage";
import Calculator from "./pages/calculator/Calculator";

function App() {
  // React router to control flow from the home page, quesion pages and result page
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
