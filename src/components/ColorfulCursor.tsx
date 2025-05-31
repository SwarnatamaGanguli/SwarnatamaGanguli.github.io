
import { useEffect, useState } from 'react';

export function ColorfulCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      {/* Main cursor */}
      <div
        className={`fixed pointer-events-none z-50 mix-blend-difference transition-opacity duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          left: position.x - 12,
          top: position.y - 12,
          width: 24,
          height: 24,
        }}
      >
        <div className="w-full h-full rounded-full bg-white animate-pulse" />
      </div>

      {/* Colorful glow */}
      <div
        className={`fixed pointer-events-none z-40 transition-opacity duration-300 ${
          isVisible ? 'opacity-60' : 'opacity-0'
        }`}
        style={{
          left: position.x - 20,
          top: position.y - 20,
          width: 40,
          height: 40,
        }}
      >
        <div 
          className="w-full h-full rounded-full blur-md animate-spin"
          style={{
            background: `conic-gradient(from 0deg, 
              hsl(0, 70%, 60%), 
              hsl(60, 70%, 60%), 
              hsl(120, 70%, 60%), 
              hsl(180, 70%, 60%), 
              hsl(240, 70%, 60%), 
              hsl(300, 70%, 60%), 
              hsl(0, 70%, 60%))`
          }}
        />
      </div>
    </>
  );
}
