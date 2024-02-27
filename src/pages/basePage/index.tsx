import { Outlet } from "react-router-dom";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import './style.css'

export default function BasePage() {
    return (
        <>
        <Header />
        <main>
            <Outlet />
        </main>
        <Footer />        
        </>
    )
}