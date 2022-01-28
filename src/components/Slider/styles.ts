import { keyframes } from '@emotion/react';

export const sliderPaginationClasses = {
  root: 'swiper-pagination',
  hidden: 'swiper-pagination-hidden',
  bullets: 'swiper-pagination-bullets',
  dynamicBullets: 'swiper-pagination-bullets-dynamic',
};
export const sliderBulletClasses = {
  root: 'swiper-pagination-bullet',
  active: 'swiper-pagination-bullet-active',
  main: 'swiper-pagination-bullet-active-main',
  prev: 'swiper-pagination-bullet-active-prev',
  prevPrev: 'swiper-pagination-bullet-active-prev-prev',
  next: 'swiper-pagination-bullet-active-next',
  nextNext: 'swiper-pagination-bullet-active-next-next',
};
export const sliderClasses = {
  wrapper: 'swiper-wrapper',
  slide: 'swiper-slide',
  slideActive: 'swiper-slide-active',
  slideNext: 'swiper-slide-next',
  slidePrev: 'swiper-slide-prev',
  slideVisible: 'swiper-slide-visible',
  slideDuplicate: 'swiper-slide-duplicate',
  slideDuplicateActive: 'swiper-slide-duplicate-active',
  slideDuplicateNext: 'swiper-slide-duplicate-next',
  slideDuplicatePrev: 'swiper-slide-duplicate-prev',
  slideBlank: 'swiper-slide-invisible-blank',
  pointerEvents: 'swiper-pointer-events',
};

export const sliderButtonClasses = {
  prev: 'swiper-button-prev',
  next: 'swiper-button-next',
  disabled: 'swiper-button-disabled',
};

const swiperPreloaderSpin = keyframes`
100%: {
  transform: rotate(360deg);
}
`;

export const vars = {
  swiperThemeColor: '#007aff',
  swiperNavigationSize: 44,
} as const;

