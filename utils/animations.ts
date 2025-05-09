import { animate as motionAnimate, stagger as motionStagger, AnimationPlaybackControls } from 'motion';

// Define our own animation options type that includes easing
type ExtendedAnimationOptions = {
  duration?: number;
  delay?: number | ((i: number) => number);
  easing?: string;
  repeat?: number;
  direction?: 'normal' | 'reverse' | 'alternate' | 'alternate-reverse';
};

/**
 * A type-safe wrapper around the motion.animate function
 * @param elements - The elements to animate (string selector or DOM elements)
 * @param keyframes - The animation keyframes
 * @param options - Animation options
 * @returns Animation controls
 */
export function animate(
  elements: string | Element | Element[] | NodeListOf<Element>,
  keyframes: Record<string, any>,
  options?: ExtendedAnimationOptions
): AnimationPlaybackControls {
  // Convert string selector to DOM elements
  const targetElements = typeof elements === 'string'
    ? document.querySelectorAll(elements)
    : elements;

  return motionAnimate(targetElements, keyframes, options as any);
}

/**
 * Creates a staggered delay function
 * @param duration - The stagger duration
 * @param options - Stagger options
 * @returns A function that returns a delay based on index
 */
export function stagger(
  duration: number,
  options?: { start?: number; from?: number }
) {
  return motionStagger(duration, options as any);
}

/**
 * Animates an element with a scale effect
 * @param element - The element to animate
 * @param scale - The scale values [from, to]
 * @param duration - Animation duration in seconds
 * @param easing - Easing function
 */
export function animateScale(
  element: Element,
  scale: [number, number] | [number, number, number],
  duration: number = 0.4,
  easing: string = 'ease-in-out'
): AnimationPlaybackControls {
  // For multi-value scale arrays, create the appropriate transform strings
  const scaleValues = scale.map(s => `scale(${s})`);

  return motionAnimate(element, { transform: scaleValues }, { duration, easing } as any);
}

/**
 * Animates elements into view with a fade and transform effect
 * @param elements - The elements to animate
 * @param direction - The direction to animate from ('up', 'down', 'left', 'right')
 * @param options - Animation options
 */
export function fadeIn(
  elements: string | Element | Element[] | NodeListOf<Element>,
  direction: 'up' | 'down' | 'left' | 'right' = 'up',
  options?: ExtendedAnimationOptions & { staggerDelay?: number }
): AnimationPlaybackControls {
  const targetElements = typeof elements === 'string'
    ? document.querySelectorAll(elements)
    : elements;

  // Create transform values based on direction
  let transformValues: string[] = [];

  switch(direction) {
    case 'up':
      transformValues = ['translateY(20px)', 'translateY(0)'];
      break;
    case 'down':
      transformValues = ['translateY(-20px)', 'translateY(0)'];
      break;
    case 'left':
      transformValues = ['translateX(20px)', 'translateX(0)'];
      break;
    case 'right':
      transformValues = ['translateX(-20px)', 'translateX(0)'];
      break;
  }

  const staggerDelay = options?.staggerDelay ? stagger(options.staggerDelay) : undefined;

  const animationOptions = {
    duration: options?.duration || 0.6,
    easing: options?.easing || 'ease-out',
    delay: staggerDelay,
    ...(options || {})
  };

  // Use separate animation calls for opacity and transform to avoid type errors
  const opacityAnimation = motionAnimate(
    targetElements,
    { opacity: [0, 1] },
    { ...animationOptions } as any
  );

  motionAnimate(
    targetElements,
    { transform: transformValues },
    { ...animationOptions } as any
  );

  return opacityAnimation;
}

/**
 * Creates a floating animation effect
 * @param element - The element to animate
 * @param distance - The distance to float
 * @param duration - Animation duration in seconds
 * @returns Animation controls
 */
export function floatingAnimation(
  element: string | Element | Element[] | NodeListOf<Element>,
  distance: number = 10,
  duration: number = 2
): AnimationPlaybackControls {
  const targetElements = typeof element === 'string'
    ? document.querySelectorAll(element)
    : element;

  return motionAnimate(
    targetElements,
    { transform: ['translateY(0)', `translateY(-${distance}px)`, 'translateY(0)'] },
    { duration, repeat: Infinity, easing: 'ease-in-out' } as any
  );
}

/**
 * Creates a pulse animation effect
 * @param element - The element to animate
 * @param scale - The scale to pulse to
 * @param duration - Animation duration in seconds
 * @returns Animation controls
 */
export function pulseAnimation(
  element: string | Element | Element[] | NodeListOf<Element>,
  scale: number = 1.05,
  duration: number = 1.5
): AnimationPlaybackControls {
  const targetElements = typeof element === 'string'
    ? document.querySelectorAll(element)
    : element;

  return motionAnimate(
    targetElements,
    { transform: ['scale(1)', `scale(${scale})`, 'scale(1)'] },
    { duration, repeat: Infinity, easing: 'ease-in-out' } as any
  );
}

/**
 * Animates a counter from start to end value
 * @param element - The element to update with the counter value
 * @param startValue - Starting value
 * @param endValue - Ending value
 * @param duration - Animation duration in seconds
 * @param formatter - Function to format the counter value
 */
export function animateCounter(
  element: Element,
  startValue: number,
  endValue: number,
  duration: number = 1.5,
  formatter: (value: number) => string = (value) => Math.round(value).toString()
) {
  let startTime: number | null = null;
  const updateCounter = (timestamp: number) => {
    if (!startTime) startTime = timestamp;
    const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
    const currentValue = startValue + progress * (endValue - startValue);

    if (element) {
      element.textContent = formatter(currentValue);
    }

    if (progress < 1) {
      requestAnimationFrame(updateCounter);
    }
  };

  requestAnimationFrame(updateCounter);
}
