export const Button = {
  // The styles all button have in common
  baseStyle: {
    // fontWeight: 'bold',
    // textTransform: 'uppercase',
    // borderRadius: 'base', // <-- border radius is same for all variants and sizes
  },
  sizes: {},
  variants: {
    outline: {
    //   border: '2px solid',
    //   borderColor: 'purple.500',
    //   color: 'purple.500',
    },
    solid: {
      bg: 'teal.200',
    //   color: 'white',
    },
    ghost: {
        bg: 'teal.200',
    }
  },
  defaultProps: {
    // size: 'md',
    // variant: 'outline',
  },
}