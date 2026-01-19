
import React from 'react';

interface LogoProps {
  className?: string;
  style?: React.CSSProperties;
  color?: string; 
  textColor?: string; 
  textStroke?: string;
  textStrokeWidth?: string | number;
}

export const Logo: React.FC<LogoProps> = ({ 
  className = "w-24 h-24", 
  style, 
  color = "black", 
  textColor,
  textStroke,
  textStrokeWidth = "0.8"
}) => {
  const mainColor = color;
  const isLight = mainColor === 'white' || mainColor === '#fff' || mainColor === '#ffffff';
  const secondaryColor = textColor || (isLight ? "black" : "white");

  return (
    <svg viewBox="0 0 200 200" className={className} style={style} xmlns="http://www.w3.org/2000/svg" aria-label="Join The Circle Logo">
      <defs>
        <path id="curveTop" d="M 30,100 A 70,70 0 0,0 170,100" fill="none" />
        <path id="curveBottomText" d="M 28,103 A 72,72 0 0,1 172,103" fill="none" />
      </defs>
      <circle cx="100" cy="100" r="52" fill={mainColor} />
      <text 
        width="200" 
        fill={mainColor} 
        stroke={textStroke}
        strokeWidth={textStroke ? textStrokeWidth : 0}
        fontSize="22" 
        fontWeight="900" 
        letterSpacing="1" 
        textAnchor="middle" 
        style={{ textTransform: 'uppercase' }}
      >
        <textPath xlinkHref="#curveTop" startOffset="50%">
          Join The Circle
        </textPath>
      </text>
      <path 
        d="M 10,100 A 90,90 0 0,1 190,100 L 160,100 A 60,60 0 0,0 40,100 Z" 
        fill={mainColor} 
      />
      <text width="200" fill={secondaryColor} fontSize="11.5" fontWeight="800" letterSpacing="0.5" textAnchor="middle" style={{ textTransform: 'uppercase' }}>
        <textPath xlinkHref="#curveBottomText" startOffset="50%">
          Stop The Hate of Black People
        </textPath>
      </text>
    </svg>
  );
};

export const AHGLogo: React.FC<{ className?: string, color?: string }> = ({ className = "h-12", color = "black" }) => (
  <svg viewBox="0 0 450 150" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* AHG Box */}
    <rect x="5" y="5" width="140" height="140" fill="none" stroke={color} strokeWidth="6" />
    <text x="75" y="115" textAnchor="middle" fill={color} style={{ fontSize: '85px', fontWeight: '900', fontFamily: 'Impact, sans-serif' }}>AHG</text>
    
    {/* Text Side */}
    <text x="160" y="45" fill={color} style={{ fontSize: '42px', fontWeight: '900', fontFamily: 'Impact, sans-serif', textTransform: 'uppercase' }}>ALTA</text>
    <text x="160" y="90" fill={color} style={{ fontSize: '42px', fontWeight: '900', fontFamily: 'Impact, sans-serif', textTransform: 'uppercase' }}>HUMANITARIAN</text>
    <text x="160" y="135" fill={color} style={{ fontSize: '42px', fontWeight: '900', fontFamily: 'Impact, sans-serif', textTransform: 'uppercase' }}>GROUP</text>
  </svg>
);

export const StaticLogo = Logo;
