import "./style.css"

export function Visualizer() {
  return (
    <div className="visualizer">
      <iframe className="frame" src="https://sketchfab.com/models/0d1229f8aa104445890d73a04b251aa3/embed?autostart=1&transparent=1"></iframe>
      <ul className="list-buttons">
        <li>
          <button className="buttons">
            <img className="images-buttons" src="https://static.wixstatic.com/media/ebc5fb_bc75d16c56dc4bbebf41a74456058052~mv2.jpg" alt="" />
            <p className="name-buttons">ALCEU FELDMANN</p>
            </button>
        </li>
        <li>
          <button className="buttons">
            <img className="images-buttons" src="https://static.wixstatic.com/media/ebc5fb_3f2f15448d524dc2865c4583abc1eaa0~mv2.jpg" alt="" />
            <p className="name-buttons">CHICO HORTA</p>
            </button>
        </li>
        <li>
          <button className="buttons">
            <img className="images-buttons" src="https://static.wixstatic.com/media/ebc5fb_29f3ea8cc1d145538eafab7a571b861c~mv2.jpg" alt="" />
            <p className="name-buttons">NICOLAS COSTA</p>
            </button>
        </li>
        <li>
          <button className="buttons">
            <img className="images-buttons" src="https://static.wixstatic.com/media/ebc5fb_fa0ed936b0ad451ab6075e7431af9fa7~mv2.jpg" alt="" />
            <p className="name-buttons">RODRIGO MELLO</p>
          </button>
        </li>
        <li>
          <button className="buttons">
            <img className="images-buttons" src="https://static.wixstatic.com/media/ebc5fb_b4fa295711694960ab6c57e4aa26dc5d~mv2.jpg" alt="" />
            <p className="name-buttons">WERNER NEUGEBAUER</p>
          </button>
        </li>
      </ul>
    </div>
  )
}


