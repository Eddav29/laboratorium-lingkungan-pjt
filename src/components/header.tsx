"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
      // Close dropdown when scrolling
      setIsDropdownOpen(false);
    };

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.dropdown-container')) {
        setIsDropdownOpen(false);
      }
    };

    const handleResize = () => {
      // Close mobile menu when resizing to desktop
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
        setIsDropdownOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    document.addEventListener("click", handleClickOutside);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("click", handleClickOutside);
    };
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

  const whatsappNumber = "6281230738591"; // Nomor WhatsApp Lab Cabang Malang
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Halo%20Laboratorium%20PJT%20Cabang%20Malang%2C%20saya%20ingin%20berkonsultasi%20mengenai%20layanan%20analisis%20lingkungan.`;

  // Fungsi untuk mengecek apakah menu sedang aktif
  const isActiveRoute = (href: string) => {
    if (href === "/") {
      return pathname === "/" || pathname === "/home";
    }
    return pathname.startsWith(href);
  };

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
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
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
                    <div className="relative dropdown-container">
                      <button
                        onClick={toggleDropdown}
                        className={`flex items-center py-2 px-3 rounded font-medium transition-colors duration-200 hover:text-blue-700 ${
                          isScrolled 
                            ? "text-gray-900" 
                            : "text-white"
                        } ${
                          isActiveRoute(item.href) ? (isScrolled ? "text-blue-700" : "text-blue-200") : ""
                        }`}
                      >
                        {item.label}
                        <ChevronDown
                          size={16}
                          className={`ml-1 transition-transform duration-200 ${
                            isDropdownOpen ? "rotate-180" : ""
                          }`}
                        />
                        {/* Strip aktif untuk dropdown */}
                        {isActiveRoute(item.href) && (
                          <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-1 rounded-full transition-colors duration-200 ${
                            isScrolled ? "bg-blue-600" : "bg-blue-200"
                          }`}></div>
                        )}
                      </button>

                      {/* Dropdown menu */}
                      {isDropdownOpen && (
                        <div className="absolute top-full left-0 mt-2 z-[200] bg-white divide-y divide-gray-100 rounded-lg shadow-xl w-64 border border-gray-200">
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
                      className={`py-2 px-3 rounded font-medium transition-colors duration-200 hover:text-blue-700 relative ${
                        isScrolled 
                          ? "text-gray-900" 
                          : "text-white"
                      } ${
                        isActiveRoute(item.href) ? (isScrolled ? "text-blue-700" : "text-blue-200") : ""
                      }`}
                    >
                      {item.label}
                      {/* Strip aktif untuk menu biasa */}
                      {isActiveRoute(item.href) && (
                        <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-1 rounded-full transition-colors duration-200 ${
                          isScrolled ? "bg-blue-600" : "bg-blue-200"
                        }`}></div>
                      )}
                    </Link>
                  )}
                </li>
                ))}
              </ul>
            </div>          {/* Contact Button - Right (Desktop) */}
          <div className="hidden md:flex flex-shrink-0">
            <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button
                className={`transition-all duration-300 transform hover:scale-105 hover:shadow-lg group ${
                  isScrolled
                    ? "bg-blue-600 hover:bg-blue-700 text-white hover:shadow-blue-200"
                    : "bg-white hover:bg-blue-50 text-blue-600 hover:text-blue-700 hover:shadow-gray-200"
                }`}
              >
                <span className="flex items-center">
                  <svg 
                    className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:rotate-12" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787"/>
                  </svg>
                  Hubungi Kami
                </span>
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
            <>
              {/* Backdrop */}
              <div 
                className="fixed inset-0 bg-black bg-opacity-25 z-[90] md:hidden"
                onClick={() => setIsMobileMenuOpen(false)}
              />
              
              {/* Mobile Menu */}
              <div className="absolute top-full left-0 right-0 md:hidden bg-white border-t border-gray-200 shadow-xl z-[95] max-h-[calc(100vh-80px)] overflow-y-auto">
                <div className="container mx-auto px-4 py-4">
                  <ul className="flex flex-col space-y-2">
                    {navigationItems.map((item) => (
                      <li key={item.href}>
                        {item.hasDropdown ? (
                          <div>
                            <button
                              onClick={toggleDropdown}
                              className={`flex items-center justify-between w-full py-3 px-4 text-gray-900 rounded-lg hover:bg-gray-100 font-medium transition-colors duration-200 ${
                                isActiveRoute(item.href) ? "bg-blue-50 text-blue-700" : ""
                              }`}
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
                              <ul className="mt-2 ml-4 space-y-1 border-l-2 border-blue-200 pl-4">
                                {item.dropdownItems?.map((dropdownItem) => (
                                  <li key={dropdownItem.href}>
                                    <Link
                                      href={dropdownItem.href}
                                      onClick={() => {
                                        closeDropdown();
                                        setIsMobileMenuOpen(false);
                                      }}
                                      className={`flex items-center py-2 px-3 text-gray-700 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 ${
                                        pathname === dropdownItem.href ? "bg-blue-50 text-blue-600" : ""
                                      }`}
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
                            className={`block py-3 px-4 text-gray-900 rounded-lg hover:bg-gray-100 font-medium transition-colors duration-200 ${
                              isActiveRoute(item.href) ? "bg-blue-50 text-blue-700" : ""
                            }`}
                          >
                            {item.label}
                          </Link>
                        )}
                      </li>
                    ))}
                    <li className="pt-4 border-t border-gray-200">
                      <Link
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-lg group py-3">
                          <span className="flex items-center justify-center">
                            <svg 
                              className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:rotate-12" 
                              fill="currentColor" 
                              viewBox="0 0 24 24"
                            >
                              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787"/>
                            </svg>
                            Hubungi Kami
                          </span>
                        </Button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;