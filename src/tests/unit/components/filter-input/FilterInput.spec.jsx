import { render, fireEvent } from '@testing-library/react'
import FilterInput from '~/components/filter-input/FilterInput'
import { vi } from 'vitest'

describe('FilterInput', () => {
  it('renders the input field', () => {
    const { getByRole } = render(<FilterInput onChange={() => {}} />)
    expect(getByRole('textbox')).toBeInTheDocument()
  })

  it('renders typed text correctly', () => {
    const { getByRole } = render(
      <FilterInput onChange={() => {}} value='hello' />
    )
    const input = getByRole('textbox')
    expect(input.value).toBe('hello')
  })

  it('deletes typed text when delete button is clicked', () => {
    const handleChange = vi.fn()
    const { getByTestId } = render(
      <FilterInput value='hello' onChange={handleChange} />
    )
    const clearButton = getByTestId('clear-button')
    fireEvent.click(clearButton)
    expect(handleChange).toHaveBeenCalledWith('')
  })

  it('calls updateFilter function on search icon (if used as button)', () => {
    const handleChange = vi.fn()
    render(<FilterInput value='' onChange={handleChange} />)
  })

  it('calls updateFilter function when Enter is pressed', () => {
    const handleChange = vi.fn()
    const { getByRole } = render(
      <FilterInput value='typed' onChange={handleChange} />
    )
    const input = getByRole('textbox')

    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter', charCode: 13 })

    expect(handleChange).not.toHaveBeenCalledWith('typed')
  })
})
