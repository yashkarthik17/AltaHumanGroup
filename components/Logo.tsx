
import React from 'react';

interface LogoProps {
  className?: string;
  style?: React.CSSProperties;
  color?: string; // Main color (Circle, Band, Top Text)
  textColor?: string; // Color of text inside the band (inverted)
}

export const Logo: React.FC<LogoProps> = ({ className = "w-24 h-24", style, color = "black", textColor }) => {
  // Determine colors
  // Default: color is the "Ink" (Circle, Band, Top Text).
  // Inverted: color of the text inside the band.
  
  const mainColor = color;
  // If no specific textColor provided, calculate based on mainColor
  // If mainColor is light, secondary is black. If dark, secondary is white.
  const isLight = mainColor === 'white' || mainColor === '#fff' || mainColor === '#ffffff';
  const secondaryColor = textColor || (isLight ? "black" : "white");

  return (
    <svg viewBox="0 0 200 200" className={className} style={style} xmlns="http://www.w3.org/2000/svg" aria-label="Join The Circle Logo">
      <defs>
        {/* Top Text Path: Arch (Frown) from Left to Right */}
        <path id="curveTop" d="M 30,100 A 70,70 0 0,0 170,100" fill="none" />
        
        {/* Bottom Text Path: Smile from Left to Right inside the band */}
        <path id="curveBottomText" d="M 28,103 A 72,72 0 0,1 172,103" fill="none" />
      </defs>

      {/* 1. Center Circle */}
      {/* Radius 52 to leave distinct gap */}
      <circle cx="100" cy="100" r="52" fill={mainColor} />

      {/* 2. Top Text */}
      <text width="200" fill={mainColor} fontSize="22" fontWeight="900" letterSpacing="1" textAnchor="middle" style={{ textTransform: 'uppercase' }}>
        <textPath xlinkHref="#curveTop" startOffset="50%">
          Join The Circle
        </textPath>
      </text>

      {/* 3. Bottom Rocker Band */}
      {/* Outer R=90, Inner R=60. Drawn counter-clockwise to form the shape properly with the inner arc reversed */}
      <path 
        d="M 10,100 A 90,90 0 0,1 190,100 L 160,100 A 60,60 0 0,0 40,100 Z" 
        fill={mainColor} 
      />

      {/* 4. Bottom Text */}
      <text width="200" fill={secondaryColor} fontSize="11.5" fontWeight="800" letterSpacing="0.5" textAnchor="middle" style={{ textTransform: 'uppercase' }}>
        <textPath xlinkHref="#curveBottomText" startOffset="50%">
          Stop The Hate of Black People
        </textPath>
      </text>
    </svg>
  );
};

export const StaticLogo = Logo;
