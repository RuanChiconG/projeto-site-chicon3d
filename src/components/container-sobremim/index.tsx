import avatar from './assets/avatar.png'
import './style.css'

export function ContainerSobreMim() {
    return (
        <div className="div-sobremim">
            <img className="imagem-avatar" src={avatar} alt="" />
            <ul className="items-sobremim">
                <li><h1 className="title-sobremim">Sobre</h1></li>
                <li><p className="text-sobremim">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa sunt soluta similique sed tenetur illo modi impedit, 
                perferendis dignissimos quo facere nulla dolor reprehenderit, earum architecto dicta ex quis facilis? Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Quidem sed vero in optio soluta. Totam fugiat cumque quia impedit. Mollitia earum adipisci ipsam nulla, voluptatem nam beatae placeat autem vero.</p></li>
            </ul>
        </div>
    )
}