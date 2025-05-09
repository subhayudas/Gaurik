'use client';
import dynamic from 'next/dynamic';

// Dynamically import the FluidCursor component to avoid SSR issues with canvas
const FluidCursor = dynamic(() => import('@/components/Client/FluidCursor'), {
  ssr: false,
});

const FluidCursorWrapper = () => {
  return <FluidCursor />;
};

export default FluidCursorWrapper;
