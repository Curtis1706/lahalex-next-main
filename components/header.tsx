"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false)
  const [isMobileSolutionsOpen, setIsMobileSolutionsOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
    // Fermer le dropdown mobile quand on ferme le menu
    if (isMobileMenuOpen) {
      setIsMobileSolutionsOpen(false)
    }
  }

  const toggleSolutions = () => {
    setIsSolutionsOpen(!isSolutionsOpen)
  }

  const toggleMobileSolutions = () => {
    setIsMobileSolutionsOpen(!isMobileSolutionsOpen)
  }

  // Fermer le menu mobile quand on clique en dehors
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMobileMenuOpen) {
        const target = event.target as HTMLElement
        if (!target.closest('.mobile-menu-container')) {
          setIsMobileMenuOpen(false)
          setIsMobileSolutionsOpen(false)
        }
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener('click', handleClickOutside)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('click', handleClickOutside)
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  return (
    <>
      {/* Header */}
      <header className="relative bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Left side - Mobile menu and contact links */}
            <div className="flex items-center space-x-4">
              <button onClick={toggleMobileMenu} className="p-2 text-gray-600 hover:text-gray-900">
                <Menu className="h-6 w-6" />
              </button>
              <div className="hidden md:flex items-center space-x-6 text-sm text-gray-600">
                <a href="#" className="hover:text-gray-900">
                  Nous contacter
                </a>
                <a href="#" className="hover:text-gray-900">
                  Essai gratuit
                </a>
              </div>
            </div>

            {/* Center - Logo */}
            <div className="flex-1 flex justify-center">
              <div className="text-2xl font-bold text-gray-900 tracking-wider font-gobold">LAHALEX</div>
            </div>

            {/* Right side - Navigation and login */}
            <div className="flex items-center space-x-6">
              <div className="hidden lg:flex items-center space-x-6 text-sm text-gray-600">
                <div className="relative">
                  <button onClick={toggleSolutions} className="flex items-center space-x-1 hover:text-gray-900">
                    <span>Nos solutions</span>
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  {isSolutionsOpen && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                      <div className="p-2">
                        <a href="#" className="block px-4 py-2 text-red-800 hover:bg-gray-50 rounded font-gobold">
                          LAHALEX UNIVERSEL
                        </a>
                        <a href="#" className="block px-4 py-2 text-red-800 hover:bg-gray-50 rounded font-gobold">
                          LAHALEX AVOCAT
                        </a>
                        <a href="#" className="block px-4 py-2 text-red-800 hover:bg-gray-50 rounded font-gobold">
                          LAHALEX NOTAIRE
                        </a>
                        <a href="#" className="block px-4 py-2 text-red-800 hover:bg-gray-50 rounded font-gobold">
                          LAHALEX COMMISSAIRE DE JUSTICE
                        </a>
                      </div>
                    </div>
                  )}
                </div>
                <a href="#" className="hover:text-gray-900">
                  Nos tarifs
                </a>
              </div>
              <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent">
                Connexion
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-red-900 z-50 flex flex-col transition-all duration-300 ease-in-out mobile-menu-container ${
        isMobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full pointer-events-none'
      }`}>
        <div className="flex justify-end p-4">
          <button 
            onClick={toggleMobileMenu} 
            className="text-white hover:text-gray-200 transition-colors duration-200"
          >
            <X className="h-8 w-8" />
          </button>
        </div>
        <nav className="flex-1 px-8 py-4 overflow-y-auto">
          <ul className="space-y-6 text-white text-2xl font-bold uppercase font-gobold">
            <li className="transform transition-all duration-300 hover:translate-x-2">
              <a href="#" className="block hover:text-gray-200 transition-colors duration-200">
                ACCUEIL
              </a>
            </li>
            <li className="transform transition-all duration-300 hover:translate-x-2">
              <a href="#" className="block hover:text-gray-200 transition-colors duration-200">
                QUI SOMMES - NOUS ?
              </a>
            </li>
            <li>
              <div className="space-y-4">
                <button 
                  onClick={toggleMobileSolutions}
                  className="flex items-center space-x-2 hover:text-gray-200 transition-colors duration-200 transform hover:translate-x-2"
                >
                  <span>NOS SOLUTIONS</span>
                  <ChevronDown className={`h-6 w-6 transition-transform duration-300 ${
                    isMobileSolutionsOpen ? 'rotate-180' : ''
                  }`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isMobileSolutionsOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="ml-8 space-y-4 text-lg font-normal font-gobold">
                    <a href="#" className="block hover:text-gray-200 transition-colors duration-200 transform hover:translate-x-2">
                      LAHALEX UNIVERSEL
                    </a>
                    <a href="#" className="block hover:text-gray-200 transition-colors duration-200 transform hover:translate-x-2">
                      LAHALEX AVOCAT
                    </a>
                    <a href="#" className="block hover:text-gray-200 transition-colors duration-200 transform hover:translate-x-2">
                      LAHALEX NOTAIRE
                    </a>
                    <a href="#" className="block hover:text-gray-200 transition-colors duration-200 transform hover:translate-x-2">
                      LAHALEX COMMISSAIRE DE JUSTICE
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li className="transform transition-all duration-300 hover:translate-x-2">
              <a href="#" className="block hover:text-gray-200 transition-colors duration-200">
                NOS TARIFS
              </a>
            </li>
            <li className="transform transition-all duration-300 hover:translate-x-2">
              <a href="#" className="block hover:text-gray-200 transition-colors duration-200">
                RECRUTEMENT
              </a>
            </li>
            <li className="transform transition-all duration-300 hover:translate-x-2">
              <a href="#" className="block hover:text-gray-200 transition-colors duration-200">
                DEVENIR AUTEUR
              </a>
            </li>
            <li className="transform transition-all duration-300 hover:translate-x-2">
              <a href="#" className="block hover:text-gray-200 transition-colors duration-200">
                ESSAI GRATUIT
              </a>
            </li>
            <li className="transform transition-all duration-300 hover:translate-x-2">
              <a href="#" className="block hover:text-gray-200 transition-colors duration-200">
                CONNEXION
              </a>
            </li>
            <li className="transform transition-all duration-300 hover:translate-x-2">
              <a href="#" className="block hover:text-gray-200 transition-colors duration-200">
                FAQ
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}