const styles = {
  sliderContainer: {
    height: '100vh',
    '.swiper': {
      width: '100%',
      height: '100vh',
    },
    '.swiper-wrapper': {
      height: '100vh',
    },
    '.swiper-slide': {
      textAlign: 'center',
      fontSize: '18px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    '.swiper-slide img': {
      display: 'block',
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
  },
  defaultSliderContainer: {
    position: 'relative',
    '.swiper': {
      marginLeft: 'auto',
      marginRight: 'auto',
      position: 'relative',
      overflow: 'hidden',
      listStyle: 'none',
      padding: '0',
      zIndex: '1',
    },
    '.swiper-vertical>.swiper-wrapper': {
      flexDirection: 'column',
    },
    '.swiper-wrapper': {
      position: 'relative',
      width: '100%',
      height: '100%',
      zIndex: '1',
      display: 'flex',
      transitionProperty: 'transform',
      boxSizing: 'content-box',
    },
    '.swiper-android .swiper-slide, .swiper-wrapper': {
      transform: 'translate3d(0px,0,0)',
    },
    '.swiper-pointer-events': {
      touchAction: 'pan-y',
    },
    '.swiper-pointer-events.swiper-vertical': {
      touchAction: 'pan-x',
    },
    '.swiper-slide': {
      flexShrink: '0',
      width: '100%',
      height: '100%',
      position: 'relative',
      transitionProperty: 'transform',
    },
    '.swiper-slide-invisible-blank': {
      visibility: 'hidden',
    },
    '.swiper-autoheight, .swiper-autoheight .swiper-slide': {
      height: 'auto',
    },
    '.swiper-autoheight .swiper-wrapper': {
      alignItems: 'flex-start',
      transitionProperty: 'transform,height',
    },
    '.swiper-3d, .swiper-3d.swiper-css-mode .swiper-wrapper': {
      perspective: '1200px',
    },
    '.swiper-3d .swiper-cube-shadow, .swiper-3d .swiper-slide, .swiper-3d .swiper-slide-shadow, .swiper-3d .swiper-slide-shadow-bottom, .swiper-3d .swiper-slide-shadow-left, .swiper-3d .swiper-slide-shadow-right, .swiper-3d .swiper-slide-shadow-top, .swiper-3d .swiper-wrapper':
      {
        transformStyle: 'preserve-3d',
      },
    '.swiper-3d .swiper-slide-shadow, .swiper-3d .swiper-slide-shadow-bottom, .swiper-3d .swiper-slide-shadow-left, .swiper-3d .swiper-slide-shadow-right, .swiper-3d .swiper-slide-shadow-top':
      {
        position: 'absolute',
        left: '0',
        top: '0',
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: '10',
      },
    '.swiper-3d .swiper-slide-shadow': {
      background: 'rgba(0,0,0,.15)',
    },
    '.swiper-3d .swiper-slide-shadow-left': {
      backgroundImage: 'linear-gradient(to left,rgba(0,0,0,.5),rgba(0,0,0,0))',
    },
    '.swiper-3d .swiper-slide-shadow-right': {
      backgroundImage: 'linear-gradient(to right,rgba(0,0,0,.5),rgba(0,0,0,0))',
    },
    '.swiper-3d .swiper-slide-shadow-top': {
      backgroundImage: 'linear-gradient(to top,rgba(0,0,0,.5),rgba(0,0,0,0))',
    },
    '.swiper-3d .swiper-slide-shadow-bottom': {
      backgroundImage: 'linear-gradient(to bottom,rgba(0,0,0,.5),rgba(0,0,0,0))',
    },
    '.swiper-css-mode>.swiper-wrapper': {
      overflow: 'auto',
      scrollbarWidth: 'none',
    },
    '.swiper-css-mode>.swiper-wrapper::-webkit-scrollbar': {
      display: 'none',
    },
    '.swiper-css-mode>.swiper-wrapper>.swiper-slide': {
      scrollSnapAlign: 'start start',
    },
    '.swiper-horizontal.swiper-css-mode>.swiper-wrapper': {
      scrollSnapType: 'x mandatory',
    },
    '.swiper-vertical.swiper-css-mode>.swiper-wrapper': {
      scrollSnapType: 'y mandatory',
    },
    '.swiper-centered>.swiper-wrapper::before': {
      content: "''",
      flexShrink: '0',
      order: '9999',
    },
    '.swiper-centered.swiper-horizontal>.swiper-wrapper>.swiper-slide:first-child': {
      marginInlineStart: 'var(--swiper-centered-offset-before)',
    },
    '.swiper-centered.swiper-horizontal>.swiper-wrapper: :before': {
      height: '100%',
      minHeight: '1px',
      width: 'var(--swiper-centered-offset-after)',
    },
    '.swiper-centered.swiper-vertical>.swiper-wrapper>.swiper-slide:first-child': {
      marginBlockStart: 'var(--swiper-centered-offset-before)',
    },
    '.swiper-centered.swiper-vertical>.swiper-wrapper: :before': {
      width: '100%',
      minWidth: '1px',
      height: 'var(--swiper-centered-offset-after)',
    },
    '.swiper-centered>.swiper-wrapper>.swiper-slide': {
      scrollSnapAlign: 'center center',
    },
    '.swiper-virtual.swiper-css-mode .swiper-wrapper::after': {
      content: "''",
      position: 'absolute',
      left: '0',
      top: '0',
      pointerEvents: 'none',
    },
    '.swiper-virtual.swiper-css-mode.swiper-horizontal .swiper-wrapper::after': {
      height: '1px',
      width: 'var(--swiper-virtual-size)',
    },
    '.swiper-virtual.swiper-css-mode.swiper-vertical .swiper-wrapper::after': {
      width: '1px',
      height: 'var(--swiper-virtual-size)',
    },
    '.swiper-button-next, .swiper-button-prev': {
      position: 'absolute',
      top: '50%',
      width: (vars.swiperNavigationSize / 44) * 27,
      height: vars.swiperNavigationSize,
      marginTop: -vars.swiperNavigationSize / 2,
      zIndex: '10',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: `var(--swiper-navigation-color, ${vars.swiperThemeColor})`,
    },
    '.swiper-button-next.swiper-button-disabled, .swiper-button-prev.swiper-button-disabled': {
      opacity: '.35',
      cursor: 'auto',
      pointerEvents: 'none',
    },
    '.swiper-button-next:after, .swiper-button-prev:after': {
      fontFamily: 'swiper-icons',
      fontSize: vars.swiperNavigationSize,
      textTransform: 'none',
      letterSpacing: '0',
      fallbacks: [
        {
          textTransform: 'none!important',
        },
      ],
      fontVariant: 'initial',
      lineHeight: '1',
    },
    '.swiper-button-prev, .swiper-rtl .swiper-button-next': {
      left: '10px',
      right: 'auto',
    },
    '.swiper-button-prev:after, .swiper-rtl .swiper-button-next:after': {
      content: "'prev'",
    },
    '.swiper-button-next, .swiper-rtl .swiper-button-prev': {
      right: '10px',
      left: 'auto',
    },
    '.swiper-button-next:after, .swiper-rtl .swiper-button-prev:after': {
      content: "'next'",
    },
    '.swiper-button-lock': {
      display: 'none',
    },
    '.swiper-pagination': {
      position: 'absolute',
      textAlign: 'center',
      transition: '.3s opacity',
      transform: 'translate3d(0,0,0)',
      zIndex: '10',
    },
    '.swiper-pagination.swiper-pagination-hidden': {
      opacity: '0',
    },
    '.swiper-horizontal>.swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal, .swiper-pagination-custom, .swiper-pagination-fraction':
      {
        bottom: '10px',
        left: '0',
        width: '100%',
      },
    '.swiper-pagination-bullets-dynamic': {
      overflow: 'hidden',
      fontSize: '0',
    },
    '.swiper-pagination-bullets-dynamic .swiper-pagination-bullet': {
      transform: 'scale(.33)',
      position: 'relative',
    },
    '.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active': {
      transform: 'scale(1)',
    },
    '.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main': {
      transform: 'scale(1)',
    },
    '.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev': {
      transform: 'scale(.66)',
    },
    '.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev': {
      transform: 'scale(.33)',
    },
    '.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next': {
      transform: 'scale(.66)',
    },
    '.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next': {
      transform: 'scale(.33)',
    },
    '.swiper-pagination-bullet': {
      width: 'var(--swiper-pagination-bullet-width,var(--swiper-pagination-bullet-size,8px))',
      height: 'var(--swiper-pagination-bullet-height,var(--swiper-pagination-bullet-size,8px))',
      display: 'inline-block',
      borderRadius: '50%',
      background: 'var(--swiper-pagination-bullet-inactive-color,#000)',
      opacity: 'var(--swiper-pagination-bullet-inactive-opacity, .2)',
    },
    'button.swiper-pagination-bullet': {
      border: 'none',
      margin: '0',
      padding: '0',
      boxShadow: 'none',
      appearance: 'none',
    },
    '.swiper-pagination-clickable .swiper-pagination-bullet': {
      cursor: 'pointer',
    },
    '.swiper-pagination-bullet:only-child': {
      display: 'none!important',
    },
    '.swiper-pagination-bullet-active': {
      opacity: 'var(--swiper-pagination-bullet-opacity, 1)',
      background: `var(--swiper-pagination-color,${vars.swiperThemeColor})`,
    },
    '.swiper-pagination-vertical.swiper-pagination-bullets, .swiper-vertical>.swiper-pagination-bullets':
      {
        right: '10px',
        top: '50%',
        transform: 'translate3d(0px,-50%,0)',
      },
    '.swiper-pagination-vertical.swiper-pagination-bullets .swiper-pagination-bullet, .swiper-vertical>.swiper-pagination-bullets .swiper-pagination-bullet':
      {
        margin: 'var(--swiper-pagination-bullet-vertical-gap,6px) 0',
        display: 'block',
      },
    '.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic, .swiper-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic':
      {
        top: '50%',
        transform: 'translateY(-50%)',
        width: '8px',
      },
    '.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet, .swiper-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet':
      {
        display: 'inline-block',
        transition: '.2s transform,.2s top',
      },
    '.swiper-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet, .swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet':
      {
        margin: '0 var(--swiper-pagination-bullet-horizontal-gap,4px)',
      },
    '.swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic, .swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic':
      {
        left: '50%',
        transform: 'translateX(-50%)',
        whiteSpace: 'nowrap',
      },
    '.swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet, .swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet':
      {
        transition: '.2s transform,.2s left',
      },
    '.swiper-horizontal.swiper-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet': {
      transition: '.2s transform,.2s right',
    },
    '.swiper-pagination-progressbar': {
      background: 'rgba(0,0,0,.25)',
      position: 'absolute',
    },
    '.swiper-pagination-progressbar .swiper-pagination-progressbar-fill': {
      background: `var(--swiper-pagination-color,${vars.swiperThemeColor})`,
      position: 'absolute',
      left: '0',
      top: '0',
      width: '100%',
      height: '100%',
      transform: 'scale(0)',
      transformOrigin: 'left top',
    },
    '.swiper-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill': {
      transformOrigin: 'right top',
    },
    '.swiper-horizontal>.swiper-pagination-progressbar, .swiper-pagination-progressbar.swiper-pagination-horizontal, .swiper-pagination-progressbar.swiper-pagination-vertical.swiper-pagination-progressbar-opposite, .swiper-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite':
      {
        width: '100%',
        height: '4px',
        left: '0',
        top: '0',
      },
    '.swiper-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite, .swiper-pagination-progressbar.swiper-pagination-horizontal.swiper-pagination-progressbar-opposite, .swiper-pagination-progressbar.swiper-pagination-vertical, .swiper-vertical>.swiper-pagination-progressbar':
      {
        width: '4px',
        height: '100%',
        left: '0',
        top: '0',
      },
    '.swiper-pagination-lock': {
      display: 'none',
    },
    '.swiper-scrollbar': {
      borderRadius: '10px',
      position: 'relative',
      background: 'rgba(0,0,0,.1)',
    },
    '.swiper-horizontal>.swiper-scrollbar': {
      position: 'absolute',
      left: '1%',
      bottom: '3px',
      zIndex: '50',
      height: '5px',
      width: '98%',
    },
    '.swiper-vertical>.swiper-scrollbar': {
      position: 'absolute',
      right: '3px',
      top: '1%',
      zIndex: '50',
      width: '5px',
      height: '98%',
    },
    '.swiper-scrollbar-drag': {
      height: '100%',
      width: '100%',
      position: 'relative',
      background: 'rgba(0,0,0,.5)',
      borderRadius: '10px',
      left: '0',
      top: '0',
    },
    '.swiper-scrollbar-cursor-drag': {
      cursor: 'move',
    },
    '.swiper-scrollbar-lock': {
      display: 'none',
    },
    '.swiper-zoom-container': {
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
    },
    '.swiper-zoom-container>canvas, .swiper-zoom-container>img, .swiper-zoom-container>svg': {
      maxWidth: '100%',
      maxHeight: '100%',
      objectFit: 'contain',
    },
    '.swiper-slide-zoomed': {
      cursor: 'move',
    },
    '.swiper-lazy-preloader': {
      width: '42px',
      height: '42px',
      position: 'absolute',
      left: '50%',
      top: '50%',
      marginLeft: '-21px',
      marginTop: '-21px',
      zIndex: '10',
      transformOrigin: '50%',
      animation: `${swiperPreloaderSpin} 1s infinite linear`,
      boxSizing: 'border-box',
      border: `4px solid var(--swiper-preloader-color,${vars.swiperThemeColor})`,
      borderRadius: '50%',
      borderTopColor: 'transparent',
    },
    '.swiper .swiper-notification': {
      position: 'absolute',
      left: '0',
      top: '0',
      pointerEvents: 'none',
      opacity: '0',
      zIndex: '-1000',
    },
    '.swiper-free-mode>.swiper-wrapper': {
      transitionTimingFunction: 'ease-out',
      margin: '0 auto',
    },
    '.swiper-grid>.swiper-wrapper': {
      flexWrap: 'wrap',
    },
    '.swiper-grid-column>.swiper-wrapper': {
      flexWrap: 'wrap',
      flexDirection: 'column',
    },
    '.swiper-fade.swiper-free-mode .swiper-slide': {
      transitionTimingFunction: 'ease-out',
    },
    '.swiper-fade .swiper-slide': {
      pointerEvents: 'none',
      transitionProperty: 'opacity',
    },
    '.swiper-fade .swiper-slide .swiper-slide': {
      pointerEvents: 'none',
    },
    '.swiper-fade .swiper-slide-active, .swiper-fade .swiper-slide-active .swiper-slide-active': {
      pointerEvents: 'auto',
    },
    '.swiper-cube': {
      overflow: 'visible',
    },
    '.swiper-cube .swiper-slide': {
      pointerEvents: 'none',
      backfaceVisibility: 'hidden',
      zIndex: '1',
      visibility: 'hidden',
      transformOrigin: '0 0',
      width: '100%',
      height: '100%',
    },
    '.swiper-cube .swiper-slide .swiper-slide': {
      pointerEvents: 'none',
    },
    '.swiper-cube.swiper-rtl .swiper-slide': {
      transformOrigin: '100% 0',
    },
    '.swiper-cube .swiper-slide-active, .swiper-cube .swiper-slide-active .swiper-slide-active': {
      pointerEvents: 'auto',
    },
    '.swiper-cube .swiper-slide-active, .swiper-cube .swiper-slide-next, .swiper-cube .swiper-slide-next+.swiper-slide, .swiper-cube .swiper-slide-prev':
      {
        pointerEvents: 'auto',
        visibility: 'visible',
      },
    '.swiper-cube .swiper-slide-shadow-bottom, .swiper-cube .swiper-slide-shadow-left, .swiper-cube .swiper-slide-shadow-right, .swiper-cube .swiper-slide-shadow-top':
      {
        zIndex: '0',
        backfaceVisibility: 'hidden',
      },
    '.swiper-cube .swiper-cube-shadow': {
      position: 'absolute',
      left: '0',
      bottom: '0px',
      width: '100%',
      height: '100%',
      opacity: '.6',
      zIndex: '0',
    },
    '.swiper-cube .swiper-cube-shadow:before': {
      content: "''",
      background: '#000',
      position: 'absolute',
      left: '0',
      top: '0',
      bottom: '0',
      right: '0',
      filter: 'blur(50px)',
    },
    '.swiper-flip': {
      overflow: 'visible',
    },
    '.swiper-flip .swiper-slide': {
      pointerEvents: 'none',
      backfaceVisibility: 'hidden',
      zIndex: '1',
    },
    '.swiper-flip .swiper-slide .swiper-slide': {
      pointerEvents: 'none',
    },
    '.swiper-flip .swiper-slide-active, .swiper-flip .swiper-slide-active .swiper-slide-active': {
      pointerEvents: 'auto',
    },
    '.swiper-flip .swiper-slide-shadow-bottom, .swiper-flip .swiper-slide-shadow-left, .swiper-flip .swiper-slide-shadow-right, .swiper-flip .swiper-slide-shadow-top':
      {
        zIndex: '0',
        backfaceVisibility: 'hidden',
      },
    '.swiper-creative .swiper-slide': {
      backfaceVisibility: 'hidden',
      overflow: 'hidden',
      transitionProperty: 'transform,opacity,height',
    },
    '.swiper-cards': {
      overflow: 'visible',
    },
    '.swiper-cards .swiper-slide': {
      transformOrigin: 'center bottom',
      backfaceVisibility: 'hidden',
      overflow: 'hidden',
    },
  },
} as const;

export default styles;
