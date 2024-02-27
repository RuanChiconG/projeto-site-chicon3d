import { Link } from 'react-router-dom'
import logo from './assets/logo.png'
import './style.css'


export function Header() {
    
    return (
        <header className='header-pages'>
            <img className='image-logo' src={logo} alt="Logo Chicon" />
            <nav className='navegation'>
                <ul className='list-header'>
                    <li>
                        <Link className='link-paginas' to="/">
                        <a className='items'>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link className='link-paginas' to="/sobremim">
                        <a className='items' href="">Sobre mim</a>
                        </Link>
                    </li>
                    <li>
                        <Link className='link-paginas' to="/projetos">
                        <a className='items' href="">Projetos</a>
                        </Link>
                    </li>
                    <li>
                        <Link className='link-paginas' to="/contato">
                        <a className='items' href="">Contato</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}