import { useState } from "react";
import { LangSwitcher } from "./LangSwitcher";
import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react";

export const Header = ({ title }) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full shadow-md bg-white fixed top-0 left-0 right-0 z-20">
      <div className="flex items-center justify-between p-4">
        {/* Titre toujours à gauche */}
        <div className="text-xl font-bold text-red-600">{title}</div>

        {/* Menu Desktop (masqué en mobile) */}
        <ul className="hidden md:flex gap-6">
          <li className="hover:text-red-500">
            <a href="#hero">{t("home")}</a>
          </li>
          <li className="hover:text-red-500">
            <a href="#service">{t("services")}</a>
          </li>
          <li className="hover:text-red-500">
            <a href="#about">{t("about")}</a>
          </li>
          <li className="hover:text-red-500">
            <a href="#contact">{t("contacts")}</a>
          </li>
        </ul>

        {/* LangSwitcher Desktop */}
        <div className="hidden md:flex">
          <LangSwitcher />
        </div>

        {/* Bouton Hamburger (seulement en mobile) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Menu Mobile (déroulant) */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md p-4">
          <ul className="flex flex-col gap-4 text-center">
            <li>
              <a
                href="#hero"
                className="hover:text-red-500"
                onClick={() => setIsOpen(false)}
              >
                {t("home")}
              </a>
            </li>
            <li>
              <a
                href="#service"
                className="hover:text-red-500"
                onClick={() => setIsOpen(false)}
              >
                {t("services")}
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-red-500"
                onClick={() => setIsOpen(false)}
              >
                {t("about")}
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-red-500"
                onClick={() => setIsOpen(false)}
              >
                {t("contacts")}
              </a>
            </li>
            <div className="flex justify-center">
              <LangSwitcher />
            </div>
          </ul>
        </div>
      )}
    </header>
  );
};
