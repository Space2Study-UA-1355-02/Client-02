import { render, screen, waitFor } from '@testing-library/react'
import { vi } from 'vitest'
import userEvent from '@testing-library/user-event'

import SearchAutocomplete from '~/components/search-autocomplete/SearchAutocomplete'

const options = ['Apple', 'Banana', 'Cherry']

describe('SearchAutocomplete', () => {
  const mockSetSearch = vi.fn()
  const mockOnSearchChange = vi.fn()

  beforeEach(() => {
    render(
      <SearchAutocomplete
        onSearchChange={mockOnSearchChange}
        options={options}
        search=''
        setSearch={mockSetSearch}
        textFieldProps={{ label: 'Search' }}
      />
    )
  })

  it('should render autocomplete with search input', () => {
    const input = screen.getByLabelText('Search')
    expect(input).toBeInTheDocument()
  })

  it('should update search input on typing', async () => {
    const input = screen.getByLabelText('Search')
    await userEvent.type(input, 'Banana')
    expect(input).toHaveValue('Banana')
  })

  it('should filter options on typing', async () => {
    const input = screen.getByLabelText('Search')
    await userEvent.type(input, 'a')

    const option = screen.getByText('Banana')
    expect(option).toBeInTheDocument()
  })

  it('should select an option on click', async () => {
    const input = screen.getByLabelText('Search')
    await userEvent.type(input, 'Ch')

    const option = screen.getByText('Cherry')
    await userEvent.click(option)

    expect(mockSetSearch).toHaveBeenCalledWith('Cherry')
    expect(mockOnSearchChange).toHaveBeenCalled()
  })

  it('should clear search input on clear icon click', async () => {
    const input = screen.getByLabelText('Search')
    await userEvent.type(input, 'Apple')

    const clearIcon = screen.getByTestId('ClearIcon')
    const clearButton = clearIcon.closest('button')
    await userEvent.click(clearButton)

    await waitFor(() => {
      expect(mockSetSearch).toHaveBeenCalledWith('')
      expect(mockOnSearchChange).toHaveBeenCalled()
    })
  })

  it('should trigger search on search button click', async () => {
    const input = screen.getByLabelText('Search')
    await userEvent.type(input, 'Banana')

    const button = screen.getByRole('button', { name: /search/i })
    await userEvent.click(button)

    await waitFor(() => {
      expect(mockSetSearch).toHaveBeenCalledWith('Banana')
      expect(mockOnSearchChange).toHaveBeenCalled()
    })
  })

  it('should show clear icon only when input has text', async () => {
    const input = screen.getByLabelText('Search')
    const clearButton = screen.getByTestId('ClearIcon')

    expect(clearButton).toHaveStyle('visibility: hidden')

    await userEvent.type(input, 'Apple')
    expect(clearButton).toHaveStyle('visibility: visible')
  })
})
