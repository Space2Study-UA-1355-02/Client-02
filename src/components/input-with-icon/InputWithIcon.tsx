import { FC, ReactNode } from 'react'

import ClearRoundedIcon from '@mui/icons-material/ClearRounded'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import InputBase, { InputBaseProps } from '@mui/material/InputBase'
import { SxProps, Theme } from '@mui/material'

import { styles } from '~/components/input-with-icon/InputWithIcon.styles'

interface InputWithIconProps extends Omit<InputBaseProps, 'value'> {
  startIcon?: ReactNode
  onClear: () => void
  sx?: SxProps<Theme>
  value?: string | number | readonly string[]
}

const InputWithIcon: FC<InputWithIconProps> = ({
  value,
  onClear,
  startIcon,
  sx,
  ...props
}) => {
  return (
    <Box sx={[styles.root, ...(Array.isArray(sx) ? sx : [sx])]}>
      {startIcon}

      <InputBase sx={styles.input} value={value} {...props} />

      {value && (
        <IconButton
          data-testid='clearIcon'
          onClick={onClear}
          sx={styles.clearIcon}
        >
          <ClearRoundedIcon sx={styles.clearIcon} />
        </IconButton>
      )}
    </Box>
  )
}

export default InputWithIcon
