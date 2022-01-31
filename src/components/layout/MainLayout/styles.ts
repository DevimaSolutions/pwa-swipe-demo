const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    width: '100vw',
    left: 0,
    top: 0,
    '& > main': {
      overflow: 'hidden',
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'column',
    },
  },
} as const;
export default styles;
