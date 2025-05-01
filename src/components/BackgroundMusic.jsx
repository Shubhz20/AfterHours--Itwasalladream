import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      // Set initial volume to 40%
      audio.volume = 0.4;
      
      // Force play with user interaction
      const playAudio = async () => {
        try {
          // Set muted first to allow autoplay
          audio.muted = true;
          await audio.play();
          // Then unmute after playing starts
          audio.muted = false;
          setIsPlaying(true);
        } catch (error) {
          console.log('Autoplay prevented:', error);
        }
      };

      // Try to play on any user interaction
      const handleUserInteraction = () => {
        playAudio();
        // Remove event listeners after first interaction
        document.removeEventListener('click', handleUserInteraction);
        document.removeEventListener('touchstart', handleUserInteraction);
        document.removeEventListener('keydown', handleUserInteraction);
      };

      // Add event listeners for user interaction
      document.addEventListener('click', handleUserInteraction);
      document.addEventListener('touchstart', handleUserInteraction);
      document.addEventListener('keydown', handleUserInteraction);

      // Cleanup
      return () => {
        document.removeEventListener('click', handleUserInteraction);
        document.removeEventListener('touchstart', handleUserInteraction);
        document.removeEventListener('keydown', handleUserInteraction);
      };
    }
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(error => {
          console.error('Error playing audio:', error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="background-music">
      <audio
        ref={audioRef}
        loop
        preload="auto"
        src="/2. BIBA (feat. SLICK TRICK, TOSHI)  Farasat Anees  OFIVE1.mp3"
      />
      <div className="music-controls">
        <button 
          onClick={togglePlay}
          className="music-button"
          aria-label={isPlaying ? 'Pause music' : 'Play music'}
        >
          {isPlaying ? '⏸️' : '▶️'}
        </button>
        <button 
          onClick={toggleMute}
          className="music-button"
          aria-label={isMuted ? 'Unmute' : 'Mute'}
        >
          {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </button>
      </div>
    </div>
  );
};

export default BackgroundMusic; 