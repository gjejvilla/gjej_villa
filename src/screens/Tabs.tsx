import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import GoogleMapReact from 'google-map-react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Box from '@mui/material/Box';
import GroupsIcon from '@mui/icons-material/Groups';
import BedroomParentIcon from '@mui/icons-material/BedroomParent';
import WifiIcon from '@mui/icons-material/Wifi';
import PoolIcon from '@mui/icons-material/Pool';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Grid, Link } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';


interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}


function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}

    >
      {value === index && (
        <Box sx={{ p: 3, backgroundColor: 'white', borderRadius: 5, mb: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({ item }: any) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const center = { lat: item?.latLng[0] ?? 0, lng: item?.latLng[1] ?? 0 }


  return (
    <Box sx={{ width: '100%', mb: 3 }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', backgroundColor: 'white', borderRadius: 5 }} px={2}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" indicatorColor="primary"
        >
          <Tab label="Detaje" {...a11yProps(0)} color='black' sx={{ fontSize: 15, textTransform: 'capitalize', fontWeight: 500, }} />
          {/* <Tab label="Kontakti" {...a11yProps(1)} sx={{ fontSize: 15, textTransform: 'capitalize', fontWeight: 500 }} /> */}
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Grid container justifyContent="space-between"
        >
          <Grid item xs={12} md={8} >
            <Typography variant="h4" textAlign="left">
              {item?.name}
            </Typography>
            <Typography variant='h6' textAlign="left" mt={4}>Informatat </Typography>
            <Grid container spacing={2} sx={{ flexGrow: 1 }} >
              <Grid item xs={12} md={6}>
                <Box display="inline-flex" width="100%" my={1}>
                  <LocationOnIcon />
                  <Typography ml={1}>{item.location}</Typography>
                </Box>
                <Box display="inline-flex" flexGrow={1} width="100%" my={1}>
                  <BedroomParentIcon />
                  <Typography ml={1} >{item.rooms[0]} - {item.rooms[item.rooms.length - 1]} dhoma</Typography>
                </Box>
                <Box display="inline-flex" flexGrow={1} width="100%" my={1}>
                  <GroupsIcon />
                  <Typography ml={1}>{item.people[0]} - {item.people[item.people.length - 1]} persona</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                {item.socialLinks.facebook &&
                  <Box display="inline-flex" flexGrow={1} width="100%" my={1}>

                    <FacebookIcon />
                    <Link ml={1} href={item.socialLinks.facebook} sx={{ textDecoration: 'none', color: '#748867', alignSelf: 'center' }} alignSelf={center} >Facebook</Link>
                  </Box>
                }
                {item.socialLinks.insta &&
                  <Box display="inline-flex" flexGrow={1} width="100%" my={1}>
                    <InstagramIcon />
                    <Link ml={1} href={item.socialLinks.insta} sx={{ textDecoration: 'none', color: '#748867', alignSelf: 'center' }}>Instagram</Link>

                  </Box>
                }
                {item.socialLinks.booking &&
                  <Box display="inline-flex" flexGrow={1} width="100%" my={1}>
                    <OpenInNewIcon />
                    <Link ml={1} href={item.socialLinks.booking} sx={{ textDecoration: 'none', color: '#748867', alignSelf: 'center' }}>Booking</Link>
                  </Box>
                }
              </Grid>
              {/* <Grid item xs={12} md={6}>
                <Box display="inline-flex" flexGrow={1} width="100%" my={1} >
                  <WifiIcon />
                  <Typography ml={1} >WiFi</Typography>
                </Box>
                <Box display="inline-flex" width="100%" my={1}>
                  <PoolIcon />
                  <Typography ml={1} >Pishine</Typography>

                </Box>
                <Box display="inline-flex" flexGrow={1} width="100%" my={1}>
                  <AcUnitIcon />
                  <Typography ml={1} >AC</Typography>
                </Box> </Grid> */}
            </Grid>

          </Grid>
          <Grid xs={12} md={4}>
            <Grid item sx={{ width: '100%', height: '100%' }}>
              <GoogleMapReact
                defaultCenter={center}
                defaultZoom={15}
                yesIWantToUseGoogleMapApiInternals
                onGoogleApiLoaded={() => console.log('test')}
                bootstrapURLKeys={{ key: 'AIzaSyBUbJQCHHpc0GKWODjwZP4bDd09Odkhc-c' }}

              />
            </Grid>
          </Grid>

        </Grid>
        {/* <Box display="inline" component="div" >
          <Typography variant="h6" textAlign="left" mt={3}>
            Kontakti
          </Typography>
          {item.socialLinks.facebook &&
            <Box display="inline-flex" flexGrow={1} width="100%" my={1}>

              <FacebookIcon />
              <Link ml={1} href={item.socialLinks.facebook} sx={{ textDecoration: 'none', color: '#748867', alignSelf: 'center' }} alignSelf={center} >Facebook</Link>

            </Box>
          }
          {item.socialLinks.insta &&
            <Box display="inline-flex" flexGrow={1} width="100%" my={1}>
              <InstagramIcon />
              <Link ml={1} href={item.socialLinks.insta} sx={{ textDecoration: 'none', color: '#748867', alignSelf: 'center' }}>Instagram</Link>

            </Box>
          }
          {item.socialLinks.booking &&
            <Box display="inline-flex" flexGrow={1} width="100%" my={1}>
              <OpenInNewIcon />
              <Link ml={1} href={item.socialLinks.booking} sx={{ textDecoration: 'none', color: '#748867', alignSelf: 'center' }}>Booking</Link>
            </Box>
          }
        </Box> */}
        <Grid xs={12} sx={{ display: { md: 'none' } }} mt={2}>
          <div style={{ width: '100%', height: '40vh' }}>
            <GoogleMapReact
              defaultCenter={center}
              defaultZoom={15}
              yesIWantToUseGoogleMapApiInternals
              onGoogleApiLoaded={() => console.log('test')}
              bootstrapURLKeys={{ key: 'AIzaSyBUbJQCHHpc0GKWODjwZP4bDd09Odkhc-c' }}

            />
          </div>


        </Grid>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>

      </CustomTabPanel>

    </Box>
  );
}
