import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import BasePage from "./pages/basePage";
import Sobre from "./pages/sobre";
import { Projetos } from "./pages/projetos";
import { Contato } from "./pages/contato";

function AppRoutes() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<BasePage />}>
                <Route index element={<Home />} />
                <Route path="/sobremim" element={<Sobre />} />
                <Route path="/projetos" element={<Projetos />} />
                <Route path="/contato" element={<Contato />}/>
            </Route>
        </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;