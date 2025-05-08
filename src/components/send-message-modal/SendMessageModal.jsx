import React from 'react'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button
} from '@mui/material'

const SendMessageModal = ({ open, onClose, onSend }) => {
  return (
    <Dialog fullWidth maxWidth='sm' onClose={onClose} open={open}>
      <DialogTitle>Write a message</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          fullWidth
          label='Your message'
          margin='dense'
          multiline
          rows={4}
          type='text'
          variant='outlined'
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button
          onClick={() => {
            onSend()
            onClose()
          }}
        >
          Send
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default SendMessageModal
