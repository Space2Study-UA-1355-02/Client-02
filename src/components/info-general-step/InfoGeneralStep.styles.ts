export const styles = {
  modalBox: {
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: 2,
    width: '70vw',
    height: '80vh',
    maxHeight: '95vh',
    maxWidth: '95vw',
    overflow: 'hidden',
    p: 0
  },
  closeButton: {
    position: 'absolute',
    top: 12,
    right: 12,
    zIndex: 1
  },
  imageBox: {
    flex: 1,
    width: '30vw',
    height: 'auto',
    padding: 'auto',
    objectFit: 'scale-down',
    display: { xs: 'none', md: 'block' }
  },
  formWrapper: {
    flex: 1,
    padding: { xs: 2, md: 4 },
    overflowY: 'auto'
  }
}
