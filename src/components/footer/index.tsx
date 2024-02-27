import facebook from './assets/facebook-icon.png'
import instagram from './assets/instagram-icon.png'
import whatsapp from './assets/whatsapp-icon.png'
import './style.css'

export function Footer() {
    return (
        <div className="div-footer">
            <section className="footer-images">
                <a href="https://www.facebook.com/chicon3d"><img src={facebook} alt="" /></a>
                <a href="https://www.instagram.com/chicon_3d/"><img src={instagram} alt="" /></a>
                <a href=""><img src={whatsapp} alt="" /></a>
            </section>
            <p className="footer-text">2024 © Todas as artes foram criadas e desenvolvidas por Rodrigo Chicon</p>
        </div>
    )
}