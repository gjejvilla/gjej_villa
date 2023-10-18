import * as React from 'react'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import ListItemText from '@mui/material/ListItemText'
import Select from '@mui/material/Select'
import Checkbox from '@mui/material/Checkbox'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(() => ({
  formControl: {
    width: 200,
  },
  outlinedInput: {
    '&:hover $notchedOutline': {
      borderColor: 'green',
    },
    '&$focused $notchedOutline': {
      borderColor: 'green',
    },
  },
  notchedOutline: {},
  focused: {},
  selectRoot: {
    color: 'purple',
  },
}))

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
}

type Props = {
  title: string
  data: string[]
  value: string[]
  setValue: React.Dispatch<React.SetStateAction<string[]>>
}

const MultipleSelectCheckmarks: React.FC<Props> = ({
  title,
  data,
  value,
  setValue,
}) => {
  const classes = useStyles()
  const handleChange = (event: { target: { value: any } }) => {
    const {
      target: { value },
    } = event
    setValue(typeof value === 'string' ? value.split(',') : value)
  }

  return (
    <div>
      <FormControl sx={{ m: 1, width: 200, backgroundColor: 'white' }} size="small">
        <InputLabel
          id="demo-multiple-checkbox-label"
          sx={{
            '&.Mui-focus': {
              color: '#748867',
            },
          }}
        >
          {title}
        </InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={value}
          onChange={handleChange}
          input={
            <OutlinedInput
              label={title}
              classes={{
                root: classes.outlinedInput,
                focused: classes.focused,
                notchedOutline: classes.notchedOutline,
              }}
            />
          }
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {data.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox
                checked={value.indexOf(name) > -1}
                sx={{
                  '&.Mui-checked': {
                    color: '#748867',
                  },
                }}
              />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  )
}

export default MultipleSelectCheckmarks
