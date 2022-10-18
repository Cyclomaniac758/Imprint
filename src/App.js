import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/landingPage/LandingPage";
import Result from "./pages/resultPage/ResultPage";
import Calculator from "./pages/calculator/Calculator";
import StoreProvider from "./data/Store";
// import { useState } from "react";

function App() {
  // React router to control flow from the home page, quesion pages and result page

  // Info for user testing automation
  // const [usernum, setusernum] = useState(1);

  return (
    <StoreProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/calculator" element={<Calculator/>} />
          <Route
            path="/result"
            element={<Result/>}
          />
        </Routes>
      </BrowserRouter>
    </StoreProvider>
    
  );
}

export default App;
