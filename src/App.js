import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/landingPage/Landing";
import Result from "./pages/ResultPage";
import Calculator from "./pages/calculator/Calculator";
import { useState } from "react";

function App() {
  // React router to control flow from the home page, quesion pages and result page
  const [usernum, setusernum] = useState(1);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing usernum={usernum} />} />
        <Route path="/calculator" element={<Calculator usernum={usernum} />} />
        <Route
          path="/result"
          element={<Result usernum={usernum} setusernum={setusernum} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
