import * as React from 'react';
// import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import { Button, Container, Input, Typography } from '@mui/material';
import './style.css';

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';

import AlternateEmail from '@mui/icons-material/AlternateEmail';



// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: 'none',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));


function Footer() {
  return (
    <Box sx={{ flexGrow: 1 , border:'1px solid none'}}>
      
      <Box sx={{border:'1px solid #F2F2F2FF',marginTop:'5%',backgroundColor:'#F2F2F2FF'}}>
      <Container>
      <Grid container >
          <Grid xs={12} md={6} sm={6} lg={6}>
            <Typography sx={{mt:'5%',mb:'5%'}}>
              <Typography sx={{fontWeight:'bold',color:'black'}}>Newsletter</Typography>
              <Typography sx={{color:'black'}}>Subscribe to our newsletter and get 20% off your first purchase</Typography>
            </Typography>
          </Grid>
          <Grid xs={12} md={6} sm={6} lg={6}>
            <Typography sx={{display:'flex',justifyContent:'center',mt:'5%',mb:'5%'}}>
              <Input placeholder='Your email' sx={{border:'1px solid gray',direction:'none',borderBottom:'none',width:'60%'}}></Input>
              <Typography sx={{backgroundColor:'#EB4C42FF'}}>
                <Button sx={{color:'white'}} href='www.google.com' >Subscribe</Button>
                </Typography>
            </Typography>
          </Grid>
      </Grid>
      </Container>
      </Box>

      <Container>
      <Grid container spacing={3} sx={{marginTop:'5%',marginBottom:'8%'}}>
        <Grid xs={12} md={6} sm={6} lg={6}>
          <Typography sx={{textAlign:'center'}}>
            <Link href='https://preview.colorlib.com/theme/coloshop/'
             sx={{":hover":{color:'red'},margin:'3%',textDecoration:'none',color:'#5E5E5FFF'}}>
              Blog
              </Link>
            <Link href='https://preview.colorlib.com/theme/coloshop/' 
            sx={{":hover":{color:'red'},margin:'3%',textDecoration:'none',color:'#5E5E5FFF'}}>
              FAQs
              </Link>
            <Link href='https://preview.colorlib.com/theme/coloshop/'
             sx={{":hover":{color:'red'},margin:'3%',textDecoration:'none',color:'#5E5E5FFF'}}>
              Contact us
              </Link>
          </Typography>
        </Grid>
        <Grid xs={12} md={6} sm={6} lg={6}>
          <Typography>
            <Typography sx={{display:'flex',justifyContent:'center'}}>
              <Typography style={{margin:'2%'}}><FacebookIcon fontSize='small' className='icon' /> </Typography>
              <Typography style={{margin:'2%'}}><TwitterIcon fontSize='small' className='icon' /> </Typography>
              <Typography style={{margin:'2%'}}><InstagramIcon fontSize='small' className='icon' /> </Typography>
              <Typography style={{margin:'2%'}}><TelegramIcon  fontSize='small' className='icon' /> </Typography>
              <Typography style={{margin:'2%'}}><AlternateEmail  fontSize='small' className='icon' /> </Typography>
            </Typography>
          </Typography>
        </Grid>
        <Grid xs={12} md={12} sm={12} lg={12}>
          <Typography sx={{marginTop:'3%'}}>
            <Typography sx={{ml:'3%'}}>©2018 All Rights Reserverd.This template is made with 💗 by .
               <Link 
               sx={{color:'red', textDecoration:'none'}} href='https://preview.colorlib.com/theme/coloshop/'> 
                Colorlib
                </Link>
               </Typography>
          </Typography>
        </Grid>
      </Grid>
      </Container>
    </Box>
  );
}

export default Footer