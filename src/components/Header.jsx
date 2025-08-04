
export const Header = ({title})=>{

    return (
    <header className="bg-white shadow-md px-6 py-2 border-b-4 border-b-gray-300/50">
      <div className="flex flex-col items-center gap-2 md:flex-row md:items-center md:gap-12 md:h-[88px]">
        {/* Logo */}
        <div className="text-2xl flex-1 font-bold text-red-600">
          {title}
        </div>

        {/* Menu */}
        <ul className="menu menu-horizontal gap-2 text-black  font-medium">
          <li className="hover:text-red-500"><a href="#hero">Accueil</a></li>
          <li className="hover:text-red-500"><a href="#service">Services</a></li>
          <li className="hover:text-red-500"><a>A propos</a></li>
          <li className="hover:text-red-500"><a>Contact</a></li>
        </ul>

        <div className="flex-1"></div>
      </div>
    </header>
  );

}