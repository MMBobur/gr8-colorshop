import React from 'react'
import './BestSeller.css'
import Slider from "react-slick";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import "slick-carousel/slick/slick.css";
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import "slick-carousel/slick/slick-theme.css";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ReplayIcon from '@mui/icons-material/Replay';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Item = styled(Paper)(({ theme }) => ({
  padding: '20px',
  boxShadow: 'none',
  display: 'flex',
  textAlign: 'start',
  borderRadius: 'none',
  marginBottom: '25px',
  ...theme.typography.body2,
  border: '1px solid white',
  backgroundColor: '#F3F3F3',
}));


const DateBase = [
  {
    id: 1,
    title: 'Fujifilm X100T 16 MP Digital Camera (Silver)',
    price: <h4>$520.00</h4>,
    img: 'https://preview.colorlib.com/theme/coloshop/images/xproduct_1.png.pagespeed.ic.cjHWppIIdF.png'
  },
  {
    id: 2,
    title: 'Samsung CF591 Series Curved 27-Inch FHD Monitor',
    price: <h3>$610.00</h3>,
    img: 'https://preview.colorlib.com/theme/coloshop/images/xproduct_2.png.pagespeed.ic.xZ0lu64cc1.png'
  },
  {
    id: 3,
    title: 'Blue Yeti USB Microphone Blackout Edition',
    price: <h4>$120.00</h4>,
    img: 'https://preview.colorlib.com/theme/coloshop/images/xproduct_3.png.pagespeed.ic.J3913o_Uqn.png'
  },
  {
    id: 4,
    title: 'DYMO LabelWriter 450 Turbo Thermal Label Printer',
    price: <h4>$410.00</h4>,
    img: 'https://preview.colorlib.com/theme/coloshop/images/xproduct_4.png.pagespeed.ic.UCIkOrMpEw.png'
  },
  {
    id: 5,
    title: 'Pryma Headphone, Rose Gold & Grey',
    price: <h4>$180.00</h4>,
    img: 'https://preview.colorlib.com/theme/coloshop/images/xproduct_5.png.pagespeed.ic.kldysOLIUb.png'
  },
  {
    id: 6,
    title: 'Fujifilm X100T 16 MP Digital Camera (Silver)',
    price: <h4>$520.00</h4>,
    img: 'https://preview.colorlib.com/theme/coloshop/images/xproduct_6.png.pagespeed.ic.-wZZ65ycl2.png'
  },
  {
    id: 7,
    title: 'Samsung CF591 Series Curved 27-Inch FHD Monitor',
    price: <h3>$610.00</h3>,
    img: 'https://preview.colorlib.com/theme/coloshop/images/xproduct_7.png.pagespeed.ic.lfgemaw9IL.png'
  },
  {
    id: 8,
    title: 'Blue Yeti USB Microphone Blackout Edition',
    price: <h4>$120.00</h4>,
    img: 'https://preview.colorlib.com/theme/coloshop/images/xproduct_8.png.pagespeed.ic.rOL_qj1ADY.png'
  },
  {
    id: 9,
    title: 'DYMO LabelWriter 450 Turbo Thermal Label Printer',
    price: <h4>$410.00</h4>,
    img: 'https://preview.colorlib.com/theme/coloshop/images/xproduct_9.png.pagespeed.ic.97LvfjaPr_.png'
  },
  {
    id: 1,
    title: 'Pryma Headphone, Rose Gold & Grey',
    price: <h4>$180.00</h4>,
    img: 'https://preview.colorlib.com/theme/coloshop/images/xproduct_10.png.pagespeed.ic.tfxhx7VxMr.png'
  },
]

function BestSellers() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          initialSlide: 2,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          infinite: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }   
      }
    ]
  };
  return (
    <Container>
      <Box sx={{ textAlign: 'center', justifyContent: 'center', mt: '15%', margin: '0px', marginBottom: '40px' }}>
        <Typography variant='h4' sx={{ fontWeight: 'bold',marginTop:"5%" }}>Best Sellers</Typography>
        <Typography sx={{ border: '3px solid #FE4C50FF', width: '6%', ml: 'auto', mr: 'auto' }}></Typography>
      </Box>
      <Slider {...settings}>
        {DateBase.map((item) => (
          <div className='Card'>
            <p style={{ marginLeft: '5px', textAlign: 'end', marginBottom: '-20px', marginRight: '10px', color: 'gray'}}><FavoriteBorderIcon /></p>
            <img src={item.img} alt={item.title} />
            <h4 className='CardTitle'>{item.title}</h4>
            <h4 className='Price'>{item.price}</h4>
          </div>
        ))}
      </Slider>
      <Grid container spacing={0} style={{marginTop: '60px', alignItems: 'center', justifyContent: 'center'}}>
        <Grid item xs={10} sm={10} md={10} lg={3}>
          <Item>
            <LocalShippingIcon style={{fontSize: '40px', color: '#FB4B4F', marginBottom: '0px'}} />
            <div style={{display: 'grid', height: 'auto', lineHeight: '0px', marginLeft: '20px'}}>
              <p style={{fontWeight: 'bold'}}>FREE SHIPPING</p>
              <p style={{fontWeight: 'normal'}}>Suffered Alteration in Some Form</p>
            </div>
          </Item>
        </Grid>
        <Grid item xs={10} sm={10} md={10} lg={3}>
          <Item>
            <LocalAtmIcon style={{fontSize: '40px', color: '#FB4B4F', marginBottom: '0px'}} />
            <div style={{display: 'grid', height: 'auto', lineHeight: '0px', marginLeft: '20px'}}>
              <p style={{fontWeight: 'bold'}}>CACH ON DELIVERY</p>
              <p style={{fontWeight: 'normal'}}>The Internet Tend To Repeat</p>
            </div>
          </Item>
        </Grid>
        <Grid item xs={10} sm={10} md={10} lg={3}>
          <Item>
            <ReplayIcon style={{fontSize: '40px', color: '#FB4B4F', marginBottom: '0px'}} />
            <div style={{display: 'grid', height: 'auto', lineHeight: '0px', marginLeft: '20px'}}>
              <p style={{fontWeight: 'bold'}}>45 DAYS RETURN</p>
              <p style={{fontWeight: 'normal'}}>Making it Look Like Readable</p>
            </div>
          </Item>
        </Grid>
        <Grid item xs={10} sm={10} md={10} lg={3}>
          <Item>
            <AccessTimeIcon style={{fontSize: '40px', color: '#FB4B4F', marginBottom: '0px'}} />
            <div style={{display: 'grid', height: 'auto', lineHeight: '0px', marginLeft: '20px'}}>
              <p style={{fontWeight: 'bold'}}>OPENING ALL WEEK</p>
              <p style={{fontWeight: 'normal'}}>8AM - 09PM</p>
            </div>
          </Item>
        </Grid>
      </Grid>
      <Box></Box>
    </Container>
  )
}

export default BestSellers