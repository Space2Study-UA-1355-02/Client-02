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
    width: { xs: '90vw', sm: '80vw' },
    height: '82vh',
    maxHeight: '95vh',
    maxWidth: '95vw',
    overflowY: { xs: 'auto', md: 'hidden' },
    p: 0
  },
  closeButton: {
    position: 'absolute',
    top: { xs: 1, sm: 12 },
    right: { xs: 1, sm: 12 },
    zIndex: 1
  },
  imageBox: {
    flex: 1,
    width: '30vw',
    height: 'auto',
    padding: { lg: '25px', xl: '50px' },
    objectFit: 'scale-down',
    display: { xs: 'none', lg: 'block' }
  },
  formWrapper: {
    flex: 1,
    padding: { xs: 2, md: 4 },
    overflowY: 'auto'
  }
}
