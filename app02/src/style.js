import generateBreakPoints from 'react-jss-grid/utils/breakpoints'

export const theme = { 
  breakpoints: generateBreakPoints({
    values: {
      xs: 360,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  }),
  fonts: [
    '"Source Sans Pro",sans-serif',
  ],
  colors: [
    '#000',
    '#888',
    '#bdbdbd',
    '#FFFFFF',
    '#817059',
    '#5a5a5a', // #5
    '#ededed',
    '#ae9b8b', // Gold Light
    '#111111',
    '#f4f4f4',
    '#817059', // #10  Gold
  ],
}
