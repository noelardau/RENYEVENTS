import { LangSwitcher } from "./LangSwitcher";
import { useTranslation } from 'react-i18next';


export const Header = ({title})=>{
  const { t } = useTranslation();

    return (
      <header className="header-style" >        
        <div className="header-layout">
          <div className="title-style">
            {title}
          </div>
          <ul className="nav-style">
            <li className="hover:text-red-500"><a href="#hero">{t("home")}</a></li>
            <li className="hover:text-red-500"><a href="#service">{t("services")}</a></li>
            <li className="hover:text-red-500"><a href="#about">{t("about")}</a></li>
            <li className="hover:text-red-500"><a href="#contact">{t("contacts")}</a></li>
          </ul>
          <div className="flex-1 flex justify-center">
                 <LangSwitcher></LangSwitcher>
          </div>
        </div>
      </header>
    );

}