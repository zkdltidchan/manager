export const Button = {
  // The styles all button have in common
  baseStyle: {

    _hover: {
      transform: 'translateY(-2px)',
      boxShadow: 'lg'
    },
    fontWeight: 'bold',
    // textTransform: 'uppercase',
    borderRadius: 'xl', // <-- border radius is same for all variants and sizes
  },
  sizes: {},
  variants: {
    outline: {
      //   border: '2px solid',
      //   borderColor: 'purple.500',
      //   color: 'purple.500',
    },
    solid: {
      // bg: 'gray.500',
      //   color: 'white',
    },
    ghost: {
      // bg: 'gray.500',
  
    },
    customeBtn: {
    }
  },
  defaultProps: {
    colorScheme:"blue",
    // size: 'md',
    // variant: 'outline',
  },
}