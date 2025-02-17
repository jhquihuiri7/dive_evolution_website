"use client";
import { Menu, X } from "lucide-react"; // Íconos de menú y cerrar
import React, { FunctionComponent, useState, useEffect } from "react";

const Navbar: FunctionComponent = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 shadow-md transition-colors duration-300 ${
        scrolled ? "bg-white text-black" : "bg-transparent text-white group"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo y Nombre de la Empresa */}
          <div className="flex items-center space-x-2">
            <img src="/logo.png" alt="Logo" className="h-10" />
            <span
              className={`text-xl font-bold${
                scrolled ? "text-black" : "text-white"
              }`}
            >
              Dive Evolution
            </span>
          </div>

          {/* Botón de menú en móviles */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`${
                scrolled ? "text-black" : "text-white"
              }`}
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Menú de navegación */}
          <div
            className={`absolute top-16 left-0 w-full md:static md:w-auto md:flex ${
              menuOpen ? "block text-black bg-white md:bg-transparent" : "hidden"
            }`}
          >
            <ul className="md:flex md:space-x-6 text-center py-2 md:py-0">
              {["Inicio", "Tours", "Cursos", "Nosotros"].map((item) => (
                <li key={item}>
                  <a
                    href="http://localhost:3000/tours"
                    className={`block px-4 py-2 md:p-0 ${
                      scrolled ? "text-black" : (menuOpen ? "text-black": "text-white")
                    }`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
