export default function Footer() {
  return (
    <div className="relative py-16 overflow-hidden">
      {/* Background avec effet glassmorphisme */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#781028]/20 via-[#5a0a1f]/30 to-[#781028]/20 backdrop-blur-xl"></div>
      
      {/* Contenu principal avec effet glassmorphisme */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#faf5ef]/10 backdrop-blur-md rounded-3xl border border-[#781028]/30 shadow-2xl p-8 md:p-12 relative overflow-hidden">
          {/* Pattern background image dans le conteneur glassmorphisme */}
          <div className="absolute inset-0 opacity-80 overflow-hidden rounded-3xl">
            <img 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Artboard%204%404x%202-Fe0wnbOq53j1kKgJ4lxM5BcYXrSUBE.png" 
              alt="Pattern background" 
              className="w-full h-full object-cover rounded-3xl"
            />
            {/* Effet de scintillement */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 animate-shimmer"></div>
              </div>
          
          {/* Contenu au-dessus de l'image pattern */}
          <div className="relative z-10">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Logo */}
            <div className="flex items-start">
              <img 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Asset%201%202-I4WLdllE2VIT1BDUSkya5JPrlDi9TW.png" 
                alt="LAHALEX Logo" 
                className="h-20 w-auto"
              />
          </div>

            {/* Informations & Contacts */}
          <div>
              <h4 className="font-gobold text-lg mb-4 uppercase text-[#FAF5EF]">INFORMATIONS & CONTACTS</h4>
              <div className="space-y-2 text-sm font-sf-pro text-[#FAF5EF]">
              <p>+33 614 972 046</p>
                <p className="underline">contact@lahalex.com</p>
            </div>
          </div>

            {/* Adresse */}
          <div>
              <h4 className="font-gobold text-lg mb-4 uppercase text-[#FAF5EF]">ADRESSE</h4>
              <div className="text-sm font-sf-pro text-[#FAF5EF]">
              <p>Rue de la Côte Fleurie, 77660</p>
              <p>Saint-Jean-les-deux-jumeaux, France</p>
              </div>
            </div>
              
            {/* Suivez-nous */}
            <div>
              <h4 className="font-gobold text-lg mb-4 uppercase text-[#FAF5EF]">SUIVEZ-NOUS SUR</h4>
            <div className="flex space-x-4">
                <a href="#" className="w-8 h-8 rounded flex items-center justify-center hover:bg-[#781028]/30 transition-colors">
                  <svg className="w-4 h-4 fill-current text-[#FAF5EF]" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 rounded flex items-center justify-center hover:bg-[#781028]/30 transition-colors">
                  <svg className="w-4 h-4 fill-current text-[#FAF5EF]" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 rounded flex items-center justify-center hover:bg-[#781028]/30 transition-colors">
                  <svg className="w-4 h-4 fill-current text-[#FAF5EF]" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584.012-4.849.07-3.225.149-4.771-1.664-4.919-4.919-.058-1.265-.07-1.645-.07-4.849 0-3.204.012-3.584.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.265-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 rounded flex items-center justify-center hover:bg-[#781028]/30 transition-colors">
                  <svg className="w-4 h-4 fill-current text-[#FAF5EF]" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 rounded flex items-center justify-center hover:bg-[#781028]/30 transition-colors">
                  <svg className="w-4 h-4 fill-current text-[#FAF5EF]" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
              </a>
            </div>
          </div>
        </div>

          {/* Bottom Links */}
          <div className="mt-8 pt-8 text-xs font-sf-pro">
            <div className="flex flex-wrap justify-center gap-6 text-center">
              <a href="#" className="hover:text-[#FAF5EF]/80 uppercase text-[#FAF5EF]">CONDITIONS GÉNÉRALES DE VENTE ET D'UTILISATION</a>
              <a href="#" className="hover:text-[#FAF5EF]/80 uppercase text-[#FAF5EF]">POLITIQUES DE CONFIDENTIALITÉ</a>
              <span className="uppercase text-[#FAF5EF]">COPYRIGHT © 2025 LAHALEX - TOUS DROITS RÉSERVÉS</span>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}