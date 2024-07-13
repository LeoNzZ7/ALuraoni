import { Menu } from "components/menu"
import Cardapio from "pages/Cardapio"
import { Inicio } from "pages/Inicio"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { DefaulPage } from "components/defaultPage"
import { Sobre } from "pages/sobre"
import { Footer } from "components/footer"
import { NotFound } from "components/notFound"
import { Prato } from "pages/prato"

export const AppRouter = () => {
    return (
        <main className="container" >
            <Router>
                <Menu />
                <Routes>
                    <Route path="/" element={<DefaulPage />}>
                        <Route index element={<Inicio />} />
                        <Route path="cardapio" element={<Cardapio />} />
                        <Route path="sobre" element={<Sobre />} />
                    </Route>
                    <Route path="prato/:id" element={<Prato />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
            </Router>
        </main>
    )
}