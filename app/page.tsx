import { NavbarHeader } from "@/components/navbar-header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Silk from "@/components/silk"
import BlurText from "@/components/blur-text"
import CountUp from "@/components/count-up"
import CardSwap, { Card } from "@/components/card-swap"
import ElectricBorder from "@/components/ElectricBorder"
import { MacbookScrollDemo } from "@/components/macbook-demo"
import CircularText from "@/components/CircularText"
import ScrollStack, { ScrollStackItem } from "@/components/ScrollStack"
import { useState, useEffect } from "react"

// Composant simplifié pour mobile
const MobileContent = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center px-4 pt-20 pb-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="space-y-8">
            <div className="space-y-6">
              <BlurText
                text="CENTRALISEZ LE DROIT"
                className="text-3xl font-black text-[#FAF5EF] leading-tight font-gobold"
                animateBy="words"
                delay={150}
                direction="top"
              />
              <BlurText
                text="SIMPLIFIEZ LA JUSTICE"
                className="text-3xl font-black text-[#faf5ef] leading-tight font-gobold"
                animateBy="words"
                delay={200}
                direction="top"
              />
            </div>
            
            {/* Statistiques simplifiées */}
            <div className="space-y-4">
              <div className="bg-[#faf5ef]/10 backdrop-blur-sm border border-[#781028]/30 rounded-2xl p-4">
                <div className="text-2xl font-black text-[#faf5ef] mb-1">
                  +<CountUp to={15} duration={2} delay={0.5} />H
                </div>
                <div className="text-xs text-[#faf5ef]/80 font-medium">
                  DE TRAVAIL ÉCONOMISÉ PAR SEMAINE
                </div>
              </div>
              
              <div className="bg-[#faf5ef]/10 backdrop-blur-sm border border-[#781028]/30 rounded-2xl p-4">
                <div className="text-2xl font-black text-[#faf5ef] mb-1">
                  +<CountUp to={17} duration={2.5} delay={0.7} />.000
                </div>
                <div className="text-xs text-[#faf5ef]/80 font-medium">
                  PROFESSIONNELS DU DROIT CONVAINCUS
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Macbook Section simplifiée */}
      <section className="relative py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-[#FAF5EF] font-gobold mb-4">
              Découvrez Lahalex en action
            </h2>
            <p className="text-[#FAF5EF]/80 text-sm">
              Interface moderne et intuitive
            </p>
          </div>
          <div className="relative h-48 w-full overflow-hidden rounded-2xl bg-gradient-to-br from-[#781028]/20 to-[#5a0a1f]/30 backdrop-blur-sm border border-[#781028]/30">
            <img
              src="/screen.jpg"
              alt="Lahalex interface"
              className="absolute inset-0 h-full w-full object-contain"
            />
          </div>
        </div>
      </section>

      {/* Services Section simplifiée */}
      <section className="relative py-16 px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-black text-[#FAF5EF] font-gobold mb-4">
            NOS PRESTATIONS
          </h2>
        </div>

        <div className="space-y-6">
          {/* Service 1 */}
          <div className="bg-[#faf5ef]/95 backdrop-blur-2xl border border-[#781028]/30 rounded-2xl p-6">
            <div className="space-y-4">
              <div className="inline-block bg-[#781028] text-[#faf5ef] px-4 py-2 rounded-full text-xs font-bold">
                SOLUTION UNIVERSELLE
              </div>
              <h3 className="text-xl font-black text-[#781028] font-sans">
                Lahalex Universel
              </h3>
              <p className="text-[#781028]/80 text-sm leading-relaxed">
                Pensée pour accompagner tous les praticiens du droit.
              </p>
              <Button className="bg-[#781028] hover:bg-[#781028]/90 text-[#faf5ef] font-bold px-4 py-2 rounded-lg text-xs">
                Demandez une démonstration
              </Button>
            </div>
          </div>

          {/* Service 2 */}
          <div className="bg-[#faf5ef]/95 backdrop-blur-2xl border border-[#781028]/30 rounded-2xl p-6">
            <div className="space-y-4">
              <div className="inline-block bg-[#781028] text-[#faf5ef] px-4 py-2 rounded-full text-xs font-bold">
                POUR AVOCATS
              </div>
              <h3 className="text-xl font-black text-[#781028] font-sans">
                Lahalex Avocat
              </h3>
              <p className="text-[#781028]/80 text-sm leading-relaxed">
                Gestion simplifiée de votre cabinet et rédaction assistée.
              </p>
              <Button className="bg-[#781028] hover:bg-[#781028]/90 text-[#faf5ef] font-bold px-4 py-2 rounded-lg text-xs">
                Demandez une démonstration
              </Button>
            </div>
          </div>

          {/* Service 3 */}
          <div className="bg-[#faf5ef]/95 backdrop-blur-2xl border border-[#781028]/30 rounded-2xl p-6">
            <div className="space-y-4">
              <div className="inline-block bg-[#781028] text-[#faf5ef] px-4 py-2 rounded-full text-xs font-bold">
                POUR NOTAIRES
              </div>
              <h3 className="text-xl font-black text-[#781028] font-sans">
                Lahalex Notaire
              </h3>
              <p className="text-[#781028]/80 text-sm leading-relaxed">
                Gestion simplifiée de votre office et pilotage financier.
              </p>
              <Button className="bg-[#781028] hover:bg-[#781028]/90 text-[#faf5ef] font-bold px-4 py-2 rounded-lg text-xs">
                Demandez une démonstration
              </Button>
            </div>
          </div>

          {/* Service 4 */}
          <div className="bg-[#faf5ef]/95 backdrop-blur-2xl border border-[#781028]/30 rounded-2xl p-6">
            <div className="space-y-4">
              <div className="inline-block bg-[#781028] text-[#faf5ef] px-4 py-2 rounded-full text-xs font-bold">
                COMMISSAIRES DE JUSTICE
              </div>
              <h3 className="text-xl font-black text-[#781028] font-sans">
                Lahalex Commissaire de justice
              </h3>
              <p className="text-[#781028]/80 text-sm leading-relaxed">
                Gestion simplifiée de votre étude et tournées optimisées.
              </p>
              <Button className="bg-[#781028] hover:bg-[#781028]/90 text-[#faf5ef] font-bold px-4 py-2 rounded-lg text-xs">
                Demandez une démonstration
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default function HomePage() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  if (isMobile) {
    return (
      <div className="main-scroll-container">
        <div className="min-h-screen relative">
          <div className="fixed inset-0 z-0">
            <Silk speed={5} scale={1.2} color="#770d28" noiseIntensity={2} rotation={45} />
          </div>
          <div className="relative z-10">
            <NavbarHeader />
            <MobileContent />
            <Footer />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="fixed inset-0 z-0">
        <Silk speed={5} scale={1.2} color="#770d28" noiseIntensity={2} rotation={45} />
      </div>

      <div className="relative z-10">
        <NavbarHeader />

        <section className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 pt-20 md:pt-0">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left side - Main content */}
              <div className="lg:col-span-9 space-y-8">
                <div className="space-y-6">
                  <BlurText
                    text="CENTRALISEZ LE DROIT"
                    className="text-4xl md:text-5xl lg:text-6xl font-black text-[#FAF5EF] leading-tight font-gobold"
                    animateBy="words"
                    delay={150}
                    direction="top"
                  />

                  <BlurText
                    text="SIMPLIFIEZ LA JUSTICE"
                    className="text-4xl md:text-5xl lg:text-6xl font-black text-[#faf5ef] leading-tight font-gobold"
                    animateBy="words"
                    delay={200}
                    direction="top"
                  />
                </div>

              
              </div>

              {/* Center - Circular Text 
              <div className="lg:col-span-3 flex items-center justify-center">
                <CircularText
                  text="LAHALEX*LAHALEX*"
                  onHover="speedUp"
                  spinDuration={20}
                  className="w-32 h-32 text-lg"
                />
              </div>

              */}

              {/* Right side - Floating statistics */}
              <div className="lg:col-span-3 space-y-6">
                <ElectricBorder
                  color="#770d28"
                  speed={2}
                  chaos={0.8}
                  thickness={3}
                  style={{ borderRadius: 16 }}
                >
                  <div className="bg-transparent rounded-2xl p-6 transition-all duration-300">
                  <div className="text-4xl font-black text-[#faf5ef] mb-2">
                    +<CountUp to={15} duration={2} delay={0.5} />H
                  </div>
                  <BlurText
                    text="DE TRAVAIL ÉCONOMISÉ PAR SEMAINE"
                    className="text-sm text-[#faf5ef]/80 font-medium"
                    animateBy="words"
                    delay={50}
                  />
                </div>
                </ElectricBorder>

                <ElectricBorder
                  color="#770d28"
                  speed={2}
                  chaos={0.8}
                  thickness={3}
                  style={{ borderRadius: 16 }}
                >
                  <div className="bg-transparent rounded-2xl p-6 transition-all duration-300">
                  <div className="text-4xl font-black text-[#faf5ef] mb-2">
                    +<CountUp to={17} duration={2.5} delay={0.7} />
                    .000
                  </div>
                  <BlurText
                    text="PROFESSIONNELS DU DROIT CONVAINCUS"
                    className="text-sm text-[#faf5ef]/80 font-medium"
                    animateBy="words"
                    delay={50}
                  />
                </div>
                </ElectricBorder>

                <ElectricBorder
                  color="#770d28"
                  speed={2}
                  chaos={0.8}
                  thickness={3}
                  style={{ borderRadius: 16 }}
                >
                  <div className="bg-transparent rounded-2xl p-6 transition-all duration-300">
                  <div className="text-4xl font-black text-[#faf5ef] mb-2">
                    +<CountUp to={500} duration={3} delay={0.9} />
                    .000
                  </div>
                  <BlurText
                      text="LIVRES NUMÉRIQUES"
                      className="text-sm text-[#faf5ef]/80 font-medium"
                      animateBy="words"
                      delay={50}
                    />
                  </div>
                </ElectricBorder>

                <ElectricBorder
                  color="#770d28"
                  speed={2}
                  chaos={0.8}
                  thickness={3}
                  style={{ borderRadius: 16 }}
                >
                  <div className="bg-transparent rounded-2xl p-6 transition-all duration-300">
                    <div className="text-4xl font-black text-[#faf5ef] mb-2">
                      +<CountUp to={300} duration={3.5} delay={1.1} />
                      .000
                    </div>
                    <BlurText
                      text="RESSOURCES JURIDIQUES"
                    className="text-sm text-[#faf5ef]/80 font-medium"
                    animateBy="words"
                    delay={50}
                  />
                </div>
                </ElectricBorder>
              </div>
            </div>
          </div>
        </section>

        {/* Macbook Scroll Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <MacbookScrollDemo />
          </div>
        </section>

        <section className="relative py-32">
          <div className="text-left mb-8 md:mb-12">
            <ElectricBorder
              color="#770d28"
              speed={1.5}
              chaos={0.6}
              thickness={4}
              style={{ borderRadius: 16 }}
              className="inline-block"
            >
              <div className="bg-transparent rounded-2xl px-8 py-4">
            <BlurText
              text="NOS PRESTATIONS"
                  className="text-4xl md:text-5xl lg:text-6xl font-black text-[#FAF5EF] font-gobold"
              animateBy="words"
              delay={100}
            />
              </div>
            </ElectricBorder>
          </div>

          {/* Ancienne section CardSwap commentée */}
          {/* 
          <div className="relative min-h-[500px] md:min-h-[600px] lg:min-h-[700px]">
            <div className="flex justify-end">
              <CardSwap
                cardDistance={80}
                verticalDistance={90}
                delay={4000}
                pauseOnHover={true}
                skewAmount={8}
                easing="elastic"
                width={600}
                height={500}
              >
              <Card customClass="bg-[#faf5ef]/95 backdrop-blur-2xl border border-[#781028]/30 shadow-2xl p-8">
                <div className="flex items-center gap-8">
                  <div className="flex-1 space-y-6">
                  <div className="inline-block bg-[#781028] text-[#faf5ef] px-6 py-3 rounded-full text-sm font-bold">
                    SOLUTION UNIVERSELLE
                  </div>
                    <h3 className="text-3xl font-black text-[#FAF5EF] mb-4">Lahalex Universel</h3>
                    <p className="text-[#FAF5EF]/80 text-base leading-relaxed">
                    Pensée pour accompagner les juristes, étudiants, doctorants, entreprises, institutions publiques et
                    privées, universités, notaires, avocats, commissaires de justice et tous les praticiens du droit.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-[#FAF5EF]">
                        <div className="w-2 h-2 bg-[#FAF5EF] rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-sm font-medium">Recherche juridique avancée</span>
                    </div>
                      <div className="flex items-center text-[#FAF5EF]">
                        <div className="w-2 h-2 bg-[#FAF5EF] rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-sm font-medium">Bibliothèque pluridisciplinaire</span>
                    </div>
                      <div className="flex items-center text-[#FAF5EF]">
                        <div className="w-2 h-2 bg-[#FAF5EF] rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-sm font-medium">Veille juridique</span>
                    </div>
                    </div>
                    <Button className="bg-[#781028] hover:bg-[#781028]/90 text-[#faf5ef] font-bold px-6 py-2 rounded-lg shadow-lg transition-all duration-300 text-sm">
                      Demandez une démonstration
                  </Button>
                  </div>
                  <div className="flex-shrink-0">
                    <img 
                      src="/a.jpg" 
                      alt="Lahalex Universel" 
                      className="w-72 h-72 rounded-xl object-contain shadow-2xl"
                    />
                  </div>
                </div>
              </Card>

              <Card customClass="bg-[#faf5ef]/95 backdrop-blur-2xl border border-[#781028]/30 shadow-2xl p-8">
                <div className="flex items-center gap-8">
                  <div className="flex-1 space-y-6">
                  <div className="inline-block bg-[#781028] text-[#faf5ef] px-6 py-3 rounded-full text-sm font-bold">
                    POUR AVOCATS
                  </div>
                    <h3 className="text-3xl font-black text-[#FAF5EF] mb-4">Lahalex Avocat</h3>
                    <p className="text-[#FAF5EF]/80 text-base leading-relaxed">
                    Gestion simplifiée de votre cabinet (facturation intégrée, suivi complet des dossiers, etc.)
                      Rédaction d'actes juridiques assistée et avancée.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-[#FAF5EF]">
                        <div className="w-2 h-2 bg-[#FAF5EF] rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-sm font-medium">Gestion simplifiée de votre cabinet</span>
                    </div>
                      <div className="flex items-center text-[#FAF5EF]">
                        <div className="w-2 h-2 bg-[#FAF5EF] rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-sm font-medium">Rédaction d'actes juridiques assistée</span>
                      </div>
                    </div>
                    <Button className="bg-[#781028] hover:bg-[#781028]/90 text-[#faf5ef] font-bold px-4 py-2 md:px-6 rounded-lg shadow-lg transition-all duration-300 text-xs md:text-sm">
                      Demandez une démonstration
                    </Button>
                  </div>
                  <div className="flex-shrink-0">
                    <img 
                      src="/b.jpg" 
                      alt="Lahalex Avocat" 
                      className="w-72 h-72 rounded-xl object-contain shadow-2xl"
                    />
                  </div>
                </div>
              </Card>

              <Card customClass="bg-[#faf5ef]/95 backdrop-blur-2xl border border-[#781028]/30 shadow-2xl p-8">
                <div className="flex items-center gap-8">
                  <div className="flex-1 space-y-6">
                  <div className="inline-block bg-[#781028] text-[#faf5ef] px-6 py-3 rounded-full text-sm font-bold">
                    POUR NOTAIRES
                  </div>
                    <h3 className="text-3xl font-black text-[#FAF5EF] mb-4">Lahalex Notaire</h3>
                    <p className="text-[#FAF5EF]/80 text-base leading-relaxed">
                    Gestion simplifiée de votre office (détection automatique des pièces manquantes, pilotage financier
                      de l'office, etc.)
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-[#FAF5EF]">
                        <div className="w-2 h-2 bg-[#FAF5EF] rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-sm font-medium">Gestion simplifiée de votre office</span>
                    </div>
                      <div className="flex items-center text-[#FAF5EF]">
                        <div className="w-2 h-2 bg-[#FAF5EF] rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-sm font-medium">Rédaction d'actes juridiques assistée</span>
                    </div>
                  </div>
                    <Button className="bg-[#781028] hover:bg-[#781028]/90 text-[#faf5ef] font-bold px-6 py-2 rounded-lg shadow-lg transition-all duration-300 text-sm">
                      Demandez une démonstration
                  </Button>
                </div>
                  <div className="flex-shrink-0">
                    <img 
                      src="/c.jpg" 
                      alt="Lahalex Notaire" 
                      className="w-72 h-72 rounded-xl object-contain shadow-2xl"
                    />
                  </div>
                </div>
              </Card>

              <Card customClass="bg-[#faf5ef]/95 backdrop-blur-2xl border border-[#781028]/30 shadow-2xl p-8">
                <div className="flex items-center gap-8">
                  <div className="flex-1 space-y-6">
                  <div className="inline-block bg-[#781028] text-[#faf5ef] px-6 py-3 rounded-full text-sm font-bold">
                    COMMISSAIRES DE JUSTICE
                  </div>
                    <h3 className="text-3xl font-black text-[#FAF5EF] mb-4">
                    Lahalex Commissaire de justice
                  </h3>
                    <p className="text-[#FAF5EF]/80 text-base leading-relaxed">
                    Gestion simplifiée de votre étude (tournées géolocalisées et optimisées, suivi comptable en temps
                      réel, etc.)
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-[#FAF5EF]">
                        <div className="w-2 h-2 bg-[#FAF5EF] rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-sm font-medium">Gestion simplifiée de votre étude</span>
                    </div>
                      <div className="flex items-center text-[#FAF5EF]">
                        <div className="w-2 h-2 bg-[#FAF5EF] rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-sm font-medium">Rédaction d'actes juridiques assistée</span>
                      </div>
                    </div>
                    <Button className="bg-[#781028] hover:bg-[#781028]/90 text-[#faf5ef] font-bold px-4 py-2 md:px-6 rounded-lg shadow-lg transition-all duration-300 text-xs md:text-sm">
                      Demandez une démonstration
                    </Button>
              </div>
                  <div className="flex-shrink-0">
                    <img 
                      src="/e.jpg" 
                      alt="Lahalex Commissaire de justice" 
                      className="w-72 h-72 rounded-xl object-contain shadow-2xl"
                    />
                  </div>
                </div>
              </Card>
            </CardSwap>
                </div>
              </div>
          */}


          <div className="relative min-h-[800px]">

          <ScrollStack
          className="w-full flex justify-center"
          useWindowScroll={true}
          itemStackDistance={40}
          baseScale={0.9}
          itemScale={0.05}
        >
          <ScrollStackItem itemClassName="bg-[#faf5ef]/95 backdrop-blur-2xl border border-[#781028]/30 shadow-2xl">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 h-full">
              <div className="flex-1 space-y-4 md:space-y-6 order-2 md:order-1">
                <div className="inline-block bg-[#781028] text-[#faf5ef] px-6 py-3 rounded-full text-sm font-bold">
                  SOLUTION UNIVERSELLE
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-[#781028] mb-3 md:mb-4 font-sans">
                  Lahalex Universel
                </h3>
                <p className="text-[#781028]/80 text-sm md:text-base leading-relaxed">
                  Pensée pour accompagner les juristes, étudiants, doctorants, entreprises, institutions publiques et
                  privées, universités, notaires, avocats, commissaires de justice et tous les praticiens du droit.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-[#781028]">
                    <div className="w-2 h-2 bg-[#781028] rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-sm font-medium">Recherche juridique avancée</span>
                  </div>
                  <div className="flex items-center text-[#781028]">
                    <div className="w-2 h-2 bg-[#781028] rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-sm font-medium">Bibliothèque pluridisciplinaire</span>
                  </div>
                  <div className="flex items-center text-[#781028]">
                    <div className="w-2 h-2 bg-[#781028] rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-sm font-medium">Veille juridique</span>
                  </div>
                </div>
                <Button className="bg-[#781028] hover:bg-[#781028]/90 text-[#faf5ef] font-bold px-4 py-2 md:px-6 rounded-lg shadow-lg transition-all duration-300 text-xs md:text-sm">
                  Demandez une démonstration
                </Button>
              </div>
              <img
                src="b.jpg"
                alt="Lahalex Universel"
                className="order-1 md:order-2 w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-xl object-contain mx-auto md:mx-0"
              />
            </div>
          </ScrollStackItem>

          <ScrollStackItem itemClassName="bg-[#faf5ef]/95 backdrop-blur-2xl border border-[#781028]/30 shadow-2xl">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 h-full">
              <div className="flex-1 space-y-4 md:space-y-6 order-2 md:order-1">
                <div className="inline-block bg-[#781028] text-[#faf5ef] px-6 py-3 rounded-full text-sm font-bold">
                  POUR AVOCATS
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-[#781028] mb-3 md:mb-4 font-sans">
                  Lahalex Avocat
                </h3>
                <p className="text-[#781028]/80 text-sm md:text-base leading-relaxed">
                  Gestion simplifiée de votre cabinet (facturation intégrée, suivi complet des dossiers, etc.) Rédaction
                  d'actes juridiques assistée et avancée.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-[#781028]">
                    <div className="w-2 h-2 bg-[#781028] rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-sm font-medium">Gestion simplifiée de votre cabinet</span>
                  </div>
                  <div className="flex items-center text-[#781028]">
                    <div className="w-2 h-2 bg-[#781028] rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-sm font-medium">Rédaction d'actes juridiques assistée</span>
                  </div>
                </div>
                <Button className="bg-[#781028] hover:bg-[#781028]/90 text-[#faf5ef] font-bold px-6 py-2 rounded-lg shadow-lg transition-all duration-300 text-sm">
                  Demandez une démonstration
                </Button>
              </div>
              <img
                src="e.jpg"
                alt="Lahalex Avocat"
                className="order-1 md:order-2 w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-xl object-contain mx-auto md:mx-0"
              />
            </div>
          </ScrollStackItem>

          <ScrollStackItem itemClassName="bg-[#faf5ef]/95 backdrop-blur-2xl border border-[#781028]/30 shadow-2xl">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 h-full">
              <div className="flex-1 space-y-4 md:space-y-6 order-2 md:order-1">
                <div className="inline-block bg-[#781028] text-[#faf5ef] px-6 py-3 rounded-full text-sm font-bold">
                  POUR NOTAIRES
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-[#781028] mb-3 md:mb-4 font-sans">
                  Lahalex Notaire
                </h3>
                <p className="text-[#781028]/80 text-sm md:text-base leading-relaxed">
                  Gestion simplifiée de votre office (détection automatique des pièces manquantes, pilotage financier de
                  l'office, etc.)
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-[#781028]">
                    <div className="w-2 h-2 bg-[#781028] rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-sm font-medium">Gestion simplifiée de votre office</span>
                  </div>
                  <div className="flex items-center text-[#781028]">
                    <div className="w-2 h-2 bg-[#781028] rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-sm font-medium">Rédaction d'actes juridiques assistée</span>
                  </div>
                </div>
                <Button className="bg-[#781028] hover:bg-[#781028]/90 text-[#faf5ef] font-bold px-6 py-2 rounded-lg shadow-lg transition-all duration-300 text-sm">
                  Demandez une démonstration
                </Button>
              </div>
              <img
                src="c.jpg"
                alt="Lahalex Notaire"
                className="order-1 md:order-2 w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-xl object-contain mx-auto md:mx-0"
              />
            </div>
          </ScrollStackItem>

          <ScrollStackItem itemClassName="bg-[#faf5ef]/95 backdrop-blur-2xl border border-[#781028]/30 shadow-2xl">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 h-full">
              <div className="flex-1 space-y-4 md:space-y-6 order-2 md:order-1">
                <div className="inline-block bg-[#781028] text-[#faf5ef] px-6 py-3 rounded-full text-sm font-bold">
                  COMMISSAIRES DE JUSTICE
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-[#781028] mb-3 md:mb-4 font-sans">
                  Lahalex Commissaire de justice
                </h3>
                <p className="text-[#781028]/80 text-sm md:text-base leading-relaxed">
                  Gestion simplifiée de votre étude (tournées géolocalisées et optimisées, suivi comptable en temps
                  réel, etc.)
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-[#781028]">
                    <div className="w-2 h-2 bg-[#781028] rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-sm font-medium">Gestion simplifiée de votre étude</span>
                  </div>
                  <div className="flex items-center text-[#781028]">
                    <div className="w-2 h-2 bg-[#781028] rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-sm font-medium">Rédaction d'actes juridiques assistée</span>
                  </div>
                </div>
                <Button className="bg-[#781028] hover:bg-[#781028]/90 text-[#faf5ef] font-bold px-6 py-2 rounded-lg shadow-lg transition-all duration-300 text-sm">
                  Demandez une démonstration
                </Button>
              </div>
              <img
                src="a.jpg"
                alt="Lahalex Commissaire de justice"
                className="order-1 md:order-2 w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-xl object-contain mx-auto md:mx-0"
              />
            </div>
          </ScrollStackItem>
        </ScrollStack>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  )
}


