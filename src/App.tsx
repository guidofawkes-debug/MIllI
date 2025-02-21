import React, { useState, useEffect } from 'react';
import { AlignCenter as Alien, Brain, Shield, Code, ChevronRight, Sparkles } from 'lucide-react';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#00ff00]/20 to-[#003300]/30 z-0" />
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] 
          bg-cover bg-center opacity-20 z-[-1]"
        />
        
        {/* Floating UFOs */}
        <div className="absolute top-20 right-[20%] w-16 h-16 animate-[float_6s_ease-in-out_infinite]">
          <div className="w-full h-full bg-gradient-to-b from-[#00ff00]/30 to-transparent rounded-full"></div>
        </div>
        <div className="absolute top-40 left-[15%] w-12 h-12 animate-[float_8s_ease-in-out_infinite]">
          <div className="w-full h-full bg-gradient-to-b from-[#00ff00]/20 to-transparent rounded-full"></div>
        </div>
        
        <nav className="relative z-10 container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="relative w-10 h-10 bg-black rounded-full flex items-center justify-center">
          <Alien className="w-8 h-8 text-[#00ff00]" />
          <div className="absolute inset-0 border-2 border-[#00ff00] rounded-full animate-pulse"></div>
              </div>
              <span className="text-xl font-bold tracking-wider">MIllI</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="hover:text-[#00ff00] transition-colors">Services</a>
              <a href="#vision" className="hover:text-[#00ff00] transition-colors">Vision</a>
              <a href="tel:+263786838849" className="inline-flex items-center space-x-2 bg-[#00ff00] text-black px-4 py-2 rounded-full hover:bg-[#00cc00] transition-colors">
          <span>Call Now</span>
          <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </nav>

        <div className="relative container mx-auto px-6 py-24 md:py-32">
          <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex items-center mb-8">
              <div className="relative w-20 h-20 mr-6">
          <div className="absolute inset-0 bg-black rounded-full"></div>
          <Alien className="relative z-10 w-20 h-20 text-[#00ff00]" />
          <div className="absolute inset-0 border-2 border-[#00ff00] rounded-full animate-ping"></div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#00ff00] to-[#00cc00] bg-clip-text text-transparent">
          Straight Outta Area 51
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
              Advanced AI solutions beyond conventional boundaries.
              Welcome to the next evolution of technology.
            </p>
            <a href="tel:+263786838849" className="group flex items-center space-x-2 bg-[#00ff00] hover:bg-[#00cc00] text-black font-bold px-8 py-3 rounded-full transition-all">
              <span>Call Us Now</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-black to-[#003300]/20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-16 text-center">Classified Operations</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Brain className="w-8 h-8 text-[#00ff00]" />,
                title: "AI Model Design",
                description: "Extraterrestrial intelligence solutions that evolve beyond human limitations"
              },
              {
                icon: <Code className="w-8 h-8 text-[#00ff00]" />,
                title: "Systems Architecture",
                description: "Infrastructure from the future, built for the present"
              },
              {
                icon: <Shield className="w-8 h-8 text-[#00ff00]" />,
                title: "Quantum Security",
                description: "Protection protocols from another dimension"
              }
            ].map((service, index) => (
              <div 
                key={index}
                className="group relative bg-gradient-to-br from-black to-[#001a00] p-8 rounded-xl hover:shadow-2xl hover:shadow-[#00ff00]/20 transition-all duration-300 border border-[#00ff00]/20"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#00ff00]/5 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity" />
                <div className="relative">
                  {service.icon}
                  <h3 className="text-xl font-bold mt-4 mb-2">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                  <div className="mt-6 flex items-center text-[#00ff00] group-hover:text-[#00cc00]">
                    <span>Access Files</span>
                    <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#003300]/20 to-black z-0" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <Sparkles className="w-12 h-12 text-[#00ff00] mb-6" />
              <h2 className="text-3xl font-bold mb-6">Beyond Human Limits</h2>
              <p className="text-gray-300 mb-6">
                We're not just predicting the future - we're reverse engineering it. Our team of rogue scientists 
                and digital alchemists are breaking the barriers between possible and impossible.
              </p>
              <button className="bg-transparent border-2 border-[#00ff00] text-[#00ff00] px-6 py-2 rounded-full hover:bg-[#00ff00] hover:text-black transition-all">
                Join The Revolution
              </button>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-72 h-72">
                <div className="absolute inset-0 bg-gradient-to-r from-[#00ff00] to-[#003300] rounded-full animate-pulse opacity-20" />
                <div className="absolute inset-4 bg-gradient-to-r from-[#00ff00] to-[#003300] rounded-full animate-pulse opacity-40" />
                <div className="absolute inset-8 bg-gradient-to-r from-[#00ff00] to-[#003300] rounded-full animate-pulse opacity-60" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-[#00ff00]/20 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-6 md:mb-0">
              <div className="relative w-8 h-8 bg-black rounded-full flex items-center justify-center">
                <Alien className="w-6 h-6 text-[#00ff00]" />
                <div className="absolute inset-0 border-2 border-[#00ff00] rounded-full"></div>
              </div>
              <span className="text-lg font-bold">MIllI</span>
            </div>
            <div className="flex space-x-6">
              <a href="https://twitter.com/yourprofile" className="text-gray-400 hover:text-[#00ff00] transition-colors">Twitter</a>
              
              <a href="https://www.linkedin.com/in/yourprofile" className="text-gray-400 hover:text-[#00ff00] transition-colors">LinkedIn</a>
              
              <a href="https://www.instagram.com/yourprofile" className="text-gray-400 hover:text-[#00ff00] transition-colors">Instagram</a>
              
               <a href="https://www.instagram.com/yourprofile" className="text-gray-400 hover:text-[#00ff00] transition-colors">Instagram</a> 
                <a href="https://www.facebook.com/yourprofile" className="text-gray-400 hover:text-[#00ff00] transition-colors">Facebook</a>
              
            </div>
          </div>
          <div className="mt-8 text-center text-gray-600">
            © 2025 Milli Intelligent Technologies. Revolutionizing reality one byte at a time.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;