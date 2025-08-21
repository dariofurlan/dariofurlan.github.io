import { useState } from "react";
import type { Moment } from "~/data/moments";

const dateFormatter = new Intl.DateTimeFormat('it-IT', {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
});

interface GalleryPageProps {
  moments: Moment[];
}

export function GalleryPage({ moments }: GalleryPageProps) {
  const [selectedMoment, setSelectedMoment] = useState<Moment | null>(null);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

  // Get unique years and locations for filters
  const years = Array.from(new Set(moments.map(m => m.year))).sort((a, b) => b - a);
  const locations = Array.from(new Set(moments.map(m => m.location))).sort();

  // Filter moments based on selected filters
  const filteredMoments = moments.filter(moment => {
    const matchesYear = !selectedYear || moment.year === selectedYear;
    const matchesLocation = !selectedLocation || moment.location === selectedLocation;
    return matchesYear && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-base-100">
      {/* Hero Section */}
      <div className="hero bg-gradient-to-r from-accent/10 to-info/10 py-20">
        <div className="hero-content text-center">
          <div className="max-w-4xl">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-2xl shadow-xl bg-gradient-to-br from-orange-500 to-pink-600 flex items-center justify-center text-white text-4xl">
                📸
              </div>
            </div>
            <h1 className="text-5xl font-bold font-Outfit mb-6">
              Galleria dei Momenti
            </h1>
            <p className="text-xl text-base-content/80 max-w-2xl mx-auto mb-8">
              Una raccolta dei momenti più significativi del mio percorso professionale: 
              eventi, conferenze, collaborazioni e milestone che hanno segnato la mia crescita.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <div className="badge badge-outline badge-lg">Eventi Professionali</div>
              <div className="badge badge-outline badge-lg">Conferenze Tech</div>
              <div className="badge badge-outline badge-lg">Collaborazioni</div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-base-200 py-16">
        <div className="container mx-auto px-4">
          <div className="stats stats-vertical lg:stats-horizontal shadow-xl bg-base-100 w-full">
            <div className="stat">
              <div className="stat-figure text-primary">
                <div className="text-4xl">📷</div>
              </div>
              <div className="stat-title">Momenti Catturati</div>
              <div className="stat-value text-primary">{moments.length}</div>
              <div className="stat-desc">Ricordi professionali</div>
            </div>
            
            <div className="stat">
              <div className="stat-figure text-secondary">
                <div className="text-4xl">📅</div>
              </div>
              <div className="stat-title">Anni Coperti</div>
              <div className="stat-value text-secondary">{years.length}</div>
              <div className="stat-desc">Dal {Math.min(...years)} ad oggi</div>
            </div>
            
            <div className="stat">
              <div className="stat-figure text-accent">
                <div className="text-4xl">📍</div>
              </div>
              <div className="stat-title">Località</div>
              <div className="stat-value text-accent">{locations.length}</div>
              <div className="stat-desc">Diverse location</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-info">
                <div className="text-4xl">🎯</div>
              </div>
              <div className="stat-title">Ultimo Evento</div>
              <div className="stat-value text-info text-lg">{moments[0]?.year}</div>
              <div className="stat-desc">{moments[0]?.location}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="container mx-auto px-4 py-16">
        {/* Filters */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold font-Outfit text-center mb-8">Esplora i Momenti</h2>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Filtra per Anno</span>
              </label>
              <select 
                className="select select-bordered w-full max-w-xs"
                value={selectedYear || ""}
                onChange={(e) => setSelectedYear(e.target.value ? parseInt(e.target.value) : null)}
              >
                <option value="">Tutti gli Anni</option>
                {years.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Filtra per Località</span>
              </label>
              <select 
                className="select select-bordered w-full max-w-xs"
                value={selectedLocation || ""}
                onChange={(e) => setSelectedLocation(e.target.value || null)}
              >
                <option value="">Tutte le Località</option>
                {locations.map(location => (
                  <option key={location} value={location}>{location}</option>
                ))}
              </select>
            </div>
          </div>

          {(selectedYear || selectedLocation) && (
            <div className="text-center">
              <button 
                className="btn btn-ghost btn-sm"
                onClick={() => {
                  setSelectedYear(null);
                  setSelectedLocation(null);
                }}
              >
                Rimuovi Filtri
              </button>
            </div>
          )}
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredMoments.map((moment) => (
            <div 
              key={moment.id} 
              className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              onClick={() => setSelectedMoment(moment)}
            >
              <figure className="aspect-square overflow-hidden">
                <img
                  src={moment.thumbnail || moment.image}
                  alt={moment.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </figure>
              <div className="card-body p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className={`badge badge-${moment.badgeColor} badge-sm`}>
                    {moment.year}
                  </div>
                  <div className="text-xs text-base-content/60">
                    {dateFormatter.format(moment.date)}
                  </div>
                </div>
                
                <h3 className="card-title text-sm font-bold font-Outfit mb-2 line-clamp-2">
                  {moment.title}
                </h3>
                
                <p className="text-xs text-base-content/70 mb-2 line-clamp-2">
                  {moment.description}
                </p>
                
                <div className="flex items-center gap-1 text-xs text-base-content/60">
                  <span>📍</span>
                  <span className="truncate">{moment.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredMoments.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold mb-2">Nessun momento trovato</h3>
            <p className="text-base-content/70">
              Prova a modificare i filtri per visualizzare più momenti.
            </p>
          </div>
        )}
      </div>

      {/* Timeline Section */}
      <div className="bg-base-200 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-Outfit text-center mb-12">Timeline dei Momenti</h2>
          
          <div className="max-w-4xl mx-auto">
            {years.map(year => {
              const yearMoments = moments.filter(m => m.year === year);
              return (
                <div key={year} className="mb-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-2xl font-bold text-primary">{year}</div>
                    <div className="h-px bg-primary/20 flex-1"></div>
                    <div className="badge badge-primary badge-outline">
                      {yearMoments.length} {yearMoments.length === 1 ? 'momento' : 'momenti'}
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4 ml-8">
                    {yearMoments.map(moment => (
                      <div 
                        key={moment.id}
                        className="flex items-center gap-4 p-4 bg-base-100 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                        onClick={() => setSelectedMoment(moment)}
                      >
                        <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                          <img
                            src={moment.thumbnail || moment.image}
                            alt={moment.alt}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-sm truncate">{moment.title}</h4>
                          <p className="text-xs text-base-content/70 mb-1">{moment.location}</p>
                          <p className="text-xs text-base-content/60">
                            {dateFormatter.format(moment.date)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedMoment && (
        <dialog className="modal modal-open">
          <div className="modal-box max-w-4xl max-h-[90vh] p-0 overflow-hidden">
            <div className="flex flex-col max-h-[90vh]">
              {/* Image Section */}
              <div className="relative max-h-[50vh] overflow-hidden">
                <img
                  src={selectedMoment.image}
                  alt={selectedMoment.alt}
                  className="w-full h-full object-contain bg-base-200"
                />
                <button 
                  className="btn btn-sm btn-circle btn-ghost absolute top-4 right-4 bg-base-100/80 hover:bg-base-100"
                  onClick={() => setSelectedMoment(null)}
                >
                  ✕
                </button>
              </div>
              
              {/* Content Section */}
              <div className="p-6 overflow-y-auto">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`badge badge-${selectedMoment.badgeColor}`}>
                    {selectedMoment.year}
                  </div>
                  <span className="text-sm text-base-content/70">
                    {dateFormatter.format(selectedMoment.date)}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold font-Outfit mb-3">
                  {selectedMoment.title}
                </h3>
                
                <div className="flex items-center gap-2 mb-4 text-base-content/70">
                  <span>📍</span>
                  <span>{selectedMoment.location}</span>
                </div>
                
                <p className="text-base-content/90 leading-relaxed">
                  {selectedMoment.description}
                </p>
              </div>
            </div>
          </div>
          <div className="modal-backdrop" onClick={() => setSelectedMoment(null)}></div>
        </dialog>
      )}
    </div>
  );
}