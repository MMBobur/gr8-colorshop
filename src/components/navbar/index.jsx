import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person'; 
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';

import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const pages = ['Home', 'Shop', 'Promation','Pages','Blog','Contact'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [isScroll, setIscroll] = React.useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

React.useEffect(() => {
  window.onscroll = () => {
    if(window.scrollY >=10) {
      setIscroll(true);
    } else{
      setIscroll(false)
    }
  }
}, [])


  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };


  return (
    <AppBar position="fixed" sx={{backgroundColor:'white'}}>

        <Box sx={{display: isScroll ? 'none' : 'flex' && { xs: 'none' , md:'flex'},
      backgroundColor:'#6E7F80A9'}}> 
          <Container sx={{display:'flex'}}>
          <Typography sx={{mt:'auto',mb:'auto'}}>
            FREE SHIPPING ON ALL U.S ORDERS OVER $50
            </Typography>
          <Typography sx={{ml:'auto',mr:'0'}}>
            <FormControl variant="standard" style={{ m: 1, minWidth: 60}}>
              <InputLabel id="demo-simple-select-standard-label">USD</InputLabel>
              <Select sx={{color:'white'}}
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                color='primary'
                value={age}
                onChange={handleChange}
                label="Usd"
              >
               <MenuItem value="">
               
              </MenuItem>

                <MenuItem value={10}>CAD</MenuItem>
                <MenuItem value={20}>AUD</MenuItem>
                <MenuItem value={30}>EUR</MenuItem>
                <MenuItem value={30}>GBP</MenuItem>
              </Select>
            </FormControl>

            <FormControl variant="standard" style={{ m: 1, minWidth: 80 ,borderLeft:'1px solid #FFFFFFAF'}}>
              <InputLabel id="demo-simple-select-standard-label">English</InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={age}
                onChange={handleChange}
                label="Usd"
              >
                <MenuItem value="">
                 
                 </MenuItem>
                <MenuItem value={10}>Uzbek</MenuItem>
                <MenuItem value={20}>German</MenuItem>
                <MenuItem value={30}>Italian</MenuItem>
                <MenuItem value={30}>Ukrain</MenuItem>
              </Select>
            </FormControl>

            <FormControl variant="standard" style={{ m: 1, minWidth: 110,borderLeft:'1px solid #FFFFFFAF'}}>
              <InputLabel id="demo-simple-select-standard-label">My account</InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={age}
                onChange={handleChange}
                label="Usd"
              >
                 <MenuItem value="">
                  
                  </MenuItem>
                <MenuItem value={10}>Sing In</MenuItem>
                <MenuItem value={20}>Register</MenuItem>
              </Select>
            </FormControl>
          </Typography>
          </Container>
        </Box>
        
        <Container>
        <Toolbar disableGutters>
          <Typography variant="h6"   noWrap  component="a"  href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'black',
              textDecoration: 'none',
            }} >

            COlO<Typography variant="h6" noWrap component="a" href="/" sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'red',
                textDecoration: 'none'
            }}>SHOP</Typography>
          </Typography>

          
          <Typography variant="h5"  noWrap  component="a"  href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'black',
              textDecoration: 'none',
            }}
          >
            COLO
            <Typography  variant="h5"  noWrap  component="a"  href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'red',
              textDecoration: 'none',
            }}
          > SHOP </Typography>
          </Typography>


          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' ,justifyContent:'center'} }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black',display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>


          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <SearchIcon sx={{margin:'10%'}}/>
              <PersonIcon sx={{margin:'10%'}}/>
              <LocalGroceryStoreIcon sx={{margin:'10%'}}/>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>


          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } ,justifyContent:'end'}}>
            <IconButton size="large" aria-label="account of current user"  aria-controls="menu-appbar"  aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="success" >

              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
