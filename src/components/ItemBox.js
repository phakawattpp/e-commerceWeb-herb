import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Img1 from '../icon/Item1.svg';
import Img2 from '../icon/Item2.svg';
import Img3 from '../icon/Item3.svg';
import noImg from '../icon/noImg.jpg';
import Link from '@mui/material/Link';
const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export default function ItemBox({ productType }) {
  return (
    <Paper
      sx={{
        display: 'flex',
        justifyContent: 'center',
        p: 2,
        margin: 'auto',
        maxWidth: '200px',
        flexGrow: 1,
      }}
    >
      <Grid container direction='column' spacing={2}>
        <Grid item sx={{ display: 'flex', justifyContent: 'center' }}>
          <ButtonBase
            sx={{
              width: 128,
              height: 128,
            }}
          >
            <Img
              alt='complex'
              src={
                productType === 'All'
                  ? Img1
                  : productType === 'Deal'
                  ? Img2
                  : productType === 'Healthy'
                  ? Img3
                  : noImg
              }
            />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction='column' spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant='subtitle1' component='div'>
                Sweet Herb
              </Typography>
              <Typography variant='body2' gutterBottom>
                Best item for you.
              </Typography>
              <Link>View</Link>
            </Grid>
          </Grid>
          <Grid item>
            <Typography color='red' variant='subtitle1' component='div'>
              9,999 B/KG
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
