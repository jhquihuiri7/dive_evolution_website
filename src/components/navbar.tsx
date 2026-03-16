"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { FunctionComponent, useEffect, useState } from "react";

interface NavbarProps {
  change_items_color: boolean;
}

const Navbar: FunctionComponent<NavbarProps> = ({ change_items_color }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { text: "Inicio", url: "/" },
    { text: "Tours", url: "/tours" },
    { text: "Cursos", url: "/cursos" },
    { text: "Contacto", url: "/contacto" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed left-0 top-0 z-50 w-full shadow-md transition-colors duration-300 ${
        scrolled ? "bg-white text-black" : "bg-transparent text-white group"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image
              src={scrolled ? "/logo_black.png" : "/logo.png"}
              alt="Logo"
              width={40}
              height={40}
              className="h-10 w-10"
              priority
            />
            <span
              className={`text-xl font-bold ${
                scrolled ? "text-black" : "text-white"
              }`}
            >
              Dive Evolution
            </span>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className={`text-lg ${scrolled ? "text-black" : "text-white"}`}
              aria-label={menuOpen ? "Cerrar menu" : "Abrir menu"}
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          <div
            className={`absolute left-0 top-16 w-full text-lg md:static md:w-auto md:flex ${
              menuOpen ? "block bg-white text-black md:bg-transparent" : "hidden"
            }`}
          >
            <ul className="py-2 text-center md:flex md:space-x-6 md:py-0">
              {navItems.map(({ text, url }) => (
                <li key={text}>
                  <Link
                    href={url}
                    onClick={() => setMenuOpen(false)}
                    className={`block px-4 py-2 md:p-0 ${
                      scrolled
                        ? "text-black"
                        : menuOpen
                          ? "text-black"
                          : change_items_color
                            ? "text-black"
                            : "text-white"
                    }`}
                  >
                    {text}
                  </Link>
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
