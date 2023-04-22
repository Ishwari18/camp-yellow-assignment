import { BrowserRouter, Routes, Route } from "react-router-dom";
import First from "./components/First";
import vid from "./";
import Second from "./components/Second";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<First />} />
          <Route path="/next" element={<Second />} />
        </Routes>
        </BrowserRouter>
    </>
  );
}
export default App;
