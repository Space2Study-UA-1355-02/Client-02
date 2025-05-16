import { MenuItem, Select } from '@mui/material'
import { FC } from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

interface SortBySelectProps {
  value: string
  inputLabel?: string
  onChange: (value: string) => void
}

const labelStyles = {
  mr: '15px',
  fontFamily: 'Rubik',
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '24px',
  letterSpacing: '0.5px',
  verticalAlign: 'middle'
}

export const SortSelect: FC<SortBySelectProps> = ({
  value,
  onChange,
  inputLabel = 'Sort by:'
}) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Typography sx={labelStyles}>{inputLabel}</Typography>
      <Select
        onChange={(e) => onChange(e.target.value)}
        sx={{ width: '200px' }}
        value={value}
      >
        <MenuItem value='newest'>Newest</MenuItem>
        <MenuItem value='oldest'>Oldest</MenuItem>
        <MenuItem value='popular'>Popular</MenuItem>
      </Select>
    </Box>
  )
}
