import Typography from '@mui/material/Typography'
import { Grid } from '@mui/material'
import Box from '@mui/material/Box'
import GuestHouse from '../assets/images/Contact.jpg'

const Contact = () => {
  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: `url(${GuestHouse})`,
          backgroundRepeat: 'no-repeat',
          backgroundColor: () => 'rgba(167, 187, 157, 0.3)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Grid item xs={12} sm={8} md={5} sx={{ backgroundColor: '#F8F2EA' }}>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography variant="h3" my={4} sx={{ color: '#748867' }}>
            Bëhu pjesë e jona!
          </Typography>
          <Typography variant="h6">GjejVilla.com</Typography>
          <Typography>
            Platformë për gjetjen dhe eksplorimin e villave më të mahnitshme.
            Bashkohuni me ne për një përvojë të paharrueshme në natyrë. Shfletoni,
            zgjidhni dhe rezervoni villën tuaj perfekte. Në GjejVilla.com, zbuloni
            bukurinë dhe kënaqësinë e një mbrëmjeje të mrekullueshme.
          </Typography>
          <Typography mt={2} variant="h6">
            Pronarë të villave!
          </Typography>
          <Typography>
            Rezervoni vendin tuaj në komunitetin tonë të GjejVilla.com, ku ju ofrojmë
            një faqe të specializuar për listimin dhe promovimin e vilave tuaja!
            Regjistrohuni tani dhe rritni potencialin tuaj për të arritur një publik
            të gjerë dhe për të marrë rezultate të shkëlqyera.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Contact
