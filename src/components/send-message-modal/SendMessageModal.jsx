import React from 'react'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button
} from '@mui/material'
import { useState } from 'react'

const SendMessageModal = ({ open, onClose, onSend }) => {
  const [message, setMessage] = useState('')
  const handleSend = () => {
    onSend(message)
    onClose()
    setMessage('')
  }

  const handleClose = () => {
    onClose()
    setMessage('')
  }

  return (
    <Dialog
      disableEnforceFocus
      fullWidth
      maxWidth='sm'
      onClose={onClose}
      open={open}
    >
      <DialogTitle>Write a message</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          fullWidth
          label='Your message'
          margin='dense'
          multiline
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          type='text'
          value={message}
          variant='outlined'
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button disabled={!message.trim()} onClick={handleSend}>
          Send
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default SendMessageModal
