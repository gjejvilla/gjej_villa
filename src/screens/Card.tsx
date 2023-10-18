import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Button, CardActionArea, CardActions } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import Box from '@mui/material/Box'
import GroupsIcon from '@mui/icons-material/Groups'
import BedroomParentIcon from '@mui/icons-material/BedroomParent'

export default function MultiActionAreaCard({ item }: any) {
  return (
    <Card sx={{ maxWidth: 500, borderRadius: 5 }}>
      <CardActionArea href={`/Villa/${item.id}`}>
        <CardMedia component="img" height="140" image={item.image} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" mb={2}>
            {item.name}
          </Typography>
          <Box sx={{ flexDirection: 'row', display: 'flex' }}>
            <LocationOnIcon
              sx={{ color: '#748867', marginRight: 1 }}
              fontSize="small"
            />
            <Typography variant="body2">{item.location}</Typography>
          </Box>
          <Box sx={{ flexDirection: 'row', display: 'flex' }} my={1}>
            <GroupsIcon
              sx={{ color: '#748867', alignSelf: 'center', marginRight: 1 }}
              fontSize="small"
            />
            <Typography variant="body2">
              {item.people[0]} - {item.people[item.people.length - 1]} persona
            </Typography>
          </Box>
          <Box sx={{ flexDirection: 'row', display: 'flex' }}>
            <BedroomParentIcon
              sx={{ color: '#748867', alignSelf: 'center', marginRight: 1 }}
              fontSize="small"
            />
            <Typography variant="body2">
              {item.rooms[item.rooms.length - 1]}{' '}
              {item.rooms.length === 1 && item.rooms[0] === '1' ? 'dhomë' : 'dhoma'}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          sx={{ color: '#748867', fontWeight: '600', paddingLeft: 1 }}
          href={`/Villa/${item.id}`}
        >
          Më shumë
        </Button>
      </CardActions>
    </Card>
  )
}
