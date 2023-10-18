import React, { useState } from 'react'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import MultiActionAreaCard from './Card'
import { Typography } from '@mui/material'
import PaginationOutlined from '../components'

type House = {
  id: string
  name: string
  rooms: string[]
  people: string[]
  image: string
  gallery: string[]
  socialLinks: {
    insta: string
    facebook: string
    phoneNumber: string
    booking: string
  }
  location: string
  latLng: number[]
}

type GridProps = {
  data: House[]
}

const SpacingGrid: React.FC<GridProps> = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1) // Set initial page to 1
  const itemsPerPage = 10

  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentData = data.slice(startIndex, endIndex)

  const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page)
  }

  return (
    <>
      <Grid sx={{ flexGrow: 1 }} container spacing={2} mt={5} mb={10}>
        <Grid item xs={12}>
          {currentData.length ? (
            <Grid container justifyContent="center" spacing={3}>
              {currentData.map((value) => (
                <Grid key={value.name} item>
                  <Paper
                    sx={{
                      height: 340,
                      width: 300,
                      boxShadow: 'none',
                      backgroundColor: 'transparent',
                    }}
                  >
                    <MultiActionAreaCard item={value} />
                  </Paper>
                </Grid>
              ))}
            </Grid>
          ) : (
            <Typography variant="h6">Nuk ka rezultat</Typography>
          )}
        </Grid>
      </Grid>
      <PaginationOutlined
        count={Math.ceil(data.length / itemsPerPage)}
        page={currentPage}
        onChange={handlePageChange}
      />
    </>
  )
}

export default SpacingGrid
