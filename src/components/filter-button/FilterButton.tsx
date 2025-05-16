import { Button, Badge } from '@mui/material'
import FilterListIcon from '@mui/icons-material/FilterList'
import { FC } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import { styles } from './FilterButton.style'

interface FiltersButtonProps {
  activeCount?: number
  onClick: () => void
}

export const FiltersButton: FC<FiltersButtonProps> = ({
  activeCount = 0,
  onClick
}) => {
  return (
    <Box sx={styles.container}>
      <Button
        onClick={onClick}
        startIcon={
          <Badge color='primary'>
            <FilterListIcon />
          </Badge>
        }
      >
        Filters
      </Button>
      <Box sx={styles.counter}>
        <Typography>{activeCount}</Typography>
      </Box>
    </Box>
  )
}
