const style = (theme) => {
    const output = {
      root: {
        width: 'auto',
        height: 'auto',
        left: 0,
        top: 0,
        padding: 30,
        background: theme.colors[10],
        color: `#fff`,
        fontFamily: theme.fonts[0],
        "@media (max-width:500px)": {
            background: theme.colors[0],
        },
        [theme.breakpoints.down("md")]: {
          color: 'red',
        },
        [theme.breakpoints.up("md")]: {
          color: 'green',
        },
        [theme.breakpoints.only("md")]: {
          color: 'white',
        },
        [theme.breakpoints.between("xs", "md")]: {
          background: 'yellow',
        },
        '& span': {
          background: '#f2f2f2',
          display: 'block',
        }
      },
    }

    return output
  }
  
  export default style
  