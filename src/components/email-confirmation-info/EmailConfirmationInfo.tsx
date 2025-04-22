import { useState } from 'react'
import { Box, Modal, Typography, Button, IconButton } from '@mui/material'
import CheckIcon from '~/assets/img/email-confirmation-modals/success-icon.svg'
import CloseIcon from '@mui/icons-material/Close'
import { styles } from './EmailConfirmationInfo-styles'
const EmailConfirmationInfo = () => {
  const [open, setOpen] = useState(true)

  const handleClose = () => setOpen(false)
  const handleLogin = () => {
    // replace with actual navigation logic
    console.log('Navigating to login...')
  }

  return (
    <Modal onClose={handleClose} open={open}>
      <Box sx={styles.modalBox}>
        <IconButton onClick={handleClose} sx={styles.closeButton}>
          <CloseIcon />
        </IconButton>

        <Box alt='Success' component='img' src={CheckIcon} sx={styles.icon} />

        <Typography component='h2' variant='h6'>
          Your email has been successfully verified!
        </Typography>

        <Button
          color='primary'
          onClick={handleLogin}
          sx={styles.loginButton}
          variant='contained'
        >
          Go to login
        </Button>
      </Box>
    </Modal>
  )
}

export default EmailConfirmationInfo
