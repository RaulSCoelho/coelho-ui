export const animations = {
  animation: {
    'fade-in': 'fade-in 225ms ease-in-out',
    'scale-in': 'scale-in 225ms ease-in-out',
    ripple: 'ripple 550ms ease-out',
    strokedrift: 'strokedrift 1.4s ease-in-out infinite',
    slideInFromTop: 'slideInFromTop 500ms ease-in-out',
    slideInFromRight: 'slideInFromRight 500ms ease-in-out',
    slideInFromBottom: 'slideInFromBottom 500ms ease-in-out',
    slideInFromLeft: 'slideInFromLeft 500ms ease-in-out'
  },
  keyframes: {
    'fade-in': {
      '0%': { opacity: '0' },
      '100%': { opacity: '1' }
    },
    'scale-in': {
      '0%': { scale: '0' },
      '100%': { scale: '1' }
    },
    ripple: {
      '0%': { transform: 'scale(0)', opacity: '0.3' },
      '50%': { opacity: '0.1' },
      '100%': { transform: 'scale(1)', opacity: '0' }
    },
    strokedrift: {
      '0%': { strokeDasharray: '1px, 200px', strokeDashoffset: '0' },
      '50%': { strokeDasharray: '100px, 200px', strokeDashoffset: '-15px' },
      '100%': { strokeDasharray: '100px, 200px', strokeDashoffset: '-125px' }
    },
    slideInFromTop: {
      '0%': { transform: 'translateY(-100vh)', opacity: '0' },
      '100%': { transform: 'translateY(1rem)', opacity: '1' }
    },
    slideInFromRight: {
      '0%': { transform: 'translateX(100vw)', opacity: '0' },
      '100%': { transform: 'translateX(-1rem)', opacity: '1' }
    },
    slideInFromBottom: {
      '0%': { transform: 'translateY(100vh)', opacity: '0' },
      '100%': { transform: 'translateY(-1rem)', opacity: '1' }
    },
    slideInFromLeft: {
      '0%': { transform: 'translateX(-100vw)', opacity: '0' },
      '100%': { transform: 'translateX(1rem)', opacity: '1' }
    }
  }
}
