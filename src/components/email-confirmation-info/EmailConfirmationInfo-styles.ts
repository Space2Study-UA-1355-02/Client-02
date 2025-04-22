import { SxProps, Theme } from '@mui/material'

interface EmailConfirmationStyles {
  modalBox: SxProps<Theme>
  closeButton: SxProps<Theme>
  icon: SxProps<Theme>
  loginButton: SxProps<Theme>
}
export const styles: EmailConfirmationStyles = {
  modalBox: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: 2,
    p: 4,
    textAlign: 'center'
  },
  closeButton: {
    position: 'absolute',
    top: 8,
    right: 8
  },
  icon: {
    width: 64,
    height: 64,
    mb: 2
  },
  loginButton: {
    mt: 3,
    px: 4,
    py: 1,
    textTransform: 'none',
    fontWeight: 'bold'
  }
}
