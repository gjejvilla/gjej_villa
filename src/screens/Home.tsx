import SpacingGrid from './Grid'
import MultipleSelectCheckmarks from './Select'
import data from '../data/data'
import { useEffect, useState } from 'react'
import { Grid } from '@mui/material'

const Home = () => {
  const [items, setItems] = useState(data)
  const [locations, setLocations] = useState<string[]>([])
  const [roomsSelected, setRoomsSelected] = useState<string[]>([])
  const [numOfPeopleSelected, setNumOfPeopleSelected] = useState<string[]>([])

  const names = data
    .map(({ location }) => location)
    .filter((value, index, array) => array.indexOf(value) === index)
  const rooms = data
    .flatMap(({ rooms }) => rooms)
    .filter((value, index, array) => array.indexOf(value) === index)
  const persona = data
    .flatMap(({ people }) => people)
    .filter((value, index, array) => array.indexOf(value) === index)

  useEffect(() => {
    if (locations.length || roomsSelected.length || numOfPeopleSelected.length) {
      const filteredData = data.filter((item) => {
        const locationFilter =
          locations.length === 0 || locations.includes(item.location)
        const roomFilter =
          roomsSelected.length === 0 ||
          roomsSelected.some((room) => item.rooms.includes(room))
        const peopleFilter =
          numOfPeopleSelected.length === 0 ||
          numOfPeopleSelected.some((person) => item.people.includes(person))

        return locationFilter && roomFilter && peopleFilter
      })

      setItems(filteredData)
    } else {
      setItems(data)
    }
  }, [locations, roomsSelected, numOfPeopleSelected])

  return (
    <div style={{ flex: 1, minHeight: '81vh' }}>
      <Grid my={4} sx={{ flexGrow: 1 }} container justifyContent="center">
        <MultipleSelectCheckmarks
          title="Lokacioni"
          data={names}
          value={locations}
          setValue={setLocations}
        />
        <MultipleSelectCheckmarks
          title="Numri i personave"
          data={persona}
          value={numOfPeopleSelected}
          setValue={setNumOfPeopleSelected}
        />
        <MultipleSelectCheckmarks
          title="Numri i dhomave"
          data={rooms}
          value={roomsSelected}
          setValue={setRoomsSelected}
        />
      </Grid>
      <SpacingGrid data={items} />
    </div>
  )
}

export default Home
