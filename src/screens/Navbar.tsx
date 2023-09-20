import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Logo from '../assets/images/Gjej_Villa-01-cropped.svg'
import { Divider, List, ListItem, ListItemButton, ListItemText } from '@mui/material';

const pages = ['Kryefaqja', 'Behu pjese'];
const links = ['/', '/contact',];



function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  // const drawer = (
  //   <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
  //     <Typography variant="h6" sx={{ my: 2 }}>
  //       MUI
  //     </Typography>
  //     <Divider />
  //     <List>
  //       {navItems.map((item) => (
  //         <ListItem key={item} disablePadding>
  //           <ListItemButton sx={{ textAlign: 'center' }}>
  //             <ListItemText primary={item} />
  //           </ListItemButton>
  //         </ListItem>
  //       ))}
  //     </List>
  //   </Box>
  // );
 


  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  return (
    <AppBar position="static" sx={{backgroundColor:'white', boxShadow:'0px 1px rgb(0 0 0 / 14%)'}}>
    <Container maxWidth="xl">
      <Toolbar disableGutters>


      <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
      <img src={Logo} width={100} height={50} />
      </Box>

        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
           sx={{color: '#748867'}}
          >
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
            {pages.map((page, index) => (
              <MenuItem key={page} onClick={handleCloseNavMenu} 
              
                href={links[index]}
    >
                <Typography textAlign="center">{page}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>  
        <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex',  } }}>
          {pages.map((page, index) => (
            <Button
              key={page}
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'black', display: 'block' }}
                href={links[index]}

            >
              {page}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </Container>
  </AppBar>
    // <AppBar position="static"  sx={{backgroundColor:'white', boxShadow:'0px 1px rgb(0 0 0 / 14%)'}} >
    //   <Container maxWidth="xl" >
    //     <Toolbar disableGutters sx={{justifyContent:'space-between'}}>

          
    //       <img src={Logo} width={100} height={50} />
          

    //       <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
    //         <IconButton
    //           size="large"
    //           aria-label="account of current user"
    //           aria-controls="menu-appbar"
    //           aria-haspopup="true"
    //           onClick={handleOpenNavMenu}
    //           color="inherit"
    //         >
    //           <MenuIcon />
    //         </IconButton>
    //         <Menu
    //           id="menu-appbar"
    //           anchorEl={anchorElNav}
    //           anchorOrigin={{
    //             vertical: 'bottom',
    //             horizontal: 'left',
    //           }}
    //           keepMounted
    //           transformOrigin={{
    //             vertical: 'top',
    //             horizontal: 'left',
    //           }}
    //           open={Boolean(anchorElNav)}
    //           onClose={handleCloseNavMenu}
    //           sx={{
    //             display: { xs: 'block', md: 'none' },
    //           }}
    //         >
    //           {pages.map((page) => (
    //             <MenuItem key={page} onClick={handleCloseNavMenu} color='black'>
    //               <Typography textAlign="center" >{page}</Typography>
    //             </MenuItem>
    //           ))}
    //         </Menu>
    //       </Box>
    //       <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
    //       <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
    //         {pages.map((page, index) => (
    //           <Button
    //             key={page}
    //             onClick={handleCloseNavMenu}
    //             sx={{ my: 2, color: 'black', display: 'block', textTransform:'capitalize' }}
    //             href={links[index]}
                
    //           >
    //             {page}
    //           </Button>
    //         ))}
    //       </Box>
    //       {/* </Box> */}
    //     </Toolbar>
    //   </Container>
    // </AppBar>
  );
}
export default Navbar;

