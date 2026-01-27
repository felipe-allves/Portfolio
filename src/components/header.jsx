function Header() {
    return (
        <header>
            <div className="container">
                <div className="navbar">
                    <div className="logo">
                        <h1>Felipe <span>Alves</span></h1>
                    </div>
                    <ul>
                        <li><a href="#hero">Início</a></li>
                        <li><a href="#about">Sobre mim</a></li>
                        <li><a href="#projects">Meus projetos</a></li>
                        <li><a href="#knowledge">Conhecimentos</a></li>
                    </ul>
                    <button><a href="#contact">Vamos conversar</a></button>
                </div>
            </div>
        </header>
    );
}

export default Header;