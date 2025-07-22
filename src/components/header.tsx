"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationItems = [
    { href: "/", label: "Home" },
    {
      href: "/about",
      label: "About",
      hasDropdown: true,
      dropdownItems: [
        { href: "/about", label: "Profil Laboratorium" },
        { href: "/about/peralatan", label: "Peralatan Pendukung" },
      ],
    },
    { href: "/services", label: "Services" },
    { href: "/competence", label: "Competence" },
    { href: "/contact", label: "Contact" },
  ];

  const whatsappNumber = "6281234567890";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-lg backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo - Left */}
          <div className="flex-shrink-0">
            <Link href="/" className="block">
              <Image
                src="/assets/logo/logo.png"
                alt="Laboratorium Lingkungan PJT"
                width={60}
                height={60}
                className="h-12 w-auto"
                loading="lazy"
                placeholder="blur" 
                blurDataURL="..."
                priority={false}
              />
            </Link>
          </div>

          {/* Navigation - Center (Desktop) */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex space-x-8">
              {navigationItems.map((item) => (
                <div key={item.href} className="relative">
                  {item.hasDropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setIsAboutDropdownOpen(true)}
                      onMouseLeave={() => setIsAboutDropdownOpen(false)}
                    >
                      <button
                        className={`font-medium transition-colors duration-200 hover:text-blue-600 flex items-center ${
                          isScrolled ? "text-gray-800" : "text-white"
                        }`}
                      >
                        {item.label}
                        <ChevronDown
                          size={16}
                          className={`ml-1 transition-transform duration-200 ${
                            isAboutDropdownOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/* Dropdown Menu */}
                      {isAboutDropdownOpen && (
                        <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                          {item.dropdownItems?.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.href}
                              href={dropdownItem.href}
                              className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 text-sm font-medium"
                              onClick={() => setIsAboutDropdownOpen(false)}
                            >
                              <div className="flex items-center">
                                {dropdownItem.label === "Profil Laboratorium" && (
                                  <svg
                                    className="w-4 h-4 mr-3 text-blue-500"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                    />
                                  </svg>
                                )}
                                {dropdownItem.label === "Peralatan Pendukung" && (
                                  <svg
                                    className="w-4 h-4 mr-3 text-green-500"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                                    />
                                  </svg>
                                )}
                                {dropdownItem.label}
                              </div>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={`font-medium transition-colors duration-200 hover:text-blue-600 ${
                        isScrolled ? "text-gray-800" : "text-white"
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Button - Right (Desktop) */}
          <div className="hidden md:block">
            <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button
                className={`transition-all duration-200 ${
                  isScrolled
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "bg-white hover:bg-gray-100 text-blue-600"
                }`}
              >
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md transition-colors duration-200 ${
                isScrolled ? "text-gray-800" : "text-white"
              }`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <div key={item.href}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
                        className={`font-medium transition-colors duration-200 hover:text-blue-600 flex items-center justify-between w-full ${
                          isScrolled ? "text-gray-800" : "text-white"
                        }`}
                      >
                        {item.label}
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-200 ${
                            isAboutDropdownOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/* Mobile Dropdown Items */}
                      {isAboutDropdownOpen && (
                        <div className="mt-2 ml-4 space-y-2">
                          {item.dropdownItems?.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.href}
                              href={dropdownItem.href}
                              className={`block font-medium transition-colors duration-200 hover:text-blue-600 text-sm ${
                                isScrolled ? "text-gray-600" : "text-gray-200"
                              }`}
                              onClick={() => {
                                setIsMobileMenuOpen(false);
                                setIsAboutDropdownOpen(false);
                              }}
                            >
                              • {dropdownItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={`font-medium transition-colors duration-200 hover:text-blue-600 ${
                        isScrolled ? "text-gray-800" : "text-white"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Button
                  className={`w-full transition-all duration-200 ${
                    isScrolled
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : "bg-white hover:bg-gray-100 text-blue-600"
                  }`}
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;