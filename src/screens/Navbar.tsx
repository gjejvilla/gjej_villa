import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import Logo from '../assets/images/Gjej_Villa-01-cropped.svg'

const pages = ['Kryefaqja', 'Behu pjese']
const links = ['/', '/contact']

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: 'white', boxShadow: '0px 1px rgb(0 0 0 / 14%)' }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button href={links[0]}>
              <img src={Logo} width={100} height={50} />
            </Button>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: '#748867' }}
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
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 1, color: 'black', display: 'block' }}
                    href={links[index]}
                  >
                    {page}
                  </Button>
                </MenuItem>
              ))}
            </Menu>
            <Button href={links[0]}>
              <img src={Logo} width={100} height={50} />
            </Button>
          </Box>
          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
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
  )
}
export default Navbar
