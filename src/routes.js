import { Menu } from "components/menu"
import Cardapio from "pages/Cardapio"
import { Inicio } from "pages/Inicio"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { DefaulPage } from "components/defaultPage"

export const AppRouter = () => {
    return(
        <main>
            <Router>
            <Menu />
            <Routes>
                <Route path="/" element={<DefaulPage />}>
                    <Route index element={<Inicio/>} /> 
                    <Route path="cardapio" element={<Cardapio />} />
                    <Route path="/*" element={<div>Não encontrado</div>} />
                </Route>
            </Routes>
            </Router>
        </main>
    )
}