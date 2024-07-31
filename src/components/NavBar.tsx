import zorvanz from '/Zorvanz_1.svg'

export function NavBar() {
    return (
        <>
            <div className="navbar">
                <div className="navbar__logo">
                    <a href="/">
                        <img className='logo' src={zorvanz} alt="zorvanz logo" />
                    </a>
                </div>
                <div className='navbar__btns'>
                    <a href='/login'>Entrar</a>
                    <a href='/comprar'>Comprar</a>
                </div>
            </div>
        </>
    )
}