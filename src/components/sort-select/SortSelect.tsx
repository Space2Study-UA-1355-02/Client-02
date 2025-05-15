import { MenuItem, Select, FormControl, InputLabel } from '@mui/material'
import { FC } from 'react'

interface SortBySelectProps {
  value: string
  inputLabel?: string
  onChange: (value: string) => void
}

export const SortSelect: FC<SortBySelectProps> = ({
  value,
  onChange,
  inputLabel = 'Sort by'
}) => {
  return (
    <FormControl size='small'>
      <InputLabel>{inputLabel}</InputLabel>
      <Select
        label='Sort by'
        onChange={(e) => onChange(e.target.value)}
        value={value}
      >
        <MenuItem value='newest'>Newest</MenuItem>
        <MenuItem value='oldest'>Oldest</MenuItem>
        <MenuItem value='popular'>Popular</MenuItem>
      </Select>
    </FormControl>
  )
}
