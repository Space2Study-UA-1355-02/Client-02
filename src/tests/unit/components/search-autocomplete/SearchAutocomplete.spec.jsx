import { fireEvent, render, screen } from '@testing-library/react'
import { vi } from 'vitest'

import SearchAutocomplete from '~/components/search-autocomplete/SearchAutocomplete'

const options = ['Apple', 'Banana', 'Cherry']

describe('SearchAutocomplete', () => {
  const mockSetSearch = vi.fn()
  const mockOnSearchChange = vi.fn()

  beforeEach(() => {
    render(
      <SearchAutocomplete
        search=''
        setSearch={mockSetSearch}
        onSearchChange={mockOnSearchChange}
        textFieldProps={{ label: 'Search' }}
        options={options}
      />
    )
  })

  it('should render autocomplete with search input', () => {
    const input = screen.getByLabelText('Search')
    expect(input).toBeInTheDocument()
  })

  it('should update search input on typing', () => {
    const input = screen.getByLabelText('Search')
    fireEvent.change(input, { target: { value: 'Banana' } })
    expect(input).toHaveValue('Banana')
  })

  it('should filter options on typing', () => {
    const input = screen.getByLabelText('Search')
    fireEvent.change(input, { target: { value: 'a' } })

    const option = screen.getByText('Banana')
    expect(option).toBeInTheDocument()
  })

  it('should select an option on click', () => {
    const input = screen.getByLabelText('Search')
    fireEvent.change(input, { target: { value: 'Ch' } })

    const option = screen.getByText('Cherry')
    fireEvent.click(option)

    expect(mockSetSearch).toHaveBeenCalledWith('Cherry')
    expect(mockOnSearchChange).toHaveBeenCalled()
  })

  it('should clear search input on clear icon click', () => {
    const input = screen.getByLabelText('Search')
    fireEvent.change(input, { target: { value: 'Apple' } })

    const clearButton = screen.getByTestId('ClearIcon')
    fireEvent.click(clearButton)

    expect(mockSetSearch).toHaveBeenCalledWith('')
    expect(mockOnSearchChange).toHaveBeenCalled()
  })

  it('should trigger search on search button click', () => {
    const input = screen.getByLabelText('Search')
    fireEvent.change(input, { target: { value: 'Banana' } })

    const button = screen.getByRole('button', { name: /search/i })
    fireEvent.click(button)

    expect(mockSetSearch).toHaveBeenCalledWith('Banana')
    expect(mockOnSearchChange).toHaveBeenCalled()
  })

  it('should show clear icon only when input has text', () => {
    const input = screen.getByLabelText('Search')
    const clearButton = screen.getByTestId('ClearIcon')

    expect(clearButton).toHaveStyle('visibility: hidden')

    fireEvent.change(input, { target: { value: 'Apple' } })
    expect(clearButton).toHaveStyle('visibility: visible')
  })
})
