import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {Button,Container, Typography} from '@mui/material';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import './style.css';



// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'gray' ? 'gray' : 'gray',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

const foo1 = [
  {img:'https://preview.colorlib.com/theme/coloshop/images/xproduct_1.png.pagespeed.ic.DvPBG5vxas.webp',
  nomi:'Fujifilm X100T 16 MP Digital Camera (Silver)',narxi:'$520.00'},
  {img:'https://preview.colorlib.com/theme/coloshop/images/xproduct_2.png.pagespeed.ic.5v5cwO3kBP.webp',
  nomi:'Samsung CF591 Series Curved 27-Inch FHD Monitor', narxi:'$610.00'},
  {img:'https://preview.colorlib.com/theme/coloshop/images/xproduct_3.png.pagespeed.ic.jCfub0gA7s.webp',
  nomi:'Blue Yeti USB Microphone Blackout Edition', narxi:'$120.00'},
  {img:'https://preview.colorlib.com/theme/coloshop/images/xproduct_4.png.pagespeed.ic.WBUe9pni_n.webp',
  nomi:'DYMO LabelWriter 450 Turbo Thermal Label Printer', narxi:'$410.00'},
  {img:'https://preview.colorlib.com/theme/coloshop/images/xproduct_5.png.pagespeed.ic.qi-sJ2HPdI.webp',
  nomi:'Pryma Headphones, Rose Gold & Grey', narxi:'$180.00'},
  {img:'https://preview.colorlib.com/theme/coloshop/images/xproduct_6.png.pagespeed.ic.zZ9BU77Jfy.webp',
  nomi:'Fujifilm X100T 16 MP Digital Camera (Silver)', narxi:'$520.00'},
  {img:'https://preview.colorlib.com/theme/coloshop/images/xproduct_7.png.pagespeed.ic.9nA45gs3KX.webp',
  nomi:'Samsung CF591 Series Curved 27-Inch FHD Monitor', narxi:'$610.00'},
  {img:'https://preview.colorlib.com/theme/coloshop/images/xproduct_8.png.pagespeed.ic.zX5uOkWPYV.webp',
  nomi:'Blue Yeti USB Microphone Blackout Edition', narxi:'$120.00'},
  {img:'https://preview.colorlib.com/theme/coloshop/images/xproduct_9.png.pagespeed.ic.I5FJ0ewNHX.webp',
  nomi:'DYMO LabelWriter 450 Turbo Thermal Label Printer', narxi:'$410.00'},
  {img:'https://preview.colorlib.com/theme/coloshop/images/xproduct_10.png.pagespeed.ic.69mYA3FDZH.webp',
  nomi:'Pryma Headphones, Rose Gold & Grey', narxi:'$180.00'},
]

function Arrivals() {

  const [alignment, setAlignment] = React.useState('web');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <Box sx={{ flexGrow: 1, }}>
      <Container>
        <Box sx={{textAlign:'center',justifyContent:'center',mt:'10%'}}>
          <Typography variant='h4' sx={{fontWeight:'bold'}}>New Arrivals</Typography>
          <Typography sx={{border:'3px solid #FE4C50FF',width:'6%',ml:'auto',mr:'auto'}}></Typography>
        </Box>
      <Box sx={{textAlign:'center',mt:'5%',mb:'5%'}}>
        <ToggleButtonGroup
      color="secondary"
      value={alignment}
      exclusive
      onChange={handleChange}
    >
      <ToggleButton value="web" sx={{fontWeight:'bold',color:'black'}}>ALL</ToggleButton>
      <ToggleButton value="android"  sx={{fontWeight:'bold',color:'black'}}>WOMEN'S</ToggleButton>
      <ToggleButton value="ios"  sx={{fontWeight:'bold',color:'black'}}>ACCESSORIES</ToggleButton>
      
    </ToggleButtonGroup>
    </Box>
    <Grid container spacing={3} rowGap={1} sx={{mb:'7%'}}>
    
     {foo1.map((index) =>(
      <Grid xs={12} md={3} sm={3}  xl={2.4} lg={2.4}> 
      {/* <Item> */}
        <Typography class="container">
          <Typography style={{textAlign:'center'}} className='border'>
            <Typography class="overlay2">
             🤍
          </Typography>
        <img src={index.img} alt="#" class="image"/>
        <Typography  sx={{":hover":{color:'gray'} ,textAlign:'center'}}>{index.nomi}</Typography>
          <Typography style={{color:'red'}}>{index.narxi}</Typography>
        </Typography>
        <Typography class="overlay">
          <Button variant="text" href=':D/' sx={{fontWeight:'bold',color:'white'}}>Add Too Card</Button>
        </Typography>
        </Typography>
      {/* </Item> */}
    </Grid>
     ))}
    </Grid>
    </Container>
  </Box>
  )
}

export default Arrivals