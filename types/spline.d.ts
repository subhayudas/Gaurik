declare namespace JSX {
  interface IntrinsicElements {
    'spline-viewer': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & {
        url?: string;
        // Add any other attributes that spline-viewer supports here
      },
      HTMLElement
    >;
  }
}
