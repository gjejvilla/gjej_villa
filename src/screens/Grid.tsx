import * as React from 'react';
import Grid from '@mui/material/Grid';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import Paper from '@mui/material/Paper';
import MultiActionAreaCard from './Card';
import data from '../data/data';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';

type House =
  {
    id: number,
    name: string,
    rooms: string[],
    people: string[],
    image: string, 
    gallery: string[],
    socialLinks: { insta: string, facebook: string, phoneNumber:string, booking: string },
    location: string,
    latLng: number[], 
  }

  type GridProps = {
    data: House[]
  }

const SpacingGrid:React.FC<GridProps> = ({data}) => {
  const [spacing, setSpacing] = React.useState(3);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSpacing(Number((event.target as HTMLInputElement).value));
  };


  return (
    <Grid sx={{ flexGrow: 1 }} container spacing={2} mt={5} mb={30}>
      <Grid item xs={12}>
        {data.length ? 
        <Grid container justifyContent="center" spacing={spacing}>
          {data.map((value) => (
            <Grid key={value.name} item >
              <Paper
                sx={{
                  height: 340,
                  width: 300,
            boxShadow:'none',
            backgroundColor: 'transparent',
                }}
              
              >
                <MultiActionAreaCard item={value}/>
                </Paper>
            </Grid>
          ))}
        </Grid>
        :
        <Typography variant='h6'>Nuk ka rezultat</Typography>
}
      </Grid>
   
    </Grid>
  );
}

export default SpacingGrid