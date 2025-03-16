import React, { useState, useEffect } from 'react';
import './studio.css';

// Component for the knob controls
const KnobControl = ({ label, onChange }) => {
  return (
    <div className="knob-container">
      <div className="knob"></div>
      <label>{label}</label>
    </div>
  );
};

// Piano Roll Modal Component
const PianoRollModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  
  return (
    <div className="modal">
      <div className="modal-content piano-roll-modal">
        <h2>Piano Roll</h2>
        <div className="piano-roll-grid">
          {/* Piano keys on the left */}
          <div className="piano-keys">
            {/* Generate piano keys */}
          </div>
          {/* Grid for notes */}
          <div className="note-grid">
            {/* Generate grid lines */}
          </div>
        </div>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

// Beat Machine Modal Component
const BeatMachineModal = ({ isOpen, onClose }) => {
  const [pads, setPads] = useState(Array(16).fill(false));
  
  const togglePad = (index) => {
    const newPads = [...pads];
    newPads[index] = !newPads[index];
    setPads(newPads);
  };

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content beat-machine-modal">
        <h2>Beat Machine</h2>
        <div className="beat-grid">
          {pads.map((active, i) => (
            <div 
              key={i}
              className={`pad ${active ? 'active' : ''}`}
              onClick={() => togglePad(i)}
            />
          ))}
        </div>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

// Main Studio Component
const Studio = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check login status
    if (!sessionStorage.getItem('logged_in')) {
      window.location.href = 'login';
    }
    setIsLoggedIn(true);
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem('logged_in');
    window.location.href = 'login';
  };

  return (
    <div className="studio-container">
      <div className="top-bar">
        <div className="logo">Conseqence Studio</div>
        <div className="controls">
          <button onClick={() => setActiveModal('pianoRoll')}>Piano Roll</button>
          <button onClick={() => setActiveModal('beatMachine')}>Beat Machine</button>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>

      <div className="main-content">
        <div className="track-layout">
          <div className="timeline">
            {/* Timeline markers */}
          </div>
          <div className="tracks">
            {/* Track lanes */}
          </div>
        </div>
        
        <div className="transport-controls">
          <button className="play-button">
            <span>▶</span>
          </button>
          <div className="time-display">00:00:00</div>
        </div>
      </div>

      <div className="side-panels">
        <div className="mixer-panel">
          <h3>Mixer</h3>
          <div className="mixer-controls">
            {['Main', 'Track 1', 'Track 2'].map(track => (
              <div key={track} className="channel-strip">
                <KnobControl label="Gain" />
                <KnobControl label="Pan" />
                <div className="fader-container">
                  <input type="range" orient="vertical" />
                </div>
                <label>{track}</label>
              </div>
            ))}
          </div>
        </div>
      </div>

      <PianoRollModal 
        isOpen={activeModal === 'pianoRoll'} 
        onClose={() => setActiveModal(null)} 
      />
      
      <BeatMachineModal 
        isOpen={activeModal === 'beatMachine'} 
        onClose={() => setActiveModal(null)} 
      />
    </div>
  );
};

export default Studio; 