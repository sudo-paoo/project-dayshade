 "use client"
 
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import { GlassContainer } from "@/components/shared/glass-container"
import { TextAnimate } from "@/components/magicui/text-animate";

export default function Projects() {
  // START OF THE MOBILE MENU
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({})
  
  // Use effect to ensure proper loading
  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // Handle image error
  const handleImageError = (imageName: string) => {
    console.log(`Image ${imageName} failed to load, using fallback`)
    setImageErrors(prev => ({ ...prev, [imageName]: true }))
  }

  const navigationItems = [
    {
      name: "Home",
      href: "#",
      className: "font-bold text-[var(--color-pd-green)] hover:text-[var(--color-pd-purple)] transition-colors",
    },
    {
      name: "About",
      href: "#",
      className: "font-bold text-[var(--color-pd-green)] hover:text-[var(--color-pd-purple)] transition-colors",
    },
    {
      name: "Perks",
      href: "#",
      className: "font-bold text-[var(--color-pd-green)] hover:text-[var(--color-pd-purple)] transition-colors",
    },
    {
      name: "Projects",
      href: "#",
      className: "font-bold text-[var(--color-pd-green)] hover:text-[var(--color-pd-purple)] transition-colors",
    },
    {
      name: "Toot",
      href: "#",
      className: "font-bold text-[var(--color-pd-green)] hover:text-[var(--color-pd-purple)] transition-colors",
    },
    {
      name: "Join",
      href: "#",
      className: "font-bold text-[var(--color-pd-purple)] hover:text-[var(--color-pd-green)] transition-colors",
    },
  ]

  // Show loading state until component is ready
  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--color-pd-dark-grey)]">
        <div className="text-white text-xl">Loading...</div>
      </div>
    )
  }

  //BACKGROUND THE PATTERN AND THE COLOR DARK-GREY
  return (
    <div
      style={{
        background: "linear-gradient(135deg, var(--color-pd-black) 0%, var(--color-pd-dark-grey) 50%, var(--color-pd-light-grey) 100%)",
        minHeight: "100vh",
        position: "relative",
      }}
      className="flex flex-col items-center"
    >
      <div
        style={{ 
          backgroundColor: "var(--color-pd-dark-grey)",
          pointerEvents: "none",
          position: "absolute",
          inset: 0,
          backgroundImage: "url(/assets/pattern.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          opacity: 0.05,  
        }}
      />
      <nav className="w-full mt-8 flex justify-center px-4">
        {/* Desktop Navigation */}
        <GlassContainer className="hidden md:flex items-center justify-between rounded-full px-12 py-3 shadow-xl border border-white/20 backdrop-blur-lg bg-[var(--color-pd-dark-grey)] w-full max-w-[95vw]">
          <div className="flex items-center">
            <Image 
              src={imageErrors['desktop-logo'] ? "/placeholder.png" : "/assets/pd-logo-sm.png"}
              alt="Logo" 
              width={40} 
              height={40} 
              className="mr-4"
              unoptimized
              onLoad={() => {
                console.log("Desktop logo loaded successfully")
              }}
              onError={() => handleImageError('desktop-logo')}
            />
          </div>
          <ul className="flex gap-4 lg:gap-8 items-center">
            {navigationItems.map((item) => (
              <li key={item.name}>
                <GlassContainer
                  variant="card"
                  className={`rounded-full px-6 py-2 border border-white/30 backdrop-blur-md bg-white/20 transition-all duration-200 hover:scale-105`}
                >
                  <a href={item.href} className={item.className}>
                    {item.name}
                  </a>
                </GlassContainer>
              </li>
            ))}
          </ul>
        </GlassContainer>
        {/* Mobile Navigation */}
        <GlassContainer className="md:hidden flex items-center justify-between rounded-2xl px-8 py-4 shadow-xl border border-white/20 backdrop-blur-lg bg-[var(--color-pd-dark-grey)] w-full max-w-none mx-4">
          <div className="flex items-center">
            <Image 
              src={imageErrors['mobile-logo'] ? "/placeholder.png" : "/assets/pd-logo-sm.png"}
              alt="Logo" 
              width={40} 
              height={40}
              unoptimized
              onLoad={() => {
                console.log("Mobile logo loaded successfully")
              }}
              onError={() => handleImageError('mobile-logo')}
            />
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-[var(--color-pd-green)] hover:text-[var(--color-pd-purple)] transition-colors p-3"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </GlassContainer>
      </nav>
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
          <div className="flex justify-center pt-8 px-4 h-full">
            <GlassContainer className="w-full max-w-none rounded-3xl p-6 shadow-2xl border border-white/20 backdrop-blur-lg bg-[var(--color-pd-dark-grey)] h-fit min-h-[75vh] flex flex-col">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center">
                  <Image 
                    src={imageErrors['mobile-menu-logo'] ? "/placeholder.png" : "/assets/pd-logo-sm.png"}
                    alt="Logo" 
                    width={40} 
                    height={40}
                    unoptimized
                    onLoad={() => {
                      console.log("Mobile menu logo loaded successfully")
                    }}
                    onError={() => handleImageError('mobile-menu-logo')}
                  />
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-[var(--color-pd-green)] hover:text-[var(--color-pd-purple)] transition-colors p-3"
                  aria-label="Close mobile menu"
                >
                  <X size={28} />
                </button>
              </div>
              {/* Mobile Menu Items */}
              <div className="flex-1 flex flex-col justify-center">
                <ul className="flex flex-col gap-4">
                  {navigationItems.map((item, idx) => (
                    <li key={item.name}>
                      <GlassContainer
                        variant="card"
                        className={`rounded-2xl px-8 py-4 border border-white/30 backdrop-blur-md transition-all duration-200 hover:scale-105 active:scale-95 ${
                          idx === 0
                            ? "bg-[var(--color-pd-green)]/20 border-[var(--color-pd-green)]/30"
                            : idx === navigationItems.length - 1
                              ? "bg-[var(--color-pd-purple)]/20 border-[var(--color-pd-purple)]/30"
                              : "bg-white/10"
                        }`}
                      >
                        <a
                          href={item.href}
                          className={`block text-center text-xl font-bold ${item.className}`}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.name}
                        </a>
                      </GlassContainer>
                    </li>
                  ))}
                </ul>
              </div>
            </GlassContainer>
          </div>
        </div>
      )}


       {/* Banner-style MEMBER PROJECTS text */}
      <div className="flex justify-center items-center w-full my-8 md:my-12 gap-2 sm:gap-4 md:gap-8">
        <div className="flex flex-col gap-1 md:gap-2 items-start flex-1">
          <div
            style={{
              height: "clamp(12px, 2vw, 16px)",
              width: "100%",
              maxWidth: "clamp(200px, 50vw, 400px)",
              borderRadius: "4.8px",
              background: "var(--color-pd-green)",
              opacity: 0.8, 
              boxShadow: "0 2px 8px rgba(0, 0,0, 0.1)",
            }}
          ></div>
          <div
            style={{
              height: "clamp(20px, 3vw, 28px)",
              width: "100%",
              maxWidth: "clamp(300px, 75vw, 600px)",
              borderRadius: "8.4px",
              background: "var(--color-pd-green)",
              opacity: 0.8, 
              boxShadow: "0 2px 8px rgba(0, 0,0, 0.1)",
            }}
          ></div>
        </div>
        <span
          className="font-extrabold flex-shrink-0 text-center"
          style={{
            fontSize: "clamp(2rem, 8vw, 6rem)",
            background: "linear-gradient(90deg, #c59be7 0%, #a259e7 40%, #7d3ae7 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            letterSpacing: "clamp(1px, 0.5vw, 2px)",
            textShadow: "0 2px 12px rgba(0,0,0,0.18)",
            padding: "0 clamp(0.5rem, 2vw, 2rem)",
            display: "inline-block",
            minWidth: "min-content",
            lineHeight: "1.1",
          }}
        >
          MEMBER PROJECTS
        </span>
        <div className="flex flex-col gap-1 md:gap-2 items-end flex-1">
          <div
            style={{
              height: "clamp(20px, 3vw, 28px)",
              width: "100%",
              maxWidth: "clamp(300px, 75vw, 600px)",
              borderRadius: "8.4px",
              background: "var(--color-pd-green)",
              opacity: 0.8, // Adjust opacity for a subtle effect
              boxShadow: "0 4px 12px rgba(0, 0,0, 0.1)",
            }}
          ></div>
          <div
            style={{
              height: "clamp(12px, 2vw, 16px)",
              width: "100%",
              maxWidth: "clamp(200px, 50vw, 400px)",
              borderRadius: "4.8px",
              background: "var(--color-pd-green)",
              opacity: 0.8, 
              boxShadow: "0 2px 8px rgba(0, 0,0, 0.1)",
            }}
            

          ></div>
        </div>
      </div>



      {/* Main Content */}
      <div className="w-full px-4">
        {/* Monthly Project Showcase Header */}
        <div className="mb-4 max-w-7xl mx-auto">
          <TextAnimate className="text-white text-2xl md:text-3xl font-bold mb-4">
            Monthly Project Showcase
          </TextAnimate>
          
          {/* TSU Campus Showcase Title */}
          <TextAnimate
            className="text-center font-bold mb-4"
            style={{
              fontSize: "clamp(1.5rem, 4vw, 3rem)",
              color: "var(--color-pd-green)",
              letterSpacing: "2px",
            }}
          >
            TARLAC STATE UNIVERSITY CAMPUS SHOWCASE
          </TextAnimate>
        </div>

        {/* Showcase Container */}
        <GlassContainer className="w-full rounded-3xl p-4 md:p-8 border border-white/20 backdrop-blur-lg bg-white/10">
          <div className="flex justify-center items-center">
            <div className="flex flex-row items-center gap-4 md:gap-6">
              {/* Main Image */}
              <div className="w-[400px] sm:w-[500px] md:w-[600px] lg:w-[700px] xl:w-[800px] h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] rounded-2xl overflow-hidden relative">
                <Image
                  src={imageErrors['main-showcase'] ? "/placeholder.png" : "/assets/about-pics/carousel-1.png"}
                  alt="Campus Showcase"
                  fill
                  className="object-cover"
                  style={{
                    borderRadius: "16px",
                  }}
                  priority
                  unoptimized
                  onLoad={() => {
                    console.log("Main showcase image loaded successfully")
                  }}
                  onError={() => handleImageError('main-showcase')}
                />
              </div>

              {/* Vertical Date Section */}
              <div className="flex items-center">
                <div 
                  className="text-white/80 font-bold tracking-wider text-center"
                  style={{
                    writingMode: "vertical-rl",
                    textOrientation: "mixed",
                    fontSize: "clamp(12px, 1.5vw, 18px)",
                    letterSpacing: "1px",
                    color: "var(--color-pd-green)",
                  }}
                >
                  November 2024
                </div>
              </div>
            </div>
          </div>

          {/* CAPTIONS SHOULD BE PLACED HERE */}
          <div className="text-center mt-4 md:mt-6">
            <p className="text-white/70 text-xs sm:text-sm md:text-base italic">
              Section 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
            </p>
          </div>
        </GlassContainer>
      </div>
        
      {/* Featured Projects Section */}
      <section className="w-full px-4 py-6" aria-labelledby="featured-projects-heading">
        <GlassContainer 
          className="p-6 md:p-8 relative overflow-hidden rounded-3xl border border-white/20 backdrop-blur-lg bg-gradient-to-br from-[var(--color-pd-purple)] via-[var(--color-pd-purple)]/80 to-[var(--color-pd-black)]/60 min-h-[400px]"
        >
          {/* Pattern Overlay */}
          <div
            style={{ 
              backgroundColor: "var(--color-pd-dark-grey)",
              pointerEvents: "none",
              position: "absolute",
              inset: 0,
              backgroundImage: "url(/assets/pattern.png)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              opacity: 0.05,
              borderRadius: "24px",
            }}
          />

          {/* Content Layout */}
          <div className="relative z-10 flex flex-col lg:flex-row gap-4 lg:gap-8 h-full">
            {/* Left Side - Text Content */}
            <div className="flex-1 lg:flex-[2] flex flex-col justify-between pr-0 lg:pr-4">
              <div>
                <TextAnimate className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-3 lg:mb-4">
                  Featured Projects
                </TextAnimate>
                <TextAnimate className="text-white/90 text-lg md:text-xl lg:text-2xl mb-6 lg:mb-8 max-w-none leading-relaxed">
                 At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
                </TextAnimate>
              </div>
              
              <div>
                <TextAnimate className="text-white text-xl md:text-2xl lg:text-3xl font-bold mb-2">
                  Developers
                </TextAnimate>
                <TextAnimate className="text-white/70 text-sm md:text-base lg:text-lg">
                  Juan, Maria, and Jose
                </TextAnimate>
              </div>
            </div>
            
            {/* Right Side - Project Card */}
            <div className="flex-1 lg:flex-[1] flex justify-center lg:justify-end">
              <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl">
                <div className="mb-3 lg:mb-4">
                  <TextAnimate className="text-white text-lg md:text-xl lg:text-2xl font-semibold mb-2 text-center">
                    TITLE OF THE PROJECT
                  </TextAnimate>
                  <TextAnimate className="text-white/70 text-sm md:text-base float-right">
                    November 29, 2077
                  </TextAnimate>
                </div>
                
                <div 
                  className="w-full h-64 md:h-80 lg:h-96 xl:h-[400px] bg-white/20 rounded-2xl flex items-center justify-center transition-all duration-300 hover:bg-white/30 overflow-hidden relative"
                >
                  {/* THE IMAGE INSERTION IS HERE */}
                  <Image
                    src={imageErrors['featured-project'] ? "/placeholder.png" : "/assets/about-pics/carousel-2.png"} //HERE
                    alt="Featured Project Sample"
                    fill
                    className="object-cover rounded-2xl"
                    unoptimized
                    onLoad={() => {
                      console.log("Featured project image loaded successfully")
                    }}
                    onError={() => handleImageError('featured-project')}
                  />
                </div>
              </div>
            </div>
          </div>
        </GlassContainer>
      </section>

    
      <section 
        className="w-full px-4 py-12 bg-gradient-to-b from-transparent via-[var(--color-pd-black)]/60 to-[var(--color-pd-black)]/80" 
        aria-labelledby="dark-project-showcase-heading"
      >
        
        {/* Dark Project Showcase Section */}
        <GlassContainer className="w-full rounded-3xl p-8 md:p-12 border border-white/20 backdrop-blur-lg bg-gradient-to-br from-[var(--color-pd-dark-grey)] via-[var(--color-pd-dark-grey)] to-[var(--color-pd-black)]">
          
          

          {/* Project Cards */}
          <div className="space-y-8">
            {/* Project Card 1 */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
              <GlassContainer className="w-full md:w-[36rem] h-96 md:h-[28rem] rounded-2xl border border-white/20 backdrop-blur-lg bg-gray-200">
                <div className="w-full h-full rounded-2xl overflow-hidden relative">
                   {/* PLACE IMAGE HERE */}
                  <Image
                    src={imageErrors['project-1'] ? "/placeholder.png" : "/assets/about-pics/carousel-1.png"}
                    alt="Project Image 1"
                    fill
                    className="object-cover"
                    unoptimized
                    onLoad={() => {
                      console.log("Project image 1 loaded successfully")
                    }}
                    onError={() => handleImageError('project-1')}
                  />
                </div>
              </GlassContainer>
              <GlassContainer variant="card" className="flex-1 h-96 md:h-[28rem] rounded-2xl flex items-center justify-center relative overflow-hidden">
                <div
                  style={{ 
                    backgroundColor: "var(--color-pd-dark-grey)",
                    pointerEvents: "none",
                    position: "absolute",
                    inset: 0,
                    backgroundImage: "url(/assets/pattern.png)",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    opacity: 0.03,
                    borderRadius: "16px",
                  }}
                />
                <div className="relative z-10 w-full h-full flex items-center justify-center p-4 sm:p-6 md:p-8">
                  <div className="text-center">
                    <TextAnimate className="text-white text-base md:text-lg font-bold mb-4">
                      Project Title
                    </TextAnimate>
                    <TextAnimate className="text-white text-sm sm:text-base md:text-lg font-medium leading-relaxed break-words hyphens-auto overflow-hidden mb-4">
                      Brief description of the project goes here. It should be concise yet informative, giving an overview of what the project is about and its key features.
                    </TextAnimate>
                    
                    <div className="mt-6 pt-4 border-t border-white/20">
                      <TextAnimate className="text-[var(--color-pd-green)] text-sm font-semibold mb-1">
                        Developer: JUAN DELA CRUZ
                      </TextAnimate>
                      <TextAnimate className="text-white/70 text-xs">
                        Published: November 20, 2024
                      </TextAnimate>
                    </div>
                  </div>
                </div>
              </GlassContainer>
            </div>




            {/* Project Card 2 */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
              <GlassContainer className="w-full md:w-[36rem] h-96 md:h-[28rem] rounded-2xl border border-white/20 backdrop-blur-lg bg-gray-200">
                <div className="w-full h-full rounded-2xl overflow-hidden relative">
                   {/* PLACE IMAGE HERE */}
                  <Image
                    src={imageErrors['project-2'] ? "/placeholder.png" : "/assets/about-pics/carousel-3.png"}
                    alt="Project Image 2"
                    fill
                    className="object-cover"
                    unoptimized
                    onLoad={() => {
                      console.log("Project image 2 loaded successfully")
                    }}
                    onError={() => handleImageError('project-2')}
                  />
                </div>
              </GlassContainer>
              <GlassContainer variant="card" className="flex-1 h-96 md:h-[28rem] rounded-2xl flex items-center justify-center relative overflow-hidden">
                <div
                  style={{ 
                    backgroundColor: "var(--color-pd-dark-grey)",
                    pointerEvents: "none",
                    position: "absolute",
                    inset: 0,
                    backgroundImage: "url(/assets/pattern.png)",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    opacity: 0.03,
                    borderRadius: "16px",
                  }}
                />
                <div className="relative z-10 w-full h-full flex items-center justify-center p-4 sm:p-6 md:p-8">
                  <div className="text-center">
                    <TextAnimate className="text-white text-base md:text-lg font-bold mb-4">
                      Project Title
                    </TextAnimate>
                    <TextAnimate className="text-white text-sm sm:text-base md:text-lg font-medium leading-relaxed break-words hyphens-auto overflow-hidden mb-4">
                      Brief description of the project goes here. It should be concise yet informative, giving an overview of what the project is about and its key features.
                    </TextAnimate>
                    
                    <div className="mt-6 pt-4 border-t border-white/20">
                      <TextAnimate className="text-[var(--color-pd-green)] text-sm font-semibold mb-1">
                        Developer: JUAN DELA CRUZ
                      </TextAnimate>
                      <TextAnimate className="text-white/70 text-xs">
                        Published: October 10, 2024
                      </TextAnimate>
                    </div>
                  </div>
                </div>
              </GlassContainer>
            </div>




            {/* Project Card 3 */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
              <GlassContainer className="w-full md:w-[36rem] h-96 md:h-[28rem] rounded-2xl border border-white/20 backdrop-blur-lg bg-gray-200">
                <div className="w-full h-full rounded-2xl overflow-hidden relative">
                       {/* PLACE IMAGE HERE */}
                  <Image
                    src={imageErrors['project-3'] ? "/placeholder.png" : "/assets/about-pics/carousel-5.png"}
                    alt="Project Image 3"
                    fill
                    className="object-cover"
                    unoptimized
                    onLoad={() => {
                      console.log("Project image 3 loaded successfully")
                    }}
                    onError={() => handleImageError('project-3')}
                  />
                </div>
              </GlassContainer>
              <GlassContainer variant="card" className="flex-1 h-96 md:h-[28rem] rounded-2xl flex items-center justify-center relative overflow-hidden">
                <div
                  style={{ 
                    backgroundColor: "var(--color-pd-dark-grey)",
                    pointerEvents: "none",
                    position: "absolute",
                    inset: 0,
                    backgroundImage: "url(/assets/pattern.png)",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    opacity: 0.03,
                    borderRadius: "16px",
                  }}
                />
                <div className="relative z-10 w-full h-full flex items-center justify-center p-4 sm:p-6 md:p-8">
                  <div className="text-center">
                    <TextAnimate className="text-white text-base md:text-lg font-bold mb-4">
                      Project Title
                    </TextAnimate>
                    <TextAnimate className="text-white text-sm sm:text-base md:text-lg font-medium leading-relaxed break-words hyphens-auto overflow-hidden mb-4">
                      Brief description of the project goes here. It should be concise yet informative, giving an overview of what the project is about and its key features.
                    </TextAnimate>
                    
                    <div className="mt-6 pt-4 border-t border-white/20">
                      <TextAnimate className="text-[var(--color-pd-green)] text-sm font-semibold mb-1">
                        Developer: JUAN DELA CRUZ
                      </TextAnimate>
                      <TextAnimate className="text-white/70 text-xs">
                        Published: December 15, 2024
                      </TextAnimate>
                    </div>
                  </div>
                </div>
              </GlassContainer>
            </div>
          </div>
        </GlassContainer>
      </section>
    </div>
  )
}