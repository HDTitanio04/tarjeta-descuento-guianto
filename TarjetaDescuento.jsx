import React, { useState } from 'react';

export default function TarjetaDescuento() {
  const [slots, setSlots] = useState(Array(20).fill(false));
  const [nombre] = useState("Toni Criado");
  const [numeroSocio] = useState("GA-2024-1587");
  
  const toggleSlot = (index) => {
    const newSlots = [...slots];
    newSlots[index] = !newSlots[index];
    setSlots(newSlots);
  };
  
  const sellados = slots.filter(s => s).length;
  
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4" style={{
      backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(138, 43, 226, 0.15), transparent 50%), radial-gradient(circle at 80% 70%, rgba(65, 105, 225, 0.15), transparent 50%)',
    }}>
      <div className="w-full max-w-md">
        {/* Efecto de confeti en el fondo */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full"
              style={{
                background: ['#FFD700', '#00CED1', '#FF69B4', '#7B68EE'][i % 4],
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: 0.4,
                animation: `twinkle ${2 + Math.random() * 3}s infinite`
              }}
            />
          ))}
        </div>

        <style>{`
          @keyframes twinkle {
            0%, 100% { opacity: 0.2; transform: scale(1); }
            50% { opacity: 0.6; transform: scale(1.5); }
          }
        `}</style>

        {/* Tarjeta principal */}
        <div className="relative bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 rounded-3xl overflow-hidden shadow-2xl">
          {/* Textura grunge */}
          <div className="absolute inset-0 opacity-20 mix-blend-overlay" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.3'/%3E%3C/svg%3E")`,
          }}></div>

          {/* Header con logo */}
          <div className="relative pt-8 pb-6 px-6 text-center">
            <h1 className="text-6xl font-black text-yellow-400 mb-2" style={{ 
              textShadow: '3px 3px 0px rgba(0,0,0,0.3)',
              letterSpacing: '0.02em'
            }}>
              GuiAnTo
            </h1>
            <div className="inline-block bg-cyan-500 px-6 py-2 rounded-full">
              <p className="text-white text-xl font-bold" style={{
                textShadow: '1px 1px 0px rgba(0,0,0,0.2)'
              }}>
                Tarjeta de Descuento
              </p>
            </div>
          </div>

          {/* Grid de sellos */}
          <div className="px-6 py-6">
            <div className="bg-yellow-400 rounded-2xl p-4 relative overflow-hidden" style={{
              boxShadow: 'inset 0 4px 8px rgba(0,0,0,0.2)',
            }}>
              {/* Textura del grid */}
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='50' height='50' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise2'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2' numOctaves='2' /%3E%3C/filter%3E%3Crect width='50' height='50' filter='url(%23noise2)' opacity='0.4'/%3E%3C/svg%3E")`,
              }}></div>
              
              <div className="relative grid grid-cols-5 gap-2">
                {slots.map((sellado, index) => (
                  <button
                    key={index}
                    onClick={() => toggleSlot(index)}
                    className={`aspect-square rounded-xl transition-all duration-300 border-4 ${
                      sellado
                        ? 'bg-purple-600 border-purple-700 shadow-lg scale-95'
                        : 'bg-yellow-300 border-cyan-500 hover:bg-yellow-200'
                    }`}
                    style={{
                      boxShadow: sellado ? 'inset 0 2px 4px rgba(0,0,0,0.3)' : '0 2px 4px rgba(0,0,0,0.2)'
                    }}
                  >
                    {sellado && (
                      <div className="text-yellow-400 text-2xl font-bold">✓</div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Sección de premio o nombre */}
          <div className="px-6 pb-6">
            {sellados === 20 ? (
              <div className="bg-gray-800 rounded-2xl p-5 relative overflow-hidden animate-pulse">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="text-yellow-400 text-2xl font-black mb-1">Combo Gratis</h3>
                    <p className="text-cyan-400 text-sm font-bold">Código: {numeroSocio}</p>
                  </div>
                  <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center">
                    <div className="text-xs font-mono leading-tight">
                      <div className="grid grid-cols-5 gap-px">
                        {[...Array(25)].map((_, i) => (
                          <div key={i} className={`w-2 h-2 ${Math.random() > 0.5 ? 'bg-black' : 'bg-white'}`} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-xl px-4 py-4 text-center">
                  <p className="text-gray-900 text-2xl font-black mb-1">🎉 ¡FELICIDADES! 🎉</p>
                  <p className="text-gray-800 text-sm font-bold">Reclama tu combo gratis</p>
                </div>
              </div>
            ) : (
              <div className="bg-gray-800 rounded-2xl p-5 relative overflow-hidden">
                <div className="bg-cyan-500 rounded-xl px-4 py-3">
                  <p className="text-white text-lg font-bold text-center" style={{
                    textShadow: '1px 1px 0px rgba(0,0,0,0.2)'
                  }}>
                    Nombre del Socio
                  </p>
                  <p className="text-white text-xl font-black text-center mt-1">
                    {nombre}
                  </p>
                </div>
                <div className="mt-3 text-center">
                  <p className="text-cyan-400 text-xs font-bold">Código: {numeroSocio}</p>
                </div>
              </div>
            )}
          </div>

          {/* Contador de visitas */}
          <div className="px-6 pb-6 text-center">
            <p className="text-cyan-300 text-sm font-bold mb-1">Visitas completadas</p>
            <p className="text-yellow-400 text-3xl font-black">{sellados} / 20</p>
          </div>
        </div>
      </div>
    </div>
  );
}
