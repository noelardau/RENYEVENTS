import { useTranslation } from 'react-i18next';
import { useEffect, useRef } from 'react';

export const LangSwitcher = () => {
  const { i18n } = useTranslation();
  const dropdownRef = useRef(null);

  useEffect(() => {
    i18n.changeLanguage("mg");

  }, []);


  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    // Fermer le menu déroulant après sélection
    if (dropdownRef.current) {
      dropdownRef.current.blur(); // Retire le focus pour fermer le dropdown
    }
  };

  const language = {
    MG: "mg",
    FR: "fr"
  }

  // Récupérer le code de la langue actuelle (ex: 'MG' ou 'FR')
  const currentLangCode = i18n.language.toUpperCase();

  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-sm m-1 flex items-center gap-2" ref={dropdownRef}>
        <span className={`fi fi-${i18n.language}`}></span>
        {currentLangCode}
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 shadow bg-white rounded-box w-52"
      >
        <li>
          <button
            onClick={() => changeLanguage(language.MG)}
            className="flex items-center gap-2 justify-between hover:bg-gray-100 transition-opacity duration-200"
          >
            <span className="fi fi-mg flex-shrink-0"></span>
            <span>Malagasy</span>
          </button>
        </li>
        <li>
          <button
            onClick={() => changeLanguage(language.FR)}
            className="flex items-center gap-2 justify-between hover:bg-gray-100 transition-opacity duration-200"
          >
            <span className="fi fi-fr flex-shrink-0"></span>
            <span>Français</span>
          </button>
        </li>
      </ul>
    </div>
  );
};