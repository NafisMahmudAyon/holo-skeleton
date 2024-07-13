import React from 'react';
interface SkeletonProps {
    variant?: 'rectangular' | 'circular' | 'rounded' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'text' | 'caption';
    animation?: "pulse" | "ping" | "wave";
    className?: string;
}
export declare const Skeleton: React.FC<SkeletonProps>;
export {};
