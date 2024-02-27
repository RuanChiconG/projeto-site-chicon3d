import projeto1 from './assets/projeto1.jpg'
import projeto2 from './assets/projeto2.jpg'
import projeto3 from './assets/projeto3.jpg'
import projeto4 from './assets/projeto4.jpg'
import projeto5 from './assets/projeto5.jpg'
import projeto6 from './assets/projeto6.jpg'
import projeto7 from './assets/projeto7.jpg'
import projeto8 from './assets/projeto8.jpg'
import projeto9 from './assets/projeto9.jpg'
import projeto10 from './assets/projeto10.jpg'
import projeto11 from './assets/projeto11.jpg'
import projeto12 from './assets/projeto12.jpg'

import './style.css'

export function ContainerProjetos() {
    return (
        <div className='container-projetos'>
            <h1 className='title-projetos'>Projetos</h1>
            <ul className='list-projetos'>
                <li className='items-projetos'>
                    <img className='image-projetos' src={projeto1} alt="" />
                    <a className='link-projetos' href="https://www.instagram.com/p/C1YGiXyrk8F/">Confira o projeto</a>
                </li>
                <li className='items-projetos'>
                    <img className='image-projetos' src={projeto2} alt="" />
                    <a className='link-projetos' href="https://www.instagram.com/p/CyPyMf8u2dR/">Confira o projeto</a>
                </li>
                <li className='items-projetos'>
                    <img className='image-projetos' src={projeto3} alt="" />
                    <a className='link-projetos' href="https://www.instagram.com/p/CwFrT9ZurVG/">Confira o projeto</a>
                </li>
                <li className='items-projetos'>
                    <img className='image-projetos' src={projeto4} alt="" />
                    <a className='link-projetos' href="https://www.instagram.com/p/CuZSJ07OjKG/?img_index=1">Confira o projeto</a>
                </li>
                <li className='items-projetos'>
                    <img className='image-projetos' src={projeto5} alt="" />
                    <a className='link-projetos' href="https://www.instagram.com/p/Ctg_85gLSOB/?img_index=1">Confira o projeto</a>
                </li>
                <li className='items-projetos'>
                    <img className='image-projetos' src={projeto6} alt="" />
                    <a className='link-projetos' href="https://www.instagram.com/p/CtJv97ZO1J8/?img_index=3">Confira o projeto</a>
                </li>
                <li className='items-projetos'>
                    <img className='image-projetos' src={projeto7} alt="" />
                    <a className='link-projetos' href="https://www.instagram.com/p/Cs-S--ktRem/?img_index=1">Confira o projeto</a>
                </li>
                <li className='items-projetos'>
                    <img className='image-projetos' src={projeto8} alt="" />
                    <a className='link-projetos' href="https://www.instagram.com/p/CgDFo5wlsts/">Confira o projeto</a>
                </li>
                <li className='items-projetos'>
                    <img className='image-projetos' src={projeto9} alt="" />
                    <a className='link-projetos' href="https://www.instagram.com/p/Cf_3ujUueOO/">Confira o projeto</a>
                </li>
                <li className='items-projetos'>
                    <img className='image-projetos' src={projeto10} alt="" />
                    <a className='link-projetos' href="https://www.instagram.com/p/Cbtpw1MuP7T/?img_index=1">Confira o projeto</a>
                </li>
                <li className='items-projetos'>
                    <img className='image-projetos' src={projeto11} alt="" />
                    <a className='link-projetos' href="https://www.instagram.com/p/CQ4c9DOH4XO/?img_index=2">Confira o projeto</a>
                </li>
                <li className='items-projetos'>
                    <img className='image-projetos' src={projeto12} alt="" />
                    <a className='link-projetos' href="https://www.instagram.com/p/COGZ2-Cs_1i/">Confira o projeto</a>
                </li>
            </ul>
        </div>
    )
}