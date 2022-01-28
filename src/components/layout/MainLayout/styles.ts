const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    '& > main': {
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'column',
      background: '#eee',
    },
  },
} as const;
export default styles;
