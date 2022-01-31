import { Paper } from '@mui/material';
import { useRouter } from 'next/router';

const Details = () => {
  const router = useRouter();
  const id = router.query.id;
  return (
    <Paper
      sx={{
        height: 'calc(100vh - 1rem)',
        width: 'calc(100vw - 1rem)',
        margin: '0.5rem',
        textAlign: 'center',
      }}
    >
      <h2>Card {id} details</h2>
    </Paper>
  );
};

export default Details;
