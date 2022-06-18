import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/system';
import Rasm1 from '../../assets/img1.webp'
import Rasm2 from '../../assets/img2.webp'
import Rasm3 from '../../assets/img3.webp'
import { Button } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: '0px',
  borderRadius: '0px',
  textAlign: 'center',
  boxSizing: 'border-box',
  color: theme.palette.text.secondary,
}));

export default function AutoGrid() {
  return (
    <Box sx={{ flexGrow: 1 ,mt:'2%'}}>
      <Container>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 3 }}>
          <Grid item xs={12} sm={4} md={4} lg={4} >
            <Item>
              <div style={{ backgroundImage: `url(${Rasm3})`, width: '100%', textAlign: 'center', backgroundRepeat: 'no-repeat', backgroundSize: '100%', paddingTop: '30%', paddingBottom: '30%' }}><a href='#' style={{ width: '80%', backgroundColor: 'white', textDecoration: 'none', fontSize: '18px', padding: '10px', paddingLeft: '30px', paddingRight: '30px', color: 'black','&:hover': {color:'blue'}}}>WUMAN'S</a></div>
            </Item>
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4}>
            <Item>
              <div style={{ backgroundImage: `url(${Rasm2})`, width: '100%', textAlign: 'center', backgroundRepeat: 'no-repeat', backgroundSize: '100%', paddingTop: '30%', paddingBottom: '30%' }}><a href='#' style={{ width: '80%', backgroundColor: 'white', textDecoration: 'none', fontSize: '18px', padding: '10px', paddingLeft: '30px', paddingRight: '30px', color: 'black' }}>ACCESSORIES'S</a></div>
            </Item>
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4}>
            <Item>
              <div style={{ backgroundImage: `url(${Rasm1})`, width: '100%', textAlign: 'center', backgroundRepeat: 'no-repeat', backgroundSize: '100%', paddingTop: '30%', paddingBottom: '30%' }}><a href='#' style={{ width: '80%', backgroundColor: 'white', textDecoration: 'none', fontSize: '18px', padding: '10px', paddingLeft: '30px', paddingRight: '30px', color: 'black' }}>MAN'S</a></div>
            </Item>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
