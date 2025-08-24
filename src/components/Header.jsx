
export const Header = ({title})=>{

    return (
      <header className="header-style">        
        <div className="header-layout">
          <div className="title-style">
            {title}
          </div>
          <ul className="nav-style">
            <li className="hover:text-red-500"><a href="#hero">Accueil</a></li>
            <li className="hover:text-red-500"><a href="#service">Services</a></li>
            <li className="hover:text-red-500"><a href="#about">A propos</a></li>
            <li className="hover:text-red-500"><a href="#contact">Contacts</a></li>
          </ul>
          <div className="flex-1"></div>
        </div>
      </header>
    );

}