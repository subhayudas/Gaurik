"use client";

import Script from "next/script";
import { useEffect, useRef } from "react";

interface SplineViewerClientProps {
  url: string;
  className?: string;
}

export default function SplineViewerClient({ url, className = "w-full h-full" }: SplineViewerClientProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // This will run after the component mounts and the script is loaded
    if (!containerRef.current) return;

    // Create a new spline-viewer element
    const splineViewer = document.createElement('spline-viewer');
    splineViewer.setAttribute('url', url);
    splineViewer.className = className;
    
    // Clear the container and append the viewer
    containerRef.current.innerHTML = '';
    containerRef.current.appendChild(splineViewer);
  }, [url, className]);

  return (
    <>
      <Script 
        type="module" 
        src="https://unpkg.com/@splinetool/viewer@1.9.91/build/spline-viewer.js" 
        strategy="afterInteractive"
      />
      <div 
        ref={containerRef} 
        className={className}
        style={{ 
          minHeight: '400px',
          position: 'relative',
          width: '100%',
          height: '100%'
        }}
      />
    </>
  );
}
