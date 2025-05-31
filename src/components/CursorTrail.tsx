import { useEffect, useState } from 'react';

interface TrailPoint {
  x: number;
  y: number;
  id: number;
}

export function CursorTrail() {
  const [trail, setTrail] = useState<TrailPoint[]>([]);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let trailIndex = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const updateTrail = () => {
      setTrail(prevTrail => {
        const newTrail = [...prevTrail];
        
        // Add new point
        newTrail.push({
          x: mouseX,
          y: mouseY,
          id: trailIndex++
        });

        // Keep only last 20 points
        if (newTrail.length > 20) {
          newTrail.shift();
        }

        return newTrail;
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    const intervalId = setInterval(updateTrail, 50);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-40">
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="absolute rounded-full transition-all duration-1000 ease-out"
          style={{
            left: point.x - 4,
            top: point.y - 4,
            width: Math.max(2, 8 - index * 0.3),
            height: Math.max(2, 8 - index * 0.3),
            backgroundColor: `hsl(${(point.id * 10) % 360}, 70%, 60%)`,
            opacity: Math.max(0, 1 - index * 0.05),
            transform: `scale(${Math.max(0.1, 1 - index * 0.05)})`,
          }}
        />
      ))}
    </div>
  );
}
