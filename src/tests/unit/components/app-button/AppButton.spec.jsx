import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import AppButton from '~/components/app-button/AppButton'
import { vi } from 'vitest'

// Mock the Loader component
vi.mock('~/components/loader/Loader', () => ({
  __esModule: true,
  default: () => <div data-testid='loader'>Loading...</div>
}))

describe('AppButton Component', () => {
  // 1. Test basic rendering
  it('renders button with children', () => {
    render(<AppButton>Click Me</AppButton>)
    expect(
      screen.getByRole('button', { name: /click me/i })
    ).toBeInTheDocument()
  })

  // 2. Test default props
  it('has contained variant and large size by default', () => {
    render(<AppButton>Default</AppButton>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('MuiButton-contained')
    expect(button).toHaveClass('MuiButton-sizeLarge')
  })

  // 3. Test loading state
  it('shows loader and disables button when loading', () => {
    render(<AppButton loading>Submit</AppButton>)
    expect(screen.getByTestId('loader')).toBeInTheDocument()
    expect(screen.getByRole('button')).toBeDisabled()
  })

  // 4. Test disabled state
  it('disables button when disabled prop is true', () => {
    render(<AppButton disabled>Disabled</AppButton>)
    expect(screen.getByRole('button')).toBeDisabled()
  })

  // 5. Test variants
  it('applies correct variant classes', () => {
    const { rerender } = render(
      <AppButton variant='contained'>Contained</AppButton>
    )
    expect(screen.getByRole('button')).toHaveClass('MuiButton-contained')

    rerender(<AppButton variant='outlined'>Outlined</AppButton>)
    expect(screen.getByRole('button')).toHaveClass('MuiButton-outlined')

    rerender(<AppButton variant='text'>Text</AppButton>)
    expect(screen.getByRole('button')).toHaveClass('MuiButton-text')
  })

  // 6. Test sizes
  it('applies correct size classes', () => {
    const { rerender } = render(<AppButton size='small'>Small</AppButton>)
    expect(screen.getByRole('button')).toHaveClass('MuiButton-sizeSmall')

    rerender(<AppButton size='medium'>Medium</AppButton>)
    expect(screen.getByRole('button')).toHaveClass('MuiButton-sizeMedium')

    rerender(<AppButton size='large'>Large</AppButton>)
    expect(screen.getByRole('button')).toHaveClass('MuiButton-sizeLarge')
  })

  // 7. Test click handler
  it('triggers onClick when clicked', async () => {
    const handleClick = vi.fn()
    render(<AppButton onClick={handleClick}>Clickable</AppButton>)
    await userEvent.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  // 8. Test disabled click prevention
  it('prevents clicks when disabled', async () => {
    const handleClick = vi.fn()
    render(
      <AppButton disabled onClick={handleClick}>
        Disabled
      </AppButton>
    )
    const button = screen.getByRole('button')
    expect(button).toBeDisabled()

    button.click()

    expect(handleClick).not.toHaveBeenCalled()
  })
})
