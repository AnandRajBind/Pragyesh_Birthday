import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export default function MusicPlayer() {
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
    }
  }, []);

  const toggleMute = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.play().catch(() => {});
      } else {
        audioRef.current.pause();
      }
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="fixed top-6 right-6 z-50">
      <button
        onClick={toggleMute}
        className="bg-white/90 backdrop-blur-sm hover:bg-white text-gray-800 rounded-full p-4 shadow-lg transition-all hover:scale-110 group"
        aria-label={isMuted ? 'Unmute music' : 'Mute music'}
      >
        {isMuted ? (
          <VolumeX className="w-6 h-6 text-gray-600" />
        ) : (
          <Volume2 className="w-6 h-6 text-pink-500 animate-pulse" />
        )}
      </button>

      <audio ref={audioRef} loop>
        <source
          src="https://cdn.pixabay.com/audio/2022/03/10/audio_2c95b10e88.mp3"
          type="audio/mpeg"
        />
      </audio>

      <div className="absolute top-full mt-2 right-0 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        <p className="text-xs text-gray-600">
          {isMuted ? 'Click to play music' : 'Music playing'}
        </p>
      </div>
    </div>
  );
}
