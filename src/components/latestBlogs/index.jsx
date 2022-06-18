import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Rasm from '../../assets/images.jpg'
import Ras from '../../assets/images1.jpg'
import Ram from '../../assets/images2.jpg'
import { Button,Typography } from '@mui/material';
import './styles.css'
import { Container } from '@mui/system';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function RowAndColumnSpacing() {
  return (
    <Box sx={{ width: '100%' ,marginTop:'5%'}}>
      <Container>
        <Typography style={{textAlign:'center',marginBottom:'2%'}}><h1>Latest Blog</h1></Typography>
        <Typography style={{marginBottom:'5%', border:'3px solid red',width:'10%',marginRight:'auto',marginLeft:'auto'}}></Typography>
      <Grid container rowSpacing={6} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} sm={12} md={12}  lg={4} >
<Typography className='' sx={{backgroundImage:`url(${Rasm})`,backgroundSize:'cover',backgroundPosition:'center center',width:'100%',height:'400px'}}>
                             {/* <img src={index.img} alt='#'  style={{width:'100%',height:'100%'}} /> */}
                             <Typography className='pic'>
                     <Typography className='text'>
                     <p>Here are the trends I see coming this fall <br />
                       BY ADMIN | DEC 01, 2017<br /> 
                     <a href='#' style={{color:'red'}}>Read more</a></p>
                       {/* <Button variant="contained" sx={{borderRadius:'30px',bgcolor:'black',border:'1px solid black',marginTop:'130%'}}>Add Too Card</Button> */}
                     </Typography>
                   </Typography>
                          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12}  lg={4}>
<Typography className='' sx={{backgroundImage:`url(${Ras})`,backgroundSize:'cover',backgroundPosition:'center center',width:'100%',height:'400px'}}>
                             {/* <img src={index.img} alt='#'  style={{width:'100%',height:'100%'}} /> */}
                             <Typography className='pic'>
                     <Typography className='text'>
                     <p>Here are the trends I see coming this fall <br />
                       BY ADMIN | DEC 01, 2017<br /> 
                     <a href='#' style={{color:'red'}}>Read more</a></p>
                       {/* <Button variant="contained" sx={{borderRadius:'30px',bgcolor:'black',border:'1px solid black',marginTop:'130%'}}>Add Too Card</Button> */}
                     </Typography>
                   </Typography>
                          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12}  lg={4}>
<Typography className='' sx={{backgroundImage:`url(${Ram})`,backgroundSize:'cover',backgroundPosition:'center center',width:'100%',height:'400px'}}>
                             {/* <img src={index.img} alt='#'  style={{width:'100%',height:'100%'}} /> */}
                             <Typography className='pic'>
                     <Typography className='text'> 
                     <p>Here are the trends I see coming this fall <br />
                       BY ADMIN | DEC 01, 2017<br /> 
                     <a href='#' style={{color:'red'}}>Read more</a></p>

                       {/* <Button variant="contained" sx={{borderRadius:'30px',bgcolor:'black',border:'1px solid black',marginTop:'130%'}}>Add Too Card</Button> */}
                     </Typography>
                   </Typography>
                          </Typography>
        </Grid>

      </Grid>
      </Container>
    </Box>
  );
}
