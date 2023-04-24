import { BrowserRouter, Routes, Route } from "react-router-dom";
import First from "./components/First";
import Second from "./components/Second";
import Navbar from "./components/Navbar";
//import Bg from "./components/Bg";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/camp-yellow-assignment" element={<First />} />
          <Route path="/camp-yellow-assignment/next" element={<Second />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
