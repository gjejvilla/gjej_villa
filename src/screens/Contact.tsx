
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';
import imageUrl from '../assets/images/house.png'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Box from '@mui/material/Box';
import GroupsIcon from '@mui/icons-material/Groups';
import GuestHouse from '../assets/images/Contact.jpg'
const Contact = () => {


    return(
//         <Box>

//                  <Box
//         component="img"
//         sx={{
//         height: 400,
//         width: '100%',
// // backgroundImage: `url(${GuestHouse})`,

//         }}
//         alt="The house from the offer."
//         src={GuestHouse}
//       />
//       {/* <Box sx={{position:'absolute', backgroundColor:'rgb(0,0,0,0.5)',height: 400, top: 68, width:'100%', alignContent:'center', justifyContent:'center'}}> */}
//             <Typography color='white' marginTop={'20%'} fontSize={30} textTransform="uppercase" textAlign="left" marginLeft={20}> Gjeni villen tuaj te endrrave</Typography>
//             {/* </Box> */}
//             <Box my={8} flex={1}>
//               <Typography variant='h5'>Na kontaktoni</Typography>
//               <Typography variant='h6'>Nr.tel 0000000</Typography>
//             </Box>
//         </Box>
<Grid container component="main" sx={{ height: '100vh' }}>
<Grid
  item
  xs={false}
  sm={4}
  md={7}
  sx={{
    backgroundImage: `url(${GuestHouse})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor: (t) =>
      'rgba(167, 187, 157, 0.3)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
/>
<Grid item xs={12} sm={8} md={5} sx={{backgroundColor:  '#F8F2EA',}}>
<Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
  <Typography variant='h3' my={4} sx={{color: '#748867'}}>
  Bëhu pjesë e jona!

  </Typography>
  <Typography variant='h6'>
  GjejVilla.com
  </Typography>
  <Typography>

Platformë për gjetjen dhe eksplorimin e villave më të mahnitshme. Bashkohuni me ne për një përvojë të paharrueshme në natyrë. Shfletoni, zgjidhni dhe rezervoni villën tuaj perfekte. Në GjejVilla.com, zbuloni bukurinë dhe kënaqësinë e një mbrëmjeje të mrekullueshme.
  </Typography>
  <Typography mt={2} variant='h6'>
  Pronarë të villave!

  </Typography>
  <Typography>
  Rezervoni vendin tuaj në komunitetin tonë të GjejVilla.com, ku ju ofrojmë një faqe të specializuar për listimin dhe promovimin e vilave tuaja!
Regjistrohuni tani dhe rritni potencialin tuaj për të arritur një publik të gjerë dhe për të marrë rezultate të shkëlqyera.
  </Typography>
  </Box>
</Grid>
</Grid>
    )


}

export default Contact