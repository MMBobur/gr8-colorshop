
import * as React from "react";

// import Rasm from './xdeal_ofthe_week.png.pagespeed.ic.XO-8sFC10E.webp'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import CircleIcon from '@mui/icons-material/Circle';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const Countdown = (props) => {
  const [seconds, setSeconds] = React.useState(59);
  const [minutes, setMinutes] = React.useState(59);
  const [hours, setHours] = React.useState(23);
  const [days, setDays] = React.useState(2);
  const [timeDone, setDone] = React.useState(false);
  //SECONDS

  //seconds 60 -> 0
  React.useEffect(() => {
    const secondsCounter =
      seconds > 0 && setInterval(() => setSeconds(seconds - 1), 1000);
    return () => clearInterval(secondsCounter);
  }, [seconds]);

  //seconds == 60 (when seconds == 0)
  React.useEffect(() => {
    return () => setSeconds(59);
  }, [seconds == 0 && !timeDone]);

  
  React.useEffect(() => {
    return () => setMinutes(minutes - 1)
  }, [seconds == 0]);


  React.useEffect(() => {
    return () => setMinutes(59);
  }, [minutes == 0 && !timeDone]);

  React.useEffect(() => {
    return () => setHours(hours - 1);
  }, [minutes == 0]);

  React.useEffect(() => {
    return () => setHours(23);
  }, [hours == 0 && !timeDone]);

  React.useEffect(() => {
    return () => setDays(days - 1);
  }, [hours == 0 && !timeDone])


  React.useEffect(() => {
    return () => setDone(true)
  }, [days == 0 && hours == 0 && minutes == 0 && seconds == 0])


  return (
    
    <Box sx={{ flexGrow: 1 }}>
      <Grid sx={{ background: '#f2f2f2', marginTop: '5%' }} justifyContent='center' container >
        <Grid xs={10} sm={10} md={4.2} lg={4.2}>
          <img src='https://preview.colorlib.com/theme/coloshop/images/xdeal_ofthe_week.png.pagespeed.ic.XO-8sFC10E.webp' height='100%' width='100%' />
        </Grid>
        <Grid xs={10} sm={10} md={5.4} lg={5.4} sx={{ marginTop: { xs: '-90%', sm: '-600px', md: '0px', lg: '0px' } }} >
          <Box sx={{ textAlign: 'center', paddingTop: '15%', justifyContent: 'center' }} >
            <Typography sx={{ fontSize: '40px', paddingLeft: '10%', fontWeight: '550' }} >Deal Of The Week</Typography>
            <Box sx={{ justifyContent: 'center', display: 'flex' }} ><Box sx={{ border: '3px solid #fe4c50', marginLeft: '10%', width: '70px', }} ></Box></Box>
            
            <Stack justifyContent='center' sx={{marginLeft:'10%',marginTop:'5%'}} direction="row" spacing={2}  >
              <Avatar
                sx={{ bgcolor: 'white',color:'black',width:{xs:'50px',sm:'100px',md:'100px',lg:'100px',},height:{xs:'50px',sm:'100px',md:'100px',lg:'100px',} }}
                alt="Remy Sharp"
                src="/broken-image.jpg"
              >
                <Typography style={{fontSize:'120%',marginLeft:'5px',marginTop:'-30px'}} > {days} </Typography><br />
                <Typography sx={{marginTop:'40px',marginLeft:'-23px'}}>Day</Typography>
              </Avatar>
              <Avatar
                sx={{ bgcolor: 'white',color:'black',width:{xs:'50px',sm:'100px',md:'100px',lg:'100px',},height:{xs:'50px',sm:'100px',md:'100px',lg:'100px',} }}
                alt="Remy Sharp"
                src="/broken-image.jpg"
              >
                <Typography style={{fontSize:'120%',marginLeft:'7px',marginTop:'-30px'}} > {hours} </Typography>
                <Typography sx={{marginTop:'40px',marginLeft:'-37px'}}>hours</Typography>
              </Avatar>
              <Avatar
                sx={{ bgcolor: 'white',color:'black',width:{xs:'50px',sm:'100px',md:'100px',lg:'100px',},height:{xs:'50px',sm:'100px',md:'100px',lg:'100px',} }}
                alt="Remy Sharp"
                src="/broken-image.jpg"
              >
                <Typography style={{fontSize:'120%',marginLeft:'15px',marginTop:'-30px'}} > {minutes} </Typography>
                <Typography sx={{marginTop:'40px',marginLeft:'-45px'}}>minutes</Typography>
              </Avatar>
              <Avatar


sx={{ bgcolor:'white',color:'black',width:{xs:'50px',sm:'100px',md:'100px',lg:'100px',},height:{xs:'50px',sm:'100px',md:'100px',lg:'100px',} }}
                alt="Remy Sharp"
                src="/broken-image.jpg"
              >
                <Typography style={{fontSize:'120%',marginLeft:'15px',marginTop:'-30px'}} > {seconds} </Typography>
                <Typography sx={{marginTop:'40px',marginLeft:'-45px'}} >seconds</Typography>
              </Avatar>
            </Stack>
            <Button style={{marginTop:'7%',backgroundColor:'black',color:'white',paddingLeft:'10%',paddingRight:'10%'}} >SHOP NOW</Button>
          </Box>

        </Grid>
      </Grid>
    </Box>
  );
};
export default Countdown;