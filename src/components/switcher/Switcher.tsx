import React, { FC, useState } from 'react'
import Switch from '@mui/material/Switch'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material'

import { styles } from './Switcher.styles'

interface SwitcherProps {
  switchOptionLeft?: string
  switchOptionRight?: string
  onChange?: (checked: boolean) => void
}

export const Switcher: FC<SwitcherProps> = ({
  switchOptionLeft,
  switchOptionRight,
  onChange
}) => {
  const [checked, setChecked] = useState<boolean>(false)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newChecked = event.target.checked
    setChecked(newChecked)
    if (onChange) {
      onChange(newChecked)
    }
  }

  const CustomSwitch = styled(Switch)(() => styles.customSwitch)

  return (
    <Box gap={1} sx={styles.container}>
      {switchOptionLeft && (
        <Typography
          sx={{ fontWeight: !checked ? 'bold' : 'normal' }}
          variant='body2'
        >
          {switchOptionLeft}
        </Typography>
      )}
      <CustomSwitch checked={checked} onChange={handleChange} />
      {switchOptionRight && (
        <Typography
          sx={{
            fontWeight: checked ? 'bold' : 'normal',
            transition: 'all 0.2s ease'
          }}
          variant='body2'
        >
          {switchOptionRight}
        </Typography>
      )}
    </Box>
  )
}
