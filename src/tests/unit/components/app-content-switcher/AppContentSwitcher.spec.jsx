import { render, screen, fireEvent } from '@testing-library/react'
import AppContentSwitcher from '~/components/app-content-switcher/AppContentSwitcher'
import { vi } from 'vitest'

const switchOptions = {
  left: { text: 'Left Option', tooltip: 'Left tooltip' },
  right: { text: 'Right Option', tooltip: 'Right tooltip' }
}

describe('AppContentSwitcher', () => {
  it('should render with the correct props', () => {
    render(
      <AppContentSwitcher
        active
        onChange={vi.fn()}
        switchOptions={switchOptions}
        typographyVariant='body1'
      />
    )

    expect(screen.getByText('Left Option')).toBeInTheDocument()
    expect(screen.getByText('Right Option')).toBeInTheDocument()
    expect(screen.getByTestId('switch')).toBeInTheDocument()
  })

  it('should call the onChange function when the switch is clicked', () => {
    const handleChange = vi.fn()

    render(
      <AppContentSwitcher
        active
        onChange={handleChange}
        switchOptions={switchOptions}
        typographyVariant='body1'
      />
    )
    const switchInput = screen.getByTestId('switch').querySelector('input')

    fireEvent.click(switchInput)
    expect(handleChange).toHaveBeenCalledTimes(1)
  })

  it('should render tooltips when tooltip props are passed', async () => {
    render(
      <AppContentSwitcher
        active
        onChange={vi.fn()}
        switchOptions={switchOptions}
        typographyVariant='body1'
      />
    )
    fireEvent.mouseOver(screen.getByText('Left Option'))
    fireEvent.mouseOver(screen.getByText('Right Option'))
    expect(await screen.findByText('Left tooltip')).toBeInTheDocument()
    expect(await screen.findByText('Right tooltip')).toBeInTheDocument()
  })
})
