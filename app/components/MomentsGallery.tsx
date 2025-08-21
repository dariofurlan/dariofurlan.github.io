import { Link } from "react-router";
import { useState } from "react";
import type { Moment } from "~/data/moments";

const dateFormatter = new Intl.DateTimeFormat('it-IT', { 
  year: 'numeric', 
  month: 'long', 
  day: 'numeric' 
});

interface MomentsGalleryProps {
  moments: Moment[];
}

interface MomentCardProps {
  moment: Moment;
  onClick: () => void;
}

interface MomentModalProps {
  moment: Moment | null;
  isOpen: boolean;
  onClose: () => void;
}

function MomentModal({ moment, isOpen, onClose }: MomentModalProps) {
  if (!moment) return null;

  return (
    <div className={`modal ${isOpen ? 'modal-open' : ''}`}>
      <div className="modal-box max-w-2xl max-h-[90vh] p-0 overflow-hidden flex flex-col">
        <button
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 z-10"
          onClick={onClose}
        >
          ✕
        </button>

        <figure className="relative max-h-[50vh] overflow-hidden flex-shrink-0">
          <img
            src={moment.image}
            alt={moment.alt}
            className="object-contain w-full h-full max-h-[50vh]"
          />
          <div className="absolute top-4 left-4">
            <div className={`badge badge-${moment.badgeColor} badge-lg`}>
              {moment.year}
            </div>
          </div>
        </figure>

        <div className="p-6 overflow-y-auto flex-1">
          <div className="flex items-center gap-3 text-sm text-base-content/70 mb-4">
            <span>📅 {dateFormatter.format(moment.date)}</span>
            <span>•</span>
            <span>📍 {moment.location}</span>
          </div>
          <h3 className="text-2xl font-bold font-Outfit mb-4">{moment.title}</h3>
          <p className="text-base leading-relaxed">{moment.description}</p>

          <div className="mt-6 flex justify-end">
            <button className="btn btn-primary" onClick={onClose}>
              Chiudi
            </button>
          </div>
        </div>
      </div>
      <div className="modal-backdrop" onClick={onClose}></div>
    </div>
  );
}

function MomentCard({ moment, onClick }: MomentCardProps) {
  return (
    <div
      className="card bg-base-200 shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 cursor-pointer hover:scale-[1.02]"
      onClick={onClick}
    >
      <figure className="relative aspect-video overflow-hidden">
        <img
          src={moment.thumbnail ?? moment.image}
          alt={moment.alt}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-2 right-2">
          <div className={`badge badge-${moment.badgeColor}`}>
            {moment.year}
          </div>
        </div>
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="btn btn-primary btn-circle">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
              </svg>
            </div>
          </div>
        </div>
      </figure>
      <div className="card-body p-4">
        <div className="flex items-center gap-2 text-xs text-base-content/70 mb-2">
          <span>📅 {dateFormatter.format(moment.date)}</span>
          <span>•</span>
          <span>📍 {moment.location}</span>
        </div>
        <h3 className="card-title text-lg font-Outfit">{moment.title}</h3>
        <p className="text-sm">{moment.description}</p>
        <div className="text-xs text-primary mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
          Clicca per ingrandire →
        </div>
      </div>
    </div>
  );
}

export function MomentsGallery({ moments }: MomentsGalleryProps) {
  const [selectedMoment, setSelectedMoment] = useState<Moment | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMomentClick = (moment: Moment) => {
    setSelectedMoment(moment);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedMoment(null);
  };

  return (
    <section>
      <h2 className="text-3xl font-bold font-Outfit text-center mb-12">
        📸 Galleria Momenti
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {moments.map((moment) => (
          <MomentCard
            key={moment.id}
            moment={moment}
            onClick={() => handleMomentClick(moment)}
          />
        ))}
      </div>

      <div className="text-center">
        <Link to="/case_study" className="btn btn-primary btn-wide">
          🗂️ Esplora Portfolio Completo
        </Link>
      </div>

      <MomentModal
        moment={selectedMoment}
        isOpen={isModalOpen}
        onClose={handleModalClose}
      />
    </section>
  );
}