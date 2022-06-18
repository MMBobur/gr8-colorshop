import * as React from 'react';
import { TextField } from '@mui/material'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
  
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1, }}>
      <Box sx={{ bgcolor: '#F2F2F2', }}>
        <Container>
          <Grid container sx={{ py: '3%' }}>
            <Grid item xs={10} sm={10} md={6} lg={6} >
              <Box sx={{ justifyContent: { xs: 'center', sm: 'center', md: 'start', lg: "start" }, display: 'flex' }}>
                <Typography component="div" sx={{ textAlign: { xs: 'center', sm: 'center', md: "start", lg: 'start' }, marginLeft: { xs: '20%', sm: '20%', md: '0%', lg: '0%' } }} >
                  <Typography variant='h5'>Newsletter</Typography>
                  <Typography sx={{color:'#515468'}} >Subscribe to our newsletter and get 20% off your first purchase</Typography>
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Box sx={{ justifyContent: { xs: 'center', sm: 'center', md: 'end', lg: "end" }, display: 'flex' }} >
                <TextField id="outlined-basic" placeholder='Your Email' variant="outlined" sx={{}} />
                <Button variant='' sx={{ padding: '10px', bgcolor: '#FE4C50', color: 'white', '&:hover': { bgcolor: '#FE7F81' } }}>Subscribe</Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Container>
        <Grid justifyContent='center' container sx={{ py: '3%', }} >
          <Grid item xs={12} md={6}>
            <Box sx={{ justifyContent: { xs: 'center', sm: 'center', md: 'start', lg: "start" }, display: 'flex' }}>
              <Button href='https://preview.colorlib.com/theme/coloshop/#' sx={{ color: '#686C74' }}>Blog</Button>
              <Button href='https://preview.colorlib.com/theme/coloshop/#' sx={{ color: '#686C74' }}>Faqs</Button>
              <Button href='https://preview.colorlib.com/theme/coloshop/contact.html' sx={{ color: '#686C74' }}>contact us</Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ justifyContent: { xs: 'center', sm: 'center', md: 'end', lg: "end" }, display: 'flex' }}>
              <Button href='https://preview.colorlib.com/theme/coloshop/#'><FacebookIcon /></Button>
              <Button href='https://preview.colorlib.com/theme/coloshop/#'><TwitterIcon /></Button>
              <Button href='https://preview.colorlib.com/theme/coloshop/#'><InstagramIcon /></Button>
              <Button href='https://preview.colorlib.com/theme/coloshop/#'><WhatsAppIcon /></Button>
              <Button href='https://preview.colorlib.com/theme/coloshop/#'><TelegramIcon /></Button>
            </Box>
          </Grid>
          {/* <Grid item xs={6} md={6}> */}
          {/* </Grid> */}
        </Grid>
            <Typography sx={{color:'#686C74'}}>
              ©2018 All Rights Reserverd. This template is made with <FavoriteBorderIcon sx={{fontSize:'medium',color:'red'}}/> by <a href="#" style={{color:'red'}}> Colorlib</a>
            </Typography>
      </Container>
    </Box>
  );
}
