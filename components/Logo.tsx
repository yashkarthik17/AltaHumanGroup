
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
  style
}) => {
  return (
    <img 
      src="/attached_assets/Untitled_design_1768791815935.png" 
      alt="Join The Circle Logo" 
      className={`${className} mix-blend-multiply`}
      style={style}
    />
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
