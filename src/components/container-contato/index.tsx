import './style.css'

export function ContainerContato() {
    return (
        <div className='container-contato'>
            <h1 className='title-contato'>CONTATO</h1>
            <form className='form-contato'>
                <label className='label-contato' htmlFor="">Nome</label>
                <input placeholder="Seu nome..." className='input-contato' type="text" name="" id="" />
                <label className='label-contato' htmlFor="">E-mail</label>
                <input placeholder="Seu e-mail..." className='input-contato' type="text" name="" id="" />
                <label className='label-contato' htmlFor="">Mensagem</label>
                <textarea placeholder="Sua mensagem..." className='textarea-contato'></textarea>
                <button className='button-contato' >Enviar</button>
            </form>
            
        </div>
    )
}