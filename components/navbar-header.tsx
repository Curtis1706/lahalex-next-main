"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";

export function NavbarHeader() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2 md:top-4" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileDropdowns, setMobileDropdowns] = useState<{ [key: string]: boolean }>({});
  
  return (
    <div
      className={cn("fixed top-2 md:top-4 inset-x-0 max-w-6xl mx-auto z-50 px-4", className)}
    >
      {/* Mobile Menu Button */}
      <div className="md:hidden flex justify-between items-center w-full">
        <div className="text-[#FAF5EF] font-gobold text-xl">LAHALEX</div>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-[#FAF5EF] p-2"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:block">
        <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Accueil">
          <div className="flex flex-col space-y-2 text-sm">
            <HoveredLink href="#hero">Accueil</HoveredLink>
            <HoveredLink href="#qui-sommes-nous">Qui sommes-nous</HoveredLink>
            <HoveredLink href="#essai-gratuit">Essai gratuit</HoveredLink>
            <HoveredLink href="#tarifs">Nos tarifs</HoveredLink>
            <HoveredLink href="#contact">Contact</HoveredLink>
          </div>
        </MenuItem>
        
        <MenuItem setActive={setActive} active={active} item="Nos Solutions">
          <div className="grid grid-cols-1 gap-4 p-4">
            <ProductItem
              title="Lahalex Universel"
              href="#universel"
              src="/a.jpg"
              description="Solution complète pour tous les professionnels du droit"
            />
            <ProductItem
              title="Lahalex Avocat"
              href="#avocat"
              src="/b.jpg"
              description="Gestion simplifiée de votre cabinet d'avocat"
            />
            <ProductItem
              title="Lahalex Notaire"
              href="#notaire"
              src="/c.jpg"
              description="Gestion simplifiée de votre office notarial"
            />
            <ProductItem
              title="Lahalex Commissaire"
              href="#commissaire"
              src="/e.jpg"
              description="Gestion simplifiée de votre étude de commissaire de justice"
            />
          </div>
        </MenuItem>
        
        <MenuItem setActive={setActive} active={active} item="Ressources">
          <div className="flex flex-col space-y-2 text-sm">
            <HoveredLink href="#bibliotheque">Bibliothèque Juridique</HoveredLink>
            <HoveredLink href="#recherche">Recherche Avancée</HoveredLink>
            <HoveredLink href="#veille">Veille Juridique</HoveredLink>
            <HoveredLink href="#formation">Formation</HoveredLink>
          </div>
        </MenuItem>
        
        <MenuItem setActive={setActive} active={active} item="Autre">
          <div className="flex flex-col space-y-2 text-sm">
            <HoveredLink href="#devenir-auteur">Devenir auteur</HoveredLink>
            <HoveredLink href="#recrutement">Recrutement</HoveredLink>
          </div>
        </MenuItem>
        </Menu>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 bg-transparent backdrop-blur-md rounded-2xl border border-[#781028]/30 shadow-xl max-h-[80vh] overflow-y-auto">
          <div className="p-6 space-y-4">
            {/* Accueil */}
            <div>
              <button
                onClick={() => setMobileDropdowns(prev => ({ ...prev, accueil: !prev.accueil }))}
                className="flex items-center justify-between w-full text-[#FAF5EF] font-gobold text-lg mb-2"
              >
                Accueil
                <svg 
                  className={`w-5 h-5 transition-transform ${mobileDropdowns.accueil ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileDropdowns.accueil && (
                <div className="space-y-1 ml-4">
                  <a href="#hero" className="block text-[#FAF5EF]/80 hover:text-[#FAF5EF] py-1">Accueil</a>
                  <a href="#qui-sommes-nous" className="block text-[#FAF5EF]/80 hover:text-[#FAF5EF] py-1">Qui sommes-nous</a>
                  <a href="#essai-gratuit" className="block text-[#FAF5EF]/80 hover:text-[#FAF5EF] py-1">Essai gratuit</a>
                  <a href="#tarifs" className="block text-[#FAF5EF]/80 hover:text-[#FAF5EF] py-1">Nos tarifs</a>
                  <a href="#contact" className="block text-[#FAF5EF]/80 hover:text-[#FAF5EF] py-1">Contact</a>
                </div>
              )}
            </div>

            {/* Nos Solutions */}
            <div>
              <button
                onClick={() => setMobileDropdowns(prev => ({ ...prev, solutions: !prev.solutions }))}
                className="flex items-center justify-between w-full text-[#FAF5EF] font-gobold text-lg mb-2"
              >
                Nos Solutions
                <svg 
                  className={`w-5 h-5 transition-transform ${mobileDropdowns.solutions ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileDropdowns.solutions && (
                <div className="space-y-3 ml-4">
                  <a href="#universel" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-[#781028]/10">
                    <img src="/a.jpg" alt="Lahalex Universel" className="w-12 h-12 rounded-lg object-cover" />
                    <div>
                      <div className="text-[#FAF5EF] font-medium">Lahalex Universel</div>
                      <div className="text-[#FAF5EF]/60 text-xs">Solution complète</div>
                    </div>
                  </a>
                  <a href="#avocat" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-[#781028]/10">
                    <img src="/b.jpg" alt="Lahalex Avocat" className="w-12 h-12 rounded-lg object-cover" />
                    <div>
                      <div className="text-[#FAF5EF] font-medium">Lahalex Avocat</div>
                      <div className="text-[#FAF5EF]/60 text-xs">Gestion de cabinet</div>
                    </div>
                  </a>
                  <a href="#notaire" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-[#781028]/10">
                    <img src="/c.jpg" alt="Lahalex Notaire" className="w-12 h-12 rounded-lg object-cover" />
                    <div>
                      <div className="text-[#FAF5EF] font-medium">Lahalex Notaire</div>
                      <div className="text-[#FAF5EF]/60 text-xs">Gestion d'office</div>
                    </div>
                  </a>
                  <a href="#commissaire" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-[#781028]/10">
                    <img src="/e.jpg" alt="Lahalex Commissaire" className="w-12 h-12 rounded-lg object-cover" />
                    <div>
                      <div className="text-[#FAF5EF] font-medium">Lahalex Commissaire</div>
                      <div className="text-[#FAF5EF]/60 text-xs">Gestion d'étude</div>
                    </div>
                  </a>
                </div>
              )}
            </div>

            {/* Ressources */}
            <div>
              <button
                onClick={() => setMobileDropdowns(prev => ({ ...prev, ressources: !prev.ressources }))}
                className="flex items-center justify-between w-full text-[#FAF5EF] font-gobold text-lg mb-2"
              >
                Ressources
                <svg 
                  className={`w-5 h-5 transition-transform ${mobileDropdowns.ressources ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileDropdowns.ressources && (
                <div className="space-y-1 ml-4">
                  <a href="#bibliotheque" className="block text-[#FAF5EF]/80 hover:text-[#FAF5EF] py-1">Bibliothèque Juridique</a>
                  <a href="#recherche" className="block text-[#FAF5EF]/80 hover:text-[#FAF5EF] py-1">Recherche Avancée</a>
                  <a href="#veille" className="block text-[#FAF5EF]/80 hover:text-[#FAF5EF] py-1">Veille Juridique</a>
                  <a href="#formation" className="block text-[#FAF5EF]/80 hover:text-[#FAF5EF] py-1">Formation</a>
                </div>
              )}
            </div>

            {/* Autre */}
            <div>
              <button
                onClick={() => setMobileDropdowns(prev => ({ ...prev, autre: !prev.autre }))}
                className="flex items-center justify-between w-full text-[#FAF5EF] font-gobold text-lg mb-2"
              >
                Autre
                <svg 
                  className={`w-5 h-5 transition-transform ${mobileDropdowns.autre ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileDropdowns.autre && (
                <div className="space-y-1 ml-4">
                  <a href="#devenir-auteur" className="block text-[#FAF5EF]/80 hover:text-[#FAF5EF] py-1">Devenir auteur</a>
                  <a href="#recrutement" className="block text-[#FAF5EF]/80 hover:text-[#FAF5EF] py-1">Recrutement</a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
