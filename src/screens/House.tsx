import { Box, Button, Container, Grid, ImageList, ImageListItem, Typography } from "@mui/material"
import data from "../data/data"
import { useNavigate, useParams } from "react-router-dom";
import BasicTabs from "./Tabs";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const House = () => {
  const params = useParams();
  const id = params.id ?? 1
  const item = data.find(el => el.id === +id)
  const gallery = item?.gallery ?? []
  const navigate = useNavigate();

  return (
    <Grid mt={3}  marginX="4vw" borderRadius={5}  minHeight="80vh">
      <Grid item width="100%" borderRadius={5} sx={{ backgroundColor: 'white', }} paddingY={3} paddingLeft={2} alignItems="center" marginBottom={-2} display="inline-flex">
       <Button onClick={() => navigate(-1)} >
       
        <ArrowBackIcon  sx={{fontSize:14, color:'#748867'}}/>
        <Typography textAlign="left" ml={1} textTransform="capitalize" fontSize={14} sx={{color:'#748867'}}> Kthehu prapa</Typography>

       </Button>
      </Grid>
      <Grid item>

        <ImageList  variant="quilted" cols={4} gap={8} rowHeight={150}>
          {gallery.map((el) => (
            <ImageListItem key={el} >
              <img
                src={el}
                srcSet={el}
                alt={el}
                loading="lazy"
                width={100}
                height={100}
              />
            </ImageListItem>
          ))}
        </ImageList>
        <BasicTabs item={item} />
      </Grid>

    </Grid>
  )
}


export default House