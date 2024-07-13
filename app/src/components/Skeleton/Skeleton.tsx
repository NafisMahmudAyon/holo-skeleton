import React from 'react';

interface SkeletonProps {
  variant?: 'rectangular' | 'circular' | 'rounded' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'text' | 'caption';
  animation?: "pulse" | "ping" | "wave"; 
  className?: string;
}

export const Skeleton: React.FC<SkeletonProps> = ({
  variant = 'rectangular',
  animation = 'pulse',
  className = ''
}) => {
  const getSkeletonClass = () => {
    let baseClass = '';
    switch (variant) {
      case 'rectangular':
        baseClass += ' h-36 w-36';
        break;
      case 'circular':
        baseClass += ' rounded-full';
        break;
      case 'rounded':
        baseClass += ' rounded-lg';
        break;
      case 'h1':
        baseClass += ' h-10 w-80';
        break;
      case 'h2':
        baseClass += ' h-8 w-75';
        break;
      case 'h3':
        baseClass += ' h-7 w-70';
        break;
      case 'h4':
        baseClass += ' h-6 w-65';
        break;
      case 'h5':
        baseClass += ' h-5 w-60';
        break;
      case 'h6':
        baseClass += ' h-4 w-55';
        break;
      case 'p':
        baseClass += ' h-5 w-full min-w-30';
        break;
      case 'text':
        baseClass += ' h-5 w-full min-w-30';
        break;
      case 'caption':
        baseClass += ' h-3 w-50';
        break;
      default:
        baseClass += ' rounded-md';
        break;
    }
    return baseClass;
  };
  const getAnimateClass = () => {
    let baseAnimate = '';
    switch (animation) {
      case 'pulse':
        baseAnimate += ' animate-pulse';
        break;
      // case 'ping':
      //   baseAnimate += ' animate-ping';
      //   break;
      case 'wave':
        baseAnimate += ' animate-wave';
        break;
      default:
        baseAnimate += ' animate-pulse';
        break;
    }
    return baseAnimate;
  };

  console.log(animation)

  return (
    <div className={`relative bg-gray-700 overflow-hidden ${getSkeletonClass()}`}>
      <div className={`absolute top-0 left-0 w-full h-full bg-white/30  ${className} ${getAnimateClass()}`}></div>
    </div>
  );
};