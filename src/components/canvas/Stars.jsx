import React, { useState, useEffect } from "react";

const StarsCanvas = () => {
  const [stars, setStars] = useState({ small: "", medium: "", large: "" });

  useEffect(() => {
    // Generate static shadow lists for stars to avoid layout shifts or heavy DOM node count
    const generateStars = (count, color) => {
      const shadows = [];
      for (let i = 0; i < count; i++) {
        // Distribute coordinates in a large circle/square surrounding the center
        const x = Math.floor(Math.random() * 2000) - 1000;
        const y = Math.floor(Math.random() * 2000) - 1000;
        shadows.push(`${x}px ${y}px ${color}`);
      }
      return shadows.join(", ");
    };

    setStars({
      small: generateStars(200, "rgba(255, 255, 255, 0.7)"),
      medium: generateStars(100, "rgba(242, 114, 200, 0.6)"), // Light purple/pink
      large: generateStars(50, "rgba(145, 94, 255, 0.8)"),    // Purple glow
    });
  }, []);

  return (
    <div className="w-full h-full absolute inset-0 z-[-1] overflow-hidden bg-transparent pointer-events-none">
      <style dangerouslySetInnerHTML={{ __html: `
        .stars-layer {
          position: absolute;
          left: 50%;
          top: 50%;
          background: transparent;
          border-radius: 50%;
          transform-origin: center center;
        }
        .stars-slow {
          animation: rotateSlow 240s linear infinite;
        }
        .stars-medium {
          animation: rotateMedium 180s linear infinite;
        }
        .stars-fast {
          animation: rotateFast 120s linear infinite;
        }
        @keyframes rotateSlow {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes rotateMedium {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(-360deg); }
        }
        @keyframes rotateFast {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(180deg); }
        }
      `}} />
      
      {stars.small && (
        <div
          className="stars-layer stars-slow"
          style={{
            boxShadow: stars.small,
            width: "1px",
            height: "1px",
          }}
        />
      )}
      {stars.medium && (
        <div
          className="stars-layer stars-medium"
          style={{
            boxShadow: stars.medium,
            width: "1.5px",
            height: "1.5px",
          }}
        />
      )}
      {stars.large && (
        <div
          className="stars-layer stars-fast"
          style={{
            boxShadow: stars.large,
            width: "2px",
            height: "2px",
          }}
        />
      )}
    </div>
  );
};

export default StarsCanvas;