declare namespace JSX {
  interface IntrinsicElements {
    'spline-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
      url: string;
      'loading-anim'?: string;
      'auto-rotate'?: string;
      'auto-fit'?: string;
      'camera-orbit'?: string;
    }, HTMLElement>;
  }
}

declare interface Window {
  SplineViewer: any;
}
