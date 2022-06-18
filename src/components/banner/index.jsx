import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
// import Body from '../../assets/black_woman.jpg'
import './style.css'
const Banner = () => {
  return (
    <Box className="more" sx={{color:'black'}}>
      <Typography sx={{pt:'15%',pl:'10%'}} className='A'>

      <Typography>
        SPRING / SUMMER COLLECTION 2017
      </Typography>
      <Typography variant='h2' sx={{fontSize:'75px',opacity:'0.8'}}>
       Get up to 30% Off
      </Typography>
      <Typography variant="h2" sx={{fontSize:'75px',opacity:'0.8'}}>
        New Arrivals  
      </Typography>
      <br /><br />
      <Button sx={{color:'white',border:'1px solid #FE4C50',bgcolor:'#FE4C50',width:'10%'}} className='Q'>
        Shop now
      </Button>
      </Typography>
    </Box>
  )
}

export default Banner