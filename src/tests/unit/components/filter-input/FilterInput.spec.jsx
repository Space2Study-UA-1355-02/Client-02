import { render, fireEvent } from '@testing-library/react'
import FilterInput from '~/components/filter-input/FilterInput'

describe('FilterInput', () => {
  it('renders the input field', () => {
    const { getByRole } = render(<FilterInput onChange={() => {}} />)
    expect(getByRole('textbox')).toBeInTheDocument()
  })

  it('renders typed text correctly', () => {
    const { getByDisplayValue } = render(
      <FilterInput value="search text" onChange={() => {}} />
    )
    expect(getByDisplayValue('search text')).toBeInTheDocument()
  })

  it('calls onChange when user types', () => {
    const handleChange = vi.fn()
    const { getByRole } = render(<FilterInput onChange={handleChange} />)
    const input = getByRole('textbox')
    fireEvent.change(input, { target: { value: 'test' } })
    expect(handleChange).toHaveBeenCalledWith('test')
  })

  it('clears the input when the clear button is clicked', () => {
    const handleChange = vi.fn()
    const { getByTestId } = render(
      <FilterInput value="some text" onChange={handleChange} />
    )
    fireEvent.click(getByTestId('clear-button'))
    expect(handleChange).toHaveBeenCalledWith('')
  })

  it('calls onSearch when search button is clicked', () => {
    const onSearch = vi.fn()
    const { getByTestId } = render(
      <FilterInput value="" onChange={() => {}} onSearch={onSearch} />
    )
    fireEvent.click(getByTestId('search-button'))
    expect(onSearch).toHaveBeenCalled()
  })

  it('calls onSearch when Enter key is pressed', () => {
    const onSearch = vi.fn()
    const { getByRole } = render(
      <FilterInput value="some" onChange={() => {}} onSearch={onSearch} />
    )
    fireEvent.keyDown(getByRole('textbox'), { key: 'Enter', code: 'Enter' })
    expect(onSearch).toHaveBeenCalled()
  })
})
