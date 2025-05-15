import { ToggleButtonGroup, ToggleButton } from '@mui/material'
import ListIcon from '@mui/icons-material/List'
import GridViewIcon from '@mui/icons-material/GridView'

const ListGridSwitch = ({ isGrid, setIsGrid }) => {
  const handleSwitch = () => setIsGrid((prev) => !prev)

  return (
    <ToggleButtonGroup
      aria-label='View toggle'
      exclusive
      onChange={handleSwitch}
      size='small'
      value={isGrid}
    >
      <ToggleButton aria-label='List view' value={false}>
        <ListIcon sx={{ mr: 1 }} />
      </ToggleButton>
      <ToggleButton aria-label='Grid view' value>
        <GridViewIcon sx={{ mr: 1 }} />
      </ToggleButton>
    </ToggleButtonGroup>
  )
}

export default ListGridSwitch
