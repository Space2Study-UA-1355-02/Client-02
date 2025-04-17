import { render, screen, fireEvent } from '@testing-library/react'
import SliderWithInput from '~/components/slider-with-input/SliderWithInput'
import '@testing-library/jest-dom'
import { vi } from 'vitest'
vi.mock('~/hooks/use-debounce', () => ({
  useDebounce: (fn) => fn
}))
describe('SliderWithInput', () => {
  const defaultProps = {
    defaultValue: 100,
    title: 'Price Filter',
    max: 500,
    min: 50,
    onChange: vi.fn()
  }
  beforeEach(() => {
    defaultProps.onChange = vi.fn()
  })
  it('should render correctly', () => {
    render(<SliderWithInput {...defaultProps} />)

    expect(screen.getByText('Price Filter')).toBeInTheDocument()
    expect(screen.getByRole('slider')).toBeInTheDocument()
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it('should call onChange when the slider is moved', () => {
    render(<SliderWithInput {...defaultProps} />)

    const slider = screen.getByRole('slider')
    fireEvent.change(slider, { target: { value: 200 } })

    expect(defaultProps.onChange).toHaveBeenCalledWith(200)
  })

  it('should update inputValue correctly when input is empty', () => {
    render(<SliderWithInput {...defaultProps} />)

    const input = screen.getByRole('textbox')
    fireEvent.change(input, { target: { value: '' } })

    expect(input.value).toBe('')
  })

  it('should not call onChange on blur if the value has not changed', () => {
    render(<SliderWithInput {...defaultProps} defaultValue={200} />)

    const input = screen.getByRole('textbox')

    fireEvent.change(input, { target: { value: '200' } })
    fireEvent.blur(input)

    expect(defaultProps.onChange).toHaveBeenCalledTimes(0)
  })

  it('should clamp and update value if input is greater than max on blur', () => {
    render(<SliderWithInput {...defaultProps} />)

    const input = screen.getByRole('textbox')
    fireEvent.change(input, { target: { value: 1000 } })

    fireEvent.blur(input)

    expect(defaultProps.onChange).toHaveBeenCalledWith(defaultProps.max)
    expect(input.value).toBe(defaultProps.max.toString())
  })
})
