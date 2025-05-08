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
    splineViewer.setAttribute('loading-anim', 'true');
    splineViewer.setAttribute('auto-rotate', 'true');
    splineViewer.setAttribute('auto-fit', 'true');
    splineViewer.className = className;

    // Apply custom styling to position the model
    splineViewer.style.position = 'absolute';
    splineViewer.style.top = '-80px'; // Move the model up to show more of the top
    splineViewer.style.left = '0';
    splineViewer.style.width = '100%';
    splineViewer.style.height = 'calc(100% + 150px)'; // Make it taller to hide the bottom

    // Add a custom attribute to adjust the camera position
    splineViewer.setAttribute('camera-orbit', '0deg 75deg 1.5m'); // Adjust camera to look more from above

    // Clear the container and append the viewer
    containerRef.current.innerHTML = '';
    containerRef.current.appendChild(splineViewer);

    // Add event listener for when the model is loaded
    splineViewer.addEventListener('load', () => {
      // Additional adjustments after the model is loaded if needed
      console.log('Spline model loaded');
    });
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
          minHeight: '700px',
          position: 'relative',
          width: '100%',
          height: '100%',
          aspectRatio: '16/10',
          padding: '20px 20px 0 20px',
          overflow: 'hidden'
        }}
      />
    </>
  );
}
