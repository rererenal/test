import Home from "./pages/Home";
import { Route, Routes } from "react-router";
import Indonesia from "./pages/Indonesia";
import Provinsea from "./pages/Provinsea";

function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/indonesia" element={<Indonesia />} />
        <Route path="/provinsi" element={<Provinsea />} />
        <Route path="*" element={<Home />} />
      </Routes>
  );
}

export default App;
