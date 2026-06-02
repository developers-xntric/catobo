import React from 'react';

export default function Home() {
  // Custom gradient defined from your prompt
  const brandGradient = {
    background: 'linear-gradient(93deg, #168DCA -24.15%, #0F2453 134.7%)',
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">

      {/* Top Section: Hero Cards */}
      <section className="w-full max-w-360 mx-auto p-4 md:p-6 grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Aviation Solutions Card */}
        <div className="relative h-100 md:h-125 rounded-3xl overflow-hidden group">
          {/* Background Image (Replace with your actual image path or Next/Image) */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&q=80&w=1000")' }}
          />
          <div className="absolute inset-0 bg-black/40" />

          {/* Card Content */}
          <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-10 text-white">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 tracking-wide">
              Aviation Solutions
            </h2>
            <p className="text-sm md:text-base text-white! mb-8 max-w-md leading-relaxed">
              Helipads, lighting, firefighting, and aviation safety systems engineered for compliance and performance
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                style={brandGradient}
                className="px-6 py-2.5 rounded text-sm font-medium text-white shadow-lg hover:opacity-90 transition-opacity"
              >
                Explore Aviation Solutions
              </button>
              <button className="px-6 py-2.5 rounded text-sm font-medium text-white border border-white hover:bg-white/10 transition-colors">
                Book Your Consultation
              </button>
            </div>
          </div>
        </div>

        {/* Engineering Solutions Card */}
        <div className="relative h-100 md:h-125 rounded-3xl overflow-hidden group">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=1000")' }}
          />
          {/* Blue-ish dark overlay to match the second card's tone */}
          <div className="absolute inset-0 bg-[#0a192f]/60" />

          {/* Card Content */}
          <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-10 text-white">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 tracking-wide">
              Engineering Solutions
            </h2>
            <p className="text-sm md:text-base text-white! mb-8 max-w-md leading-relaxed">
              Cable containment, lightning protection, and industrial safety systems built for reliability
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                style={brandGradient}
                className="px-6 py-2.5 rounded text-sm font-medium text-white shadow-lg hover:opacity-90 transition-opacity"
              >
                Explore Engineering Solutions
              </button>
              <button className="px-6 py-2.5 rounded text-sm font-medium text-white border border-white hover:bg-white/10 transition-colors">
                Book Your Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Middle Section: Text Content & Bottom Images */}
      <section className="w-full max-w-360 mx-auto px-4 md:px-8 py-12 md:py-16 bg-white grow">

        {/* Top Text Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">

          {/* Left Text Column */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 text-xs text-gray-500 uppercase tracking-wider mb-6 border border-gray-200 rounded">
              <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
              About Catoba
            </div>
            <h3 className="text-3xl md:text-[2.5rem] leading-tight font-semibold text-gray-900 mb-6">
              Engineering Solutions Built On Expertise And Trust
            </h3>
            <p className="text-sm md:text-base leading-relaxed">
              Catoba's portfolio includes aviation lighting and safety systems, helipad and vertipad solutions, airfield lighting, aircraft warning lights, cable containment systems, lightning protection, and industrial safety products. Every solution is engineered for precision, durability, and seamless integration.
            </p>
          </div>

          {/* Right Text Column */}
          <div className="flex flex-col justify-end gap-6">
            <p className="text-sm md:text-base leading-relaxed">
              Catoba is an engineering and technical solutions group delivering integrated systems for aviation, construction, and industrial infrastructure. Company started in 2007 of operational experience, we enable organizations to enhance safety, productivity, and long-term sustainability through reliable, compliant, and performance-driven solutions.
            </p>
            <p className="text-sm md:text-base leading-relaxed">
              Our strength lies in combining deep engineering knowledge, a structured management approach, and a strong global network. This allows us to design, supply, and support systems that meet the highest technical and operational standards across safety-critical environments.
            </p>
          </div>
        </div>

        {/* Bottom Image Grid (Logo + Helicopter) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

          {/* Left: Logo Box (Takes up ~4 columns) */}
          <div className="md:col-span-4 bg-[#23428B] rounded-2xl flex items-center justify-center p-12 min-h-75">
            {/* Placeholder for the complex 'C' SVG wireframe logo */}
            <svg viewBox="0 0 100 100" className="w-full max-w-50 h-auto text-white opacity-80" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M75,25 Q30,25 30,50 Q30,75 75,75" />
              <path d="M75,35 Q40,35 40,50 Q40,65 75,65" />
              <path d="M75,45 Q50,45 50,50 Q50,55 75,55" />
              {/* Crosshatches to simulate the wireframe feel */}
              <path d="M30,50 L75,25 M40,50 L75,35 M50,50 L75,45 M50,50 L75,55 M40,50 L75,65 M30,50 L75,75" strokeOpacity="0.3" />
            </svg>
          </div>

          {/* Right: Helicopter Image (Takes up ~8 columns) */}
          <div className="md:col-span-8 rounded-2xl overflow-hidden min-h-75 relative">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1542289602-95f7c35eb843?auto=format&fit=crop&q=80&w=1000")' }}
            />
          </div>
        </div>

      </section>

      {/* Footer */}
      <footer
        style={brandGradient}
        className="w-full py-4 text-center mt-auto"
      >
        <p className="text-white text-xs font-light tracking-wide">
          Copyright © 2024 All Rights Reserved.
        </p>
      </footer>

    </div>
  );
}