import React, { useState } from 'react'
import { TextField, MenuItem } from '@mui/material'

const PaginatedSelect = ({
  label,
  name,
  value,
  options,
  onChange,
  itemsPerPage = 10,
  error = false,
  helperText = '',
  required = false
}) => {
  const [page, setPage] = useState(1)

  const visibleOptions = options.slice(0, page * itemsPerPage)

  const handleScroll = (event) => {
    const { scrollTop, scrollHeight, clientHeight } = event.currentTarget
    const isBottom = scrollHeight - scrollTop === clientHeight

    if (isBottom && visibleOptions.length < options.length) {
      setPage((prev) => prev + 1)
    }
  }

  return (
    <TextField
      SelectProps={{
        MenuProps: {
          PaperProps: {
            style: { maxHeight: 300, overflowY: 'auto' },
            onScroll: handleScroll
          }
        }
      }}
      error={error}
      fullWidth
      helperText={helperText}
      label={label}
      name={name}
      onChange={onChange}
      required={required}
      select
      value={value}
    >
      {visibleOptions.map((option, id) => (
        <MenuItem key={id} value={option}>
          {option}
        </MenuItem>
      ))}
    </TextField>
  )
}

export default PaginatedSelect
