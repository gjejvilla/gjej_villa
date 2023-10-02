import { Box, Button, Container, Grid, IconButton, ImageList, ImageListItem, Modal, Typography } from "@mui/material"
import data from "../data/data"
import { useNavigate, useParams } from "react-router-dom";
import BasicTabs from "./Tabs";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Zoom from '@mui/material/Zoom';
import { useState } from "react";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const House = () => {
  const params = useParams();
  const id = params.id ?? ''
  const item = data.find(el => el.id === id)
  const gallery = item?.gallery ?? []
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<string>('');
  const [openModal, setOpenModal] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);

  const openImageModal = (el: string, index: number) => {
    setSelectedImage(el);
    setSelectedImageIndex(index);
    setOpenModal(true);
  };

  const navigateToPrevious = () => {
    const prevIndex =
      (selectedImageIndex - 1 + gallery.length) % gallery.length;
    setSelectedImage(gallery[prevIndex]);
    setSelectedImageIndex(prevIndex);
  };

  const navigateToNext = () => {
    const nextIndex = (selectedImageIndex + 1) % gallery.length;
    setSelectedImage(gallery[nextIndex]);
    setSelectedImageIndex(nextIndex);
  };


  return (
    <Grid mt={3} marginX="4vw" borderRadius={5} minHeight="80vh">
      <Grid item width="100%" borderRadius={5} sx={{ backgroundColor: 'white', }} paddingY={3} paddingLeft={2} alignItems="center" marginBottom={-2} display="inline-flex">
        <Button onClick={() => navigate(-1)} >

          <ArrowBackIcon sx={{ fontSize: 14, color: '#748867' }} />
          <Typography textAlign="left" ml={1} textTransform="capitalize" fontSize={14} sx={{ color: '#748867' }}> Kthehu prapa</Typography>

        </Button>
      </Grid>
      <Grid item>
        <ImageList variant="quilted" cols={4} gap={8} rowHeight={150}>
          {gallery.map((el, index) => (
            <ImageListItem key={el}>
              <img
                src={el}
                srcSet={el}
                alt={el}
                loading="lazy"
                width={100}
                height={100}
                onClick={() => openImageModal(el, index)}
                style={{ cursor: "pointer" }}
              />
            </ImageListItem>
          ))}
        </ImageList>
        <Modal open={openModal} onClose={() => setOpenModal(false)} >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width:{ md: '70vw', xs:  "90vw"}, 
            }}
          >
            {selectedImage && (
                <Box sx={{ position: "relative" }}>
                  <IconButton
                    sx={{
                      position: "absolute",
                      left: 0,
                      top: "50%",
                      transform: "translateY(-50%)",
                    }}
                    onClick={navigateToPrevious}
                  >
                    <NavigateBeforeIcon sx={{ color: "white" }} fontSize="large" />
                  </IconButton>
                  <img
                    src={selectedImage}
                    alt={selectedImage}
                    style={{ width: "100%", height: "auto"}}
                  />
                  <IconButton
                    sx={{
                      position: "absolute",
                      right: 0,
                      top: "50%",
                      transform: "translateY(-50%)",
                    }}
                    onClick={navigateToNext}
                  >
                    <NavigateNextIcon sx={{ color: "white" }} fontSize="large" />
                  </IconButton>
                </Box>
            )}
          </Box>
        </Modal>
        <BasicTabs item={item} />
      </Grid>

    </Grid>
  )
}


export default House