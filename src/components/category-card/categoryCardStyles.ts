export const cardStyles = {
  display: 'flex',
  alignItems: 'center',
  padding: 2,
  borderRadius: 3,
  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.05)',
  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  '&:hover': {
    transform: 'scale(1.02)',
    boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.08)'
  }
}

export const iconBoxStyles = (bgColor: string) => ({
  width: 56,
  height: 56,
  borderRadius: 2,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: bgColor,
  marginRight: 2
})

export const iconStyles = (color: string) => ({
  fontSize: 30,
  color
})

export const titleStyles = {
  fontWeight: 600,
  color: '#2E3A59'
}

export const offersCountStyles = {
  color: '#607D8B',
  fontWeight: 500
}
