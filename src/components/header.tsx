"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationItems = [
    { href: "/", label: "Beranda" },
    {
      href: "/about",
      label: "Tentang Kami",
      hasDropdown: true,
      dropdownItems: [
        { href: "/about", label: "Profil Laboratorium", icon: "building" },
        { href: "/about/peralatan", label: "Peralatan Pendukung", icon: "tools" },
        { href: "/about/portofolio", label: "Portofolio Bisnis Strategis", icon: "portfolio" },
      ],
    },
    { href: "/services", label: "Layanan" },
    { href: "/competence", label: "Kompetensi" },
    { href: "/contact", label: "Kontak" },
  ];

  const whatsappNumber = "6281234567890";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const getIcon = (iconType: string) => {
    switch (iconType) {
      case "building":
        return (
          <svg className="w-4 h-4 mr-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        );
      case "tools":
        return (
          <svg className="w-4 h-4 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        );
      case "portfolio":
        return (
          <svg className="w-4 h-4 mr-3 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - Left */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/assets/logo/logo.png"
                alt="Laboratorium Lingkungan PJT"
                width={60}
                height={60}
                className="h-12 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation - Center */}
          <div className="hidden md:flex flex-1 justify-center">
            <ul className="flex items-center space-x-8">
              {navigationItems.map((item) => (
                <li key={item.href} className="relative">
                  {item.hasDropdown ? (
                    <div className="relative">
                      <button
                        onClick={toggleDropdown}
                        className={`flex items-center py-2 px-3 rounded font-medium transition-colors duration-200 hover:text-blue-700 ${
                          isScrolled 
                            ? "text-gray-900" 
                            : "text-white"
                        }`}
                      >
                        {item.label}
                        <ChevronDown
                          size={16}
                          className={`ml-1 transition-transform duration-200 ${
                            isDropdownOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/* Dropdown menu */}
                      {isDropdownOpen && (
                        <div className="absolute top-full left-0 mt-2 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-lg w-60 border">
                          <ul className="py-2 text-sm text-gray-700">
                            {item.dropdownItems?.map((dropdownItem) => (
                              <li key={dropdownItem.href}>
                                <Link
                                  href={dropdownItem.href}
                                  onClick={closeDropdown}
                                  className="flex items-center px-4 py-3 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                                >
                                  {getIcon(dropdownItem.icon)}
                                  {dropdownItem.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={`py-2 px-3 rounded font-medium transition-colors duration-200 hover:text-blue-700 ${
                        isScrolled 
                          ? "text-gray-900" 
                          : "text-white"
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Button - Right (Desktop) */}
          <div className="hidden md:flex flex-shrink-0">
            <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button
                className={`transition-all duration-200 ${
                  isScrolled
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "bg-white hover:bg-gray-100 text-blue-600"
                }`}
              >
                Hubungi Kami
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 ${
              isScrolled ? "text-gray-500" : "text-white hover:bg-gray-700"
            }`}
          >
            <span className="sr-only">Open main menu</span>
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="absolute top-full left-0 right-0 md:hidden bg-white border-t border-gray-200 shadow-lg">
              <div className="container mx-auto px-4 py-4">
                <ul className="flex flex-col space-y-2">
                  {navigationItems.map((item) => (
                    <li key={item.href}>
                      {item.hasDropdown ? (
                        <div>
                          <button
                            onClick={toggleDropdown}
                            className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100"
                          >
                            {item.label}
                            <ChevronDown
                              size={16}
                              className={`transition-transform duration-200 ${
                                isDropdownOpen ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                          {isDropdownOpen && (
                            <ul className="mt-2 ml-4 space-y-2">
                              {item.dropdownItems?.map((dropdownItem) => (
                                <li key={dropdownItem.href}>
                                  <Link
                                    href={dropdownItem.href}
                                    onClick={() => {
                                      closeDropdown();
                                      setIsMobileMenuOpen(false);
                                    }}
                                    className="flex items-center py-2 px-3 text-gray-700 rounded hover:bg-gray-100"
                                  >
                                    {getIcon(dropdownItem.icon)}
                                    {dropdownItem.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100"
                        >
                          {item.label}
                        </Link>
                      )}
                    </li>
                  ))}
                  <li className="pt-2">
                    <Link
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                        Hubungi Kami
                      </Button>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;