import { Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio/Inicio/Inicio";
import Nosotros from "./pages/Nosotros/Nosotros";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/Banda" element={<Nosotros />} />
    </Routes>
  );
}

export default App;