import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Page404 from "./pages/Page404";
import MMORPG from "./pages/MMORPG";
import FPS from "./pages/FPS";
import MOBA from "./pages/MOBA";
import Jogo from "./pages/Jogo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/mmorpg" element={<MMORPG />} />
          <Route path="/fps" element={<FPS />} />
          <Route path="/moba" element={<MOBA />} />
          <Route path="/jogo/:id" element={<Jogo />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
